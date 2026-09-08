import { useCallback, useState } from 'react'
import { company } from '../data/site'

/**
 * Where form submissions go. Defaults to FormSubmit's AJAX endpoint, which
 * relays straight to the company inbox with no backend of our own. Override
 * with VITE_FORM_ENDPOINT to point at any service that accepts a JSON POST
 * (Formspree, Web3Forms, a custom API, ...).
 *
 * FormSubmit requires a one-time activation: the first submission triggers a
 * confirmation email to the address below that must be clicked once.
 */
const ENDPOINT =
  import.meta.env.VITE_FORM_ENDPOINT ||
  `https://formsubmit.co/ajax/${company.email}`

export type SubmitState = 'idle' | 'sending' | 'sent' | 'error'

export type Errors = Record<string, string>

export function useFormSubmit(subject: string) {
  const [state, setState] = useState<SubmitState>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [message, setMessage] = useState('')

  const submit = useCallback(
    async (payload: Record<string, string>, fieldErrors: Errors) => {
      setErrors(fieldErrors)

      if (Object.keys(fieldErrors).length > 0) {
        setState('error')
        setMessage('Please correct the highlighted fields and try again.')
        // Move focus to the first field with a problem.
        const first = document.querySelector<HTMLElement>('[aria-invalid="true"]')
        first?.focus()
        first?.scrollIntoView({ block: 'center', behavior: 'smooth' })
        return false
      }

      setState('sending')
      setMessage('')

      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: subject,
            _template: 'table',
            _captcha: 'false',
            ...payload,
          }),
        })

        if (!res.ok) throw new Error(`Request failed with status ${res.status}`)

        setState('sent')
        return true
      } catch {
        setState('error')
        setMessage(
          `We could not send your message just now. Please call ${company.phone} or email ${company.email} and we will take it from there.`,
        )
        return false
      }
    },
    [subject],
  )

  const reset = useCallback(() => {
    setState('idle')
    setErrors({})
    setMessage('')
  }, [])

  return { state, errors, message, submit, reset }
}

/* ---------- validation helpers ---------- */

export const required = (v: string, label: string) =>
  v.trim() ? '' : `${label} is required.`

export const validEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
    ? ''
    : 'Enter a valid email address.'

export const validPhone = (v: string) =>
  v.replace(/\D/g, '').length >= 10 ? '' : 'Enter a valid phone number.'
