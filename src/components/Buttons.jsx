import { Link } from '../router.jsx'
export const Btn = ({ to, ghost, children }) => <Link to={to} className={'btn' + (ghost ? ' ghost' : '')}>{children}</Link>
export const Banner = ({ title, sub }) => (<section className="banner"><div className="wrap"><h1>{title}</h1><p>{sub}</p></div></section>)
export const Head = ({ title, sub }) => (<div className="head"><h2>{title}</h2>{sub && <p>{sub}</p>}</div>)
export const CTA = ({ title, text }) => (
  <section className="cta"><div className="wrap"><h2>{title}</h2>{text && <p>{text}</p>}
    <div className="row"><Btn to="/contact">Request a Quote</Btn><Btn to="/contact" ghost>Contact Our Team</Btn></div></div></section>
)
