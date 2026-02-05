import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface EmailRequestBody {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function POST(request: NextRequest) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[v0] Missing SMTP configuration")
    return NextResponse.json(
      { success: false, message: "Email service is not configured. Please contact support." },
      { status: 500 }
    )
  }

  let body: EmailRequestBody

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 }
    )
  }

  const { to, subject, html, replyTo } = body

  if (!to || !subject || !html) {
    return NextResponse.json(
      { success: false, message: "Missing required fields: to, subject, html" },
      { status: 400 }
    )
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
      to,
      subject,
      html,
      replyTo,
    })

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("[v0] Email send error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
