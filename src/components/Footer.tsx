import { Link } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import { company } from '../data/site'

const columns = [
  {
    heading: 'Company',
    links: [
      { to: '/about', label: 'About Us' },
      { to: '/services', label: 'Services' },
      { to: '/fleet', label: 'Our Fleet' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Careers',
    links: [
      { to: '/careers', label: 'Careers Overview' },
      { to: '/careers/drivers', label: 'Driver Positions' },
      { to: '/careers/office', label: 'Office & Operations' },
      { to: '/apply', label: 'Apply Now' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <Link to="/" className="brand" aria-label={`${company.name} — home`}>
              <Logo size={54} />
              <span className="brand__text">
                <span className="brand__name">Farrukh Express</span>
                <span className="brand__sub">Inc</span>
              </span>
            </Link>
            <p className="footer__about">
              A nationwide OTR motor carrier moving dry van, refrigerated, and flatbed
              freight across the lower 48 — with a dispatch desk that answers and drivers
              who stay.
            </p>
            <div className="footer__auth">
              <span>
                MC <b>{company.mc}</b>
              </span>
              <span>
                DOT <b>{company.dot}</b>
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul className="footer__links">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4>Get in Touch</h4>
            <div className="footer__contact">
              <a href={company.phoneHref}>
                <Icon name="phone" size={17} />
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`}>
                <Icon name="mail" size={17} />
                {company.email}
              </a>
              <a href={company.mapsUrl} target="_blank" rel="noreferrer">
                <Icon name="pin" size={17} />
                <span>
                  {company.addressLines[0]}
                  <br />
                  {company.addressLines[1]}
                </span>
              </a>
              <div>
                <Icon name="clock" size={17} />
                <span>{company.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bar">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>
            MC {company.mc} · DOT {company.dot} · {company.domain}
          </p>
        </div>
      </div>
    </footer>
  )
}
