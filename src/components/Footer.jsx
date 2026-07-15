export default function Footer() {
  const onSubscribe = (e) => {
    e.preventDefault()
    e.currentTarget.querySelector('button').textContent = 'Subscribed'
  }

  return (
    <footer id="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <a href="#hero" className="logo" data-emoji="🏢">
              <span className="logo-mark">X</span>XIBOTIX
            </a>
            <p>Humanoid robotics and rehabilitation devices engineered from a single core discipline — movement.</p>
            <div className="social-row">
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.5 8.25h4.3v2.02h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.5v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4.5V8.25z"/></svg>
              </a>
              <a href="#" aria-label="X / Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7.3L4 22H1l8.2-9.3L1 2h7.4l5 6.7L18.9 2z"/></svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <a href="#hero">Home</a>
            <a href="#technology">Technology</a>
            <a href="#about">About</a>
            <a href="#contact-section">Contact</a>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <a href="#split-robotics">Robot Assistant</a>
            <a href="#split-robotics">Industrial Robot</a>
            <a href="#split-rehab">Medical Exoskeleton</a>
            <a href="#split-rehab">AI Prosthetic Arm</a>
          </div>
          <div className="footer-col">
            <h5>Newsletter</h5>
            <p style={{ fontSize: 13.5, color: 'var(--sub)', marginBottom: 14 }}>
              Research notes and product updates, monthly.
            </p>
            <form className="newsletter-form" onSubmit={onSubscribe}>
              <input type="email" placeholder="you@company.com" required aria-label="Email address" />
              <button type="submit" data-emoji="✉️">Join</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 XIBOTIX Technologies. All rights reserved.</span>
          <span className="mono">Built for the field</span>
        </div>
      </div>
    </footer>
  )
}
