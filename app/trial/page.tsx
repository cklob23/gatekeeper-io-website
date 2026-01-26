"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Shield, Check, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const benefits = [
  "Customizable UI for your brand identity",
  "Real-time visitor tracking and notifications",
  "Secure check-in with photo capture",
  "Comprehensive audit logs and compliance reports",
]

export default function TrialPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [plan, setPlan] = useState("pro")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your work email")
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    
    // Store email in session/URL params and redirect to registration
    const params = new URLSearchParams({
      email,
      plan,
      consent: marketingConsent ? "1" : "0",
    })
    
    router.push(`/trial/register?${params.toString()}`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-primary">
      {/* Header */}
      <header className="px-6 py-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary-foreground" />
          <span className="text-xl font-bold text-primary-foreground">Gatekeeper.io</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Value Proposition */}
          <div className="flex flex-col justify-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Secure your facility with Gatekeeper.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Gatekeeper is the trusted visitor management platform for organizations 
              that prioritize security, accountability, and compliance.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-8 inline-flex w-fit items-center gap-2 text-primary-foreground transition-colors hover:text-primary-foreground/80"
            >
              <Play className="h-5 w-5 fill-current" />
              <span className="font-medium">See How It Works</span>
            </button>
          </div>

          {/* Right Side - Email Capture Form */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-card p-8 shadow-xl">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  Try it free for 14 days—
                </h2>
                <p className="text-xl font-semibold text-accent">
                  no credit card required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2"
                  />
                  {error && (
                    <p className="mt-2 text-sm text-destructive">{error}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="marketing"
                    checked={marketingConsent}
                    onCheckedChange={(checked) => setMarketingConsent(checked === true)}
                  />
                  <Label htmlFor="marketing" className="text-sm leading-tight text-muted-foreground">
                    I agree to receive marketing communications from Gatekeeper.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Starting..." : "Try It Free"}
                </Button>

                <div>
                  <Label className="text-xs font-medium text-muted-foreground">
                    Select Plan:
                  </Label>
                  <Select value={plan} onValueChange={setPlan}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">Starter - $29/location/month</SelectItem>
                      <SelectItem value="pro">Pro - $59/location/month (Most Popular)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                By clicking &quot;Try It Free&quot;, you agree to the{" "}
                <Link href="/terms" className="underline hover:text-foreground">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Trust Badges */}
      <section className="border-t border-primary-foreground/10 bg-primary px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg font-medium text-primary-foreground">
            Trusted by organizations worldwide.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60">
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Churches</span>
              <div className="mt-1 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Schools</span>
              <div className="mt-1 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Manufacturing</span>
              <div className="mt-1 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Healthcare</span>
              <div className="mt-1 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
