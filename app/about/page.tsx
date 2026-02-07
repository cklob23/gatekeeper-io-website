import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Shield, Users, Target, Heart } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We believe that protecting your organization and the people within it is paramount. Every feature we build starts with security at its core."
  },
  {
    icon: Users,
    title: "People-Centered",
    description: "Technology should serve people, not the other way around. We design intuitive solutions that empower administrators and create welcoming experiences for visitors."
  },
  {
    icon: Target,
    title: "Accountability",
    description: "We help organizations maintain clear records and demonstrate responsible stewardship to their stakeholders, members, and regulatory bodies."
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Building trust is at the heart of everything we do. Trust between organizations and their visitors, and trust between Gatekeeper.io and our customers."
  }
]

const team = [
  {
    name: "Leadership Team",
    description: "Our leadership brings decades of combined experience in security, software development, and organizational management."
  },
  {
    name: "Engineering",
    description: "A dedicated team of engineers passionate about building secure, reliable, and user-friendly software."
  },
  {
    name: "Customer Success",
    description: "Experts committed to helping every customer get the most value from Gatekeeper.io."
  }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              About Gatekeeper.io
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              We are on a mission to help organizations protect their people and spaces 
              while creating welcoming experiences for every visitor.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Gatekeeper.io was born from a simple observation: organizations of all sizes 
                struggle to balance security with hospitality. Traditional sign-in methods 
                like paper logs are outdated and insecure, while many digital solutions are 
                overly complex and expensive.
              </p>
              <p>
                We set out to build something different: a visitor management platform that 
                is powerful enough for enterprise security requirements yet simple enough 
                for any organization to use. Whether you are a church welcoming congregants, 
                a school protecting students, or a business meeting with clients, Gatekeeper.io 
                provides the tools you need.
              </p>
              <p>
                Today, Gatekeeper.io serves organizations across industries, helping them 
                maintain accountability, demonstrate compliance, and create positive first 
                impressions for every visitor who walks through their doors.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Our Values</h2>
              <p className="mt-4 text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
              <p className="mt-4 text-muted-foreground">
                Dedicated professionals committed to your success
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {team.map((dept) => (
                <div key={dept.name} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{dept.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
