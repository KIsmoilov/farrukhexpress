import type { ReactNode } from 'react'

type Base = {
  id: string
  label: string
  error?: string
  required?: boolean
  full?: boolean
  hint?: string
}

function Wrap({
  id,
  label,
  error,
  required,
  full,
  hint,
  children,
}: Base & { children: ReactNode }) {
  return (
    <div className={`field${full ? ' field--full' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required ? <span className="req" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {hint && !error ? <span className="form__note">{hint}</span> : null}
      {error ? (
        <span className="field__err" id={`${id}-error`}>
          {error}
        </span>
      ) : null}
    </div>
  )
}

export function TextField({
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
  ...base
}: Base & {
  type?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  autoComplete?: string
}) {
  return (
    <Wrap {...base}>
      <input
        id={base.id}
        name={base.id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={base.required}
        aria-invalid={base.error ? true : undefined}
        aria-describedby={base.error ? `${base.id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrap>
  )
}

export function SelectField({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  ...base
}: Base & {
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder?: string
}) {
  return (
    <Wrap {...base}>
      <select
        id={base.id}
        name={base.id}
        value={value}
        required={base.required}
        aria-invalid={base.error ? true : undefined}
        aria-describedby={base.error ? `${base.id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Wrap>
  )
}

export function TextAreaField({
  value,
  onChange,
  placeholder,
  rows = 5,
  ...base
}: Base & {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  rows?: number
}) {
  return (
    <Wrap {...base}>
      <textarea
        id={base.id}
        name={base.id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        required={base.required}
        aria-invalid={base.error ? true : undefined}
        aria-describedby={base.error ? `${base.id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrap>
  )
}
