import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ScrollToTop } from './components/ui'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Fleet from './pages/Fleet'
import Careers from './pages/Careers'
import DriverPositions from './pages/DriverPositions'
import OfficePositions from './pages/OfficePositions'
import Apply from './pages/Apply'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/drivers" element={<DriverPositions />} />
          <Route path="/careers/office" element={<OfficePositions />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
