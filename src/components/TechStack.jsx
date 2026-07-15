const techStack = [
  { name: 'Artificial Intelligence', desc: 'Decision-making models for perception, planning and control.', icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" /></> },
  { name: 'Machine Learning', desc: 'Continuously trained models tuned on live fleet telemetry.', icon: <><path d="M4 19V6a2 2 0 0 1 2-2h9l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M9 9h6M9 13h6M9 17h3" /></> },
  { name: 'Computer Vision', desc: 'Multi-camera 3D scene understanding at up to 90 fps.', icon: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></> },
  { name: 'IoT', desc: 'Mesh-connected sensors across every device in the field.', icon: <><circle cx="5" cy="19" r="2" /><circle cx="19" cy="5" r="2" /><path d="M5 17V9a4 4 0 0 1 4-4h8" /></> },
  { name: 'Embedded Systems', desc: 'Custom real-time firmware for actuation and safety layers.', icon: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></> },
  { name: 'Cloud Computing', desc: 'Fleet-wide orchestration, OTA updates and remote diagnostics.', icon: <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6-1.6A4 4 0 0 0 6.5 16" /> },
  { name: 'Edge Computing', desc: 'Sub-10ms inference for balance and reflex-critical tasks.', icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></> },
  { name: 'ROS', desc: 'Modular robotics middleware across our entire product line.', icon: <><circle cx="12" cy="12" r="2" /><circle cx="5" cy="6" r="1.6" /><circle cx="19" cy="6" r="1.6" /><circle cx="5" cy="18" r="1.6" /><circle cx="19" cy="18" r="1.6" /><path d="M10.5 10.8 6.3 7M13.5 10.8l4.2-3.8M10.5 13.2 6.3 17M13.5 13.2l4.2 3.8" /></> },
]

function TiltCard({ children }) {
  const onMove = (e) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const x = e.clientX - r.left, y = e.clientY - r.top
    const rx = ((y / r.height) - 0.5) * -6
    const ry = ((x / r.width) - 0.5) * 6
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
  }
  const onLeave = (e) => { e.currentTarget.style.transform = '' }
  return (
    <div className="tech-card reveal" data-emoji="🧠" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="technology" className="py">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow" data-emoji="🧠">Technology</span>
          <h2>The stack behind every XIBOTIX system</h2>
        </div>
        <div className="tech-grid">
          {techStack.map((t) => (
            <TiltCard key={t.name}>
              <div className="tech-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {t.icon}
                </svg>
              </div>
              <h4>{t.name}</h4>
              <p>{t.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
