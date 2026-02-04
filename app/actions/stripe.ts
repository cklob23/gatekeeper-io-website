"use server"

import { stripe } from "@/lib/stripe"
import { PRODUCTS } from "@/lib/products"

export async function startCheckoutSession(productId: string, customerEmail?: string) {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  // For Enterprise tier, redirect to contact sales
  if (product.id === "enterprise") {
    throw new Error("Enterprise plans require a sales consultation")
  }

  // Search for the Stripe product by name
  const stripeProducts = await stripe.products.search({
    query: `name~"${product.name}" AND active:"true"`,
    limit: 1,
  })

  let priceId: string

  if (stripeProducts.data.length > 0) {
    // Found existing product, get its default price
    const stripeProduct = stripeProducts.data[0]
    const prices = await stripe.prices.list({
      product: stripeProduct.id,
      active: true,
      limit: 1,
    })

    if (prices.data.length > 0) {
      priceId = prices.data[0].id
    } else {
      // Product exists but no price, create one
      const price = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.priceInCents,
        currency: "usd",
        recurring: { interval: "month" },
      })
      priceId = price.id
    }
  } else {
    // Product doesn't exist, create product and price
    const newProduct = await stripe.products.create({
      name: product.name,
      description: product.description,
      tax_code: "txcd_10000000", // General - Electronically Supplied Services
    })

    const price = await stripe.prices.create({
      product: newProduct.id,
      unit_amount: product.priceInCents,
      currency: "usd",
      recurring: { interval: "month" },
    })
    priceId = price.id
  }

  // Create Checkout Session with subscription mode for recurring billing
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    customer_email: customerEmail,
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
    automatic_tax: { enabled: true },
    subscription_data: {
      trial_period_days: 14,
      metadata: {
        productId: product.id,
      },
    },
  })

  return session.client_secret
}
