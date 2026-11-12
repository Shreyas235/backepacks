import { useState, useEffect } from 'react'
// Tiny hash router: works on Hostinger with no server rewrite rules.
const get = () => location.hash.replace(/^#/, '') || '/'
export const useRoute = () => {
  const [r, setR] = useState(get)
  useEffect(() => {
    const f = () => { setR(get()); window.scrollTo(0, 0) }
    addEventListener('hashchange', f)
    return () => removeEventListener('hashchange', f)
  }, [])
  return r
}
export const Link = ({ to, ...p }) => <a href={'#' + to} {...p} />
