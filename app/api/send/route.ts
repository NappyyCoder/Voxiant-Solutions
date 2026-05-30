import { getFromAddress, getResendApiKey, getToAddress } from '@/lib/contact-email'
import { Resend } from 'resend'

export async function POST() {
  const apiKey = getResendApiKey()
  if (!apiKey) {
    return Response.json(
      { error: 'RESEND_API_KEY is not configured' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  const { data, error } = await resend.emails.send({
    from: getFromAddress(),
    to: getToAddress(),
    subject: 'Hello World',
    html: '<p>Congrats on sending your first email!</p>',
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ data })
}
