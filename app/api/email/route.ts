import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { to, subject, html, replyTo } = body

    if (!to || !subject || !html) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: to, subject, html" },
        { status: 400 }
      )
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.log("[Email API] SMTP not configured, logging email instead:")
      console.log(`  To: ${to}`)
      console.log(`  Subject: ${subject}`)
      return NextResponse.json({ 
        success: true, 
        message: "SMTP not configured - email logged only",
      })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number.parseInt(SMTP_PORT || "587", 10),
      secure: Number.parseInt(SMTP_PORT || "587", 10) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to,
      subject,
      html,
      replyTo,
    })

    console.log(`[Email API] Email sent to ${to}`)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("[Email API] Error sending email:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
