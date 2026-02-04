"use server"

import nodemailer from "nodemailer"

interface EmailData {
  to: string
  subject: string
  text: string
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
      text: data.text,
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
