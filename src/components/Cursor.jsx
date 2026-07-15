import { useEffect, useRef } from 'react'

// Custom cursor: a lagging glow ring that swaps in an emoji depending on
// what element (data-emoji="...") is currently being hovered. Falls back to
// the native cursor on touch / coarse-pointer devices.
export default function Cursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const emojiRef = useRef(null)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isFinePointer) return

    const ring = ringRef.current
    const dot = dotRef.current
    const emojiEl = emojiRef.current

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }
    window.addEventListener('mousemove', onMove)

    const lerp = (a, b, n) => (1 - n) * a + n * b
    const animate = () => {
      rx = lerp(rx, mx, 0.16)
      ry = lerp(ry, my, 0.16)
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onEnter = (e) => {
      const emo = e.currentTarget.getAttribute('data-emoji')
      emojiEl.textContent = emo
      emojiEl.classList.add('show')
      ring.classList.add('grown')
    }
    const onLeave = () => {
      emojiEl.classList.remove('show')
      ring.classList.remove('grown')
    }

    const burst = (e) => {
      for (let i = 0; i < 6; i++) {
        const p = document.createElement('div')
        p.className = 'burst'
        const size = 4 + Math.random() * 4
        p.style.width = size + 'px'
        p.style.height = size + 'px'
        p.style.left = mx + 'px'
        p.style.top = my + 'px'
        p.style.background = i % 2 === 0 ? '#00E5FF' : '#7C3AED'
        document.body.appendChild(p)
        setTimeout(() => p.remove(), 650)
      }
    }

    // Re-bind targets whenever the DOM changes (sections mount/animate in)
    const bind = () => {
      document.querySelectorAll('[data-emoji]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
      document.querySelectorAll('.btn-primary, .btn-ghost, .btn-outline').forEach((el) => {
        el.addEventListener('mouseenter', burst)
      })
    }
    bind()
    // Run once more after mount in case children rendered slightly later
    const t = setTimeout(bind, 300)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      clearTimeout(t)
      document.querySelectorAll('[data-emoji]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      document.querySelectorAll('.btn-primary, .btn-ghost, .btn-outline').forEach((el) => {
        el.removeEventListener('mouseenter', burst)
      })
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-ring" ref={ringRef}>
        <span id="cursor-emoji" ref={emojiRef}>✨</span>
      </div>
    </>
  )
}
