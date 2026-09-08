import Icon from './Icon'

export function SuccessNote({ title, body }: { title: string; body: string }) {
  return (
    <div className="alert alert--ok" role="status">
      <Icon name="check" size={20} />
      <div>
        <b>{title}</b>
        {body}
      </div>
    </div>
  )
}

export function ErrorNote({ message }: { message: string }) {
  return (
    <div className="alert alert--err" role="alert">
      <Icon name="alert" size={20} />
      <div>
        <b>Something went wrong</b>
        {message}
      </div>
    </div>
  )
}

/** Bot trap — real people never fill this in. */
export function Honeypot({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="hp" aria-hidden="true">
      <label htmlFor="company-website">Leave this field empty</label>
      <input
        id="company-website"
        name="company-website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
