import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import { company } from '../data/site'

const primary = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/fleet', label: 'Fleet' },
]

const careers = [
  { to: '/careers', label: 'Careers Overview' },
  { to: '/careers/drivers', label: 'Driver Positions' },
  { to: '/careers/office', label: 'Office & Operations' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()
  const [lastPath, setLastPath] = useState(pathname)
  const burgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer whenever the route changes. Adjusting during render
  // avoids an extra commit with the drawer still open on the new page.
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        burgerRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const careersActive = pathname.startsWith('/careers')

  return (
    <>
      <header className={`header${solid ? ' is-solid' : ''}`}>
        <div className="header__inner">
          <Link to="/" className="brand" aria-label={`${company.name} — home`}>
            <Logo size={46} />
            <span className="brand__text">
              <span className="brand__name">Farrukh Express</span>
              <span className="brand__sub">Inc</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {primary.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}

            <div className="nav__group">
              <Link
                to="/careers"
                className={`nav__link nav__trigger${careersActive ? ' is-active' : ''}`}
              >
                Careers
                <Icon name="chevron" size={14} />
              </Link>
              <div className="nav__menu">
                {careers.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end
                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
            >
              Contact
            </NavLink>
          </nav>

          <a className="header__phone" href={company.phoneHref}>
            <Icon name="phone" size={18} />
            <span>{company.phone}</span>
          </a>

          <Link to="/apply" className="btn btn--sm header__cta">
            Apply Now
          </Link>

          <button
            ref={burgerRef}
            type="button"
            className={`burger${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-nav" className={`drawer${open ? ' is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {primary.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/careers" end className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
            Careers
          </NavLink>
          <NavLink
            to="/careers/drivers"
            className={({ isActive }) => `drawer__sub${isActive ? ' is-active' : ''}`}
          >
            Driver Positions
          </NavLink>
          <NavLink
            to="/careers/office"
            className={({ isActive }) => `drawer__sub${isActive ? ' is-active' : ''}`}
          >
            Office & Operations
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
            Contact
          </NavLink>
        </nav>

        <div className="drawer__foot">
          <Link to="/apply" className="btn btn--block btn--lg">
            Apply Now
          </Link>
          <a className="drawer__contact" href={company.phoneHref}>
            <Icon name="phone" size={17} /> {company.phone}
          </a>
          <a className="drawer__contact" href={`mailto:${company.email}`}>
            <Icon name="mail" size={17} /> {company.email}
          </a>
        </div>
      </div>
    </>
  )
}
