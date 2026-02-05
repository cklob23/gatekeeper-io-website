import { generateWelcomeEmailHtml } from "@/lib/email-templates"

interface EmailData {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error("[v0] Email request error:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}

// Send welcome email after successful checkout (for use in API routes/webhooks)
export async function sendWelcomeEmail(
  customerEmail: string,
  customerName: string,
  planName: string,
  baseUrl: string
): Promise<{ success: boolean; message: string }> {
  const html = generateWelcomeEmailHtml(customerName, planName)

  const response = await fetch(`${baseUrl}/api/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: customerEmail,
      subject: "Welcome to Gatekeeper.io!",
      html,
    }),
  })

  return response.json()
}
