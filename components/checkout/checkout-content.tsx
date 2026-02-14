"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { ADD_ONS } from "@/lib/products"
import type { Product } from "@/lib/products"
import {
    Shield,
    ArrowLeft,
    Check,
    MapPin,
    Minus,
    Plus,
    Puzzle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface CheckoutContentProps {
    product: Product
    productId: string
    initialLocationCount: number
    customerEmail?: string
}

export function CheckoutContent({
    product,
    productId,
    initialLocationCount,
    customerEmail,
}: CheckoutContentProps) {
    const [locationCount, setLocationCount] = useState(
        Math.max(1, initialLocationCount)
    )
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
    const [checkoutKey, setCheckoutKey] = useState(0)
    const [isCheckoutReady, setIsCheckoutReady] = useState(false)

    const toggleAddOn = (addOnId: string) => {
        setSelectedAddOns((prev) =>
            prev.includes(addOnId)
                ? prev.filter((id) => id !== addOnId)
                : [...prev, addOnId]
        )
    }

    const incrementLocations = () => {
        setLocationCount((prev) => Math.min(prev + 1, 100))
    }

    const decrementLocations = () => {
        setLocationCount((prev) => Math.max(prev - 1, 1))
    }

    // Calculate totals
    const baseMonthlyCost = (product.priceInCents / 100) * locationCount
    const addOnMonthlyCost = selectedAddOns.reduce((sum, id) => {
        const addOn = ADD_ONS.find((a) => a.id === id)
        return sum + (addOn ? (addOn.priceInCents / 100) * locationCount : 0)
    }, 0)
    const totalMonthlyCost = baseMonthlyCost + addOnMonthlyCost

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount)

    const handleProceedToPayment = () => {
        setCheckoutKey((prev) => prev + 1)
        setIsCheckoutReady(true)
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Pricing
            </Link>

            <div className="mt-8 grid gap-12 lg:grid-cols-2">
                {/* Left Column - Order Summary */}
                <div className="space-y-6">
                    {/* Plan Summary */}
                    <div className="rounded-2xl border border-border bg-card p-8">
                        <div className="flex items-center gap-3">
                            <Shield className="h-8 w-8 text-primary" />
                            <div>
                                <h1 className="text-2xl font-bold text-foreground">
                                    Gatekeeper {product.name}
                                </h1>
                                <p className="text-muted-foreground">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-border pt-8">
                            <div className="flex items-baseline justify-between">
                                <span className="text-muted-foreground">
                                    Monthly subscription
                                </span>
                                <span className="text-2xl font-bold text-foreground">
                                    {product.priceDisplay}
                                    <span className="text-sm font-normal text-muted-foreground">
                                        {product.billingPeriod}
                                    </span>
                                </span>
                            </div>

                            <div className="mt-4 rounded-lg bg-accent/10 p-4">
                                <p className="text-sm font-medium text-accent">
                                    14-day free trial included
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    {"You won't be charged until your trial ends. Cancel anytime."}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-border pt-8">
                            <h3 className="font-semibold text-foreground">
                                {"What's included:"}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {product.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                        <span className="text-sm text-muted-foreground">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Location Count Stepper */}
                    <div className="rounded-2xl border border-border bg-card p-8">
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold text-foreground">
                                Number of Locations
                            </h3>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            How many locations will use Gatekeeper? Each location is billed
                            separately.
                        </p>
                        <div className="mt-4 flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={decrementLocations}
                                disabled={locationCount <= 1}
                                className="h-10 w-10 shrink-0"
                            >
                                <Minus className="h-4 w-4" />
                                <span className="sr-only">Decrease locations</span>
                            </Button>
                            <div className="flex-1 text-center">
                                <span className="text-3xl font-bold text-foreground">
                                    {locationCount}
                                </span>
                                <span className="ml-2 text-sm text-muted-foreground">
                                    {locationCount === 1 ? "location" : "locations"}
                                </span>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={incrementLocations}
                                disabled={locationCount >= 100}
                                className="h-10 w-10 shrink-0"
                            >
                                <Plus className="h-4 w-4" />
                                <span className="sr-only">Increase locations</span>
                            </Button>
                        </div>
                    </div>

                    {/* Add-ons Selection */}
                    <div className="rounded-2xl border border-border bg-card p-8">
                        <div className="flex items-center gap-3">
                            <Puzzle className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold text-foreground">
                                Available Add-ons
                            </h3>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Enhance your plan with optional add-ons. Priced per location, per
                            month.
                        </p>
                        <div className="mt-6 space-y-3">
                            {ADD_ONS.map((addOn) => {
                                const isSelected = selectedAddOns.includes(addOn.id)
                                return (
                                    <button
                                        type="button"
                                        key={addOn.id}
                                        onClick={() => toggleAddOn(addOn.id)}
                                        className={`flex w-full items-start gap-4 rounded-xl border-2 p-4 text-left transition-all ${isSelected
                                                ? "border-primary bg-primary/5"
                                                : "border-border bg-background hover:border-muted-foreground/30"
                                            }`}
                                    >
                                        <div
                                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${isSelected
                                                    ? "border-primary bg-primary text-primary-foreground"
                                                    : "border-muted-foreground/40"
                                                }`}
                                        >
                                            {isSelected && <Check className="h-3 w-3" />}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-baseline justify-between">
                                                <span className="font-medium text-foreground">
                                                    {addOn.name}
                                                </span>
                                                <span className="text-sm font-semibold text-primary">
                                                    {addOn.priceDisplay}
                                                </span>
                                            </div>
                                            <p className="mt-0.5 text-sm text-muted-foreground">
                                                {addOn.description}
                                            </p>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Order Total */}
                    <div className="rounded-2xl border border-border bg-card p-8">
                        <h3 className="text-lg font-semibold text-foreground">
                            Order Summary
                        </h3>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">
                                    {product.name} x {locationCount}{" "}
                                    {locationCount === 1 ? "location" : "locations"}
                                </span>
                                <span className="font-medium text-foreground">
                                    {formatCurrency(baseMonthlyCost)}/mo
                                </span>
                            </div>

                            {selectedAddOns.map((addOnId) => {
                                const addOn = ADD_ONS.find((a) => a.id === addOnId)
                                if (!addOn) return null
                                return (
                                    <div
                                        key={addOnId}
                                        className="flex items-center justify-between text-sm"
                                    >
                                        <span className="text-muted-foreground">
                                            {addOn.name} x {locationCount}{" "}
                                            {locationCount === 1 ? "location" : "locations"}
                                        </span>
                                        <span className="font-medium text-foreground">
                                            {formatCurrency(
                                                (addOn.priceInCents / 100) * locationCount
                                            )}
                                            /mo
                                        </span>
                                    </div>
                                )
                            })}

                            <div className="border-t border-border pt-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-base font-semibold text-foreground">
                                        Total after trial
                                    </span>
                                    <span className="text-xl font-bold text-primary">
                                        {formatCurrency(totalMonthlyCost)}/mo
                                    </span>
                                </div>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Free for 14 days, then billed monthly
                                </p>
                            </div>
                        </div>

                        {!isCheckoutReady && (
                            <Button
                                onClick={handleProceedToPayment}
                                className="mt-6 w-full py-6 text-base font-semibold"
                                size="lg"
                            >
                                Proceed to Payment
                            </Button>
                        )}
                    </div>
                </div>

                {/* Right Column - Payment Form */}
                <div>
                    {isCheckoutReady ? (
                        <div className="sticky top-8 rounded-2xl border border-border bg-card p-8">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Shield className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-foreground">
                                        Payment Details
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Start your 14-day free trial
                                    </p>
                                </div>
                            </div>
                            <CheckoutForm
                                key={checkoutKey}
                                productId={productId}
                                locationCount={locationCount}
                                addOnIds={selectedAddOns}
                                customerEmail={customerEmail}
                            />
                        </div>
                    ) : (
                        <div className="sticky top-8 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
                            <Shield className="mx-auto h-12 w-12 text-muted-foreground/30" />
                            <h3 className="mt-4 text-lg font-medium text-muted-foreground">
                                Payment Form
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Select your locations and any add-ons, then click "Proceed to
                                Payment" to enter your payment details.
                            </p>
                        </div>
                    )}

                    <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <span>Secured by Stripe</span>
                        <span>256-bit encryption</span>
                        <span>PCI compliant</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
