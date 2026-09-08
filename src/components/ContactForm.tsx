import { useState } from 'react'
import { SelectField, TextAreaField, TextField } from './Field'
import { ErrorNote, Honeypot, SuccessNote } from './FormStatus'
import { useFormSubmit, required, validEmail, validPhone, type Errors } from '../lib/form'
import { company } from '../data/site'

const topics = [
  'Request a Quote / Capacity',
  'Become a Customer or Broker Partner',
  'Driving Opportunities',
  'Office & Operations Careers',
  'Billing or Settlements',
  'Safety & Compliance',
  'Something Else',
]

const empty = {
  name: '',
  email: '',
  phone: '',
  companyName: '',
  topic: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [trap, setTrap] = useState('')
  const { state, errors, message, submit, reset } = useFormSubmit(
    `Website contact — ${company.name}`,
  )

  const set = (key: keyof typeof empty) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (trap) return // bot

    const found: Errors = {}
    const nameErr = required(values.name, 'Full name')
    if (nameErr) found.name = nameErr
    const emailErr = required(values.email, 'Email') || validEmail(values.email)
    if (emailErr) found.email = emailErr
    if (values.phone.trim()) {
      const phoneErr = validPhone(values.phone)
      if (phoneErr) found.phone = phoneErr
    }
    const topicErr = required(values.topic, 'Subject')
    if (topicErr) found.topic = topicErr
    const msgErr = required(values.message, 'Message')
    if (msgErr) found.message = msgErr

    const ok = await submit(
      {
        Name: values.name,
        Email: values.email,
        Phone: values.phone || '—',
        Company: values.companyName || '—',
        Subject: values.topic,
        Message: values.message,
      },
      found,
    )
    if (ok) setValues(empty)
  }

  if (state === 'sent') {
    return (
      <div className="form-card">
        <SuccessNote
          title="Message sent — thank you."
          body={`A member of our team will get back to you within one business day. If it is urgent, call ${company.phone} and dispatch will pick up.`}
        />
        <div className="btn-row" style={{ marginTop: '1.5rem' }}>
          <button type="button" className="btn btn--ghost" onClick={reset}>
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <div className="form">
        {state === 'error' && message ? <ErrorNote message={message} /> : null}

        <div className="form__grid">
          <TextField
            id="name"
            label="Full Name"
            required
            value={values.name}
            onChange={set('name')}
            error={errors.name}
            autoComplete="name"
            placeholder="Jane Doe"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            required
            value={values.email}
            onChange={set('email')}
            error={errors.email}
            autoComplete="email"
            placeholder="you@company.com"
          />
          <TextField
            id="phone"
            label="Phone"
            type="tel"
            value={values.phone}
            onChange={set('phone')}
            error={errors.phone}
            autoComplete="tel"
            placeholder="(555) 123-4567"
          />
          <TextField
            id="companyName"
            label="Company"
            value={values.companyName}
            onChange={set('companyName')}
            autoComplete="organization"
            placeholder="Optional"
          />
          <SelectField
            id="topic"
            label="Subject"
            required
            full
            value={values.topic}
            onChange={set('topic')}
            options={topics}
            error={errors.topic}
            placeholder="What can we help with?"
          />
          <TextAreaField
            id="message"
            label="Message"
            required
            full
            rows={6}
            value={values.message}
            onChange={set('message')}
            error={errors.message}
            placeholder="Lane, commodity, equipment type, dates — or whatever you need from us."
          />
        </div>

        <Honeypot value={trap} onChange={setTrap} />

        <button type="submit" className="btn btn--lg" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        <p className="form__note">
          Prefer to talk? Call <a href={company.phoneHref}>{company.phone}</a> or email{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </form>
  )
}
