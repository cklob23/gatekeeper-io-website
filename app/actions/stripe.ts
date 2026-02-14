"use server"

import { stripe } from "@/lib/stripe"
import { PRODUCTS, ADD_ONS } from "@/lib/products"

// Resolve or create a Stripe price for a given product name, description, and amount
async function resolveStripePriceId(
  name: string,
  description: string,
  unitAmountCents: number
): Promise<string> {
  // Search for existing Stripe product by name
  const stripeProducts = await stripe.products.search({
    query: `name~"${name}" AND active:"true"`,
    limit: 1,
  })

  if (stripeProducts.data.length > 0) {
    const stripeProduct = stripeProducts.data[0]
    const prices = await stripe.prices.list({
      product: stripeProduct.id,
      active: true,
      limit: 1,
    })

    if (prices.data.length > 0) {
      return prices.data[0].id
    }

    // Product exists but no price - create one
    const price = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: unitAmountCents,
      currency: "usd",
      recurring: { interval: "month" },
    })
    return price.id
  }

  // Product doesn't exist - create product and price
  const newProduct = await stripe.products.create({
    name,
    description,
    tax_code: "txcd_10000000",
  })

  const price = await stripe.prices.create({
    product: newProduct.id,
    unit_amount: unitAmountCents,
    currency: "usd",
    recurring: { interval: "month" },
  })
  return price.id
}

interface CheckoutOptions {
  productId: string
  locationCount?: number
  addOnIds?: string[]
  customerEmail?: string
}

export async function startCheckoutSession(options: CheckoutOptions) {
  const { productId, locationCount = 1, addOnIds = [], customerEmail } = options

  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  if (product.id === "enterprise") {
    throw new Error("Enterprise plans require a sales consultation")
  }

  const quantity = Math.max(1, Math.min(locationCount, 100))

  // Resolve main product price
  const mainPriceId = await resolveStripePriceId(
    `Gatekeeper ${product.name}`,
    product.description,
    product.priceInCents
  )

  // Build line items - main plan with location quantity
  const lineItems: { price: string; quantity: number }[] = [
    { price: mainPriceId, quantity },
  ]

  // Resolve and add selected add-ons
  for (const addOnId of addOnIds) {
    const addOn = ADD_ONS.find((a) => a.id === addOnId)
    if (!addOn) continue

    const addOnPriceId = await resolveStripePriceId(
      `Gatekeeper Add-on: ${addOn.name}`,
      addOn.description,
      addOn.priceInCents
    )

    lineItems.push({ price: addOnPriceId, quantity })
  }

  // Create Checkout Session with subscription mode for recurring billing
  const session = await stripe.checkout.sessions.create({
    ui_mode: "custom",
    customer_email: customerEmail,
    line_items: lineItems,
    mode: "subscription",
    automatic_tax: { enabled: true },
    subscription_data: {
      trial_period_days: 14,
      metadata: {
        productId: product.id,
        locationCount: String(quantity),
        addOns: addOnIds.join(","),
      },
    },
  })

  return session.client_secret
}
