import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { sendWelcomeEmail } from "@/app/actions/email"
import type Stripe from "stripe"

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error("[v0] Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    // Get customer email and name from the session
    const customerEmail = session.customer_email || session.customer_details?.email
    const customerName = session.customer_details?.name || ""

    if (customerEmail) {
      // Get the plan name from the line items
      let planName = "Gatekeeper"
      
      try {
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
          limit: 1,
        })
        
        if (lineItems.data.length > 0) {
          planName = lineItems.data[0].description || "Gatekeeper"
        }
      } catch (err) {
        console.error("[v0] Failed to fetch line items:", err)
      }

      // Send the welcome email
      const emailResult = await sendWelcomeEmail(customerEmail, customerName, planName)
      
      if (!emailResult.success) {
        console.error("[v0] Failed to send welcome email:", emailResult.message)
      } else {
        console.log("[v0] Welcome email sent successfully to:", customerEmail)
      }
    }
  }

  return NextResponse.json({ received: true })
}
