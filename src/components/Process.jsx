import { useEffect, useRef } from 'react'

const steps = [
  { title: 'Research', desc: 'Studying biomechanics and real-world failure modes before writing a spec.' },
  { title: 'Design', desc: 'System architecture across mechanical, electrical, and software layers.' },
  { title: 'Simulation', desc: 'Digital twins stress-test every design before a part is machined.' },
  { title: 'Prototype', desc: 'Rapid hardware iteration validated against clinical and industrial benchmarks.' },
  { title: 'Testing', desc: 'Field trials with real operators, patients, and edge-case environments.' },
  { title: 'Deployment', desc: 'Fleet rollout with monitored telemetry from day one.' },
  { title: 'Continuous Improvement', desc: 'Every deployment feeds the next model revision.' },
]

export default function Process() {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    const tio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('in'); tio.unobserve(entry.target) }
        })
      },
      { threshold: 0.3 }
    )
    tio.observe(el)
    return () => tio.disconnect()
  }, [])

  return (
    <section className="py">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow" data-emoji="⚙️">How We Build</span>
          <h2>The innovation process</h2>
        </div>
        <div className="timeline-track" ref={trackRef}>
          {steps.map((s) => (
            <div className="t-step" key={s.title}>
              <div className="t-dot"></div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
