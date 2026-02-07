import Link from "next/link"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase } from "lucide-react"

const openings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build and maintain our core visitor management platform using React, Node.js, and PostgreSQL."
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (US)",
    type: "Full-time",
    description: "Design intuitive user experiences that make visitor management simple and delightful."
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
    description: "Help our customers get the most value from Gatekeeper.io through onboarding, training, and ongoing support."
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    description: "Connect with organizations to help them discover how Gatekeeper.io can improve their visitor management."
  }
]

const benefits = [
  "Competitive salary and equity",
  "Remote-first culture",
  "Unlimited PTO",
  "Health, dental, and vision insurance",
  "401(k) with company match",
  "Professional development budget",
  "Home office stipend",
  "Flexible working hours"
]

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Help us build the future of visitor management. We are looking for 
              passionate people who want to make organizations safer and more welcoming.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Why Gatekeeper.io?</h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    At Gatekeeper.io, you will work on meaningful problems that directly impact 
                    the safety and security of organizations and the people they serve.
                  </p>
                  <p>
                    We are a remote-first company that values results over hours, trust over 
                    micromanagement, and collaboration over hierarchy. Our team spans multiple 
                    time zones, united by a shared mission.
                  </p>
                  <p>
                    We believe in continuous learning and provide opportunities for professional 
                    growth, whether through conferences, courses, or mentorship.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 p-8">
                <h3 className="text-xl font-semibold text-foreground">Benefits & Perks</h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Open Positions</h2>
              <p className="mt-4 text-muted-foreground">
                Find your next opportunity at Gatekeeper.io
              </p>
            </div>
            <div className="mt-12 grid gap-6">
              {openings.map((job) => (
                <Card key={job.title}>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="mt-2">{job.description}</CardDescription>
                      </div>
                      <Button asChild>
                        <Link href={`mailto:careers@gatekeeperio.com?subject=Application: ${job.title}`}>
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {job.department}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Don't See a Fit */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">Do not see a perfect fit?</h2>
            <p className="mt-4 text-muted-foreground">
              We are always looking for talented people. Send us your resume and tell us 
              how you could contribute to our mission.
            </p>
            <Button asChild className="mt-6">
              <Link href="mailto:careers@gatekeeperio.com">Send Your Resume</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
