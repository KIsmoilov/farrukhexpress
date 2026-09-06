import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { Reveal } from './ui'
import type { Position } from '../data/site'

export default function PositionList({
  positions,
  applyTo = '/apply',
}: {
  positions: Position[]
  applyTo?: string
}) {
  const [open, setOpen] = useState<string | null>(positions[0]?.slug ?? null)

  return (
    <div className="acc">
      {positions.map((p, i) => {
        const isOpen = open === p.slug
        return (
          <Reveal
            key={p.slug}
            as="article"
            className={`acc__item${isOpen ? ' is-open' : ''}`}
            delay={Math.min(i * 50, 250)}
          >
            <h3>
              <button
                type="button"
                className="acc__btn"
                aria-expanded={isOpen}
                aria-controls={`panel-${p.slug}`}
                id={`acc-${p.slug}`}
                onClick={() => setOpen(isOpen ? null : p.slug)}
              >
                <span className="acc__title">{p.title}</span>
                <span className="acc__tag">{p.type}</span>
                <span className="acc__chev">
                  <Icon name="chevron" size={16} />
                </span>
              </button>
            </h3>

            <div
              className="acc__body"
              id={`panel-${p.slug}`}
              role="region"
              aria-labelledby={`acc-${p.slug}`}
            >
              <div className="acc__inner">
                <div className="acc__pad">
                  <p>{p.summary}</p>

                  <div className="acc__cols">
                    {p.responsibilities ? (
                      <div>
                        <h4 className="acc__h">Responsibilities</h4>
                        <ul className="ticks">
                          {p.responsibilities.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <div>
                      <h4 className="acc__h">Requirements</h4>
                      <ul className="ticks">
                        {p.requirements.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="acc__foot">
                    <Link
                      to={`${applyTo}?position=${encodeURIComponent(p.title)}`}
                      className="btn btn--sm"
                    >
                      Apply for This Role
                    </Link>
                    <Link to="/contact" className="btn btn--sm btn--ghost">
                      Ask a Question
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
