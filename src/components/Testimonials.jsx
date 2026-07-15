const testimonials = [
  { quote: 'Atlas-H1 cut our floor-picking cycle time by a third within the first quarter of deployment.', name: 'R. Sundaram', role: 'Head of Operations, Manufacturing Partner' },
  { quote: 'The Stride-3 exoskeleton gave three of our post-stroke patients independent gait training for the first time.', name: 'Dr. A. Fernandes', role: 'Clinical Director, Rehabilitation Hospital' },
  { quote: "XIBOTIX's research team treats every deployment as a live study — the iteration speed is unlike any vendor we've worked with.", name: 'Dr. M. Krishnan', role: 'Principal Investigator, Robotics Lab' },
  { quote: "Nova Hand's grip-learning adapted to our patient's use pattern within two weeks — genuinely adaptive hardware.", name: 'S. Iyer', role: 'Prosthetist, Orthopedic Center' },
  { quote: 'We integrated Forge-X into our assembly line without a single safety incident across 14 months.', name: 'K. Bose', role: 'Plant Manager, Industrial Partner' },
]

export default function Testimonials() {
  const items = [...testimonials, ...testimonials]
  return (
    <section className="py">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow" data-emoji="💬">Trusted By</span>
          <h2>Researchers, hospitals, and industrial partners</h2>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((t, i) => (
            <div className="t-card" key={i}>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="t-person">
                <div className="t-avatar">{t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
