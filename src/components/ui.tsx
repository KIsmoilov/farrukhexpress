import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'
import { stats } from '../data/site'

/* ---------- Scroll restoration ---------- */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

/* ---------- Per-page title & description ---------- */
export function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])
  return null
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
}: {
  children: ReactNode
  as?: 'div' | 'section' | 'li' | 'article'
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag
      ref={ref as never}
      className={`reveal${shown ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

/* ---------- Section heading ---------- */
export function SectionHead({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string
  title: ReactNode
  copy?: ReactNode
  center?: boolean
}) {
  return (
    <Reveal className={`sect-head${center ? ' sect-head--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </Reveal>
  )
}

/* ---------- Inner page hero ---------- */
export function PageHero({
  crumb,
  eyebrow,
  title,
  copy,
  children,
}: {
  crumb: string
  eyebrow: string
  title: ReactNode
  copy: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="phero">
      <div className="shell">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <Icon name="chevron" size={12} className="crumbs__sep" />
          <span>{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children}
      </div>
    </section>
  )
}

/* ---------- Stats band ---------- */
export function StatsBand() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <Reveal key={s.label} className="stat">
          <b>{s.value}</b>
          <span>{s.label}</span>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------- Arrow link ---------- */
export function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="link-arrow">
      {children}
      <Icon name="arrow" size={17} />
    </Link>
  )
}

/* ---------- CTA band ---------- */
export function CtaBand({
  title,
  copy,
  primaryTo = '/apply',
  primaryLabel = 'Apply Now',
  secondaryTo = '/contact',
  secondaryLabel = 'Talk to Dispatch',
}: {
  title: string
  copy: string
  primaryTo?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
}) {
  return (
    <section className="section section--tight cta">
      <div className="shell cta__inner">
        <Reveal>
          <h2>{title}</h2>
          <p>{copy}</p>
        </Reveal>
        <Reveal className="btn-row" delay={80}>
          <Link to={primaryTo} className="btn btn--light btn--lg">
            {primaryLabel}
          </Link>
          <Link to={secondaryTo} className="btn btn--ghost-light btn--lg">
            {secondaryLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
