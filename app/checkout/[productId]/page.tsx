import { notFound, redirect } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { PRODUCTS } from "@/lib/products"
import { Shield, ArrowLeft, Check } from "lucide-react"

interface CheckoutPageProps {
  params: Promise<{
    productId: string
  }>
}

export async function generateMetadata({ params }: CheckoutPageProps) {
  const { productId } = await params
  const product = PRODUCTS.find((p) => p.id === productId)
  
  if (!product) {
    return { title: "Checkout | Gatekeeper.io" }
  }

  return {
    title: `Subscribe to ${product.name} | Gatekeeper.io`,
    description: `Start your 14-day free trial of Gatekeeper ${product.name}. ${product.description}`,
  }
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { productId } = await params
  const product = PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  // Enterprise requires sales contact
  if (product.id === "enterprise") {
    redirect("mailto:sales@gatekeeper.io")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Pricing
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            {/* Order Summary */}
            <div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">
                      Gatekeeper.io {product.name}
                    </h1>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                  <div className="flex items-baseline justify-between">
                    <span className="text-muted-foreground">Monthly subscription</span>
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
                      You won&apos;t be charged until your trial ends. Cancel anytime.
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                  <h3 className="font-semibold text-foreground">What&apos;s included:</h3>
                  <ul className="mt-4 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Secured by Stripe</span>
                    <span>256-bit encryption</span>
                    <span>PCI compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="mb-6 text-xl font-semibold text-foreground">
                  Start Your Free Trial
                </h2>
                <CheckoutForm productId={productId} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
