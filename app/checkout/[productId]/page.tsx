import { notFound, redirect } from "next/navigation"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { CheckoutContent } from "@/components/checkout/checkout-content"
import { PRODUCTS } from "@/lib/products"
import { Shield } from "lucide-react"

interface CheckoutPageProps {
  params: Promise<{
    productId: string
  }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({ params }: CheckoutPageProps) {
  const { productId } = await params
  const product = PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    return { title: "Checkout | Gatekeeper.io" }
  }

  return {
    title: `Subscribe to ${product.name} | Gatekeeper.io`,
    description: `Start your 14-day free trial of Gatekeeper ${product.name}. ${product.description}`,
  }
}

export default async function CheckoutPage({
  params,
  searchParams,
}: CheckoutPageProps) {
  const { productId } = await params
  const resolvedSearchParams = await searchParams
  const product = PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  if (product.id === "enterprise") {
    redirect("mailto:sales@gatekeeper.io")
  }

  // Parse location count from search params (from trial registration)
  const locationsParam = resolvedSearchParams.locations as string | undefined
  let initialLocationCount = 1
  if (locationsParam) {
    const parsed = Number.parseInt(locationsParam, 10)
    if (!Number.isNaN(parsed) && parsed >= 1) {
      initialLocationCount = Math.min(parsed, 100)
    }
  }

  const customerEmail = resolvedSearchParams.email as string | undefined

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary">
        <CheckoutContent
          product={product}
          productId={productId}
          initialLocationCount={initialLocationCount}
          customerEmail={customerEmail}
        />
      </main>
      <Footer />
    </div>
  )
}
