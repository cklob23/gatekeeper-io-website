export interface Product {
  id: string
  name: string
  stripeLookupKey: string // Used to find the price in Stripe
  description: string
  priceInCents: number
  priceDisplay: string
  billingPeriod: string
  features: string[]
  popular?: boolean
  cta: string
}

export interface AddOn {
  id: string
  name: string
  description: string
  priceInCents: number
  priceDisplay: string
}

// Main pricing tiers - per location, per month
export const PRODUCTS: Product[] = [
  {
    id: "starter",
    name: "Starter",
    stripeLookupKey: "starter_monthly",
    description: "Perfect for churches, small offices, and single locations",
    priceInCents: 2900, // $29.00
    priceDisplay: "$29",
    billingPeriod: "/location/month",
    features: [
      "Unlimited visitors",
      "Visitor sign-in/sign-out",
      "Basic visitor logs",
      "Email notifications",
      "Custom welcome message",
      "Mobile-friendly check-in",
      "Email support"
    ],
    cta: "Start Free Trial"
  },
  {
    id: "pro",
    name: "Pro",
    stripeLookupKey: "pro_monthly",
    description: "For growing organizations with multiple locations",
    priceInCents: 5900, // $59.00
    priceDisplay: "$59",
    billingPeriod: "/location/month",
    features: [
      "Everything in Starter",
      "Visitor pre-registration",
      "Photo capture",
      "Badge printing",
      "Custom branding",
      "Advanced audit logs",
      "Analytics dashboard",
      "Priority support"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    stripeLookupKey: "enterprise_monthly",
    description: "For regulated facilities and large organizations",
    priceInCents: 14900, // $149.00
    priceDisplay: "$149",
    billingPeriod: "/location/month",
    features: [
      "Everything in Pro",
      "SSO integration (Azure AD, Entra ID)",
      "Visitor NDAs & waivers",
      "Emergency evacuation lists",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee"
    ],
    cta: "Contact Sales"
  }
]

// High-margin add-ons
export const ADD_ONS: AddOn[] = [
  {
    id: "sso",
    name: "SSO Integration",
    description: "Azure AD, Entra ID, Okta integration",
    priceInCents: 2000, // $20.00
    priceDisplay: "+$20/location"
  },
  {
    id: "sms",
    name: "SMS Notifications",
    description: "Real-time SMS alerts for visitor arrivals",
    priceInCents: 1000, // $10.00
    priceDisplay: "+$10/location"
  },
  {
    id: "ndas",
    name: "Visitor NDAs & Waivers",
    description: "Digital document signing at check-in",
    priceInCents: 1000, // $10.00
    priceDisplay: "+$10/location"
  },
  {
    id: "audit",
    name: "Advanced Audit Logs",
    description: "Extended retention and compliance reports",
    priceInCents: 1500, // $15.00
    priceDisplay: "+$15/location"
  }
]
