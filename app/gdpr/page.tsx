import Link from "next/link"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Download, Trash2, Edit, Eye, Lock } from "lucide-react"

const rights = [
  {
    icon: Eye,
    title: "Right to Access",
    description: "Request a copy of all personal data we hold about you or your visitors."
  },
  {
    icon: Edit,
    title: "Right to Rectification",
    description: "Request correction of inaccurate or incomplete personal data."
  },
  {
    icon: Trash2,
    title: "Right to Erasure",
    description: "Request deletion of personal data when it is no longer necessary."
  },
  {
    icon: Lock,
    title: "Right to Restrict Processing",
    description: "Request limitation of how we process your personal data."
  },
  {
    icon: Download,
    title: "Right to Data Portability",
    description: "Receive your data in a structured, machine-readable format."
  },
  {
    icon: Shield,
    title: "Right to Object",
    description: "Object to processing of your personal data in certain circumstances."
  }
]

export default function GDPRPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              GDPR Compliance
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Gatekeeper.io is committed to protecting the privacy rights of individuals 
              under the General Data Protection Regulation (GDPR).
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">Our Commitment to GDPR</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law 
                that affects organizations processing personal data of individuals in the European Union. 
                At Gatekeeper.io, we have implemented measures to ensure full compliance with GDPR requirements.
              </p>
              <p>
                Whether you are a customer based in the EU or processing data of EU residents, 
                Gatekeeper.io provides the tools and safeguards you need to maintain compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Data Subject Rights */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-foreground">Data Subject Rights</h2>
            <p className="mt-4 text-center text-muted-foreground">
              We support all rights granted to individuals under GDPR
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rights.map((right) => (
                <Card key={right.title}>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <right.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg">{right.title}</CardTitle>
                    <CardDescription>{right.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">How Gatekeeper.io Helps You Comply</h2>
            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Data Processing Agreement</h3>
                <p className="mt-2 text-muted-foreground">
                  We provide a comprehensive Data Processing Agreement (DPA) that outlines our obligations 
                  as a data processor, including security measures, sub-processor management, and data 
                  breach notification procedures.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground">Lawful Basis Support</h3>
                <p className="mt-2 text-muted-foreground">
                  Gatekeeper.io helps you establish and document lawful bases for processing visitor data, 
                  whether through consent, legitimate interests, or contractual necessity. Our customizable 
                  consent workflows ensure proper documentation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground">Data Minimization</h3>
                <p className="mt-2 text-muted-foreground">
                  Configure your check-in flows to collect only the data you need. Our flexible form 
                  builder lets you determine exactly what information to collect for different visitor types.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground">Retention Controls</h3>
                <p className="mt-2 text-muted-foreground">
                  Set automatic data retention policies to ensure visitor data is not kept longer than 
                  necessary. Configure different retention periods for different types of visits and 
                  receive notifications before data is deleted.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground">Data Export</h3>
                <p className="mt-2 text-muted-foreground">
                  Export visitor data in machine-readable formats (CSV, JSON) to fulfill data portability 
                  requests. Generate comprehensive reports of all data associated with a specific individual.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground">Right to Erasure</h3>
                <p className="mt-2 text-muted-foreground">
                  Easily delete visitor records to comply with erasure requests. Our system maintains 
                  audit logs of deletions for your compliance documentation while fully removing the 
                  personal data itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Measures */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">Technical & Organizational Measures</h2>
            <p className="mt-4 text-muted-foreground">
              GDPR Article 32 requires appropriate security measures. Gatekeeper.io implements:
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-muted-foreground">
              <li><strong className="text-foreground">Encryption:</strong> AES-256 encryption at rest, TLS 1.3 in transit</li>
              <li><strong className="text-foreground">Pseudonymization:</strong> Support for anonymizing historical visitor data</li>
              <li><strong className="text-foreground">Access Controls:</strong> Role-based access with principle of least privilege</li>
              <li><strong className="text-foreground">Availability:</strong> 99.9% uptime SLA with automated failover</li>
              <li><strong className="text-foreground">Audit Logging:</strong> Comprehensive logs of all data access and modifications</li>
              <li><strong className="text-foreground">Regular Testing:</strong> Penetration testing and security assessments</li>
              <li><strong className="text-foreground">Incident Response:</strong> Documented procedures with 72-hour breach notification</li>
            </ul>
          </div>
        </section>

        {/* Sub-processors */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">Sub-processors</h2>
            <p className="mt-4 text-muted-foreground">
              We use a limited number of sub-processors to provide our services. All sub-processors 
              are bound by data processing agreements and maintain appropriate security certifications.
            </p>
            <div className="mt-6 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-foreground">Cloud Infrastructure</p>
                      <p className="text-sm text-muted-foreground">Hosting and data storage</p>
                    </div>
                    <p className="text-sm text-muted-foreground">United States / EU</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-foreground">Payment Processing</p>
                      <p className="text-sm text-muted-foreground">Subscription billing</p>
                    </div>
                    <p className="text-sm text-muted-foreground">United States</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-foreground">Email Services</p>
                      <p className="text-sm text-muted-foreground">Transactional emails</p>
                    </div>
                    <p className="text-sm text-muted-foreground">United States</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              A complete list of sub-processors is available in our Data Processing Agreement. 
              We notify customers before adding new sub-processors.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">Data Protection Officer</h2>
            <p className="mt-4 text-muted-foreground">
              For GDPR-related inquiries or to exercise your data subject rights, please contact our 
              Data Protection Officer.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-muted-foreground">Email: dpo@gatekeeperio.com</p>
              <p className="text-muted-foreground">Address: 123 Security Lane, Atlanta, GA 30301</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:dpo@gatekeeperio.com"
                className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Contact DPO
              </a>
              <Link
                href="/privacy"
                className="inline-block rounded-md border border-border bg-background px-6 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
