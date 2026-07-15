export default function SplitShowcase() {
  return (
    <section id="split" className="py">
      <div className="wrap">
        <div className="sec-head reveal" style={{ maxWidth: 720 }}>
          <span className="eyebrow" data-emoji="⚡">Two Disciplines, Equal Priority</span>
          <h2>Built to move. Built to heal.</h2>
        </div>

        <div className="split-shell reveal">
          <div className="seam">
            <div className="seam-pulse a"></div>
            <div className="seam-pulse b"></div>
            <div className="seam-node">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6">
                <path d="M12 2 L12 22 M4 8 L20 8 M4 16 L20 16" />
              </svg>
            </div>
          </div>

          <div className="split-side robotics" id="split-robotics" data-emoji="🦾">
            <span className="split-tag">01 · Humanoid Robotics</span>
            <h3>Autonomous humanoids for real, unstructured environments</h3>
            <p className="desc">
              Bipedal platforms that perceive, reason, and act — deployed in warehouses, labs, and service
              settings where the physical world doesn't follow a script.
            </p>
            <div className="feature-list">
              <div className="feature-item"><span className="dot"></span>AI Vision</div>
              <div className="feature-item"><span className="dot"></span>Natural Language Processing</div>
              <div className="feature-item"><span className="dot"></span>Autonomous Navigation</div>
              <div className="feature-item"><span className="dot"></span>Human Interaction</div>
              <div className="feature-item"><span className="dot"></span>Machine Learning</div>
              <div className="feature-item"><span className="dot"></span>Robotic Arms</div>
            </div>
            <a href="#technology" className="btn btn-outline btn-sm" data-emoji="➡️">Learn More</a>
          </div>

          <div className="split-side rehab" id="split-rehab" data-emoji="🩺">
            <span className="split-tag">02 · Rehabilitation Devices</span>
            <h3>Clinical-grade devices that restore human movement</h3>
            <p className="desc">
              Exoskeletons, prosthetics, and monitoring systems co-developed with clinicians — engineered
              for daily use in therapy and at home.
            </p>
            <div className="feature-list">
              <div className="feature-item"><span className="dot"></span>Smart Prosthetics</div>
              <div className="feature-item"><span className="dot"></span>Robotic Exoskeleton</div>
              <div className="feature-item"><span className="dot"></span>Therapy Assistance</div>
              <div className="feature-item"><span className="dot"></span>Remote Patient Monitoring</div>
              <div className="feature-item"><span className="dot"></span>AI Diagnostics</div>
              <div className="feature-item"><span className="dot"></span>Wearable Sensors</div>
            </div>
            <a href="#technology" className="btn btn-outline btn-sm" data-emoji="➡️">Discover More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
