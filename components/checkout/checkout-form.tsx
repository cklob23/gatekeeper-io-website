"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import { startCheckoutSession } from "@/app/actions/stripe"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutFormProps {
  productId: string
}

export function CheckoutForm({ productId }: CheckoutFormProps) {
  const router = useRouter()
  
  const fetchClientSecret = useCallback(
    async () => {
      const clientSecret = await startCheckoutSession(productId)
      if (!clientSecret) {
        throw new Error("Failed to create checkout session")
      }
      return clientSecret
    },
    [productId]
  )

  const handleComplete = useCallback(() => {
    // Redirect to success page after checkout completes
    router.push("/checkout/success")
  }, [router])

  return (
    <div id="checkout" className="w-full">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ 
          fetchClientSecret,
          onComplete: handleComplete,
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
