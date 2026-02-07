import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"

const lastUpdated = "January 15, 2026"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-primary-foreground/90">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-slate mx-auto max-w-3xl">
            <p className="lead text-lg text-muted-foreground">
              At Gatekeeper.io, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our visitor management platform.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">1. Information We Collect</h2>
            
            <h3 className="mt-6 text-xl font-semibold text-foreground">1.1 Information You Provide</h3>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Account information (name, email, phone number, company name)</li>
              <li>Billing information (processed securely by our payment provider)</li>
              <li>Visitor data entered into the system by you or your visitors</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-foreground">1.2 Automatically Collected Information</h3>
            <p className="text-muted-foreground">
              When you use Gatekeeper.io, we automatically collect:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Device information (browser type, operating system)</li>
              <li>Log data (IP address, access times, pages viewed)</li>
              <li>Usage data (features used, interactions with the platform)</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
            <p className="text-muted-foreground">We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-foreground">3. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong>With your consent</strong> or at your direction</li>
              <li><strong>Service providers</strong> who assist in our operations (hosting, payment processing)</li>
              <li><strong>Legal requirements</strong> when required by law or to protect rights and safety</li>
              <li><strong>Business transfers</strong> in connection with a merger, acquisition, or sale</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-foreground">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your data, including:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 encryption for data in transit</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II compliance</li>
              <li>Access controls and authentication requirements</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-foreground">5. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your information for as long as your account is active or as needed to provide services. 
              You can configure automatic data retention policies for visitor records. Upon account termination, 
              we will delete your data within 90 days, unless required by law to retain it.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">6. Your Rights</h2>
            <p className="text-muted-foreground">Depending on your location, you may have the right to:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-foreground">7. Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar technologies to improve your experience. You can control cookies through 
              your browser settings. Essential cookies required for the service to function cannot be disabled.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">8. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground">
              Gatekeeper.io is not intended for children under 16. We do not knowingly collect personal information 
              from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">9. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of material changes by 
              posting the new policy on this page and updating the effective date.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">10. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <address className="mt-4 not-italic text-muted-foreground">
              Gatekeeper.io<br />
              Email: privacy@gatekeeperio.com<br />
              Address: 123 Security Lane, Atlanta, GA 30301
            </address>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
