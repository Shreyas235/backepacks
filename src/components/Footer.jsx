import { Link } from '../router.jsx'
import { site, nav, categories } from '../data/site.js'
export default function Footer() {
  return (
    <footer className="footer"><div className="wrap grid4">
      <div><h4>{site.name} – Bakery Packaging Solutions</h4><p className="tag">{site.tagline}</p>
        <p>Explore practical and customised packaging possibilities for bakeries, cafés, confectioneries and food businesses.</p></div>
      <div><h4>Quick links</h4>{nav.map(([to, t]) => <Link key={to} to={to}>{t}</Link>)}</div>
      <div><h4>Our products</h4>{categories.map(c => <Link key={c.t} to="/products">{c.t}</Link>)}</div>
      <div><h4>Contact</h4><p>Phone: {site.phone}</p><p>Address: {site.address}</p><p>Hours: {site.hours}</p></div>
    </div><div className="wrap copy">
      <span>Copyright © {new Date().getFullYear()} BAKEPACKS. All Rights Reserved.</span>
      <span>Website designed &amp; developed by <a href="https://bkstechsolutions.com/" target="_blank" rel="noopener noreferrer">BKS Solutions</a></span>
    </div></footer>
  )
}