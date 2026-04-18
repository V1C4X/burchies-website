import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateEnquiry, isValid, type CateringEnquiry } from '@/lib/enquiry'

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')

function esc(str: string): string {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: NextRequest) {
  let data: CateringEnquiry
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const errors = validateEnquiry(data)
  if (!isValid(errors)) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  const to = process.env.CATERING_TO_EMAIL
  if (!to) {
    console.error('CATERING_TO_EMAIL is not set')
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  }

  const from = process.env.CATERING_FROM_EMAIL || 'Burchie\'s <onboarding@resend.dev>'

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New catering enquiry — ${esc(data.name)} · ${esc(data.eventDate)}`,
      html: `
        <h2 style="font-family:system-ui,sans-serif;margin-bottom:0.5em;">New catering enquiry</h2>
        <table style="font-family:system-ui,sans-serif;border-collapse:collapse;">
          <tr><td style="padding:4px 12px 4px 0;color:#777;">Name</td><td><strong>${esc(data.name)}</strong></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#777;">Email</td><td><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#777;">Phone</td><td>${esc(data.phone)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#777;">Event date</td><td>${esc(data.eventDate)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#777;">Event type</td><td>${esc(data.eventType)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#777;">Guests</td><td>${esc(data.guests)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#777;">Location</td><td>${esc(data.location)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#777;">Sauces</td><td>${data.variants.map(esc).join(', ') || '(none)'}</td></tr>
        </table>
        <h3 style="font-family:system-ui,sans-serif;margin-top:1.5em;margin-bottom:0.3em;">Message</h3>
        <p style="font-family:system-ui,sans-serif;white-space:pre-wrap;">${esc(data.message || '(none)')}</p>
        <hr style="margin:2em 0;border:none;border-top:1px solid #eee;">
        <p style="font-family:system-ui,sans-serif;color:#999;font-size:12px;">Sent from burchies.vercel.app · Reply-to is set to the sender.</p>
      `,
    })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
