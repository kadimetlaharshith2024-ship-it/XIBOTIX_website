const products = [
  { tag: 'Humanoid', tagClass: 'tag-robotics', mediaClass: 'media-robotics', name: 'Robot Assistant — Atlas-H1', desc: 'General-purpose bipedal humanoid for logistics floors and lab environments.', color: '#00E5FF', icon: <><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" stroke="#00E5FF" fill="none" strokeWidth="1.6" /><rect x="7" y="12" width="10" height="9" rx="3" stroke="#00E5FF" fill="none" strokeWidth="1.6" /></> },
  { tag: 'Humanoid', tagClass: 'tag-robotics', mediaClass: 'media-robotics', name: 'Industrial Robot — Forge-X', desc: 'Heavy-payload robotic arm platform for precision assembly lines.', color: '#00E5FF', icon: <><path d="M4 20 L4 12 L12 12 L12 6 L18 6" stroke="#00E5FF" fill="none" strokeWidth="1.8" strokeLinecap="round" /><circle cx="18" cy="6" r="2.4" fill="#00E5FF" /></> },
  { tag: 'Humanoid', tagClass: 'tag-robotics', mediaClass: 'media-robotics', name: 'AI Service Robot — Concierge-2', desc: 'Front-of-house assistant for retail, hospitality, and reception.', color: '#00E5FF', icon: <><circle cx="12" cy="8" r="4" stroke="#00E5FF" fill="none" strokeWidth="1.6" /><path d="M5 21c0-4 3-7 7-7s7 3 7 7" stroke="#00E5FF" fill="none" strokeWidth="1.6" /></> },
  { tag: 'Rehabilitation', tagClass: 'tag-rehab', mediaClass: 'media-rehab', name: 'Medical Exoskeleton — Stride-3', desc: 'Lower-limb powered exoskeleton for gait rehabilitation therapy.', color: '#7CFFB2', icon: <path d="M9 3 L9 21 M15 3 L15 21 M9 8 L15 8 M9 16 L15 16" stroke="#7CFFB2" fill="none" strokeWidth="1.6" /> },
  { tag: 'Rehabilitation', tagClass: 'tag-rehab', mediaClass: 'media-rehab', name: 'Rehabilitation Robot — Motus', desc: 'Upper-limb robotic therapy device for post-stroke recovery.', color: '#7CFFB2', icon: <><circle cx="12" cy="8" r="3" stroke="#7CFFB2" fill="none" strokeWidth="1.6" /><path d="M12 11 v6 M8 21 l4-4 4 4" stroke="#7CFFB2" fill="none" strokeWidth="1.6" /></> },
  { tag: 'Rehabilitation', tagClass: 'tag-rehab', mediaClass: 'media-rehab', name: 'AI Prosthetic Arm — Nova Hand', desc: 'EMG-controlled prosthetic hand with adaptive grip learning.', color: '#7CFFB2', icon: <path d="M12 3 v9 M8 9 v6 M12 9 v7 M16 9 v6 M9 15 c0 3 1.5 5 3 5s3-2 3-5" stroke="#7CFFB2" fill="none" strokeWidth="1.6" /> },
  { tag: 'Rehabilitation', tagClass: 'tag-rehab', mediaClass: 'media-rehab', name: 'Wheelchair Assistant — Glide AI', desc: 'Autonomous navigation add-on for powered wheelchairs.', color: '#7CFFB2', icon: <><circle cx="7" cy="17" r="3" stroke="#7CFFB2" fill="none" strokeWidth="1.6" /><circle cx="17" cy="17" r="1.6" stroke="#7CFFB2" fill="none" strokeWidth="1.6" /><path d="M7 17 L7 8 L14 8 L17 17" stroke="#7CFFB2" fill="none" strokeWidth="1.6" /></> },
]

export default function Products() {
  return (
    <section id="products" className="py">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow" data-emoji="🎯">Products</span>
          <h2>Featured products</h2>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card reveal" data-emoji="🎯" key={p.name}>
              <div className={`product-media ${p.mediaClass}`}>
                <svg width="72" height="72" viewBox="0 0 24 24">{p.icon}</svg>
              </div>
              <div className="product-body">
                <span className={`product-tag ${p.tagClass}`}>{p.tag}</span>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
