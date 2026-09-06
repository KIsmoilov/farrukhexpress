import ApplicationForm from '../components/ApplicationForm'
import Icon from '../components/Icon'
import { PageHero, Reveal, Seo } from '../components/ui'
import { company, driverPositions, officePositions } from '../data/site'

export default function Apply() {
  return (
    <>
      <Seo
        title="Apply Now — Driver & Office Applications | Farrukh Express Inc"
        description="Apply to Farrukh Express Inc in about three minutes. Open positions for CDL drivers, teams, owner-operators, and office and operations professionals."
      />

      <PageHero
        crumb="Apply"
        eyebrow="Join the team"
        title="Apply in about three minutes"
        copy="One short form for every open role — driving and office alike. No account to create, no résumé upload required. A recruiter reviews every application and typically responds within one to two business days."
      />

      <section className="section">
        <div className="shell split" style={{ alignItems: 'start' }}>
          <Reveal>
            <span className="eyebrow">Before you start</span>
            <h2>What we will ask for</h2>
            <p className="lead" style={{ marginTop: '1.15rem' }}>
              Just the basics. Anything we still need — CDL copy, medical card,
              employment history — we will collect during the recruiter call.
            </p>

            <ul className="ticks" style={{ marginTop: '1.75rem' }}>
              <li>Your name, email, and phone number</li>
              <li>The city and state you are based in</li>
              <li>The position you are applying for</li>
              <li>Your relevant experience</li>
              <li>CDL number and endorsements (driving roles only)</li>
              <li>Anything else you would like us to know</li>
            </ul>

            <div style={{ marginTop: '2.5rem', display: 'grid', gap: '0.9rem' }}>
              <h3 style={{ fontSize: '1.1rem' }}>Currently hiring</h3>
              <div className="pill-row" style={{ marginTop: 0 }}>
                {[...driverPositions, ...officePositions].map((p) => (
                  <span className="pill" key={p.slug}>
                    {p.title}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'grid', gap: '0.8rem' }}>
              <a className="link-arrow" href={company.phoneHref}>
                <Icon name="phone" size={17} /> {company.phone}
              </a>
              <a className="link-arrow" href={`mailto:${company.email}`}>
                <Icon name="mail" size={17} /> {company.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ApplicationForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
