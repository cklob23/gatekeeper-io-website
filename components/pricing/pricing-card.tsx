import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  product: Product
}

export function PricingCard({ product }: PricingCardProps) {
  const isEnterprise = product.id === "enterprise"
  
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-8",
        product.popular
          ? "border-primary shadow-lg ring-2 ring-primary"
          : "border-border"
      )}
    >
      {product.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-foreground">{product.priceDisplay}</span>
          <span className="ml-1 text-muted-foreground">{product.billingPeriod}</span>
        </div>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={product.popular ? "default" : "outline"}
        className="w-full"
        size="lg"
      >
        {isEnterprise ? (
          <Link href="mailto:support@gatekeeperio.com">{product.cta}</Link>
        ) : (
          <Link href={`/trial?plan=${product.id}`}>{product.cta}</Link>
        )}
      </Button>
    </div>
  )
}
