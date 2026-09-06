import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { CtaBand, PageHero, Reveal, SectionHead, Seo, StatsBand } from '../components/ui'
import { fleet } from '../data/site'

export default function Fleet() {
  return (
    <>
      <Seo
        title="Our Fleet — Tractors, Dry Vans, Reefers & Flatbeds | Farrukh Express Inc"
        description="30+ late-model Class 8 tractors with 53' dry van, refrigerated, and flatbed trailers, maintained on a scheduled preventive program."
      />

      <PageHero
        crumb="Fleet"
        eyebrow="Our equipment"
        title="Well-kept trucks, fewer surprises"
        copy="A breakdown is a service failure for the customer and a lost day for the driver. That is why maintenance here is scheduled, documented, and taken seriously — across every one of our 30+ power units."
      >
        <div className="btn-row">
          <Link to="/apply" className="btn btn--lg">
            Drive This Equipment
          </Link>
          <Link to="/contact" className="btn btn--ghost-light btn--lg">
            Check Capacity
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Equipment"
            title="What we run"
            copy="Tractors and trailers specified for the freight our customers actually ship — and for drivers who spend their weeks in them."
          />
          <div className="grid grid--2">
            {fleet.map((f, i) => (
              <Reveal as="article" className="card" key={f.title} delay={(i % 2) * 90}>
                <span className="acc__tag" style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>
                  {f.spec}
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <ul className="ticks">
                  {f.features.map((x) => (
                    <li key={x}>{x}</li>
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
            eyebrow="Maintenance program"
            title="Road-ready is a process, not a hope"
          />
          <div className="grid grid--3">
            {[
              {
                icon: 'wrench' as const,
                t: 'Scheduled Preventive Service',
                d: 'Every unit runs on defined PM intervals. Service is booked ahead of the mileage, not after a warning light.',
              },
              {
                icon: 'doc' as const,
                t: 'Documented Service History',
                d: 'Complete records for each tractor and trailer — inspections, repairs, warranty work, and estimates all tracked.',
              },
              {
                icon: 'support' as const,
                t: 'Roadside Response',
                d: 'Our fleet maintenance coordinator works a vendor network to get drivers rolling again with minimum downtime.',
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

      <section className="section section--tight section--paper">
        <div className="shell">
          <StatsBand />
        </div>
      </section>

      <CtaBand
        title="Good equipment. Good freight. Good people."
        copy="We are hiring drivers who take care of their truck — and we take care of it right back."
      />
    </>
  )
}
