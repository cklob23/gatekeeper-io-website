"use server"

// Web3Forms - Free email solution
// Sign up at https://web3forms.com to get your access key
// Add your access key to environment variables as WEB3FORMS_KEY (server-side only)

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"

export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
  replyto?: string
}

export interface EmailResponse {
  success: boolean
  message: string
}

export async function sendEmail(data: EmailData): Promise<EmailResponse> {
  const accessKey = process.env.WEB3FORMS_KEY

  if (!accessKey) {
    console.error("[v0] Web3Forms access key not configured")
    return { success: false, message: "Email service not configured. Please contact support." }
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: data.name,
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        replyto: data.replyto || data.email,
      }),
    })

    const result = await response.json()

    if (result.success) {
      return { success: true, message: "Email sent successfully" }
    } else {
      return { success: false, message: result.message || "Failed to send email" }
    }
  } catch (error) {
    console.error("[v0] Email error:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}
