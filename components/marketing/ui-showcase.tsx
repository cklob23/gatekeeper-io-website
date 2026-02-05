"use client"

import Image from "next/image"
import { useState } from "react"
import { Monitor, Users, LayoutDashboard } from "lucide-react"

const screenshots = [
  {
    id: "welcome",
    src: "/home.png",
    alt: "Gatekeeper.io Welcome Page - Main entry point with visitor sign-in, pre-registration, and admin access",
    label: "Welcome Portal",
    description: "Clean entry point for visitors, pre-registration, and staff access",
    icon: Monitor,
    route: "home"
  },
  {
    id: "checkin",
    src: "/visitor-checkin.png",
    alt: "Gatekeeper.io Visitor Check-In - Easy sign-in interface for visitors with booking and sign-out options",
    label: "Visitor Check-In",
    description: "Intuitive sign-in flow with booking verification and sign-out",
    icon: Users,
    route: "kiosk"
  },
  {
    id: "dashboard",
    src: "/admin-dashboard.png",
    alt: "Gatekeeper.io Admin Dashboard - Comprehensive overview with location map and visitor metrics",
    label: "Admin Dashboard",
    description: "Real-time metrics, location tracking, and visitor management",
    icon: LayoutDashboard,
    route: "admin/home"
  },
]

export function UIShowcase() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Tab buttons */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-muted p-1.5">
          {screenshots.map((screenshot, index) => {
            const Icon = screenshot.icon
            return (
              <button
                key={screenshot.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{screenshot.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main screenshot display */}
      <div className="relative">
        {/* Glow effect behind the browser */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[80%] w-[80%] rounded-3xl bg-primary/10 blur-3xl" />
        </div>

        {/* Browser frame */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          {/* Browser header */}
          <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 rounded-md bg-background/60 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="text-green-600 mr-1">https://</span>
              app.gatekeeperio.com/{screenshots[activeIndex].route}
            </div>
          </div>

          {/* Screenshot container with transition - using native img for proper sizing */}
          <div className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`transition-all duration-500 ${
                  activeIndex === index
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-auto block"
                  style={{ maxHeight: '600px', objectFit: 'contain', objectPosition: 'top center' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description below */}
        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            {screenshots[activeIndex].description}
          </p>
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="mt-8 flex justify-center gap-4">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.id}
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-lg border-2 transition-all ${
              activeIndex === index
                ? "border-primary ring-2 ring-primary/20"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="relative h-16 w-28 sm:h-20 sm:w-36 bg-slate-50 overflow-hidden">
              <img
                src={screenshot.src}
                alt={screenshot.label}
                className="w-full h-full object-cover object-top"
              />
              {activeIndex !== index && (
                <div className="absolute inset-0 bg-background/40 transition-opacity group-hover:opacity-0" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
