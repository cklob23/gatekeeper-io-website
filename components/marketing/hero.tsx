import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              Security-First Access Management
            </div>
          </div>
          
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Protect Your People.{" "}
            <span className="text-primary">Steward Your Space.</span>
          </h1>
          
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Gatekeeper is a secure visitor and access management platform built for organizations that value accountability, stewardship, and compliance. Know who enters your space, when, and why.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/trial">Start 14-Day Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="/demo">Schedule a Demo</Link>
            </Button>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required
          </p>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              "Complete Audit Trail",
              "Custom Branding",
              "SSO Integration",
              "Compliance Ready"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
