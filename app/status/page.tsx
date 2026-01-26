import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Clock } from "lucide-react"

const services = [
  { name: "Web Application", status: "operational", uptime: "99.99%" },
  { name: "API", status: "operational", uptime: "99.99%" },
  { name: "Check-in Kiosks", status: "operational", uptime: "99.98%" },
  { name: "Badge Printing", status: "operational", uptime: "99.97%" },
  { name: "Email Notifications", status: "operational", uptime: "99.95%" },
  { name: "SMS Notifications", status: "operational", uptime: "99.93%" },
  { name: "Webhooks", status: "operational", uptime: "99.99%" },
  { name: "Dashboard & Analytics", status: "operational", uptime: "99.99%" }
]

const incidents = [
  {
    date: "January 20, 2026",
    title: "Scheduled Maintenance Completed",
    status: "resolved",
    description: "Scheduled database maintenance was completed successfully with no service interruption."
  },
  {
    date: "January 15, 2026",
    title: "SMS Delivery Delays",
    status: "resolved",
    description: "Some SMS notifications experienced delays of up to 5 minutes due to carrier issues. Issue resolved by carrier."
  },
  {
    date: "January 8, 2026",
    title: "API Performance Improvements",
    status: "resolved",
    description: "Deployed infrastructure updates resulting in 40% faster API response times."
  }
]

const metrics = [
  { label: "Current Uptime", value: "99.99%", period: "Last 90 days" },
  { label: "Avg Response Time", value: "45ms", period: "Last 24 hours" },
  { label: "Active Incidents", value: "0", period: "Current" },
  { label: "Scheduled Maintenance", value: "None", period: "Next 7 days" }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case "degraded":
      return <AlertCircle className="h-5 w-5 text-yellow-500" />
    case "outage":
      return <AlertCircle className="h-5 w-5 text-red-500" />
    default:
      return <Clock className="h-5 w-5 text-muted-foreground" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "operational":
      return <Badge className="bg-green-100 text-green-800">Operational</Badge>
    case "resolved":
      return <Badge variant="outline">Resolved</Badge>
    case "investigating":
      return <Badge className="bg-yellow-100 text-yellow-800">Investigating</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function StatusPage() {
  const allOperational = services.every(s => s.status === "operational")

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Status Banner */}
        <section className={`px-4 py-12 sm:px-6 lg:px-8 ${allOperational ? "bg-green-600" : "bg-yellow-600"}`}>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
              {allOperational ? (
                <CheckCircle className="h-8 w-8 text-white" />
              ) : (
                <AlertCircle className="h-8 w-8 text-white" />
              )}
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {allOperational ? "All Systems Operational" : "Some Systems Experiencing Issues"}
            </h1>
            <p className="mt-4 text-white/90">
              Last updated: {new Date().toLocaleString()}
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-b border-border px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <Card key={metric.label}>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Service Status</h2>
            <div className="mt-8 space-y-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between rounded-lg border border-border p-4"
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <span className="font-medium text-foreground">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{service.uptime} uptime</span>
                    {getStatusBadge(service.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Recent Incidents</h2>
            <p className="mt-2 text-muted-foreground">
              Past incidents and maintenance updates
            </p>
            <div className="mt-8 space-y-6">
              {incidents.map((incident, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-lg">{incident.title}</CardTitle>
                      {getStatusBadge(incident.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{incident.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{incident.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">Stay Informed</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to receive status updates via email or follow us for real-time notifications.
            </p>
            <form className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
