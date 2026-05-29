'use server'

import { isValidContactEmail, sendContactEmail } from '@/lib/contact-email'

export type ContactResult = { ok: boolean; message: string }

function field(formData: FormData, name: string): string {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

export async function submitContactForm(
  _prev: ContactResult | null,
  formData: FormData
): Promise<ContactResult> {
  // Honeypot — bots that fill hidden fields get a silent success
  if (field(formData, 'website')) {
    return { ok: true, message: "Thanks! We'll be in touch shortly." }
  }

  const email = field(formData, 'email')
  if (!email) {
    return { ok: false, message: 'Please add your email so we can reply.' }
  }
  if (!isValidContactEmail(email)) {
    return {
      ok: false,
      message: "That email doesn't look quite right; please double-check it.",
    }
  }

  const payload = {
    firstName: field(formData, 'first_name'),
    lastName: field(formData, 'last_name'),
    company: field(formData, 'company'),
    phone: field(formData, 'phone'),
    email,
    message: field(formData, 'message'),
  }

  try {
    await sendContactEmail(payload)
    return { ok: true, message: "Thanks! We'll be in touch shortly." }
  } catch (err) {
    console.error('[contact]', err)
    const configured = Boolean(process.env.RESEND_API_KEY?.trim())
    if (!configured) {
      return {
        ok: false,
        message:
          'Email is not configured yet. Please email us directly at voxiantsolutions@gmail.com.',
      }
    }
    return {
      ok: false,
      message:
        'We could not send your message right now. Please try again or email voxiantsolutions@gmail.com.',
    }
  }
}
