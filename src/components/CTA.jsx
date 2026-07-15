export default function CTA() {
  return (
    <section id="cta">
      <div className="wrap">
        <span className="eyebrow reveal" data-emoji="🚀">Ready When You Are</span>
        <h2 className="reveal" style={{ marginTop: 20 }}>Let's Build the Future Together</h2>
        <p className="reveal">
          Whether you're deploying a humanoid fleet or fitting a patient with their next prosthetic — our
          team is ready to engineer it with you.
        </p>
        <div className="hero-btns reveal">
          <a href="#contact-section" className="btn btn-primary" data-emoji="✉️">Contact Us</a>
          <a href="#contact-section" className="btn btn-ghost" data-emoji="🎯">Schedule Demo</a>
        </div>
      </div>
    </section>
  )
}
