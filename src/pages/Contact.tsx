import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import { PageHero, Reveal, SectionHead, Seo } from '../components/ui'
import { company } from '../data/site'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us — Farrukh Express Inc"
        description={`Reach Farrukh Express Inc at ${company.phone} or ${company.email}. Office at ${company.address}. Dispatch available 24/7.`}
      />

      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk freight — or careers"
        copy="Dispatch runs around the clock and the office is open Monday through Friday. Send a message below and we will come back to you within one business day."
      >
        <div className="grid grid--3" style={{ marginTop: '2.5rem' }}>
          <Reveal>
            <a className="ctile" href={company.phoneHref}>
              <span className="ctile__icon">
                <Icon name="phone" size={20} />
              </span>
              <span>
                <h4>Call Us</h4>
                <p>{company.phone}</p>
              </span>
            </a>
          </Reveal>
          <Reveal delay={80}>
            <a className="ctile" href={`mailto:${company.email}`}>
              <span className="ctile__icon">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <h4>Email Us</h4>
                <p>{company.email}</p>
              </span>
            </a>
          </Reveal>
          <Reveal delay={160}>
            <a className="ctile" href={company.mapsUrl} target="_blank" rel="noreferrer">
              <span className="ctile__icon">
                <Icon name="pin" size={20} />
              </span>
              <span>
                <h4>Visit the Office</h4>
                <p>
                  {company.addressLines[0]}
                  <br />
                  {company.addressLines[1]}
                </p>
              </span>
            </a>
          </Reveal>
        </div>
      </PageHero>

      <section className="section">
        <div className="shell split" style={{ alignItems: 'start' }}>
          <Reveal>
            <span className="eyebrow">Send a message</span>
            <h2>How can we help?</h2>
            <p className="lead" style={{ marginTop: '1.15rem' }}>
              Shipping freight, joining the fleet, or chasing a document — it all lands in
              the same inbox and gets routed to the right desk the same day.
            </p>

            <div className="panel" style={{ marginTop: '2rem' }}>
              <span className="eyebrow">Office details</span>
              <h3 style={{ marginBottom: '1.4rem' }}>{company.name}</h3>
              <div className="panel__rows">
                {[
                  ['Address', company.address],
                  ['Phone', company.phone],
                  ['Email', company.email],
                  ['MC number', company.mc],
                  ['DOT number', company.dot],
                  ['Dispatch', '24 hours, 7 days a week'],
                  ['Office hours', 'Mon–Fri, 9:00 AM – 6:00 PM EST'],
                ].map(([k, v]) => (
                  <div className="panel__row" key={k}>
                    <span>{k}</span>
                    <b style={{ textAlign: 'right' }}>{v}</b>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight section--paper">
        <div className="shell">
          <SectionHead center eyebrow="Find us" title="141 Broad Blvd, Cuyahoga Falls" />
          <Reveal className="map-wrap">
            <iframe
              className="map"
              title={`Map showing the ${company.name} office`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=141%20Broad%20Blvd%20Ste%20116%2C%20Cuyahoga%20Falls%2C%20OH%2044221&output=embed"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
