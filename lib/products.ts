export interface Product {
  id: string
  name: string
  stripeProductId: string
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
  stripeProductId: string
}

// ---------------------------------------------------------------------------
// PRICING TIERS - per location, per month
//
// How to update in Stripe Dashboard:
// 1. Go to https://dashboard.stripe.com/products
// 2. Click each product (Starter, Pro, Enterprise)
// 3. Edit the default price to match the amounts below
// 4. Copy the product ID (prod_xxx) and paste into stripeProductId below
// 5. For add-ons, create new products with recurring monthly prices and copy IDs
//
// The code auto-creates Stripe products/prices if they don't exist (dev mode).
// For production, always use hardcoded Stripe product/price IDs.
// ---------------------------------------------------------------------------

// Market research (2025-2026):
// - Greetly: $99/mo (Essential), $159/mo (Pro) per location
// - Teamgo: $29/mo (Essential), $49/mo (Pro) per location
// - SwipedOn: $19-$49/mo per location
// - Envoy: $109-$362/mo per location
// - iLobby: ~$100+/mo per location
//
// Gatekeeper.io is positioned affordably for churches/schools
// while remaining competitive for corporate orgs.

export const PRODUCTS: Product[] = [
  {
    id: "starter",
    name: "Starter",
    stripeProductId: "prod_TygYUi7fd8Sl7i",
    description: "Perfect for churches, small offices, and single locations",
    priceInCents: 3900, // $39.00
    priceDisplay: "$39",
    billingPeriod: "/location/month",
    features: [
      "Unlimited visitors",
      "Visitor sign-in/sign-out",
      "Basic visitor logs",
      "Email notifications",
      "Custom welcome message",
      "Mobile-friendly check-in",
      "1 admin user",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "pro",
    name: "Pro",
    stripeProductId: "prod_TygQb8S5xn9rqF",
    description: "For growing organizations with multiple locations",
    priceInCents: 7900, // $79.00
    priceDisplay: "$79",
    billingPeriod: "/location/month",
    features: [
      "Everything in Starter",
      "Visitor pre-registration",
      "Photo capture",
      "Badge printing",
      "Custom branding",
      "Advanced audit logs",
      "Analytics dashboard",
      "Up to 10 admin users",
      "Priority support",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    stripeProductId: "prod_TygZ2u3bjWXQcF",
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
      "Unlimited admin users",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
]

// Add-ons - per location, per month
// Create these as separate products in Stripe Dashboard with recurring monthly prices.
export const ADD_ONS: AddOn[] = [
  {
    id: "sms",
    name: "SMS Notifications",
    description: "Real-time SMS alerts for visitor arrivals and departures",
    priceInCents: 1500, // $15.00
    priceDisplay: "+$15/location/mo",
    stripeProductId: "prod_TygZJERYtNCAor",
  },
  {
    id: "ndas",
    name: "Visitor NDAs & Waivers",
    description: "Digital document signing at check-in",
    priceInCents: 1500, // $15.00
    priceDisplay: "+$15/location/mo",
    stripeProductId: "prod_TygaccyXmG6pQ0",
  },
  {
    id: "audit",
    name: "Advanced Audit Logs",
    description: "Extended retention, compliance reports, and data export",
    priceInCents: 1900, // $19.00
    priceDisplay: "+$19/location/mo",
    stripeProductId: "prod_TygQCfs8DHtJcS",
  },
  {
    id: "sso",
    name: "SSO Integration",
    description: "Azure AD, Entra ID, Okta, and SAML integration",
    priceInCents: 2500, // $25.00
    priceDisplay: "+$25/location/mo",
    stripeProductId: "prod_TygQnUBriirRoJ",
  },
]

// Helper to get a product by ID
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

// Helper to get add-ons by IDs
export function getAddOnsByIds(ids: string[]): AddOn[] {
  return ADD_ONS.filter((a) => ids.includes(a.id))
}
