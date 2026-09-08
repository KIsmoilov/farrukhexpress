import { Link } from 'react-router-dom'
import Icon, { type IconName } from '../components/Icon'
import { CtaBand, PageHero, Reveal, SectionHead, Seo } from '../components/ui'
import { services } from '../data/site'

export default function Services() {
  return (
    <>
      <Seo
        title="Services — Dry Van, Reefer & Flatbed Freight | Farrukh Express Inc"
        description="Nationwide dry van, refrigerated, and flatbed freight, dedicated lanes, expedited team service, and 24/7 dispatch from Farrukh Express Inc."
      />

      <PageHero
        crumb="Services"
        eyebrow="What we move"
        title="Freight solutions across the lower 48"
        copy="Three trailer types, one accountable carrier. From single loads to dedicated weekly capacity, we plan around your appointment windows and tell you the truth about transit times."
      >
        <div className="btn-row">
          <Link to="/contact" className="btn btn--lg">
            Request a Quote
          </Link>
          <Link to="/fleet" className="btn btn--ghost-light btn--lg">
            See Our Equipment
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Service lines"
            title="Complete trucking services"
            copy="Every service below runs on our own authority, with our own drivers and our own equipment — no brokering your freight out and hoping for the best."
          />
          <div className="grid grid--2">
            {services.map((s, i) => (
              <Reveal as="article" className="card" key={s.slug} delay={(i % 2) * 90}>
                <span className="card__icon">
                  <Icon name={s.icon as IconName} size={26} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <ul className="ticks">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <SectionHead
            center
            eyebrow="How we work"
            title="From rate confirmation to proof of delivery"
            copy="A shipment with us follows the same disciplined path every time, so you always know where your freight stands."
          />
          <div className="grid grid--4 steps">
            {[
              { t: 'Quote & Book', d: 'Send the lane, commodity, equipment, and dates. We come back with pricing and available capacity the same business day.' },
              { t: 'Dispatch & Pickup', d: 'A driver is assigned with hours planned for your window. You get the truck number and an ETA before pickup.' },
              { t: 'In Transit', d: 'Proactive check calls and tracking updates. If something changes, you hear it from us first — not after the fact.' },
              { t: 'Delivery & POD', d: 'Delivery confirmed on appointment, signed BOL and POD returned promptly, invoice clean the first time.' },
            ].map((s, i) => (
              <Reveal as="article" className="step" key={s.t} delay={i * 80}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <Reveal>
            <span className="eyebrow">For brokers & shippers</span>
            <h2>Capacity you can actually plan around</h2>
            <p className="lead" style={{ marginTop: '1.15rem' }}>
              We keep a fleet of 30+ power units and a driver roster deep enough to commit
              to recurring lanes. If you need the same trucks on the same freight every
              week, that is a conversation we like having.
            </p>
            <ul className="ticks" style={{ marginTop: '1.75rem' }}>
              {[
                'Fully authorized and insured — MC 1418733, DOT 3873235',
                'Dry van, reefer, and flatbed under one carrier',
                'Dedicated lane commitments for recurring volume',
                'Team power for time-critical, coast-to-coast freight',
                'Documents and PODs returned without chasing',
                'One point of contact from booking through billing',
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="btn-row" style={{ marginTop: '2rem' }}>
              <Link to="/contact" className="btn">
                Get Pricing & Capacity
              </Link>
            </div>
          </Reveal>

          <Reveal className="panel" delay={120}>
            <span className="eyebrow">Coverage snapshot</span>
            <h3 style={{ marginBottom: '1.5rem' }}>Where and how we run</h3>
            <div className="panel__rows">
              {[
                ['Operating area', 'All 48 contiguous states'],
                ['Trailer types', 'Dry van · Reefer · Flatbed'],
                ['Trailer length', '53 feet'],
                ['Load styles', 'Drop-and-hook · Live load'],
                ['Dispatch hours', '24 hours, 7 days'],
                ['Tracking', 'ELD + GPS on every unit'],
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

      <CtaBand
        title="Need capacity this week?"
        copy="Send us the lane and we will come back with pricing and an available truck — usually the same business day."
        primaryTo="/contact"
        primaryLabel="Request a Quote"
        secondaryTo="/fleet"
        secondaryLabel="View the Fleet"
      />
    </>
  )
}
