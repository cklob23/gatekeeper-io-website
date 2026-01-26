import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Server, Eye, FileCheck, Users } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "Encryption",
    description: "All data is encrypted using AES-256 at rest and TLS 1.3 in transit."
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Hosted on SOC 2 compliant cloud infrastructure with 99.99% uptime SLA."
  },
  {
    icon: Eye,
    title: "Access Controls",
    description: "Role-based access control (RBAC) with granular permissions and audit logging."
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "SOC 2 Type II certified with GDPR and CCPA compliance support."
  },
  {
    icon: Users,
    title: "Authentication",
    description: "Support for SSO (SAML 2.0, OAuth), MFA, and password policies."
  },
  {
    icon: Shield,
    title: "Security Testing",
    description: "Regular penetration testing and vulnerability assessments by third parties."
  }
]

const certifications = [
  { name: "SOC 2 Type II", description: "Annual audit of security, availability, and confidentiality controls" },
  { name: "GDPR Compliant", description: "Full compliance with EU data protection regulations" },
  { name: "CCPA Compliant", description: "Compliance with California Consumer Privacy Act" },
  { name: "HIPAA Ready", description: "BAA available for healthcare organizations (Enterprise)" }
]

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Security at Gatekeeper
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Your data security is our top priority. We employ industry-leading practices 
              to protect your organization and visitor information.
            </p>
          </div>
        </section>

        {/* Security Features */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-foreground">Security Features</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Comprehensive security measures built into every layer
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {securityFeatures.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">Data Protection</h2>
            <div className="mt-6 space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground">Encryption Standards</h3>
                <p className="mt-2">
                  All customer data is encrypted at rest using AES-256 encryption. Data in transit 
                  is protected using TLS 1.3 with strong cipher suites. Database backups are also 
                  encrypted and stored in geographically separate locations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Data Isolation</h3>
                <p className="mt-2">
                  Each customer&apos;s data is logically isolated using unique encryption keys and 
                  database-level separation. No customer can access another customer&apos;s data 
                  under any circumstances.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Data Retention</h3>
                <p className="mt-2">
                  You control how long visitor data is retained. Configure automatic deletion 
                  policies to comply with your organization&apos;s requirements. All data can be 
                  exported at any time in standard formats.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Backup and Recovery</h3>
                <p className="mt-2">
                  Automated daily backups with point-in-time recovery capability. Backups are 
                  stored across multiple availability zones with 99.999999999% durability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-foreground">Compliance & Certifications</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Meeting the highest industry standards for data protection
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {certifications.map((cert) => (
                <Card key={cert.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-accent" />
                      {cert.name}
                    </CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Security */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">Infrastructure Security</h2>
            <div className="mt-6 space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground">Cloud Infrastructure</h3>
                <p className="mt-2">
                  Gatekeeper runs on enterprise-grade cloud infrastructure with SOC 2, ISO 27001, 
                  and FedRAMP certifications. Our infrastructure spans multiple availability zones 
                  for high availability and disaster recovery.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Network Security</h3>
                <p className="mt-2">
                  Multiple layers of network security including firewalls, intrusion detection, 
                  DDoS protection, and network segmentation. All administrative access requires 
                  VPN and multi-factor authentication.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Monitoring and Logging</h3>
                <p className="mt-2">
                  24/7 security monitoring with automated alerting for suspicious activity. 
                  Comprehensive audit logs for all system access and changes. Log data is 
                  retained for a minimum of one year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">Our Security Practices</h2>
            <div className="mt-6 space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground">Secure Development</h3>
                <p className="mt-2">
                  Our development team follows secure coding practices including code reviews, 
                  static analysis, and dependency scanning. All code changes are tested in 
                  isolated environments before deployment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Vulnerability Management</h3>
                <p className="mt-2">
                  Regular vulnerability scanning and annual penetration testing by independent 
                  security firms. Critical vulnerabilities are addressed within 24 hours.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Incident Response</h3>
                <p className="mt-2">
                  Documented incident response procedures with defined escalation paths. 
                  Customers are notified of any security incidents affecting their data 
                  within 72 hours as required by GDPR.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Employee Security</h3>
                <p className="mt-2">
                  Background checks for all employees with access to customer data. 
                  Security awareness training conducted quarterly. Access granted on a 
                  need-to-know basis with regular access reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">Security Questions?</h2>
            <p className="mt-4 text-muted-foreground">
              Our security team is available to answer questions and provide additional documentation.
            </p>
            <div className="mt-6">
              <a
                href="mailto:security@gatekeeper.io"
                className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Contact Security Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
