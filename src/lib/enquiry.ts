export const EVENT_TYPES = ['Wedding', 'Corporate', 'Birthday', 'Private', 'Other'] as const
export type EventType = typeof EVENT_TYPES[number]

export const VARIANT_OPTIONS = [
  { value: 'og',         label: 'O.G.' },
  { value: 'american',   label: 'American' },
  { value: 'mexican',    label: 'Mexican' },
  { value: 'thai',       label: 'Thai' },
  { value: 'korean',     label: 'Korean' },
  { value: 'cauliflower', label: 'Korean Cauliflower (veg)' },
] as const

export interface CateringEnquiry {
  name: string
  email: string
  phone: string
  eventDate: string
  eventType: EventType | ''
  guests: string
  location: string
  variants: string[]
  message: string
}

export interface EnquiryErrors {
  name?: string
  email?: string
  phone?: string
  eventDate?: string
  eventType?: string
  guests?: string
  location?: string
  variants?: string
  message?: string
}

const MIN_GUESTS = 20

export function validateEnquiry(data: CateringEnquiry): EnquiryErrors {
  const errors: EnquiryErrors = {}

  if (!data.name.trim()) {
    errors.name = 'We need a name to yell out when it\u2019s ready'
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email.trim()) {
    errors.email = 'Pop an email in so we can reply'
  } else if (!emailRe.test(data.email)) {
    errors.email = 'That email looks a bit off — check it?'
  }

  const phoneRe = /^[+\d\s()-]{7,}$/
  if (!data.phone.trim()) {
    errors.phone = 'A phone number helps — catering comms move fast'
  } else if (!phoneRe.test(data.phone)) {
    errors.phone = 'That doesn\u2019t look like a phone number'
  }

  if (!data.eventDate) {
    errors.eventDate = 'When are we feeding this crowd?'
  } else {
    const d = new Date(data.eventDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (Number.isNaN(d.valueOf())) {
      errors.eventDate = 'That date doesn\u2019t parse — try YYYY-MM-DD'
    } else if (d.valueOf() < today.valueOf()) {
      errors.eventDate = 'Sorry, we don\u2019t cater events in the past'
    }
  }

  if (!data.eventType) {
    errors.eventType = 'Pick the vibe'
  }

  if (!data.guests.trim()) {
    errors.guests = 'How many hungry humans?'
  } else {
    const n = Number(data.guests)
    if (!Number.isFinite(n) || n < 1) {
      errors.guests = 'Enter a real number'
    } else if (n < MIN_GUESTS) {
      errors.guests = `We start at ${MIN_GUESTS} guests for catering`
    }
  }

  if (!data.location.trim()) {
    errors.location = 'Where are we parking up?'
  }

  if (data.variants.length === 0) {
    errors.variants = 'Pick at least one sauce'
  }

  return errors
}

export function isValid(errors: EnquiryErrors): boolean {
  return Object.keys(errors).length === 0
}
