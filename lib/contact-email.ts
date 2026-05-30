import { Resend } from 'resend'
import { readEnv } from '@/lib/env'

export type ContactFormPayload = {
  firstName: string
  lastName: string
  company: string
  phone: string
  email: string
  message: string
}

const DEFAULT_TO = 'voxiantsolutions@gmail.com'

export function getToAddress(): string {
  return readEnv('CONTACT_TO_EMAIL') || DEFAULT_TO
}

export function getFromAddress(): string {
  return readEnv('RESEND_FROM_EMAIL') || 'Voxiant Solutions <onboarding@resend.dev>'
}

export function getResendApiKey(): string | undefined {
  return readEnv('RESEND_API_KEY')
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildEmailHtml(data: ContactFormPayload): string {
  const rows = [
    ['Name', [data.firstName, data.lastName].filter(Boolean).join(' ') || '—'],
    ['Email', data.email],
    ['Company', data.company || '—'],
    ['Phone', data.phone || '—'],
    ['Message', data.message || '—'],
  ] as const

  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#063445;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#333;">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`
    )
    .join('')

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;background:#f3fbfd;padding:24px;">
<table style="max-width:560px;margin:0 auto;background:#fff;border-radius:8px;border:1px solid #e4eef4;" cellpadding="0" cellspacing="0">
<tr><td style="padding:20px 24px;background:#002d42;color:#fff;font-size:18px;font-weight:700;">New contact form submission</td></tr>
<tr><td style="padding:8px 12px 20px;"><table width="100%" cellpadding="0" cellspacing="0">${body}</table></td></tr>
</table>
<p style="font-size:12px;color:#666;margin-top:16px;">Sent from voxiant-solutions.vercel.app contact form</p>
</body></html>`
}

function buildEmailText(data: ContactFormPayload): string {
  const name = [data.firstName, data.lastName].filter(Boolean).join(' ') || '—'
  return [
    'New contact form submission',
    '',
    `Name: ${name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || '—'}`,
    `Phone: ${data.phone || '—'}`,
    '',
    'Message:',
    data.message || '—',
  ].join('\n')
}

export function isValidContactEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function sendContactEmail(data: ContactFormPayload): Promise<void> {
  const apiKey = getResendApiKey()
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  const from = getFromAddress()
  const to = getToAddress()
  const resend = new Resend(apiKey)
  const name = [data.firstName, data.lastName].filter(Boolean).join(' ').trim()
  const subject = name
    ? `Voxiant inquiry from ${name}`
    : `Voxiant inquiry from ${data.email}`

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject,
    html: buildEmailHtml(data),
    text: buildEmailText(data),
  })

  if (error) {
    console.error('[contact-email] Resend rejected send', {
      from,
      to,
      replyTo: data.email,
      message: error.message,
    })
    throw new Error(error.message)
  }
}
