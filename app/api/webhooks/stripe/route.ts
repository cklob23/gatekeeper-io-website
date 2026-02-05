import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { generateWelcomeEmailHtml } from "@/lib/email-templates"
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

      // Send the welcome email via internal API call
      const html = generateWelcomeEmailHtml(customerName, planName)
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gatekeeper.io"
      
      try {
        const emailResponse = await fetch(`${baseUrl}/api/email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: customerEmail,
            subject: "Welcome to Gatekeeper.io!",
            html,
          }),
        })
        
        const emailResult = await emailResponse.json()
        
        if (!emailResult.success) {
          console.error("[v0] Failed to send welcome email:", emailResult.message)
        } else {
          console.log("[v0] Welcome email sent successfully to:", customerEmail)
        }
      } catch (err) {
        console.error("[v0] Error sending welcome email:", err)
      }
    }
  }

  return NextResponse.json({ received: true })
}
