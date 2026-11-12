import { useState, useEffect } from 'react'
import { Link } from '../router.jsx'
import { nav } from '../data/site.js'
import logo from '../assets/logo.png'
export default function Header({ route }) {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [route])
  return (
    <header className="header"><div className="wrap bar">
      <Link to="/" className="brand" aria-label="BAKEPACKS home"><img src={logo} alt="BAKEPACKS Bakery Packaging Solutions" /></Link>
      <button className="burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}><i /><i /><i /></button>
      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([to, t]) => <Link key={to} to={to} className={route === to ? 'on' : ''}>{t}</Link>)}
        <Link to="/contact" className="btn sm">Request a Quote</Link>
      </nav>
    </div></header>
  )
}
