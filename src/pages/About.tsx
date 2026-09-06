import { Link } from 'react-router-dom'
import Icon, { type IconName } from '../components/Icon'
import { CtaBand, PageHero, Reveal, SectionHead, Seo, StatsBand } from '../components/ui'
import { company, values } from '../data/site'

export default function About() {
  return (
    <>
      <Seo
        title="About Us — Farrukh Express Inc"
        description="Farrukh Express Inc is a Cuyahoga Falls, Ohio motor carrier operating 30+ power units nationwide. MC 1418733 · DOT 3873235."
      />

      <PageHero
        crumb="About"
        eyebrow="Who we are"
        title="A carrier built on kept promises"
        copy={`${company.name} is an Ohio-based motor carrier moving freight across the lower 48. We are large enough to cover the lanes our customers need and small enough that every driver knows who answers the phone.`}
      />

      <section className="section">
        <div className="shell split">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2>Started by drivers. Still run like it.</h2>
            <p className="lead" style={{ marginTop: '1.15rem' }}>
              Farrukh Express began with a single tractor and a simple conviction: if you
              treat drivers fairly and tell customers the truth, the freight takes care of
              itself. That has not changed as the fleet grew past thirty power units.
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--t-on-light-mute)' }}>
              Today we run dry van, refrigerated, and flatbed freight nationwide from our
              office in Cuyahoga Falls, Ohio. Our dispatch desk is staffed around the
              clock, our safety team reviews compliance continuously rather than before
              audits, and our maintenance program is scheduled instead of reactive.
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--t-on-light-mute)' }}>
              The result is 15 million miles driven safely and thousands of loads delivered
              on appointment — numbers that belong to the drivers who earned them.
            </p>
            <div className="btn-row" style={{ marginTop: '2rem' }}>
              <Link to="/careers" className="btn">
                Join the Team
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal className="panel" delay={120}>
            <span className="eyebrow">Company profile</span>
            <h3 style={{ marginBottom: '1.5rem' }}>The essentials</h3>
            <div className="panel__rows">
              {[
                ['Legal name', company.name],
                ['MC number', company.mc],
                ['DOT number', company.dot],
                ['Headquarters', 'Cuyahoga Falls, Ohio'],
                ['Fleet', '30+ power units'],
                ['Drivers', '30+ professionals'],
                ['Coverage', 'Lower 48 states'],
                ['Equipment', 'Dry van · Reefer · Flatbed'],
              ].map(([k, v]) => (
                <div className="panel__row" key={k}>
                  <span>{k}</span>
                  <b>{v}</b>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight section--paper">
        <div className="shell">
          <StatsBand />
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <SectionHead
            eyebrow="What we stand for"
            title="Four things we refuse to compromise on"
            copy="These are not wall posters. They are the standards our dispatchers, safety team, and drivers are held to every single day."
          />
          <div className="grid grid--2">
            {values.map((v, i) => (
              <Reveal as="article" className="card card--dark" key={v.title} delay={(i % 2) * 90}>
                <span className="card__icon">
                  <Icon name={v.icon as IconName} size={26} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            center
            eyebrow="Safety & compliance"
            title="Audit-ready, every day of the year"
            copy="Compliance is not a fire drill here. Driver files, ELD activity, inspections, and maintenance records are maintained continuously so that a DOT audit is just another Tuesday."
          />
          <div className="grid grid--3">
            {[
              {
                icon: 'doc' as IconName,
                t: 'Driver Qualification Files',
                d: 'Complete, current, and reviewed on a schedule — licenses, medical cards, MVRs, and employment verification.',
              },
              {
                icon: 'clock' as IconName,
                t: 'Hours-of-Service Monitoring',
                d: 'ELD activity is reviewed for violations and coaching opportunities, not just archived for auditors.',
              },
              {
                icon: 'wrench' as IconName,
                t: 'Preventive Maintenance',
                d: 'Scheduled PM intervals, tracked inspections, and documented repairs keep every unit road-ready.',
              },
            ].map((c, i) => (
              <Reveal as="article" className="card" key={c.t} delay={i * 90}>
                <span className="card__icon">
                  <Icon name={c.icon} size={26} />
                </span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's move something together"
        copy="Hiring drivers and office professionals now — and always ready to quote your next lane."
      />
    </>
  )
}
