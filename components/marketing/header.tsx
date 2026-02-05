"use client"

import React from "react"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // Only handle scroll on the home page
    if (pathname !== "/") {
      return // Let the link navigate normally
    }
    
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold text-foreground">Gatekeeper.io</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a 
            href={pathname === "/" ? "#features" : "/#features"} 
            onClick={(e) => scrollToSection(e, "features")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <Link href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
          <a 
            href={pathname === "/" ? "#testimonials" : "/#testimonials"} 
            onClick={(e) => scrollToSection(e, "testimonials")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </a>
          <Link href="/demo" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Schedule Demo
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/demo">Request a Demo</Link>
          </Button>
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
            <a 
              href={pathname === "/" ? "#features" : "/#features"} 
              onClick={(e) => scrollToSection(e, "features")}
              className="text-sm font-medium text-muted-foreground"
            >
              Features
            </a>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <a 
              href={pathname === "/" ? "#testimonials" : "/#testimonials"} 
              onClick={(e) => scrollToSection(e, "testimonials")}
              className="text-sm font-medium text-muted-foreground"
            >
              Testimonials
            </a>
            <Link href="/demo" className="text-sm font-medium text-muted-foreground">
              Schedule Demo
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/demo">Sign In</Link>
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
