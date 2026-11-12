import { useState, useEffect } from 'react'
// Tiny hash router: works on Hostinger with no server rewrite rules.
const get = () => location.hash.replace(/^#/, '') || '/'
export const useRoute = () => {
  const [r, setR] = useState(get)
  useEffect(() => {
    // jump to top instantly (not smooth) so scroll animations on the new page start from the top
    const f = () => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); setR(get()) }
    addEventListener('hashchange', f)
    return () => removeEventListener('hashchange', f)
  }, [])
  return r
}
export const Link = ({ to, ...p }) => <a href={'#' + to} {...p} />
