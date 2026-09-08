import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SelectField, TextAreaField, TextField } from './Field'
import { ErrorNote, Honeypot, SuccessNote } from './FormStatus'
import { useFormSubmit, required, validEmail, validPhone, type Errors } from '../lib/form'
import { company, driverPositions, officePositions } from '../data/site'

const positionOptions = [
  ...driverPositions.map((p) => p.title),
  ...officePositions.map((p) => p.title),
]

const experienceOptions = [
  'Less than 1 year',
  '1 – 2 years',
  '2 – 5 years',
  '5 – 10 years',
  '10+ years',
]

const endorsementOptions = [
  'None',
  'Hazmat',
  'Tanker',
  'Doubles / Triples',
  'Hazmat + Tanker',
  'Other (note below)',
]

const empty = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  position: '',
  experience: '',
  cdl: '',
  endorsements: '',
  availability: '',
  notes: '',
}

export default function ApplicationForm() {
  const [params] = useSearchParams()
  // A "?position=" query lands here from the "Apply for This Role" buttons.
  const linkedPosition = params.get('position') ?? ''
  const prefill = positionOptions.includes(linkedPosition) ? linkedPosition : ''

  const [values, setValues] = useState({ ...empty, position: prefill })
  const [lastPrefill, setLastPrefill] = useState(prefill)
  const [trap, setTrap] = useState('')
  const { state, errors, message, submit, reset } = useFormSubmit(
    `Job application — ${company.name}`,
  )

  // Follow the query string if it changes while the form is already mounted.
  if (prefill !== lastPrefill) {
    setLastPrefill(prefill)
    if (prefill) setValues((prev) => ({ ...prev, position: prefill }))
  }

  const set = (key: keyof typeof empty) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }))

  const isDriverRole = driverPositions.some((p) => p.title === values.position)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (trap) return // bot

    const found: Errors = {}
    const firstErr = required(values.firstName, 'First name')
    if (firstErr) found.firstName = firstErr
    const lastErr = required(values.lastName, 'Last name')
    if (lastErr) found.lastName = lastErr
    const emailErr = required(values.email, 'Email') || validEmail(values.email)
    if (emailErr) found.email = emailErr
    const phoneErr = required(values.phone, 'Phone') || validPhone(values.phone)
    if (phoneErr) found.phone = phoneErr
    const posErr = required(values.position, 'Position')
    if (posErr) found.position = posErr
    const expErr = required(values.experience, 'Experience')
    if (expErr) found.experience = expErr
    if (isDriverRole) {
      const cdlErr = required(values.cdl, 'CDL number')
      if (cdlErr) found.cdl = cdlErr
    }

    const ok = await submit(
      {
        Name: `${values.firstName} ${values.lastName}`,
        Email: values.email,
        Phone: values.phone,
        Location: [values.city, values.state].filter(Boolean).join(', ') || '—',
        Position: values.position,
        Experience: values.experience,
        'CDL Number': values.cdl || '—',
        Endorsements: values.endorsements || '—',
        'Available From': values.availability || '—',
        Notes: values.notes || '—',
      },
      found,
    )
    if (ok) setValues(empty)
  }

  if (state === 'sent') {
    return (
      <div className="form-card">
        <SuccessNote
          title="Application received."
          body={`Our recruiting team reviews every application and typically responds within one to two business days. Questions in the meantime? Call ${company.phone}.`}
        />
        <div className="btn-row" style={{ marginTop: '1.5rem' }}>
          <button type="button" className="btn btn--ghost" onClick={reset}>
            Submit Another Application
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <div className="form">
        {state === 'error' && message ? <ErrorNote message={message} /> : null}

        <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className="acc__h" style={{ marginBottom: '1rem' }}>
            About You
          </legend>
          <div className="form__grid">
            <TextField
              id="firstName"
              label="First Name"
              required
              value={values.firstName}
              onChange={set('firstName')}
              error={errors.firstName}
              autoComplete="given-name"
            />
            <TextField
              id="lastName"
              label="Last Name"
              required
              value={values.lastName}
              onChange={set('lastName')}
              error={errors.lastName}
              autoComplete="family-name"
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
            />
            <TextField
              id="phone"
              label="Phone"
              type="tel"
              required
              value={values.phone}
              onChange={set('phone')}
              error={errors.phone}
              autoComplete="tel"
              placeholder="(555) 123-4567"
            />
            <TextField
              id="city"
              label="City"
              value={values.city}
              onChange={set('city')}
              autoComplete="address-level2"
            />
            <TextField
              id="state"
              label="State"
              value={values.state}
              onChange={set('state')}
              autoComplete="address-level1"
              placeholder="OH"
            />
          </div>
        </fieldset>

        <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className="acc__h" style={{ marginBottom: '1rem' }}>
            The Role
          </legend>
          <div className="form__grid">
            <SelectField
              id="position"
              label="Position"
              required
              full
              value={values.position}
              onChange={set('position')}
              options={positionOptions}
              error={errors.position}
              placeholder="Which role are you applying for?"
            />
            <SelectField
              id="experience"
              label="Relevant Experience"
              required
              value={values.experience}
              onChange={set('experience')}
              options={experienceOptions}
              error={errors.experience}
            />
            <TextField
              id="availability"
              label="Available From"
              type="date"
              value={values.availability}
              onChange={set('availability')}
            />

            {isDriverRole ? (
              <>
                <TextField
                  id="cdl"
                  label="CDL Number"
                  required
                  value={values.cdl}
                  onChange={set('cdl')}
                  error={errors.cdl}
                  hint="Class A CDL required for all driving positions."
                />
                <SelectField
                  id="endorsements"
                  label="Endorsements"
                  value={values.endorsements}
                  onChange={set('endorsements')}
                  options={endorsementOptions}
                  placeholder="Select endorsements"
                />
              </>
            ) : null}

            <TextAreaField
              id="notes"
              label="Anything Else We Should Know"
              full
              rows={5}
              value={values.notes}
              onChange={set('notes')}
              placeholder="Equipment experience, preferred lanes, home-time needs, questions — anything that helps us place you well."
            />
          </div>
        </fieldset>

        <Honeypot value={trap} onChange={setTrap} />

        <button type="submit" className="btn btn--lg" disabled={state === 'sending'}>
          {state === 'sending' ? 'Submitting…' : 'Submit Application'}
        </button>

        <p className="form__note">
          By submitting, you agree that we may contact you about this application. We
          never share your information with third parties. Prefer to talk first? Call{' '}
          <a href={company.phoneHref}>{company.phone}</a>.
        </p>
      </div>
    </form>
  )
}
