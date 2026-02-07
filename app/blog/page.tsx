import Link from "next/link"
import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const posts = [
  {
    slug: "visitor-management-best-practices-2026",
    title: "Visitor Management Best Practices for 2026",
    description: "Learn the latest strategies for creating secure yet welcoming visitor experiences at your organization.",
    category: "Best Practices",
    date: "January 15, 2026",
    readTime: "5 min read"
  },
  {
    slug: "church-security-guide",
    title: "The Complete Guide to Church Security",
    description: "How churches can balance hospitality with safety using modern visitor management tools.",
    category: "Industry Guide",
    date: "January 10, 2026",
    readTime: "8 min read"
  },
  {
    slug: "compliance-visitor-logs",
    title: "Meeting Compliance Requirements with Digital Visitor Logs",
    description: "Understanding regulatory requirements and how digital visitor management helps you stay compliant.",
    category: "Compliance",
    date: "January 5, 2026",
    readTime: "6 min read"
  },
  {
    slug: "school-visitor-management",
    title: "Protecting Students: Visitor Management for Schools",
    description: "Essential features and practices for managing visitors in K-12 schools and educational institutions.",
    category: "Industry Guide",
    date: "December 28, 2025",
    readTime: "7 min read"
  },
  {
    slug: "replacing-paper-sign-in",
    title: "Why It is Time to Replace Your Paper Sign-In Sheet",
    description: "The security risks of paper visitor logs and how digital solutions address them.",
    category: "Security",
    date: "December 20, 2025",
    readTime: "4 min read"
  },
  {
    slug: "manufacturing-access-control",
    title: "Access Control in Manufacturing Facilities",
    description: "How manufacturers can track contractors, vendors, and visitors while maintaining productivity.",
    category: "Industry Guide",
    date: "December 15, 2025",
    readTime: "6 min read"
  }
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Gatekeeper.io Blog
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Insights, guides, and best practices for visitor management and organizational security.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} className="flex flex-col transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="mt-2 text-xl">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">Stay Updated</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our newsletter for the latest insights on visitor management and security.
            </p>
            <form className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
