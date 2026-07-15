import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import SplitShowcase from './components/SplitShowcase.jsx'
import TechStack from './components/TechStack.jsx'
import Process from './components/Process.jsx'
import Products from './components/Products.jsx'
import WhyUs from './components/WhyUs.jsx'
import Research from './components/Research.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <div className="noise"></div>
      <div className="grid-bg"></div>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <SplitShowcase />
      <TechStack />
      <Process />
      <Products />
      <WhyUs />
      <Research />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </>
  )
}
