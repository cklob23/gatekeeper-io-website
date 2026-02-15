"use client"

import React, { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import {
  CheckoutProvider,
  PaymentElement,
  useCheckout,
} from "@stripe/react-stripe-js/checkout"
import { loadStripe } from "@stripe/stripe-js"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Loader2 } from "lucide-react"
import { startCheckoutSession } from "@/app/actions/stripe"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutFormProps {
  productId: string
  locationCount?: number
  addOnIds?: string[]
  customerEmail?: string
}

const appearance = {
  theme: "flat" as const,
  variables: {
    colorPrimary: "#1565C0",
    colorBackground: "#ffffff",
    colorText: "#1a1a2e",
    colorDanger: "#dc2626",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSizeBase: "16px",
    spacingUnit: "4px",
    borderRadius: "8px",
    colorTextPlaceholder: "#6b7280",
    focusBoxShadow: "0 0 0 2px rgba(21, 101, 192, 0.25)",
    focusOutline: "none",
  },
  rules: {
    ".Label": {
      color: "#374151",
      fontWeight: "500",
      fontSize: "14px",
      marginBottom: "6px",
    },
    ".Input": {
      border: "1.5px solid #d1d5db",
      padding: "12px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
      transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    },
    ".Input:hover": {
      borderColor: "#9ca3af",
    },
    ".Input:focus": {
      borderColor: "#1565C0",
      boxShadow: "0 0 0 3px rgba(21, 101, 192, 0.15)",
    },
    ".Input--invalid": {
      borderColor: "#dc2626",
      boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.15)",
    },
    ".Tab": {
      border: "1.5px solid #d1d5db",
      borderRadius: "8px",
      padding: "12px 16px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    },
    ".Tab:hover": {
      borderColor: "#9ca3af",
      color: "#1a1a2e",
    },
    ".Tab--selected": {
      borderColor: "#1565C0",
      backgroundColor: "#eff6ff",
      boxShadow: "0 0 0 1px #1565C0",
      color: "#1565C0",
    },
    ".Error": {
      color: "#dc2626",
      fontSize: "13px",
    },
  },
}

function CheckoutFormInner() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const checkoutState = useCheckout()

  if (checkoutState.type === "loading") {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-sm text-muted-foreground">Loading payment form...</p>
      </div>
    )
  }

  if (checkoutState.type === "error") {
    return (
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center">
        <p className="text-sm text-destructive">{checkoutState.error.message}</p>
      </div>
    )
  }

  const { checkout } = checkoutState

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const result = await checkout.confirm()

      if (result.type === "error") {
        setSubmitError(result.error.message)
        setIsSubmitting(false)
      } else {
        router.push("/checkout/success")
      }
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "An unexpected error occurred")
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      {submitError && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3">
          <p className="text-sm text-destructive">{submitError}</p>
        </div>
      )}

      <Button
        type="submit"
        className="w-full py-6 text-base font-semibold"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Lock className="mr-2 h-4 w-4" />
            Start Free Trial
          </>
        )}
      </Button>

      <div className="flex items-center justify-center gap-3 pt-2">
        <Shield className="h-4 w-4 text-muted-foreground" />
        <p className="text-xs text-muted-foreground">
          Secured by Stripe. You won't be charged until your 14-day trial ends.
        </p>
      </div>
    </form>
  )
}

export function CheckoutForm({ productId, locationCount = 1, addOnIds = [], customerEmail }: CheckoutFormProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fetchedRef = useRef(false)

  useEffect(() => {
    if (fetchedRef.current) return
    fetchedRef.current = true

    startCheckoutSession({
      productId,
      locationCount,
      addOnIds,
      customerEmail,
      origin: window.location.origin,
    })
      .then((secret) => {
        if (!secret) {
          setError("Failed to create checkout session")
          return
        }
        setClientSecret(secret)
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Something went wrong")
      })
  }, [productId, locationCount, addOnIds, customerEmail])

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center">
        <p className="text-sm text-destructive">{error}</p>
      </div>
    )
  }

  if (!clientSecret) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-sm text-muted-foreground">Preparing checkout...</p>
      </div>
    )
  }

  return (
    <CheckoutProvider
      stripe={stripePromise}
      options={{
        clientSecret,
        elementsOptions: { appearance },
      }}
    >
      <CheckoutFormInner />
    </CheckoutProvider>
  )
}
