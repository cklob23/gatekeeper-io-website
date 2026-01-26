import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { PricingCard } from "@/components/pricing/pricing-card"
import { PRODUCTS, ADD_ONS } from "@/lib/products"
import { Check } from "lucide-react"

export const metadata = {
  title: "Pricing | Gatekeeper.io",
  description: "Simple, transparent pricing for visitor management. Start with a 14-day free trial, no credit card required."
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                No hidden fees. No surprises. Start with a 14-day free trial, no credit card required.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {PRODUCTS.map((product) => (
                <PricingCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Powerful Add-Ons
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Extend your Gatekeeper experience with premium features.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ADD_ONS.map((addon) => (
                <div
                  key={addon.id}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold text-foreground">{addon.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{addon.description}</p>
                  <p className="mt-4 font-semibold text-primary">{addon.priceDisplay}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-12 space-y-8">
              {[
                {
                  question: "What is included in the free trial?",
                  answer: "The 14-day free trial includes full access to all features in your selected plan. No credit card required to start. You can upgrade, downgrade, or cancel at any time."
                },
                {
                  question: "How does per-location pricing work?",
                  answer: "You pay per physical location where Gatekeeper is deployed. A location could be a building, campus, office, or facility. Multi-location discounts are available for 5+ locations."
                },
                {
                  question: "Can I change plans later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. Downgrades take effect at the next billing cycle."
                },
                {
                  question: "Do you offer discounts for nonprofits?",
                  answer: "Yes! Churches, schools, and registered nonprofits receive a 20% discount on all plans. Contact us to verify your nonprofit status and receive your discount code."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards (Visa, Mastercard, American Express) through our secure payment processor Stripe. Enterprise customers can also pay via invoice."
                },
                {
                  question: "Is there a long-term contract?",
                  answer: "No long-term contracts required for Starter and Pro plans - pay month-to-month and cancel anytime. Enterprise plans are available with annual contracts for additional savings."
                }
              ].map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Trusted by Organizations Worldwide
              </h2>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {[
                  "SOC 2 Compliant",
                  "GDPR Ready",
                  "99.9% Uptime SLA",
                  "256-bit Encryption"
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
