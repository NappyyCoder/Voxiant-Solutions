'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { submitContactForm, type ContactResult } from './actions'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function ContactPage() {
  const [state, action, pending] = useActionState<ContactResult | null, FormData>(
    submitContactForm,
    null
  )

  return (
    <>
      <div className="page-hero hero-contact">
        <div className="contact-blob-wrap contact-blobs" aria-hidden="true">
          <div className="blob-circle blob-c1" />
          <div className="blob-circle blob-c2" />
          <div className="blob-circle blob-c3" />
          <div className="blob-circle blob-c4" />
          <div className="blob-circle blob-c5" />
        </div>
        <h1 data-reveal="up">Contact Us</h1>
      </div>

      <section className="contact-form-section">
        <div className="contact-form-wrap">
          <div className="contact-intro">
            <span className="contact-eyebrow">Hire Voxiant</span>
            <h2>Let&apos;s begin your next project</h2>
            <p>
              Tell us a little about your business and what you&apos;re looking to build, and we&apos;ll reply with
              a quote and next steps.
            </p>
          </div>

          <div className="contact-quick-links" role="navigation" aria-label="Quick links">
            <Link href="/solutions" className="contact-chip">
              Explore solutions
              <ArrowIcon />
            </Link>
            <Link href="/our-process" className="contact-chip">
              See our process
              <ArrowIcon />
            </Link>
          </div>

          {state?.ok ? (
            <div className="form-success">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <p>{state.message}</p>
            </div>
          ) : (
            <form action={action} noValidate className="contact-form-fields">
              {state?.ok === false ? (
                <p className="contact-form-alert" role="alert">
                  {state.message}
                </p>
              ) : null}
              {/* Honeypot — hidden from users, not from bots */}
              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="c-website">Website</label>
                <input id="c-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="form-row">
                <div className="form-group contact-field">
                  <label htmlFor="c-first">First name</label>
                  <input id="c-first" type="text" name="first_name" placeholder="Ada" autoComplete="given-name" />
                </div>
                <div className="form-group contact-field">
                  <label htmlFor="c-last">Last name</label>
                  <input id="c-last" type="text" name="last_name" placeholder="Lovelace" autoComplete="family-name" />
                </div>
              </div>
              <div className="form-group full contact-field">
                <label htmlFor="c-company">Company</label>
                <input id="c-company" type="text" name="company" placeholder="Company name" autoComplete="organization" />
              </div>
              <div className="form-group full contact-field">
                <label htmlFor="c-phone">Phone</label>
                <input id="c-phone" type="tel" name="phone" placeholder="(555) 000-0000" autoComplete="tel" />
              </div>
              <div className="form-group full contact-field">
                <label htmlFor="c-email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="c-email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                  aria-required="true"
                />
              </div>
              <div className="form-group full contact-field">
                <label htmlFor="c-message">Project details</label>
                <textarea id="c-message" name="message" placeholder="Goals, timelines, links, anything that helps." />
              </div>
              <button type="submit" className="contact-submit" disabled={pending}>
                {pending ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
