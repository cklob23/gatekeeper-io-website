import Image from "next/image"

const screenshots = [
  {
    src: "/home.png",
    alt: "Gatekeeper.io Welcome Page - Main entry point with visitor sign-in, pre-registration, and admin access",
    label: "Welcome Portal",
    rotation: "-6deg",
    zIndex: 10,
    translateY: "0px",
  },
  {
    src: "/visitor-checkin.png",
    alt: "Gatekeeper.io Visitor Check-In - Easy sign-in interface for visitors with booking and sign-out options",
    label: "Visitor Check-In",
    rotation: "0deg",
    zIndex: 20,
    translateY: "-20px",
  },
  {
    src: "/admin-dashboard.png",
    alt: "Gatekeeper.io Admin Dashboard - Comprehensive overview with location map and visitor metrics",
    label: "Admin Dashboard",
    rotation: "6deg",
    zIndex: 10,
    translateY: "0px",
  },
]

export function UIShowcase() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Desktop: Overlapping cards */}
      <div className="hidden lg:flex items-center justify-center gap-[-80px]">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot.label}
            className="relative transition-all duration-300 hover:scale-105 hover:z-30"
            style={{
              transform: `rotate(${screenshot.rotation}) translateY(${screenshot.translateY})`,
              zIndex: screenshot.zIndex,
              marginLeft: index === 0 ? 0 : "-15px",
            }}
          >
            {/* Browser frame */}
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              {/* Browser header */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  app.gatekeeperio.com
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative aspect-[16/10] w-[580px]">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            {/* Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-lg">
              {screenshot.label}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet: Stacked cards */}
      <div className="flex flex-col items-center gap-8 lg:hidden">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.label}
            className="relative w-full max-w-md"
          >
            {/* Browser frame */}
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
              {/* Browser header */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  app.gatekeeperio.com
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            {/* Label */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-lg">
              {screenshot.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
