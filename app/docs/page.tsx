import Link from "next/link"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Rocket, Settings, Users, Shield, Zap, Code, HelpCircle } from "lucide-react"

const categories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Learn the basics of setting up and configuring Gatekeeper.io for your organization.",
    links: [
      { label: "Quick Start Guide", href: "#" },
      { label: "Installation", href: "#" },
      { label: "First-Time Setup", href: "#" },
      { label: "Basic Configuration", href: "#" }
    ]
  },
  {
    icon: Users,
    title: "Visitor Management",
    description: "Everything you need to know about managing visitors and check-ins.",
    links: [
      { label: "Check-In Process", href: "#" },
      { label: "Pre-Registration", href: "#" },
      { label: "Badge Printing", href: "#" },
      { label: "Visitor Types", href: "#" }
    ]
  },
  {
    icon: Settings,
    title: "Administration",
    description: "Configure and customize Gatekeeper.io to meet your organization's needs.",
    links: [
      { label: "User Management", href: "#" },
      { label: "Location Settings", href: "#" },
      { label: "Custom Fields", href: "#" },
      { label: "Notifications", href: "#" }
    ]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Learn about security features and maintaining compliance.",
    links: [
      { label: "Watchlist Management", href: "#" },
      { label: "Access Controls", href: "#" },
      { label: "Audit Logs", href: "#" },
      { label: "Data Retention", href: "#" }
    ]
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Connect Gatekeeper.io with your existing tools and workflows.",
    links: [
      { label: "SSO Setup", href: "#" },
      { label: "Calendar Integration", href: "#" },
      { label: "Slack & Teams", href: "#" },
      { label: "Webhooks", href: "#" }
    ]
  },
  {
    icon: Code,
    title: "API & Developers",
    description: "Build custom integrations with our REST API.",
    links: [
      { label: "API Overview", href: "/api-docs" },
      { label: "Authentication", href: "#" },
      { label: "Endpoints", href: "#" },
      { label: "SDKs", href: "#" }
    ]
  }
]

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <BookOpen className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Documentation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Everything you need to get the most out of Gatekeeper.io. From setup to advanced features.
            </p>
            <div className="mt-8">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full max-w-md rounded-lg border-0 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder-primary-foreground/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="border-b border-border bg-muted/50 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 text-sm">
            <span className="font-medium text-foreground">Quick Links:</span>
            <Link href="#" className="text-primary hover:underline">Quick Start</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="#" className="text-primary hover:underline">Video Tutorials</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/api-docs" className="text-primary hover:underline">API Reference</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/help" className="text-primary hover:underline">FAQs</Link>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Card key={category.title} className="flex flex-col">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <div className="mt-auto px-6 pb-6">
                    <ul className="space-y-2">
                      {category.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <HelpCircle className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">Need more help?</h2>
            <p className="mt-4 text-muted-foreground">
              Cannot find what you are looking for? Our support team is here to help.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/help"
                className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Visit Help Center
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-border bg-background px-6 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
