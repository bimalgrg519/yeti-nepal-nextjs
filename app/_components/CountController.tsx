'use client'

import { useEffect } from 'react'

export default function CountController() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('[data-count]')
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target as HTMLElement
          const target = Number(el.dataset.count)
          const suffix = el.dataset.suffix ?? ''
          const dur = 1300
          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur)
            const eased = 1 - Math.pow(1 - t, 3)
            el.textContent = Math.round(target * eased) + suffix
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          co.unobserve(el)
        })
      },
      { threshold: 0.6 }
    )
    counters.forEach((c) => co.observe(c))
    return () => co.disconnect()
  }, [])

  return null
}
