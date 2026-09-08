import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { ArrowLink, CtaBand, PageHero, Reveal, SectionHead, Seo } from '../components/ui'
import { driverBenefits, driverPositions, officePositions } from '../data/site'

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers — Driver & Office Openings | Farrukh Express Inc"
        description="Now hiring company drivers, team drivers, owner-operators, lease-to-purchase drivers, dispatchers, safety coordinators, billing specialists, and more."
      />

      <PageHero
        crumb="Careers"
        eyebrow="Open positions"
        title="Find the opportunity that fits you"
        copy="Farrukh Express Inc is hiring on both sides of the operation — experienced drivers who want honest miles, and office professionals who keep the freight and the paperwork moving."
      >
        <div className="btn-row">
          <Link to="/apply" className="btn btn--lg">
            Apply Now
          </Link>
          <Link to="/contact" className="btn btn--ghost-light btn--lg">
            Ask a Recruiter
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="shell">
          <div className="grid grid--2">
            <Reveal as="article" className="card">
              <span className="card__icon">
                <Icon name="truck" size={26} />
              </span>
              <span className="acc__tag" style={{ alignSelf: 'flex-start', marginBottom: '0.9rem' }}>
                {driverPositions.length} open roles
              </span>
              <h3>Driving Positions</h3>
              <p>
                Career opportunities for experienced company drivers, team drivers,
                owner-operators, and drivers working toward truck ownership. Dry van,
                reefer, and flatbed freight nationwide.
              </p>
              <ul className="ticks">
                {driverPositions.slice(0, 4).map((p) => (
                  <li key={p.slug}>{p.title}</li>
                ))}
                <li>…and more</li>
              </ul>
              <ArrowLink to="/careers/drivers">View all driver positions</ArrowLink>
            </Reveal>

            <Reveal as="article" className="card" delay={90}>
              <span className="card__icon">
                <Icon name="briefcase" size={26} />
              </span>
              <span className="acc__tag" style={{ alignSelf: 'flex-start', marginBottom: '0.9rem' }}>
                {officePositions.length} open roles
              </span>
              <h3>Office & Operations</h3>
              <p>
                Behind every successful delivery is a dedicated office team — supporting
                drivers, coordinating freight, maintaining compliance, managing equipment,
                and keeping customers informed.
              </p>
              <ul className="ticks">
                {officePositions.slice(0, 4).map((p) => (
                  <li key={p.slug}>{p.title}</li>
                ))}
                <li>…and more</li>
              </ul>
              <ArrowLink to="/careers/office">View all office positions</ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell split">
          <Reveal>
            <span className="eyebrow">Why people stay</span>
            <h2>We are easy to work for, hard to leave</h2>
            <p style={{ marginTop: '1.15rem' }}>
              Fair pay, honest scheduling, and management that picks up the phone. It is
              not complicated — it is just rarer than it should be in this industry.
            </p>
            <ul className="ticks" style={{ marginTop: '1.75rem' }}>
              {driverBenefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="panel" delay={120}>
            <span className="eyebrow">Hiring process</span>
            <h3 style={{ marginBottom: '1.5rem' }}>What to expect</h3>
            <div className="panel__rows">
              {[
                ['Step 1', 'Submit the online application'],
                ['Step 2', 'Recruiter call within 1–2 business days'],
                ['Step 3', 'Verification and required screenings'],
                ['Step 4', 'Paid orientation and onboarding'],
                ['Step 5', 'Equipment assignment and first dispatch'],
              ].map(([k, v]) => (
                <div className="panel__row" key={k}>
                  <span>{k}</span>
                  <b>{v}</b>
                </div>
              ))}
            </div>
            <div className="btn-row" style={{ marginTop: '1.6rem' }}>
              <Link to="/apply" className="btn btn--block">
                Start Your Application
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            center
            eyebrow="Equal opportunity"
            title="Everyone gets a fair look"
            copy="Farrukh Express Inc considers all qualified applicants without regard to race, color, religion, sex, national origin, age, disability, veteran status, or any other protected characteristic. If you meet the requirements, we want to talk."
          />
        </div>
      </section>

      <CtaBand
        title="Your next role starts with one form"
        copy="Three minutes to apply. One to two business days to hear back. No account required."
      />
    </>
  )
}
