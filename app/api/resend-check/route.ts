import {
  getFromAddress,
  getResendApiKey,
  getToAddress,
} from '@/lib/contact-email'
import { Resend } from 'resend'

export async function GET() {
  const apiKey = getResendApiKey()
  const from = getFromAddress()
  const to = getToAddress()

  if (!apiKey) {
    return Response.json({
      ok: false,
      apiKeyConfigured: false,
      from,
      to,
      error: 'RESEND_API_KEY is not configured on this deployment.',
    })
  }

  const resend = new Resend(apiKey)
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject: 'Voxiant Resend configuration check',
    html: '<p>If you received this, Resend is configured correctly on this deployment.</p>',
    text: 'If you received this, Resend is configured correctly on this deployment.',
  })

  if (error) {
    return Response.json({
      ok: false,
      apiKeyConfigured: true,
      apiKeyPrefix: `${apiKey.slice(0, 6)}...`,
      from,
      to,
      error: error.message,
    })
  }

  return Response.json({
    ok: true,
    apiKeyConfigured: true,
    apiKeyPrefix: `${apiKey.slice(0, 6)}...`,
    from,
    to,
    emailId: data?.id,
  })
}
