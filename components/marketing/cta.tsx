import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Shield className="mx-auto h-12 w-12 text-primary-foreground/80" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Secure Your Space?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            Join organizations that trust Gatekeeper.io for visitor management. Start your free trial today with no credit card required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/trial">Start 14-Day Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent">
              <Link href="/demo">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
