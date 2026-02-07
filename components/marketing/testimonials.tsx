import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Gatekeeper.io transformed how we manage visitor check-in at our church. Parents feel safer knowing we have a proper system tracking who enters our children's areas.",
    author: "Sarah Mitchell",
    role: "Children's Ministry Director",
    organization: "Grace Community Church"
  },
  {
    quote: "We switched from paper sign-in sheets and the difference is night and day. The audit trail alone has saved us countless hours during compliance reviews.",
    author: "Michael Chen",
    role: "Operations Manager",
    organization: "Precision Manufacturing Co."
  },
  {
    quote: "Finally, a visitor management system that doesn't cost a fortune. Gatekeeper.io gives us enterprise features at a price that makes sense for our school.",
    author: "Dr. Amanda Rodriguez",
    role: "Principal",
    organization: "Westside Academy"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Organizations Like Yours
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            See why churches, schools, and businesses choose Gatekeeper.io for their visitor management needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-6">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
