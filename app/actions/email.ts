"use server"

import nodemailer from "nodemailer"
import { generateWelcomeEmailHtml } from "@/lib/email-template"

interface EmailData {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[v0] Missing SMTP configuration")
    return {
      success: false,
      message: "Email service is not configured. Please contact support.",
    }
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: data.to,
      subject: data.subject,
      html: data.html,
      replyTo: data.replyTo,
    })

    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("[v0] Email send error:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}

// Send welcome email after successful checkout
export async function sendWelcomeEmail(
  customerEmail: string,
  customerName: string,
  planName: string
): Promise<{ success: boolean; message: string }> {
  const html = generateWelcomeEmailHtml(customerName, planName)

  return sendEmail({
    to: customerEmail,
    subject: "Welcome to Gatekeeper.io!",
    html,
  })
}
