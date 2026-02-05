"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, AlertCircle } from "lucide-react"
import { sendEmail } from "@/app/actions/email"
import { generateContactEmailHtml } from "@/lib/email-template"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@gatekeeperio.com",
    description: "We typically respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(279) 201-9504",
    description: "Mon-Fri, 9am-5pm EST"
  },
  {
    icon: MapPin,
    title: "Office",
    value: "237 Security Lane",
    description: "Atlanta, GA 30301"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday - Friday",
    description: "9:00 AM - 5:00 PM EST"
  }
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  })
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const subjectLabels: Record<string, string> = {
      general: "General Inquiry",
      sales: "Sales Question",
      support: "Technical Support",
      billing: "Billing",
      partnership: "Partnership",
    }

    const subjectLine = subjectLabels[formData.subject] || "General Inquiry"

    const html = generateContactEmailHtml({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company,
      subject: subjectLine,
      message: formData.message,
    })

    const result = await sendEmail({
      to: "support@gatekeeperio.com",
      subject: `[Gatekeeper Contact] ${subjectLine}`,
      html,
      replyTo: formData.email,
    })

    setIsSubmitting(false)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Have questions? We are here to help. Reach out and our team will get back to you shortly.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we will get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="rounded-lg bg-accent/10 p-6 text-center">
                      <h3 className="text-lg font-semibold text-foreground">Thank you!</h3>
                      <p className="mt-2 text-muted-foreground">
                        Your message has been received. We will get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="sales">Sales Question</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
                  <p className="mt-2 text-muted-foreground">
                    We would love to hear from you. Choose the most convenient way to reach us.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="rounded-lg border border-border p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-foreground">{info.title}</h3>
                      <p className="mt-1 text-foreground">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
