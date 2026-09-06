import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import PositionList from '../components/PositionList'
import { CtaBand, PageHero, Reveal, SectionHead, Seo } from '../components/ui'
import { officePositions } from '../data/site'

export default function OfficePositions() {
  return (
    <>
      <Seo
        title="Office & Operations Careers | Farrukh Express Inc"
        description="Open office roles at Farrukh Express Inc: dispatcher, load tracking specialist, safety and compliance coordinator, billing and settlements, business development, and fleet maintenance."
      />

      <PageHero
        crumb="Office Positions"
        eyebrow="Open office positions"
        title="Build your career with Farrukh Express"
        copy="Behind every successful delivery is a dedicated office team. Our professionals support drivers, coordinate freight, maintain compliance, manage equipment, and keep customers informed throughout every shipment."
      >
        <div className="btn-row">
          <Link to="/apply" className="btn btn--lg">
            Apply Now
          </Link>
          <Link to="/careers/drivers" className="btn btn--ghost-light btn--lg">
            Driver Positions
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow={`${officePositions.length} open roles`}
            title="Office and operations positions"
            copy="Select a role to see full responsibilities and requirements. Our office is based in Cuyahoga Falls, Ohio."
          />
          <PositionList positions={officePositions} />
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <SectionHead
            center
            eyebrow="Working here"
            title="A team that actually talks to each other"
            copy="Dispatch, safety, billing, and maintenance sit close and solve problems together. Nobody hides behind a ticket queue."
          />
          <div className="grid grid--3">
            {[
              {
                icon: 'users' as const,
                t: 'Small Team, Real Ownership',
                d: 'You will own your desk end to end and see the direct result of your work on drivers and customers — not a slice of somebody else’s process.',
              },
              {
                icon: 'chart' as const,
                t: 'Room to Grow',
                d: 'We promote from within. Dispatchers become operations leads; billing specialists move into management as the fleet grows.',
              },
              {
                icon: 'support' as const,
                t: 'Support That Goes Both Ways',
                d: 'You back up the drivers, and the company backs you up — with training, tools, and management that answers the phone.',
              },
            ].map((c, i) => (
              <Reveal as="article" className="card card--dark" key={c.t} delay={i * 90}>
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
        title="See a role that fits?"
        copy="Send us your application and we will be in touch within one to two business days."
      />
    </>
  )
}
