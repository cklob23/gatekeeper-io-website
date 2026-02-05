import Link from "next/link"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle2, Mail, ArrowRight, HelpCircle } from "lucide-react"

export const metadata = {
  title: "Welcome to Gatekeeper.io | Order Confirmed",
  description: "Your subscription has been confirmed. Welcome to Gatekeeper.io!",
}

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Success Icon and Heading */}
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle2 className="h-12 w-12 text-accent" />
            </div>
            
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Welcome to Gatekeeper.io!
            </h1>
            
            <p className="mt-4 text-lg text-muted-foreground">
              Thank you for your purchase. Your subscription is now active.
            </p>
          </div>

          {/* Confirmation Card */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Check Your Email</h2>
                <p className="mt-2 text-muted-foreground">
                  We've sent a welcome email to your inbox with important information about your subscription.
                  You'll receive another email shortly with access to your free trial instance.
                </p>
              </div>
            </div>

            <hr className="my-6 border-border" />

            <h3 className="font-semibold text-foreground">What happens next?</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  1
                </div>
                <div>
                  <p className="font-medium text-foreground">Instance Setup</p>
                  <p className="text-sm text-muted-foreground">
                    We're provisioning your dedicated Gatekeeper.io instance. This typically takes up to 1-2 business days.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  2
                </div>
                <div>
                  <p className="font-medium text-foreground">Access Email</p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email with your unique login URL and instructions to set up your admin account.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  3
                </div>
                <div>
                  <p className="font-medium text-foreground">Start Managing Visitors</p>
                  <p className="text-sm text-muted-foreground">
                    Configure your locations, customize visitor workflows, and start checking in visitors securely.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Trial Info */}
          <div className="mt-8 rounded-xl bg-primary/5 p-6 text-center">
            <Shield className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-3 text-sm font-medium text-foreground">
              Your 14-day free trial has started
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              You won't be charged until your trial period ends. Cancel anytime.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowRight className="mr-2 h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <HelpCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </div>

          {/* Support Note */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Have questions? Our support team is here to help at{" "}
            <a href="mailto:support@gatekeeperio.com" className="text-primary hover:underline">
              support@gatekeeperio.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
