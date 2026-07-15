const research = [
  { cat: 'AI Robotics', title: 'Reducing balance-recovery latency in bipedal humanoids under load', excerpt: 'A look at how our edge inference pipeline trims reflex response time to under 9ms during dynamic disturbances.', date: 'Jun 2026', read: '6 min read' },
  { cat: 'Healthcare Technology', title: 'Adaptive EMG mapping for next-generation prosthetic hands', excerpt: "How Nova Hand's grip classifier personalizes to individual muscle signal patterns over the first 14 days of use.", date: 'May 2026', read: '8 min read' },
  { cat: 'Future Research', title: 'Shared control architectures across robotics and rehabilitation', excerpt: "Why the same motion-planning stack that powers Atlas-H1 is now informing Stride-3's gait assistance logic.", date: 'Apr 2026', read: '5 min read' },
]

export default function Research() {
  return (
    <section id="research" className="py">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow" data-emoji="🔬">Research</span>
          <h2>Latest innovations</h2>
        </div>
        <div className="research-grid">
          {research.map((r) => (
            <div className="research-card reveal" data-emoji="🔬" key={r.title}>
              <div className="research-media">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M4 4.5A2.5 2.5 0 0 1 6.5 2H20 V22 H6.5 A2.5 2.5 0 0 1 4 19.5 Z" />
                </svg>
              </div>
              <div className="research-body">
                <span className="cat">{r.cat}</span>
                <h4>{r.title}</h4>
                <p>{r.excerpt}</p>
                <div className="research-meta"><span>{r.date}</span><span>{r.read}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
