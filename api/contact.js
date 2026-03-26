export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  try {
    const {
      fullName,
      email,
      helpType,
      websiteStatus,
      budgetRange,
      timeline,
      projectDetails,
      companyName,
    } = req.body || {}

    if (companyName) {
      return res.status(200).json({ ok: true })
    }

    if (!fullName || !email || !helpType || !projectDetails) {
      return res.status(400).json({ error: 'Please complete all required fields.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL
    const autoReplyFrom = process.env.CONTACT_AUTOREPLY_FROM_EMAIL || fromEmail

    if (!resendApiKey || !toEmail || !fromEmail) {
      return res.status(500).json({ error: 'Missing email environment variables.' })
    }

    const inquiryResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New inquiry from ${fullName} — Axiom Digital Studio`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
            <h2>New Axiom Contact Inquiry</h2>
            <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Help Type:</strong> ${escapeHtml(helpType)}</p>
            <p><strong>Website Status:</strong> ${escapeHtml(websiteStatus || 'Not provided')}</p>
            <p><strong>Budget Range:</strong> ${escapeHtml(budgetRange || 'Not provided')}</p>
            <p><strong>Timeline:</strong> ${escapeHtml(timeline || 'Not provided')}</p>
            <p><strong>Project Details:</strong></p>
            <div style="white-space: pre-wrap; padding: 12px; border: 1px solid #e5e7eb; border-radius: 10px;">
              ${escapeHtml(projectDetails)}
            </div>
          </div>
        `,
        text: `
New Axiom Contact Inquiry

Full Name: ${fullName}
Email: ${email}
Help Type: ${helpType}
Website Status: ${websiteStatus || 'Not provided'}
Budget Range: ${budgetRange || 'Not provided'}
Timeline: ${timeline || 'Not provided'}

Project Details:
${projectDetails}
        `.trim(),
      }),
    })

    if (!inquiryResponse.ok) {
      const resendError = await inquiryResponse.text()
      return res.status(500).json({ error: `Failed to send inquiry email. ${resendError}` })
    }

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: autoReplyFrom,
        to: [email],
        subject: 'Thanks for reaching out to Axiom Digital Studio',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
            <p>Hi ${escapeHtml(firstName(fullName))},</p>
            <p>
              Thanks for reaching out to Axiom Digital Studio. I received your message
              and appreciate your interest.
            </p>
            <p>
              I’ll review your inquiry and follow up by email as soon as I can.
            </p>
            <p>Best,<br />Axiom Digital Studio</p>
          </div>
        `,
        text: `Hi ${firstName(fullName)},

Thanks for reaching out to Axiom Digital Studio. I received your message and appreciate your interest.

I’ll review your inquiry and follow up by email as soon as I can.

Best,
Axiom Digital Studio`,
      }),
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    return res.status(500).json({ error: 'Unexpected server error while sending your message.' })
  }
}

function firstName(fullName) {
  return fullName.trim().split(/\s+/)[0] || 'there'
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}