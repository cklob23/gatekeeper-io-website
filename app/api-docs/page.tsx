import Link from "next/link"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Key, Webhook, FileJson, Zap, Shield } from "lucide-react"

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/visitors",
    description: "List all visitors with optional filtering and pagination"
  },
  {
    method: "POST",
    path: "/api/v1/visitors",
    description: "Create a new visitor check-in record"
  },
  {
    method: "GET",
    path: "/api/v1/visitors/:id",
    description: "Retrieve a specific visitor by ID"
  },
  {
    method: "PATCH",
    path: "/api/v1/visitors/:id",
    description: "Update a visitor record"
  },
  {
    method: "POST",
    path: "/api/v1/visitors/:id/checkout",
    description: "Check out a visitor"
  },
  {
    method: "GET",
    path: "/api/v1/locations",
    description: "List all locations for your organization"
  },
  {
    method: "GET",
    path: "/api/v1/reports/visits",
    description: "Generate visit reports with date range filtering"
  },
  {
    method: "POST",
    path: "/api/v1/webhooks",
    description: "Create a webhook subscription"
  }
]

const features = [
  {
    icon: Key,
    title: "API Keys",
    description: "Secure authentication using API keys. Generate and manage keys from your dashboard."
  },
  {
    icon: FileJson,
    title: "RESTful JSON",
    description: "Clean, predictable REST API with JSON request and response bodies."
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Real-time notifications for check-ins, check-outs, and other events."
  },
  {
    icon: Zap,
    title: "Rate Limiting",
    description: "Generous rate limits with clear headers. 1000 requests per minute on Pro plans."
  },
  {
    icon: Shield,
    title: "Secure",
    description: "TLS 1.3 encryption, IP allowlisting, and detailed audit logs for all API calls."
  },
  {
    icon: Code,
    title: "SDKs",
    description: "Official SDKs for JavaScript, Python, Ruby, and PHP. Community SDKs for more languages."
  }
]

const getMethodColor = (method: string) => {
  switch (method) {
    case "GET":
      return "bg-green-100 text-green-800"
    case "POST":
      return "bg-blue-100 text-blue-800"
    case "PATCH":
      return "bg-yellow-100 text-yellow-800"
    case "DELETE":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function APIDocsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <Code className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              API Reference
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Build custom integrations with the Gatekeeper REST API. 
              Automate workflows, sync data, and extend functionality.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <code className="rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
                Base URL: https://api.gatekeeper.io/v1
              </code>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-foreground">API Features</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Authentication</h2>
            <p className="mt-4 text-muted-foreground">
              Authenticate your API requests using an API key in the Authorization header.
            </p>
            <div className="mt-6 rounded-lg bg-muted p-4">
              <pre className="overflow-x-auto text-sm">
                <code className="text-foreground">{`curl -X GET "https://api.gatekeeper.io/v1/visitors" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              You can generate API keys from your Gatekeeper dashboard under Settings → API Keys.
              Keep your API keys secure and never expose them in client-side code.
            </p>
          </div>
        </section>

        {/* Endpoints */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Endpoints</h2>
            <p className="mt-4 text-muted-foreground">
              Core endpoints for managing visitors and locations.
            </p>
            <div className="mt-8 space-y-4">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Badge className={getMethodColor(endpoint.method)}>{endpoint.method}</Badge>
                    <code className="text-sm font-medium text-foreground">{endpoint.path}</code>
                  </div>
                  <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Official SDKs</h2>
            <p className="mt-4 text-muted-foreground">
              Get started quickly with our official client libraries.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["JavaScript/TypeScript", "Python", "Ruby", "PHP"].map((lang) => (
                <div key={lang} className="rounded-lg border border-border p-4">
                  <h3 className="font-medium text-foreground">{lang}</h3>
                  <code className="mt-2 block text-sm text-muted-foreground">
                    {lang === "JavaScript/TypeScript" && "npm install @gatekeeper/sdk"}
                    {lang === "Python" && "pip install gatekeeper-sdk"}
                    {lang === "Ruby" && "gem install gatekeeper"}
                    {lang === "PHP" && "composer require gatekeeper/sdk"}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">Ready to build?</h2>
            <p className="mt-4 text-muted-foreground">
              Create your API key and start integrating Gatekeeper today.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/trial"
                className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Get API Access
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-border bg-background px-6 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                Contact Developer Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
