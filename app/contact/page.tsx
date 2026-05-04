'use client'
import { useActionState } from 'react'

async function submitForm(_prev: unknown, formData: FormData) {
  await new Promise(r => setTimeout(r, 900))
  const email = formData.get('email')
  if (!email) return { ok: false, message: 'Please fill in all required fields.' }
  return { ok: true, message: "Thanks! We'll be in touch shortly." }
}

export default function ContactPage() {
  const [state, action, pending] = useActionState(submitForm, null)

  return (
    <>
      {/* ── HERO ── */}
      <div className="page-hero hero-contact">
        <div className="contact-blob-wrap contact-blobs">
          <div className="blob-circle blob-c1" />
          <div className="blob-circle blob-c2" />
          <div className="blob-circle blob-c3" />
        </div>
        <h1>Contact Us</h1>
      </div>

      {/* ── FORM ── */}
      <section className="contact-form-section">
        <div className="contact-form-wrap">
          <div className="contact-intro" data-reveal="up">
            <span className="contact-eyebrow">Hire Voxiant</span>
            <h2>Let&apos;s begin your next project</h2>
            <p>
              Tell us a little about your business and what you&apos;re looking to build —
              we&apos;ll get back to you with a tailored quote and a plan to move forward.
            </p>
          </div>
          {state?.ok ? (
            <div className="form-success">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <p>{state.message}</p>
            </div>
          ) : (
            <form action={action} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <input type="text"  name="first_name" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <input type="text"  name="last_name"  placeholder="Last Name" />
                </div>
              </div>
              <div className="form-group full">
                <input type="text"  name="company" placeholder="Company Name" />
              </div>
              <div className="form-group full">
                <input type="tel"   name="phone"   placeholder="Phone" />
              </div>
              <div className="form-group full">
                <input type="email" name="email"   placeholder="Email" required />
              </div>
              <div className="form-group full">
                <textarea name="message" placeholder="Message" />
              </div>
              <button type="submit" className="contact-submit" disabled={pending}>
                {pending ? 'Sending…' : 'Receive a Quote'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
