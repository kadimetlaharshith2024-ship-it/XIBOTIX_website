export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    const btn = e.currentTarget.querySelector('button')
    btn.textContent = 'Message Sent'
  }

  return (
    <section id="contact-section" className="py" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap contact-grid">
        <div className="reveal">
          <span className="eyebrow" data-emoji="✉️">Contact</span>
          <h2 style={{ margin: '16px 0 24px', fontSize: 'clamp(28px,3.4vw,44px)', fontWeight: 600 }}>
            Let's talk about your deployment
          </h2>
          <div className="contact-info">
            <p data-emoji="📍">📍 400 Innovation Way, San Francisco, CA</p>
            <p data-emoji="📞">📞 +1 (415) 555-0198</p>
            <p data-emoji="✉️">✉️ contact@xibotix.com</p>
          </div>
          <div className="glass-card map-preview">Map preview</div>
        </div>
        <form className="glass-card contact-form reveal" onSubmit={onSubmit}>
          <div>
            <label>Full name</label>
            <input type="text" placeholder="Jordan Lee" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="jordan@company.com" required />
          </div>
          <div>
            <label>Message</label>
            <textarea rows="4" placeholder="Tell us about your project"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} data-emoji="➡️">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
