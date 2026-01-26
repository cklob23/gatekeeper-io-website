"use server"

import { stripe } from "@/lib/stripe"
import { PRODUCTS } from "@/lib/products"

export async function startCheckoutSession(productId: string) {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  // For Enterprise tier, redirect to contact sales
  if (product.id === "enterprise") {
    throw new Error("Enterprise plans require a sales consultation")
  }

  // Create Checkout Session with subscription mode for recurring billing
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: [
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
    ],
    mode: "subscription",
    subscription_data: {
      trial_period_days: 14,
      metadata: {
        productId: product.id,
      },
    },
  })

  return session.client_secret
}
