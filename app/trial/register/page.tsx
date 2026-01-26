"use client"

import React from "react"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Shield, ArrowLeft, User } from "lucide-react"
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

const companySizes = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
]

const countries = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "OTHER", label: "Other" },
]

const usStates = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
]

function RegistrationForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const email = searchParams.get("email") || ""
  const plan = searchParams.get("plan") || "pro"
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    companyName: "",
    companySize: "",
    country: "",
    state: "",
    password: "",
    confirmPassword: "",
  })
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Redirect if no email provided
  useEffect(() => {
    if (!email) {
      router.push("/trial")
    }
  }, [email, router])

  const validatePassword = (password: string): string[] => {
    const issues: string[] = []
    if (password.length < 8 || password.length > 32) {
      issues.push("8-32 characters")
    }
    if (!/[a-z]/.test(password)) {
      issues.push("lowercase letter")
    }
    if (!/[A-Z]/.test(password)) {
      issues.push("uppercase letter")
    }
    if (!/[0-9]/.test(password)) {
      issues.push("number")
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      issues.push("special character")
    }
    return issues
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    // Validate required fields
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required"
    if (!formData.companySize) newErrors.companySize = "Company size is required"
    if (!formData.country) newErrors.country = "Country is required"
    if (formData.country === "US" && !formData.state) newErrors.state = "State is required"
    
    // Validate password
    const passwordIssues = validatePassword(formData.password)
    if (passwordIssues.length > 0) {
      newErrors.password = `Password must include: ${passwordIssues.join(", ")}`
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsLoading(true)

    // Here you would typically:
    // 1. Create the user account
    // 2. Set up their trial
    // 3. Redirect to checkout or dashboard
    
    // For now, redirect to Stripe checkout with the user data
    const checkoutParams = new URLSearchParams({
      email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.companyName,
    })
    
    router.push(`/checkout/${plan}?${checkoutParams.toString()}`)
  }

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (!email) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-primary">
      {/* Header */}
      <header className="px-6 py-4">
        <Link
          href="/trial"
          className="inline-flex items-center gap-2 text-primary-foreground transition-colors hover:text-primary-foreground/80"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to edit email address</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {/* Title Section */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <User className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground">
                Get started with Gatekeeper
              </h1>
              <p className="text-primary-foreground/80">
                Enter your information to start your trial
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="rounded-2xl bg-card p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Display */}
              <div>
                <Label className="text-sm text-muted-foreground">Email:</Label>
                <p className="mt-1 font-medium text-foreground">{email}</p>
              </div>

              {/* Name Fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className="mt-2"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-destructive">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className="mt-2"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-destructive">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="mt-2 flex gap-2">
                  <Select defaultValue="+1">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+44">+44</SelectItem>
                      <SelectItem value="+61">+61</SelectItem>
                      <SelectItem value="+49">+49</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Company Fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="companyName">Company Name*</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    className="mt-2"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-destructive">{errors.companyName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="companySize">Company Size*</Label>
                  <Select
                    value={formData.companySize}
                    onValueChange={(value) => updateField("companySize", value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.companySize && (
                    <p className="mt-1 text-sm text-destructive">{errors.companySize}</p>
                  )}
                </div>
              </div>

              {/* Location Fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="country">Country*</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => {
                      updateField("country", value)
                      if (value !== "US") {
                        updateField("state", "")
                      }
                    }}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && (
                    <p className="mt-1 text-sm text-destructive">{errors.country}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="state">State/Province/Region</Label>
                  {formData.country === "US" ? (
                    <Select
                      value={formData.state}
                      onValueChange={(value) => updateField("state", value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {usStates.map((state) => (
                          <SelectItem key={state.value} value={state.value}>
                            {state.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => updateField("state", e.target.value)}
                      placeholder={formData.country ? "Enter region" : "N/A"}
                      disabled={!formData.country}
                      className="mt-2"
                    />
                  )}
                  {errors.state && (
                    <p className="mt-1 text-sm text-destructive">{errors.state}</p>
                  )}
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="password">Password*</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => updateField("password", e.target.value)}
                    className="mt-2"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Password must be 8-32 characters and include a lowercase letter, 
                    an uppercase letter, a number and a special character.
                  </p>
                  {errors.password && (
                    <p className="mt-1 text-sm text-destructive">{errors.password}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password*</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => updateField("confirmPassword", e.target.value)}
                    className="mt-2"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-destructive">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="space-y-2">
                <label htmlFor="terms" className="flex cursor-pointer gap-3">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                    className="mt-1 shrink-0"
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    By clicking &quot;Start My Trial&quot; you agree to the{" "}
                    <Link href="/terms" className="text-primary underline hover:text-primary/80">
                      General Terms and Conditions of Use
                    </Link>{" "}
                    and{" "}
                    <Link href="/product-terms" className="text-primary underline hover:text-primary/80">
                      Product and Services Addendum
                    </Link>{" "}
                    and that Gatekeeper will collect and use the information you provide in accordance 
                    with Gatekeeper&apos;s{" "}
                    <Link href="/privacy" className="text-primary underline hover:text-primary/80">
                      Privacy Policy
                    </Link>
                    . Your information may be shared with a Gatekeeper Partner in order to provide 
                    product expertise, training or support for Gatekeeper solutions. If you do not 
                    agree to these terms, do not click &quot;Start My Trial&quot; to access the software.
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-sm text-destructive">{errors.terms}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isLoading || !termsAccepted}
              >
                {isLoading ? "Creating Account..." : "Start My Trial"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function RegistrationPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-primary">
        <Shield className="h-12 w-12 animate-pulse text-primary-foreground" />
      </div>
    }>
      <RegistrationForm />
    </Suspense>
  )
}
