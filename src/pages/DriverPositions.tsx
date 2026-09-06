import { Link } from 'react-router-dom'
import PositionList from '../components/PositionList'
import { CtaBand, PageHero, Reveal, SectionHead, Seo } from '../components/ui'
import { driverBenefits, driverPositions, driverPositionsNote } from '../data/site'

export default function DriverPositions() {
  return (
    <>
      <Seo
        title="Driver Positions — CDL Jobs | Farrukh Express Inc"
        description="Open CDL positions at Farrukh Express Inc: dry van, reefer, and flatbed company drivers, team drivers, owner-operators, and lease-to-purchase drivers."
      />

      <PageHero
        crumb="Driver Positions"
        eyebrow="Open positions for drivers"
        title="Find the driving opportunity that fits you"
        copy="FARRUKH EXPRESS INC offers career opportunities for experienced company drivers, team drivers, owner-operators, and drivers working toward truck ownership."
      >
        <div className="btn-row">
          <Link to="/apply" className="btn btn--lg">
            Apply Now
          </Link>
          <Link to="/careers/office" className="btn btn--ghost-light btn--lg">
            Office Positions
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow={`${driverPositions.length} open roles`}
            title="Driving positions"
            copy="Select a role to see the full description and requirements. Every driving position requires a valid Class A CDL and two years of verifiable OTR experience."
          />
          <PositionList positions={driverPositions} />
          <Reveal>
            <p className="form__note" style={{ marginTop: '1.5rem' }}>
              {driverPositionsNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell split">
          <Reveal>
            <span className="eyebrow">What you get</span>
            <h2>More than a truck and a load number</h2>
            <p style={{ marginTop: '1.15rem' }}>
              We know what makes a driver stay: consistent miles, a settlement that is
              right the first time, equipment that starts, and a dispatcher who treats you
              like a colleague.
            </p>
            <ul className="ticks" style={{ marginTop: '1.75rem' }}>
              {driverBenefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="panel" delay={120}>
            <span className="eyebrow">Minimum qualifications</span>
            <h3 style={{ marginBottom: '1.5rem' }}>Before you apply</h3>
            <div className="panel__rows">
              {[
                ['CDL class', 'Class A'],
                ['OTR experience', '2+ years verifiable'],
                ['Driving record', 'Acceptable safety history'],
                ['Medical', 'Current DOT medical card'],
                ['Screenings', 'Able to pass required screenings'],
                ['Communication', 'Professional and reliable'],
              ].map(([k, v]) => (
                <div className="panel__row" key={k}>
                  <span>{k}</span>
                  <b>{v}</b>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1.4rem', fontSize: '0.88rem', color: 'var(--t-on-dark-mute)' }}>
              Individual positions may add requirements — reefer or flatbed experience,
              load-securement knowledge, or an approved tractor for owner-operators.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready for a seat that treats you right?"
        copy="Apply in about three minutes. A recruiter will call you within one to two business days."
      />
    </>
  )
}
