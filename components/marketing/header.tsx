"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold text-foreground">Gatekeeper.io</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Testimonials
          </Link>
          <Link href="https://talus-sign-in-app.onrender.com" target="_blank" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Demo
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button asChild>
            <Link href="/pricing">Start Free Trial</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 p-4">
            <Link href="#features" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="https://talus-sign-in-app.onrender.com" target="_blank" className="text-sm font-medium text-muted-foreground">
              Demo
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="https://talus-sign-in-app.onrender.com" target="_blank">Sign In</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/pricing">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
