import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMobileMenu = (e) => {
    const links = e.currentTarget.parentElement.querySelector('.nav-links')
    const open = links.style.display === 'flex'
    links.style.cssText = open
      ? ''
      : 'display:flex; position:fixed; top:70px; left:0; right:0; background:rgba(5,8,22,0.97); backdrop-filter:blur(20px); flex-direction:column; padding:24px 32px; gap:20px; border-bottom:1px solid var(--card-border);'
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav-inner">
        <a href="#hero" className="logo" data-emoji="🏢">
          <span className="logo-mark">X</span>XIBOTIX
        </a>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#split-robotics" data-emoji="🦾">Robotics</a>
          <a href="#split-rehab" data-emoji="🩺">Rehabilitation</a>
          <a href="#technology" data-emoji="🧠">Technology</a>
          <a href="#products" data-emoji="🎯">Products</a>
          <a href="#research" data-emoji="🔬">Research</a>
          <a href="#about">About</a>
          <a href="#contact-section" data-emoji="✉️">Contact</a>
        </div>
        <a href="#cta" className="btn btn-primary btn-sm" data-emoji="➡️">Get Started</a>
        <button className="menu-toggle" aria-label="Menu" onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
