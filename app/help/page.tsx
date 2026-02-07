import Link from "next/link"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Mail, Phone, FileText } from "lucide-react"

const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        q: "How do I set up Gatekeeper.io for my organization?",
        a: "After signing up, you will be guided through a simple setup wizard. You will configure your location details, customize your check-in flow, and invite team members. Most organizations are up and running within 30 minutes."
      },
      {
        q: "What hardware do I need?",
        a: "Gatekeeper.io works on any tablet (iPad or Android) or computer with a web browser. For badge printing, we support most thermal label printers. A camera is optional but recommended for capturing visitor photos."
      },
      {
        q: "Can I try Gatekeeper.io before purchasing?",
        a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can also schedule a demo with our team to see Gatekeeper.io in action."
      }
    ]
  },
  {
    title: "Features & Functionality",
    questions: [
      {
        q: "Can I customize the check-in experience?",
        a: "Absolutely. You can customize the welcome screen, add your logo, create custom fields, configure different visitor types, and set up unique workflows for different scenarios."
      },
      {
        q: "Does Gatekeeper.io support multiple locations?",
        a: "Yes, our Pro and Enterprise plans support unlimited locations. Each location can have its own settings while sharing a central admin dashboard for oversight."
      },
      {
        q: "Can visitors pre-register before arriving?",
        a: "Yes, you can send pre-registration invites to expected visitors. They can fill out their information in advance, speeding up the check-in process when they arrive."
      }
    ]
  },
  {
    title: "Security & Compliance",
    questions: [
      {
        q: "How is visitor data protected?",
        a: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We maintain SOC 2 Type II compliance and undergo regular security audits."
      },
      {
        q: "Can I screen visitors against a watchlist?",
        a: "Yes, our watchlist feature allows you to flag specific individuals. When they attempt to check in, staff are immediately notified. This feature is available on Pro and Enterprise plans."
      },
      {
        q: "How long is visitor data retained?",
        a: "You control your data retention policy. You can configure automatic deletion after a set period or manually manage records. We also support data export for compliance purposes."
      }
    ]
  },
  {
    title: "Billing & Plans",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoicing for annual Enterprise plans."
      },
      {
        q: "Can I change plans at any time?",
        a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle. Upgrades are prorated for immediate access."
      },
      {
        q: "Is there a discount for annual billing?",
        a: "Yes, annual billing saves you 20% compared to monthly billing. Contact our sales team for Enterprise pricing and volume discounts."
      }
    ]
  }
]

const supportOptions = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Browse our comprehensive guides and tutorials",
    href: "/docs",
    linkText: "View Docs"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    href: "#",
    linkText: "Start Chat"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 24 hours",
    href: "mailto:support@gatekeeperio.com",
    linkText: "Send Email"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk to a support specialist",
    href: "tel:+12792019504",
    linkText: "Call Now"
  }
]

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Help Center
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Find answers to common questions or get in touch with our support team.
            </p>
            <div className="mt-8">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full max-w-md rounded-lg border-0 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder-primary-foreground/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="border-b border-border px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {supportOptions.map((option) => (
                <Card key={option.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <option.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                    <Link href={option.href} className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                      {option.linkText}
                    </Link>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Quick answers to the most common questions about Gatekeeper.io
            </p>

            <div className="mt-12 space-y-8">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="mb-4 text-xl font-semibold text-foreground">{category.title}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`${category.title}-${index}`}>
                        <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">Still need help?</h2>
            <p className="mt-4 text-muted-foreground">
              Our support team is available Monday through Friday, 9am to 5pm EST.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
