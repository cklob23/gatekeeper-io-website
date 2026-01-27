// Web3Forms - Free frontend email solution
// Sign up at https://web3forms.com to get your access key
// Add your access key to environment variables as NEXT_PUBLIC_WEB3FORMS_KEY

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"

export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
  // Additional fields will be included in the email body
  [key: string]: string | undefined
}

export interface EmailResponse {
  success: boolean
  message: string
}

export async function sendEmail(data: EmailData): Promise<EmailResponse> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

  if (!accessKey) {
    console.error("[v0] Web3Forms access key not configured")
    // In development, simulate success
    if (process.env.NODE_ENV === "development") {
      console.log("[v0] Email data (dev mode):", data)
      return { success: true, message: "Email simulated in development" }
    }
    return { success: false, message: "Email service not configured" }
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
        ...data,
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

// Helper to format form data into a readable email message
export function formatEmailBody(fields: Record<string, string | undefined>): string {
  return Object.entries(fields)
    .filter(([, value]) => value && value.trim() !== "")
    .map(([key, value]) => {
      // Convert camelCase to Title Case
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim()
      return `${label}: ${value}`
    })
    .join("\n")
}
