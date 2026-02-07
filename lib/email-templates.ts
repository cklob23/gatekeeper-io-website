const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://gatekeeperio.com"

// Shared email wrapper with header and footer
function emailWrapper(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gatekeeper.io</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header with Logo -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px 40px 20px 40px; text-align: left;">
              <a href="${BASE_URL}" style="text-decoration: none; display: inline-block;">
                <table role="presentation" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="vertical-align: middle;">
                      <img src="${BASE_URL}/icon.png" alt="Gatekeeper.io" width="32" height="32" style="display: block;" />
                    </td>
                    <td style="vertical-align: middle; padding-left: 12px;">
                      <span style="font-size: 24px; font-weight: 700; color: #1565C0;">Gatekeeper.io</span>
                    </td>
                  </tr>
                </table>
              </a>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 20px 40px 40px 40px;">
              ${content}
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1e293b; padding: 30px 40px; text-align: center;">
              <a href="${BASE_URL}" style="text-decoration: none; display: inline-block;">
                <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto 20px auto;">
                  <tr>
                    <td style="vertical-align: middle;">
                      <img src="${BASE_URL}/icon.png" alt="Gatekeeper.io" width="24" height="24" style="display: block;" />
                    </td>
                    <td style="vertical-align: middle; padding-left: 8px;">
                      <span style="font-size: 16px; font-weight: 600; color: #ffffff;">Gatekeeper.io</span>
                    </td>
                  </tr>
                </table>
              </a>
              
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #94a3b8;">
                Secure Visitor Management
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 12px; color: #64748b;">
                This email was sent by Gatekeeper.io<br>
                237 Security Lane, Suite 100<br>
                Atlanta, GA 30301, USA
              </p>
              
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                <a href="${BASE_URL}/privacy" style="color: #94a3b8; text-decoration: none;">Privacy Policy</a>
                &nbsp;&bull;&nbsp;
                <a href="${BASE_URL}/terms" style="color: #94a3b8; text-decoration: none;">Terms of Service</a>
              </p>
              
              <p style="margin: 20px 0 0 0; font-size: 12px; color: #64748b;">
                &copy; ${new Date().getFullYear()} Gatekeeper.io. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

// Welcome email for new customers after checkout
export function generateWelcomeEmailHtml(customerName: string, planName: string): string {
  const content = `
    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 700; color: #1565C0;">
      Welcome to Gatekeeper.io
    </h1>
    
    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
      Hi${customerName ? ` ${customerName}` : ""},
    </p>
    
    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
      We're glad to have you aboard! Your <strong>${planName}</strong> subscription is now active, and your 14-day free trial has begun.
    </p>
    
    <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #374151;">
      You'll receive another email shortly with the link to access your free trial instance of the Gatekeeper.io app, along with instructions to get started.
    </p>
    
    <h2 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #111827;">
      What's next?
    </h2>
    
    <ul style="margin: 0 0 30px 0; padding-left: 20px; font-size: 16px; line-height: 1.8; color: #374151;">
      <li>Watch for your instance access email (arriving shortly)</li>
      <li>Set up your organization and locations</li>
      <li>Invite your team members</li>
      <li>Configure your visitor workflows</li>
    </ul>
    
    <h2 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #111827;">
      Questions?
    </h2>
    
    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
      Our support team is here to help! You can reach us at:
    </p>
    
    <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.6; color: #374151;">
      Email: <a href="mailto:support@gatekeeperio.com" style="color: #1565C0; text-decoration: none;">support@gatekeeperio.com</a>
    </p>
    
    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #374151;">
      Or visit our <a href="${BASE_URL}/contact" style="color: #1565C0; text-decoration: none;">Contact Page</a>
    </p>
  `
  return emailWrapper(content)
}

// Demo request email
export function generateDemoRequestEmailHtml(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  companyName: string
  organizationType: string
  companySize: string
  message?: string
}): string {
  const content = `
    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 700; color: #1565C0;">
      New Demo Request
    </h1>
    
    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
      A new demo request has been submitted through the website.
    </p>
    
    <table role="presentation" cellspacing="0" cellpadding="0" style="width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Name</strong>
        </td>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.firstName} ${data.lastName}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Email</strong>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <a href="mailto:${data.email}" style="color: #1565C0; text-decoration: none;">${data.email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Phone</strong>
        </td>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.phone || "Not provided"}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Company</strong>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.companyName}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Organization Type</strong>
        </td>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.organizationType}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Company Size</strong>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.companySize}
        </td>
      </tr>
    </table>
    
    ${data.message ? `
    <h2 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #111827;">
      Additional Notes
    </h2>
    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #374151; padding: 16px; background-color: #f8fafc; border-radius: 8px;">
      ${data.message}
    </p>
    ` : ''}
  `
  return emailWrapper(content)
}

// Contact form email
export function generateContactEmailHtml(data: {
  firstName: string
  lastName: string
  email: string
  company?: string
  subject: string
  message: string
}): string {
  const content = `
    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 700; color: #1565C0;">
      New Contact Form Submission
    </h1>
    
    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
      A new message has been submitted through the contact form.
    </p>
    
    <table role="presentation" cellspacing="0" cellpadding="0" style="width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Name</strong>
        </td>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.firstName} ${data.lastName}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Email</strong>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <a href="mailto:${data.email}" style="color: #1565C0; text-decoration: none;">${data.email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Company</strong>
        </td>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.company || "Not provided"}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Subject</strong>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.subject}
        </td>
      </tr>
    </table>
    
    <h2 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #111827;">
      Message
    </h2>
    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #374151; padding: 16px; background-color: #f8fafc; border-radius: 8px; white-space: pre-wrap;">
      ${data.message}
    </p>
  `
  return emailWrapper(content)
}

// Contact form email
export function generatTrialRequestEmailHtml(data: {
    email: string
    marketingConsent?: boolean
    plan: string
}): string {
    const content = `
    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 700; color: #1565C0;">
      New Trial Interest Submission
    </h1>
    
    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
      A new trial interest has been submitted through the trial interest form.
    </p>
    
    <table role="presentation" cellspacing="0" cellpadding="0" style="width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Email</strong>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <a href="mailto:${data.email}" style="color: #1565C0; text-decoration: none;">${data.email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">User interested in receiving marketing communications?</strong>
        </td>
        <td style="padding: 12px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.marketingConsent || "Not provided"}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          <strong style="color: #374151;">Potential Plan</strong>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #374151;">
          ${data.plan}
        </td>
      </tr>
    </table>
  `
    return emailWrapper(content)
}

