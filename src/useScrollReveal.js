import { useLayoutEffect } from 'react'

// Scroll-reveal animations. Tags existing elements automatically (no markup changes needed)
// and re-scans whenever React renders a new page.
export default function useScrollReveal() {
  useLayoutEffect(() => {
    document.documentElement.classList.add('js')

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const seen = new WeakSet()
    const io = !reduce && 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in-view')
              io.unobserve(e.target)
            }
          })
        }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' })
      : null

    const idxOf = (el) => Array.prototype.indexOf.call(el.parentElement.children, el)

    // first item slides from the left, last from the right, the rest rise from below
    const dir = (el) => {
      const p = el.parentElement, n = p.children.length
      let i = idxOf(el)
      if (p.classList.contains('flip')) i = n - 1 - i
      if (n === 1) return 'up'
      if (i === 0) return 'left'
      if (i === n - 1) return 'right'
      return 'up'
    }

    // stagger: true = delay by position in its row, number = fixed delay in seconds
    const tag = (sel, anim, stagger, skip) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (seen.has(el) || el.closest('.header') || el.closest('.hero-text')) return
        if (skip && el.closest(skip)) return
        seen.add(el)
        el.classList.add('reveal')
        el.dataset.anim = typeof anim === 'function' ? anim(el) : anim
        if (stagger === true) el.style.setProperty('--d', Math.min(idxOf(el) * 0.1, 0.5) + 's')
        else if (stagger) el.style.setProperty('--d', stagger + 's')
        if (io) io.observe(el); else el.classList.add('in-view')
      })
    }

    const scan = () => {
      // footer
      tag('.footer .grid4 > *', 'up', true)
      tag('.footer .copy', 'up')

      // boxes come in from different directions
      tag('.split > .ph, .cols > *, .contact > *, .grid2 > *, .grid3 > *, .grid4 > *, .grid5 > *', dir, true)
      tag('.steps > li', 'up', true)
      tag('.faq, .note', 'up', true)

      // small items zoom in
      tag('.chips .chip, .tags li', 'zoom', true)
      tag('.sec .btn, .cta .btn', 'zoom', true)

      // text goes from blurry to clear (text inside boxes is left alone, the box itself animates)
      const inBox = '.tile, .card, .steps li, .cols > *, .contact > *, .faq, .note, .ok, .reveal[data-anim=zoom]'
      tag('.banner h1', 'blur')
      tag('.banner p', 'blur', 0.15)
      tag('.sec h1, .sec h2, .sec h3, .sec h4, .head p, .sec p, .cta h2, .cta p', 'blur', false, inBox)
    }

    scan()

    // React swaps pages in and out; re-scan synchronously so new content never flashes before hiding
    const mo = new MutationObserver(scan)
    mo.observe(document.getElementById('root') || document.body, { childList: true, subtree: true })

    return () => { mo.disconnect(); io && io.disconnect() }
  }, [])
}
