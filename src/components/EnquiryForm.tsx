'use client'
import { useState } from 'react'
import {
  validateEnquiry,
  isValid,
  EVENT_TYPES,
  VARIANT_OPTIONS,
  type CateringEnquiry,
  type EnquiryErrors,
} from '@/lib/enquiry'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function EnquiryForm() {
  const [form, setForm] = useState<CateringEnquiry>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guests: '',
    location: '',
    variants: [],
    message: '',
  })
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  function toggleVariant(value: string) {
    setForm((f) => ({
      ...f,
      variants: f.variants.includes(value)
        ? f.variants.filter((v) => v !== value)
        : [...f.variants, value],
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validateEnquiry(form)
    if (!isValid(errs)) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('submitting')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border-b border-charcoal/20 bg-transparent pb-2 pt-1 text-base text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-ember transition-colors duration-200'
  const labelClass =
    'block text-[10px] tracking-widest uppercase text-ember font-semibold mb-1'
  const errorClass = 'text-[11px] text-ember mt-1 font-semibold'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 px-8 text-center bg-bone rounded-sm border border-charcoal/10">
        <div className="w-14 h-14 rounded-full bg-ember/10 flex items-center justify-center text-3xl">
          🍗
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
          Got it.
        </h3>
        <p className="text-base text-charcoal/70 max-w-md leading-relaxed">
          Thomas will swing back to you soon — probably after the lunch rush. Check
          your inbox (and the spam folder, just in case).
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="f-name" className={labelClass}>
            What do we yell when it&rsquo;s ready?
          </label>
          <input
            id="f-name"
            className={inputClass}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="f-email" className={labelClass}>
            Email
          </label>
          <input
            id="f-email"
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="f-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="f-phone"
            type="tel"
            className={inputClass}
            placeholder="021 123 4567"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="f-date" className={labelClass}>
            Event date
          </label>
          <input
            id="f-date"
            type="date"
            className={inputClass}
            value={form.eventDate}
            onChange={(e) => setForm((f) => ({ ...f, eventDate: e.target.value }))}
          />
          {errors.eventDate && <p className={errorClass}>{errors.eventDate}</p>}
        </div>
        <div>
          <label htmlFor="f-type" className={labelClass}>
            What kind of event?
          </label>
          <select
            id="f-type"
            className={`${inputClass} appearance-none`}
            value={form.eventType}
            onChange={(e) =>
              setForm((f) => ({ ...f, eventType: e.target.value as CateringEnquiry['eventType'] }))
            }
          >
            <option value="">Pick the vibe…</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.eventType && <p className={errorClass}>{errors.eventType}</p>}
        </div>
        <div>
          <label htmlFor="f-guests" className={labelClass}>
            How many hungry humans?
          </label>
          <input
            id="f-guests"
            type="number"
            min={1}
            className={inputClass}
            placeholder="Approx. headcount"
            value={form.guests}
            onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
          />
          {errors.guests && <p className={errorClass}>{errors.guests}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="f-location" className={labelClass}>
          Where&rsquo;s the event?
        </label>
        <input
          id="f-location"
          className={inputClass}
          placeholder="Suburb, venue, or full address"
          value={form.location}
          onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
        />
        {errors.location && <p className={errorClass}>{errors.location}</p>}
      </div>

      <fieldset>
        <legend className={labelClass}>Sauces you&rsquo;re after (pick one or all)</legend>
        <div className="flex flex-wrap gap-2 mt-3">
          {VARIANT_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => toggleVariant(value)}
              aria-pressed={form.variants.includes(value)}
              className={`text-xs tracking-wide uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
                form.variants.includes(value)
                  ? 'bg-ember text-cream border-ember'
                  : 'border-charcoal/20 text-charcoal/70 hover:border-ember'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {errors.variants && <p className={errorClass}>{errors.variants}</p>}
      </fieldset>

      <div>
        <label htmlFor="f-message" className={labelClass}>
          Tell us the vibe{' '}
          <span className="normal-case tracking-normal text-charcoal/40 font-normal">
            (optional)
          </span>
        </label>
        <textarea
          id="f-message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Any allergens, theme, deadlines, or hot tips we should know?"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-ember" role="alert">
          Something went wrong. Try again, or drop us a DM on{' '}
          <a
            className="underline decoration-ember/40 underline-offset-2"
            href="https://www.instagram.com/burchies.fried.chicken/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-ember text-cream text-xs tracking-widest uppercase rounded-sm hover:bg-ember/90 disabled:opacity-60 transition-all duration-200 hover:scale-[1.01] font-semibold btn-shimmer relative overflow-hidden"
      >
        {status === 'submitting' ? 'Sending…' : 'Send it'}
      </button>
    </form>
  )
}
