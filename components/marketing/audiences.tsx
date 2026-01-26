import { Church, GraduationCap, Building, Factory } from "lucide-react"

const audiences = [
  {
    icon: Church,
    title: "Churches & Ministries",
    description: "Protect your congregation and children with secure check-in. Track volunteers, visitors, and maintain accountability.",
    painPoints: ["Child safety compliance", "Volunteer management", "Service attendance tracking"]
  },
  {
    icon: GraduationCap,
    title: "Schools & Academies",
    description: "Know who is on campus at all times. Meet regulatory requirements and keep students safe with proper visitor protocols.",
    painPoints: ["Campus security", "Parent check-in", "Regulatory compliance"]
  },
  {
    icon: Building,
    title: "SMB Offices",
    description: "Professional visitor management without enterprise complexity. Perfect for growing businesses with 20-500 employees.",
    painPoints: ["Professional appearance", "Contractor tracking", "Delivery management"]
  },
  {
    icon: Factory,
    title: "Regulated Facilities",
    description: "Manufacturing, healthcare, and labs require strict visitor protocols. Meet compliance with comprehensive audit trails.",
    painPoints: ["OSHA compliance", "Incident traceability", "NDA management"]
  }
]

export function Audiences() {
  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for Organizations That Value Trust
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From churches to corporate offices, Gatekeeper serves organizations where accountability matters.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex gap-6 rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <audience.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {audience.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {audience.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {audience.painPoints.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
