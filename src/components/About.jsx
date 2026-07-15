export default function About() {
  return (
    <section id="about" className="py">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow" data-emoji="🧠">Who We Are</span>
          <h2>One engineering discipline, two frontiers of human capability.</h2>
          <p>
            XIBOTIX was founded on a simple premise: the systems that let a robot perceive, balance, and
            act in the physical world are the same systems that can help a human body recover, move, and
            heal. We build both, deliberately, in the same labs, by the same teams.
          </p>
        </div>
        <div className="intro-grid">
          <div className="glass-card reveal" data-emoji="➕">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" />
                <circle cx="12" cy="12" r="6" />
              </svg>
            </div>
            <h3>Vision</h3>
            <p>A world where intelligent machines and the human body work in seamless partnership — in the factory, the clinic, and the home.</p>
          </div>
          <div className="glass-card reveal reveal-delay-1" data-emoji="➕">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2 L3 14 h8 l-1 8 10-12 h-8 z" />
              </svg>
            </div>
            <h3>Mission</h3>
            <p>To engineer humanoid systems and rehabilitation devices that are precise enough for the clinic and durable enough for industry.</p>
          </div>
          <div className="glass-card reveal reveal-delay-2" data-emoji="➕">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7 v5 l3 3" />
              </svg>
            </div>
            <h3>Human-Centered Engineering</h3>
            <p>Every joint, sensor, and model we ship is validated against real human biomechanics, not just lab benchmarks.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
