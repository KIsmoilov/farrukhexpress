import { Link } from 'react-router-dom'
import { Seo } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found — Farrukh Express Inc"
        description="The page you were looking for could not be found."
      />
      <section className="section notfound">
        <div className="shell shell--narrow">
          <p className="notfound__code">404</p>
          <h1 style={{ marginTop: '1.5rem' }}>This road does not go through</h1>
          <p className="lead" style={{ marginTop: '1rem' }}>
            The page you were looking for has moved or never existed. Let's get you back
            on route.
          </p>
          <div className="btn-row btn-row--center" style={{ marginTop: '2rem' }}>
            <Link to="/" className="btn btn--lg">
              Back to Home
            </Link>
            <Link to="/contact" className="btn btn--ghost btn--lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
