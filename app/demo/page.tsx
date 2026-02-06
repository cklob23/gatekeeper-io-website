"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowLeft, CheckCircle2, Calendar, Clock, Users, AlertCircle } from "lucide-react"
import { sendEmail } from "@/lib/email"
import { generateDemoRequestEmailHtml } from "@/lib/email-templates"

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
]

const ORGANIZATION_TYPES = [
  { value: "church", label: "Church / Religious Organization" },
  { value: "school", label: "School / Educational Institution" },
  { value: "manufacturing", label: "Manufacturing / Industrial" },
  { value: "healthcare", label: "Healthcare / Medical" },
  { value: "office", label: "Corporate Office" },
  { value: "government", label: "Government / Public Sector" },
  { value: "other", label: "Other" },
]

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    organizationType: "",
    message: "",
  })
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Get organization type label for email
    const orgTypeLabel = ORGANIZATION_TYPES.find(t => t.value === formData.organizationType)?.label || formData.organizationType
    const companySizeLabel = COMPANY_SIZES.find(s => s.value === formData.companySize)?.label || formData.companySize

    const html = generateDemoRequestEmailHtml({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      organizationType: orgTypeLabel,
      companySize: companySizeLabel,
      message: formData.message,
    })

    const result = await sendEmail({
      to: "support@gatekeeperio.com",
      subject: `Demo Request from ${formData.companyName}`,
      html,
      replyTo: formData.email,
    })

    setIsSubmitting(false)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.message)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-primary">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <Card className="mx-auto max-w-md text-center">
            <CardContent className="pt-12 pb-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Demo Request Received</h2>
              <p className="mt-4 text-muted-foreground">
                Thank you for your interest in Gatekeeper! We&apos;ll review your request and reach out within 1 business day to schedule your personalized demo.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link href="/">Return Home</Link>
                </Button>
                <Button variant="outline" asChild className="bg-transparent">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Value proposition */}
          <div className="text-primary-foreground">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10" />
              <span className="text-2xl font-semibold">Gatekeeper.io</span>
            </div>
            
            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
              Schedule Your{" "}
              <span className="text-primary-foreground/90">Personalized Demo</span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              See how Gatekeeper can transform your visitor management process. 
              Our team will walk you through the platform and answer all your questions.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">30-Minute Live Demo</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Get a personalized walkthrough of the platform tailored to your organization&apos;s needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Expert Guidance</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Our specialists will help you understand how Gatekeeper fits your security requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Quick Response</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    We&apos;ll reach out within 1 business day to schedule at your convenience.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-6">
              <p className="text-sm italic text-primary-foreground/80">
                &ldquo;The Gatekeeper demo was exactly what we needed. They showed us how to set up 
                visitor pre-registration and badge printing for our church - it took less than 
                30 minutes to understand everything.&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-primary-foreground">
                — Pastor Michael, Grace Community Church
              </p>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Demo</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll contact you to schedule your demo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name*</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email*</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company/Organization Name*</Label>
                    <Input
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="organizationType">Organization Type*</Label>
                      <Select
                        value={formData.organizationType}
                        onValueChange={(value) => setFormData({ ...formData, organizationType: value })}
                        required
                      >
                        <SelectTrigger id="organizationType">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {ORGANIZATION_TYPES.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size*</Label>
                      <Select
                        value={formData.companySize}
                        onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                        required
                      >
                        <SelectTrigger id="companySize">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {COMPANY_SIZES.map((size) => (
                            <SelectItem key={size.value} value={size.value}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Anything specific you&apos;d like to see?</Label>
                    <Textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your visitor management needs..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="underline hover:text-foreground">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
