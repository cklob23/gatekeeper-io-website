import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"

const lastUpdated = "January 15, 2026"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Terms of Service
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
              Welcome to Gatekeeper.io. By accessing or using our visitor management platform, 
              you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By creating an account or using Gatekeeper.io, you agree to these Terms of Service, 
              our Privacy Policy, and any additional terms applicable to specific features. If you 
              do not agree to these terms, you may not use our services.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">2. Description of Services</h2>
            <p className="text-muted-foreground">
              Gatekeeper.io provides a cloud-based visitor management platform that enables organizations 
              to manage visitor check-ins, maintain visitor records, print badges, and ensure facility security. 
              Services may include but are not limited to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Visitor check-in and check-out functionality</li>
              <li>Pre-registration and invitation systems</li>
              <li>Badge printing capabilities</li>
              <li>Watchlist screening</li>
              <li>Reporting and analytics</li>
              <li>API access for integrations</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-foreground">3. Account Registration</h2>
            <p className="text-muted-foreground">
              To use Gatekeeper, you must create an account and provide accurate, complete information. 
              You are responsible for maintaining the confidentiality of your account credentials and 
              for all activities under your account. You must notify us immediately of any unauthorized use.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">4. Subscription and Payment</h2>
            <h3 className="mt-6 text-xl font-semibold text-foreground">4.1 Pricing</h3>
            <p className="text-muted-foreground">
              Subscription fees are based on your selected plan and billed monthly or annually. 
              All prices are in USD and do not include applicable taxes.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-foreground">4.2 Free Trial</h3>
            <p className="text-muted-foreground">
              We offer a 14-day free trial for new customers. No credit card is required during the trial. 
              At the end of the trial, you must subscribe to continue using the service.
            </p>
            
            <h3 className="mt-6 text-xl font-semibold text-foreground">4.3 Cancellation</h3>
            <p className="text-muted-foreground">
              You may cancel your subscription at any time. Cancellation takes effect at the end of the 
              current billing period. No refunds are provided for partial months or unused time.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">5. Acceptable Use</h2>
            <p className="text-muted-foreground">You agree not to:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Use the service for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service</li>
              <li>Collect data about other users without consent</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-foreground">6. Data Ownership</h2>
            <p className="text-muted-foreground">
              You retain ownership of all data you enter into Gatekeeper (&quot;Customer Data&quot;). 
              You grant us a limited license to use Customer Data solely to provide the services. 
              We will not access, use, or disclose Customer Data except as necessary to provide 
              the services or as required by law.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">7. Intellectual Property</h2>
            <p className="text-muted-foreground">
              Gatekeeper.io and its original content, features, and functionality are owned by 
              Gatekeeper.io and are protected by international copyright, trademark, and other 
              intellectual property laws. You may not copy, modify, or distribute our software 
              without express written permission.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">8. Service Availability</h2>
            <p className="text-muted-foreground">
              We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. 
              We may perform scheduled maintenance with advance notice. We are not liable for 
              any downtime, interruptions, or data loss.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">9. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, GATEKEEPER.IO SHALL NOT BE LIABLE FOR ANY 
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF 
              PROFITS OR REVENUES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US 
              IN THE TWELVE MONTHS PRECEDING THE CLAIM.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">10. Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold Gatekeeper.io harmless from any claims, damages, 
              losses, or expenses arising from your use of the service, violation of these terms, 
              or infringement of any third-party rights.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">11. Termination</h2>
            <p className="text-muted-foreground">
              We may suspend or terminate your account for violation of these terms, non-payment, 
              or for any reason with 30 days notice. Upon termination, your right to use the 
              service ceases immediately. You may export your data within 30 days of termination.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">12. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of Georgia, without regard to conflict of law principles. Any disputes shall 
              be resolved in the courts of Fulton County, Georgia.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">13. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will provide notice of 
              material changes via email or through the service. Continued use after changes 
              constitutes acceptance of the new terms.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-foreground">14. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at:
            </p>
            <address className="mt-4 not-italic text-muted-foreground">
              Gatekeeper.io<br />
              Email: legal@gatekeeper.io<br />
              Address: 123 Security Lane, Atlanta, GA 30301
            </address>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
