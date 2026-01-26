"use server"

import { stripe } from "@/lib/stripe"
import type Stripe from "stripe"
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

  // Try to find existing Stripe price by lookup_key, fallback to creating price_data
  let lineItems: Stripe.Checkout.SessionCreateParams["line_items"]
  
  try {
    // Search for existing price with lookup_key
    const prices = await stripe.prices.list({
      lookup_keys: [product.stripeLookupKey],
      active: true,
      limit: 1,
    })
    
    if (prices.data.length > 0) {
      // Use existing Stripe price
      lineItems = [{ price: prices.data[0].id, quantity: 1 }]
    } else {
      // Fallback: create price_data inline
      lineItems = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Gatekeeper ${product.name}`,
              description: product.description,
            },
            unit_amount: product.priceInCents,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ]
    }
  } catch {
    // Fallback: create price_data inline
    lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Gatekeeper ${product.name}`,
            description: product.description,
          },
          unit_amount: product.priceInCents,
          recurring: {
            interval: "month",
          },
        },
        quantity: 1,
      },
    ]
  }

  // Create Checkout Session with subscription mode for recurring billing
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    customer_email: customerEmail,
    line_items: lineItems,
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
