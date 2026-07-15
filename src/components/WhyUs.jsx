const whyChoose = [
  { title: 'Innovation', desc: 'A single R&D core feeding both product lines keeps every breakthrough shared, not siloed.', icon: <path d="M13 2 L3 14 h8 l-1 8 10-12 h-8 z" /> },
  { title: 'Precision', desc: 'Sub-millimeter actuation tolerances validated across thousands of real-world duty cycles.', icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /></> },
  { title: 'Safety', desc: 'Every device is certified against ISO 13482 and IEC 60601 before it reaches the field.', icon: <path d="M12 2 L20 6 V12 C20 17 16.5 20.5 12 22 C7.5 20.5 4 17 4 12 V6 Z" /> },
  { title: 'Scalability', desc: 'Fleet architecture built to manage one unit or ten thousand from the same control plane.', icon: <path d="M3 12 L12 3 L21 12 M5 10 V21 H19 V10" /> },
  { title: 'Research Excellence', desc: 'Published, peer-reviewed work underpins every model we deploy — nothing ships untested.', icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M4 4.5A2.5 2.5 0 0 1 6.5 2H20 V22 H6.5 A2.5 2.5 0 0 1 4 19.5 Z" /> },
  { title: 'Global Impact', desc: 'Deployed across manufacturing floors and rehabilitation clinics on three continents.', icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12 H21 M12 3 C15 7 15 17 12 21 C9 17 9 7 12 3 Z" /></> },
]

export default function WhyUs() {
  return (
    <section className="py">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow" data-emoji="⭐">Why XIBOTIX</span>
          <h2>Built to earn trust at scale</h2>
        </div>
        <div className="why-grid">
          {whyChoose.map((w) => (
            <div className="glass-card reveal" key={w.title}>
              <div className="icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {w.icon}
                </svg>
              </div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
