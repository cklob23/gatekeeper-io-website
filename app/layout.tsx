import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _dmSans = DM_Sans({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://gatekeeper.io"
const SITE_NAME = "Gatekeeper.io"
const SITE_DESCRIPTION =
  "Secure visitor and access management platform built for organizations that value accountability, stewardship, and compliance. Real-time tracking, digital check-in, badge printing, and audit logs. Trusted by churches, schools, and businesses."

export const metadata: Metadata = {
  // -- Core --
  title: {
    default: "Gatekeeper.io | Secure Visitor & Access Management",
    template: "%s | Gatekeeper.io",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",

  // -- Canonical & Alternate --
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  // -- Keywords --
  keywords: [
    "visitor management system",
    "visitor management software",
    "access management",
    "visitor check-in",
    "visitor tracking",
    "visitor badge printing",
    "digital sign-in",
    "security management",
    "guest management",
    "church visitor management",
    "school visitor management",
    "corporate visitor management",
    "compliance management",
    "audit logs",
    "real-time tracking",
    "location monitoring",
    "SaaS",
    "Gatekeeper.io",
    "visitor management",
    "visitor sign-in",
    "visitor login"
  ],

  // -- Authors / Creator --
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // -- Robots --
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // -- Open Graph --
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Gatekeeper.io | Secure Visitor & Access Management",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gatekeeper.io - Secure Visitor & Access Management Platform",
        type: "image/jpeg",
      },
    ],
  },

  // -- Twitter --
  twitter: {
    card: "summary_large_image",
    title: "Gatekeeper.io | Secure Visitor & Access Management",
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@gatekeeperio",
  },

  // -- Icons --
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },

  // -- Manifest --
  manifest: "/manifest.webmanifest",

  // -- Category --
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1565C0" },
    { media: "(prefers-color-scheme: dark)", color: "#0d47a1" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    applicationCategory: "SecurityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "39",
      highPrice: "99",
      offerCount: "3",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
  }

  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
