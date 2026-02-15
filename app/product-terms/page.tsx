import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Product and Services Addendum",
    description:
        "Gatekeeper.io Product and Services Addendum detailing subscription plans, add-ons, service levels, and usage policies.",
}

const lastUpdated = "February 1, 2026"

export default function ProductTermsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                            Product and Services Addendum
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
                            This Product and Services Addendum (&quot;Addendum&quot;) supplements the{" "}
                            <a href="/terms" className="text-primary underline hover:text-primary/80">
                                General Terms and Conditions of Use
                            </a>{" "}
                            (&quot;Agreement&quot;) and describes the subscription plans, add-on services,
                            service levels, and usage policies for the Gatekeeper.io visitor management
                            platform (&quot;Platform&quot;). In the event of a conflict between this
                            Addendum and the Agreement, this Addendum shall prevail with respect to the
                            subject matter herein.
                        </p>

                        {/* Section 1 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            1. Subscription Plans
                        </h2>
                        <p className="text-muted-foreground">
                            Gatekeeper.io offers three subscription tiers, each billed per location, per
                            month. All plans include a 14-day free trial. Pricing is in U.S. dollars and
                            does not include applicable taxes, which are calculated at checkout.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            1.1 Starter Plan &mdash; $39/location/month
                        </h3>
                        <p className="text-muted-foreground">
                            Designed for churches, small offices, and single-location organizations. The
                            Starter Plan includes:
                        </p>
                        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                            <li>Unlimited visitors</li>
                            <li>Visitor sign-in and sign-out</li>
                            <li>Basic visitor logs</li>
                            <li>Email notifications</li>
                            <li>Custom welcome message</li>
                            <li>Mobile-friendly check-in</li>
                            <li>1 admin user</li>
                            <li>Email support (business hours, Mon&ndash;Fri)</li>
                        </ul>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            1.2 Pro Plan &mdash; $79/location/month
                        </h3>
                        <p className="text-muted-foreground">
                            Designed for growing organizations with multiple locations. The Pro Plan
                            includes everything in Starter, plus:
                        </p>
                        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                            <li>Visitor pre-registration</li>
                            <li>Photo capture</li>
                            <li>Badge printing</li>
                            <li>Custom branding (logos, colors, welcome screens)</li>
                            <li>Advanced audit logs</li>
                            <li>Analytics dashboard</li>
                            <li>Up to 10 admin users</li>
                            <li>Priority support (24-hour response SLA)</li>
                        </ul>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            1.3 Enterprise Plan &mdash; $149/location/month
                        </h3>
                        <p className="text-muted-foreground">
                            Designed for regulated facilities and large organizations. The Enterprise Plan
                            includes everything in Pro, plus:
                        </p>
                        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                            <li>SSO integration (Azure AD, Entra ID)</li>
                            <li>Vendor management</li>
                            <li>Emergency evacuation lists</li>
                            <li>Custom integrations</li>
                            <li>Unlimited admin users</li>
                            <li>Dedicated account manager</li>
                            <li>SLA guarantee (99.9% uptime)</li>
                        </ul>

                        {/* Section 2 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            2. Add-On Services
                        </h2>
                        <p className="text-muted-foreground">
                            The following optional add-ons may be purchased in addition to any subscription
                            plan. Add-ons are billed per location, per month, and apply to each location on
                            the account.
                        </p>

                        <div className="mt-6 overflow-hidden rounded-lg border border-border">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-border bg-muted/50">
                                        <th className="px-4 py-3 font-semibold text-foreground">Add-On</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Description</th>
                                        <th className="px-4 py-3 text-right font-semibold text-foreground">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-foreground">
                                            SMS Notifications
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            Real-time SMS alerts for visitor arrivals and departures
                                        </td>
                                        <td className="px-4 py-3 text-right text-muted-foreground">
                                            $15/location/mo
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-foreground">
                                            Vendor Management
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            Track and manage vendor access, approvals, and compliance
                                        </td>
                                        <td className="px-4 py-3 text-right text-muted-foreground">
                                            $15/location/mo
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-foreground">
                                            Advanced Audit Logs
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            Extended retention, compliance reports, and data export
                                        </td>
                                        <td className="px-4 py-3 text-right text-muted-foreground">
                                            $19/location/mo
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-foreground">
                                            SSO Integration
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            Azure AD, Entra ID, Google, and SAML integration
                                        </td>
                                        <td className="px-4 py-3 text-right text-muted-foreground">
                                            $25/location/mo
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Add-ons may be added or removed at any time. Changes take effect at the start
                            of the next billing cycle. Prorated charges or credits are not issued for
                            mid-cycle changes.
                        </p>

                        {/* Section 3 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            3. Free Trial
                        </h2>
                        <p className="text-muted-foreground">
                            All new accounts are eligible for a one-time, 14-day free trial of their selected
                            plan. During the trial period:
                        </p>
                        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                            <li>
                                A valid payment method is required at registration but will not be charged until
                                the trial period ends.
                            </li>
                            <li>
                                You may cancel at any time before the trial expires to avoid being charged.
                            </li>
                            <li>
                                After the trial, your subscription will automatically convert to a paid
                                subscription at the rate of your selected plan unless cancelled.
                            </li>
                            <li>
                                Trial eligibility is limited to one trial per organization. Creating multiple
                                accounts to obtain additional trials is a violation of these terms.
                            </li>
                        </ul>

                        {/* Section 4 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            4. Billing and Payment
                        </h2>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            4.1 Billing Cycle
                        </h3>
                        <p className="text-muted-foreground">
                            Subscriptions are billed monthly in advance on the same calendar date each month.
                            If your billing date falls on a day that does not exist in a given month (e.g.,
                            the 31st), you will be billed on the last day of that month.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            4.2 Per-Location Pricing
                        </h3>
                        <p className="text-muted-foreground">
                            Each physical location using the Platform is counted as a separate billable unit.
                            Subscription fees and add-on fees are multiplied by the number of locations on
                            your account. You may add or remove locations at any time through your account
                            settings. Added locations are billed on a prorated basis for the remainder of the
                            current billing cycle.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            4.3 Taxes
                        </h3>
                        <p className="text-muted-foreground">
                            All prices are exclusive of applicable sales tax, use tax, VAT, or other
                            transaction taxes. Taxes are calculated automatically at checkout based on your
                            billing address and are the responsibility of the customer.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            4.4 Payment Methods
                        </h3>
                        <p className="text-muted-foreground">
                            We accept major credit cards, debit cards, and select alternative payment methods
                            (including Cash App Pay, Klarna, and Amazon Pay where available) through our
                            payment processor, Stripe. You authorize us to charge your selected payment method
                            on each billing date.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            4.5 Failed Payments
                        </h3>
                        <p className="text-muted-foreground">
                            If a payment fails, we will attempt to process the charge up to three additional
                            times over a 14-day period. If all attempts fail, your account will be downgraded
                            to a restricted mode until payment is resolved. Continued non-payment may result
                            in account suspension or termination.
                        </p>

                        {/* Section 5 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            5. Plan Changes
                        </h2>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">5.1 Upgrades</h3>
                        <p className="text-muted-foreground">
                            You may upgrade your plan at any time. Upgrades take effect immediately, and you
                            will be charged a prorated amount for the remainder of the current billing cycle.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">5.2 Downgrades</h3>
                        <p className="text-muted-foreground">
                            You may downgrade your plan at any time. Downgrades take effect at the start of
                            the next billing cycle. Features exclusive to the higher plan will become
                            unavailable at that time. No refunds or credits are issued for the current cycle.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            5.3 Cancellation
                        </h3>
                        <p className="text-muted-foreground">
                            You may cancel your subscription at any time through your account settings or by
                            contacting support. Cancellation takes effect at the end of the current billing
                            period. You will retain access to the Platform until the end of the paid period.
                            No refunds are provided for partial billing cycles.
                        </p>

                        {/* Section 6 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            6. Service Levels
                        </h2>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">6.1 Uptime</h3>
                        <p className="text-muted-foreground">
                            Gatekeeper.io targets 99.9% monthly uptime for all plans. Enterprise Plan
                            customers receive a contractual SLA with service credits for downtime exceeding
                            the guaranteed threshold.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">6.2 Support</h3>
                        <div className="mt-4 overflow-hidden rounded-lg border border-border">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-border bg-muted/50">
                                        <th className="px-4 py-3 font-semibold text-foreground">Plan</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">Channel</th>
                                        <th className="px-4 py-3 font-semibold text-foreground">
                                            Response Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-foreground">Starter</td>
                                        <td className="px-4 py-3 text-muted-foreground">Email</td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            2 business days
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-foreground">Pro</td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            Email and live chat
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            24 hours
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-foreground">Enterprise</td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            Email, live chat, phone, and dedicated account manager
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            4 hours (critical), 12 hours (standard)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-foreground">
                            6.3 Maintenance
                        </h3>
                        <p className="text-muted-foreground">
                            Scheduled maintenance windows are communicated at least 72 hours in advance via
                            email and the Platform status page. Emergency maintenance may be performed without
                            advance notice when necessary to protect the security or integrity of the
                            Platform.
                        </p>

                        {/* Section 7 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            7. Usage Limits and Fair Use
                        </h2>
                        <p className="text-muted-foreground">
                            All plans include unlimited visitor check-ins. However, the following fair-use
                            policies apply:
                        </p>
                        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                            <li>
                                <strong>Storage:</strong> Photo capture images and visitor data are retained
                                for 12 months on Starter, 24 months on Pro, and indefinitely on Enterprise
                                (or as configured).
                            </li>
                            <li>
                                <strong>Admin Users:</strong> Starter allows 1 admin user, Pro allows up to
                                10, and Enterprise allows unlimited admin users.
                            </li>
                            <li>
                                <strong>Badge Printing:</strong> Available on Pro and Enterprise plans. Badge
                                templates are customizable on Pro and fully white-labeled on Enterprise.
                            </li>
                        </ul>

                        {/* Section 8 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            8. Data Retention and Export
                        </h2>
                        <p className="text-muted-foreground">
                            Upon cancellation or termination, your data will be retained for 30 days during
                            which you may export it via the Platform or by contacting support. After 30 days,
                            all Customer Data will be permanently deleted from our systems. Enterprise Plan
                            customers may negotiate custom data retention terms.
                        </p>

                        {/* Section 9 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            9. Gatekeeper Partner Program
                        </h2>
                        <p className="text-muted-foreground">
                            Your information may be shared with an authorized Gatekeeper Partner in order to
                            provide product expertise, training, or support for Gatekeeper solutions. Partners
                            are bound by confidentiality agreements and may not use your data for purposes
                            outside the scope of providing Gatekeeper-related services. You may opt out of
                            Partner communications at any time by contacting support.
                        </p>

                        {/* Section 10 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            10. Price Changes
                        </h2>
                        <p className="text-muted-foreground">
                            Gatekeeper.io reserves the right to change subscription and add-on pricing at
                            any time. Existing customers will receive at least 30 days written notice (via
                            email) before any price change takes effect on their account. Price changes
                            apply at the start of the next billing cycle following the notice period.
                        </p>

                        {/* Section 11 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            11. Modifications to This Addendum
                        </h2>
                        <p className="text-muted-foreground">
                            We may update this Addendum from time to time to reflect changes to our products,
                            pricing, or business practices. Material changes will be communicated via email or
                            through the Platform at least 30 days before they take effect. Continued use of
                            the Platform after the effective date constitutes acceptance of the updated
                            Addendum.
                        </p>

                        {/* Section 12 */}
                        <h2 className="mt-12 text-2xl font-bold text-foreground">
                            12. Contact Information
                        </h2>
                        <p className="text-muted-foreground">
                            For questions regarding this Addendum or your subscription, please contact us:
                        </p>
                        <address className="mt-4 not-italic text-muted-foreground">
                            Gatekeeper.io<br />
                            Email: legal@gatekeeper.io<br />
                            Support: support@gatekeeper.io<br />
                            Address: 123 Security Lane, Atlanta, GA 30301
                        </address>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
