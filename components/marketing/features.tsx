import { 
  Shield, 
  ClipboardList, 
  Users, 
  Building2, 
  Lock, 
  BarChart3,
  Bell,
  Palette
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Security-First Design",
    description: "Built from the ground up with security at its core. Every visitor interaction is logged, timestamped, and traceable."
  },
  {
    icon: ClipboardList,
    title: "Complete Audit Trail",
    description: "Comprehensive visitor logs with export capabilities. Meet compliance requirements and have evidence when you need it."
  },
  {
    icon: Users,
    title: "Visitor Pre-Registration",
    description: "Allow hosts to pre-register visitors, streamlining check-in and ensuring expected arrivals are documented."
  },
  {
    icon: Building2,
    title: "Multi-Location Support",
    description: "Manage all your locations from a single dashboard. Perfect for organizations with multiple sites or campuses."
  },
  {
    icon: Lock,
    title: "SSO & IAM Integration",
    description: "Seamlessly integrate with Azure AD, Entra ID, and other identity providers for enterprise-grade access control."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Understand visitor patterns, peak times, and trends. Make data-driven decisions about your space management."
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Real-time alerts when visitors arrive. Email and SMS notifications keep hosts informed and accountable."
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "White-label the visitor experience with your logo, colors, and messaging. Your brand, your experience."
  }
]

export function Features() {
  return (
    <section id="features" className="bg-secondary py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Control. Visibility. Trust.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Everything you need to manage visitor access with confidence and accountability.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
