import { useEffect, useRef } from 'react'

function Counter({ target, label }) {
  const numRef = useRef(null)

  useEffect(() => {
    const el = numRef.current
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 1400
            const start = performance.now()
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              const cur = Math.floor(eased * target)
              el.textContent = cur + '+'
              if (p < 1) requestAnimationFrame(tick)
              else el.textContent = target + '+'
            }
            requestAnimationFrame(tick)
            cio.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )
    cio.observe(el)
    return () => cio.disconnect()
  }, [target])

  return (
    <div className="stat">
      <div className="num" ref={numRef}>0+</div>
      <div className="label">{label}</div>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    const hero = heroRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    const mouse = { x: null, y: null }
    let raf

    const resize = () => {
      canvas.width = hero.clientWidth
      canvas.height = hero.clientHeight
    }
    const init = () => {
      const count = Math.min(70, Math.floor(canvas.width / 18))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }))
    }
    resize()
    init()

    const onResize = () => { resize(); init() }
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = null; mouse.y = null }

    window.addEventListener('resize', onResize)
    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', onLeave)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        if (mouse.x !== null) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) { p.x += (dx / dist) * 0.6; p.y += (dy / dist) * 0.6 }
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,229,255,0.55)'
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(91,140,255,${0.14 * (1 - dist / 110)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section id="hero" ref={heroRef}>
      <canvas id="particle-canvas" ref={canvasRef}></canvas>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow" data-emoji="🤖">Humanoid Robotics &amp; Rehabilitation Engineering</span>
          <h1 className="reveal in">
            Engineering the <span className="grad">Future of Human</span> Intelligence
          </h1>
          <p className="reveal in">
            XIBOTIX builds autonomous humanoid robots and clinical-grade rehabilitation devices from a
            single engineering core — perception, actuation, and control systems designed to restore and
            extend what the human body can do.
          </p>
          <div className="hero-btns reveal in">
            <a href="#split-robotics" className="btn btn-primary" data-emoji="🦾">Explore Robotics</a>
            <a href="#split-rehab" className="btn btn-ghost" data-emoji="🩺">Explore Rehabilitation</a>
          </div>
          <div className="stat-row reveal in">
            <Counter target={50} label="Researchers" />
            <Counter target={20} label="Products Shipped" />
            <Counter target={100} label="Clients Worldwide" />
            <Counter target={25} label="Patents" />
          </div>
        </div>
        <div className="hero-visual">
          <div className="orb-ring"></div>
          <div className="orb-ring r2"></div>
          <div className="hero-figure" data-emoji="🤖">
            <svg width="260" height="420" viewBox="0 0 260 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="botGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#5B8CFF" />
                </linearGradient>
              </defs>
              <ellipse cx="130" cy="80" rx="46" ry="52" fill="none" stroke="url(#botGrad)" strokeWidth="2.2" />
              <circle cx="112" cy="76" r="6" fill="#00E5FF" />
              <circle cx="148" cy="76" r="6" fill="#00E5FF" />
              <line x1="130" y1="132" x2="130" y2="170" stroke="url(#botGrad)" strokeWidth="2.2" />
              <rect x="86" y="170" width="88" height="120" rx="24" fill="none" stroke="url(#botGrad)" strokeWidth="2.2" />
              <line x1="130" y1="190" x2="130" y2="270" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 6" opacity=".6" />
              <path d="M86 190 C 50 200, 40 250, 55 300" fill="none" stroke="url(#botGrad)" strokeWidth="2.2" />
              <path d="M174 190 C 210 200, 220 250, 205 300" fill="none" stroke="url(#botGrad)" strokeWidth="2.2" />
              <path d="M104 290 C 96 330, 96 370, 104 408" fill="none" stroke="url(#botGrad)" strokeWidth="2.2" />
              <path d="M156 290 C 164 330, 164 370, 156 408" fill="none" stroke="url(#botGrad)" strokeWidth="2.2" />
              <circle cx="130" cy="228" r="3" fill="#5B8CFF">
                <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
