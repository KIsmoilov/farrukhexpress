import { Link } from 'react-router-dom'
import Icon, { type IconName } from '../components/Icon'
import {
  ArrowLink,
  CtaBand,
  Reveal,
  SectionHead,
  Seo,
  StatsBand,
} from '../components/ui'
import { company, driverBenefits, faqs, services, stats, values } from '../data/site'
import { useState } from 'react'

const quotes = [
  {
    text: 'Dispatch actually picks up the phone. I get my miles, my settlement is right every Friday, and nobody plays games with my home time.',
    who: 'Marat A.',
    role: 'Company Driver — Dry Van',
  },
  {
    text: 'I came over as an owner-operator and the paperwork was handled in two days. Steady freight, fair rates, and the maintenance desk gets me back rolling fast.',
    who: 'Daniel R.',
    role: 'Owner-Operator',
  },
  {
    text: 'We run team coast to coast. The loads are planned around our hours, not against them — that is the difference from our last carrier.',
    who: 'J. & K. Sabirov',
    role: 'Team Drivers',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <Seo
        title="Farrukh Express Inc — Nationwide Trucking & Freight Carrier"
        description="Farrukh Express Inc is an OTR motor carrier running dry van, reefer, and flatbed freight across all 48 states. MC 1418733 · DOT 3873235. Now hiring drivers and office staff."
      />

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__glow" />
        <div className="hero__inner">
          <div>
            <Reveal>
              <span className="hero__badge">
                <b>Now Hiring</b> Drivers · Teams · Owner-Operators
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h1>
                Freight that
                <span className="accent">keeps moving.</span>
                <em>Careers that last.</em>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="hero__copy">
                {company.name} runs dry van, refrigerated, and flatbed freight across all
                48 states — with a dispatch desk that answers around the clock and drivers
                who stick around because we keep our word.
              </p>
            </Reveal>
            <Reveal delay={180} className="btn-row">
              <Link to="/apply" className="btn btn--lg">
                Drive With Us
                <Icon name="arrow" size={18} />
              </Link>
              <Link to="/contact" className="btn btn--ghost-light btn--lg">
                Ship With Us
              </Link>
            </Reveal>
            <Reveal delay={240} className="hero__meta">
              <span>
                MC <b>{company.mc}</b>
              </span>
              <span>
                DOT <b>{company.dot}</b>
              </span>
              <span>
                Based in <b>Cuyahoga Falls, OH</b>
              </span>
            </Reveal>
          </div>

          <Reveal className="hero__art" delay={200}>
            <div className="hero__art-card">
              <span className="eyebrow">Proven on the road</span>
              <h3 style={{ color: '#fff', fontSize: '1.5rem' }}>
                Numbers our drivers built
              </h3>
              <div className="hero__art-stats">
                {stats.map((s) => (
                  <div className="hero__art-stat" key={s.label}>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Audiences ---------- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            center
            eyebrow="Built for both sides of the load"
            title="Whether you drive it or ship it, we make it simple"
            copy="Drivers get honest miles and a dispatch desk that answers. Shippers and brokers get capacity they can plan around and a status update before they have to ask."
          />
          <div className="grid grid--3">
            {[
              {
                icon: 'truck' as IconName,
                title: 'For Drivers',
                text: 'Steady freight, transparent weekly settlements, well-maintained equipment, and home time you can actually plan around.',
                to: '/careers/drivers',
                cta: 'See open driving roles',
              },
              {
                icon: 'chart' as IconName,
                title: 'For Shippers & Brokers',
                text: 'Dry van, reefer, and flatbed capacity across the lower 48, with dedicated lane options for recurring freight.',
                to: '/services',
                cta: 'Explore our services',
              },
              {
                icon: 'briefcase' as IconName,
                title: 'For Office Professionals',
                text: 'Dispatch, safety and compliance, billing, sales, and fleet maintenance careers on a team that moves fast.',
                to: '/careers/office',
                cta: 'See office openings',
              },
            ].map((c, i) => (
              <Reveal as="article" className="card" key={c.title} delay={i * 90}>
                <span className="card__icon">
                  <Icon name={c.icon} size={26} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ArrowLink to={c.to}>{c.cta}</ArrowLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="section section--tight section--paper">
        <div className="shell">
          <SectionHead
            center
            eyebrow="By the numbers"
            title="Miles behind us, not promises ahead of us"
          />
          <StatsBand />
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="What we haul"
            title="Complete trucking services"
            copy="One carrier, three trailer types, and a dispatch team that plans loads around hours of service instead of hoping they work out."
          />
          <div className="grid grid--3">
            {services.map((s, i) => (
              <Reveal as="article" className="card" key={s.slug} delay={(i % 3) * 90}>
                <span className="card__icon">
                  <Icon name={s.icon as IconName} size={26} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <ArrowLink to="/services">Learn more</ArrowLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section className="section section--dark">
        <div className="shell">
          <SectionHead
            eyebrow="Why Farrukh Express"
            title="Run by people who have done the miles"
            copy="Safety, straight answers, and equipment that starts every morning. That is the whole formula — and it is why our drivers stay."
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

      {/* ---------- Driver benefits split ---------- */}
      <section className="section">
        <div className="shell split">
          <Reveal>
            <span className="eyebrow">Drive with us</span>
            <h2>The seat is good. The people are better.</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              We are hiring experienced company drivers, teams, owner-operators, and
              drivers working toward truck ownership. Two years of verifiable OTR
              experience and a clean record get the conversation started.
            </p>
            <ul className="ticks" style={{ marginTop: '1.75rem' }}>
              {driverBenefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="btn-row" style={{ marginTop: '2rem' }}>
              <Link to="/apply" className="btn">
                Start Your Application
              </Link>
              <Link to="/careers/drivers" className="btn btn--ghost">
                View All Driver Roles
              </Link>
            </div>
          </Reveal>

          <Reveal className="panel" delay={120}>
            <span className="eyebrow">Hiring at a glance</span>
            <h3 style={{ marginBottom: '1.5rem' }}>What we ask for</h3>
            <div className="panel__rows">
              {[
                ['License', 'Class A CDL'],
                ['Experience', '2+ years verifiable OTR'],
                ['Record', 'Acceptable driving & safety history'],
                ['Medical', 'Current DOT medical card'],
                ['Screening', 'Ability to pass required screenings'],
                ['Equipment (O/O)', 'Road-ready Class 8 tractor'],
              ].map(([k, v]) => (
                <div className="panel__row" key={k}>
                  <span>{k}</span>
                  <b>{v}</b>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1.4rem', fontSize: '0.88rem', color: 'var(--t-on-dark-mute)' }}>
              Requirements vary slightly by position. Lease-to-purchase program
              availability and terms may vary by equipment and applicant.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section section--paper">
        <div className="shell">
          <SectionHead
            center
            eyebrow="How hiring works"
            title="Four steps, no runaround"
          />
          <div className="grid grid--4 steps">
            {[
              { t: 'Apply Online', d: 'Fill in the short application. It takes about three minutes — no account, no résumé upload required.' },
              { t: 'Quick Screen', d: 'Recruiting reviews your experience and record, then calls you within one to two business days.' },
              { t: 'Verification', d: 'We verify your CDL, medical card, and employment history, and complete the required screenings.' },
              { t: 'Orientation', d: 'Paid orientation, equipment assignment, and your first dispatch. Then you are rolling.' },
            ].map((s, i) => (
              <Reveal as="article" className="step" key={s.t} delay={i * 80}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section section--dark">
        <div className="shell">
          <SectionHead
            eyebrow="What drivers say"
            title="Straight from the seat"
            copy="No scripts, no marketing polish — just what our drivers tell recruiters when they refer a friend."
          />
          <div className="grid grid--3">
            {quotes.map((q, i) => (
              <Reveal as="article" className="quote" key={q.who} delay={i * 90}>
                <span className="quote__mark" aria-hidden="true">
                  &ldquo;
                </span>
                <p>{q.text}</p>
                <footer>
                  <span className="quote__av" aria-hidden="true">
                    {q.who.charAt(0)}
                  </span>
                  <span className="quote__who">
                    <b>{q.who}</b>
                    <span>{q.role}</span>
                  </span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="shell shell--narrow">
          <SectionHead center eyebrow="Questions" title="Answers, before you ask" />
          <div className="acc">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <Reveal
                  as="article"
                  className={`acc__item${isOpen ? ' is-open' : ''}`}
                  key={f.q}
                  delay={Math.min(i * 40, 200)}
                >
                  <h3>
                    <button
                      type="button"
                      className="acc__btn"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                    >
                      <span className="acc__title">{f.q}</span>
                      <span className="acc__chev">
                        <Icon name="chevron" size={16} />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="acc__body"
                    id={`faq-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                  >
                    <div className="acc__inner">
                      <div className="acc__pad">
                        <p>{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to roll with Farrukh Express?"
        copy="Whether you are looking for your next seat or your next carrier, we can have an answer for you today."
      />
    </>
  )
}
