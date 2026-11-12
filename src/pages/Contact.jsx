import { useState } from 'react'
import { Banner, Head } from '../components/Buttons.jsx'
import { site, faqs } from '../data/site.js'
const fields = ['Full Name', 'Business Name', 'Mobile Number', 'Email Address', 'Business Type', 'Packaging Category', 'Product Name', 'Required Quantity', 'Product Dimensions', 'Customisation / Printing Requirement', 'Delivery Location']
export default function Contact() {
  const [sent, setSent] = useState(false)
  const [open, setOpen] = useState(0)
  // Static hosting has no server, so the form opens the visitor's email / WhatsApp with the details filled in.
  const submit = (e) => {
    e.preventDefault()
    const d = new FormData(e.target)
    const body = [...d.entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
    if (site.whatsapp) window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(body)}`, '_blank')
    else if (site.email) location.href = `mailto:${site.email}?subject=${encodeURIComponent('Packaging quote request')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (<>
    <Banner title="Let's Find the Right Packaging for Your Business." sub="Have a packaging requirement? Tell us about your product, quantity and specifications. Our team will help you explore the next steps." />
    <section className="sec"><div className="wrap contact">
      <form onSubmit={submit} className="form"><h2>Request a packaging quote</h2><p>Share your details below so we can understand your packaging requirements.</p>
        <div className="fgrid">{fields.map(f => <label key={f}>{f}<input name={f} required={f === 'Full Name' || f === 'Mobile Number'} /></label>)}
          <label className="full">Additional Requirements<textarea name="Additional Requirements" rows="4" /></label></div>
        <button className="btn" type="submit">Send Requirement</button>
        {sent && <p className="ok" role="status">Thank you. Your requirement is ready to send.</p>}
      </form>
      <aside className="tile info"><h3>Contact information</h3><p><b>BAKEPACKS – Bakery Packaging Solutions</b></p>
        <p>Phone: {site.phone}</p><p>WhatsApp: {site.whatsapp || '[Insert Official WhatsApp Number]'}</p><p>Email: {site.email || '[Insert Official Email Address]'}</p><p>Address: {site.address}</p><p>Business Hours: {site.hours}</p></aside>
    </div></section>

    {/* Moved here from the old "Why Choose Us" page */}
    <section className="sec tint"><div className="wrap narrow"><Head title="Frequently asked questions" />
      {faqs.map(([q, a], i) => (
        <div key={q} className={'faq' + (open === i ? ' open' : '')}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}<b>+</b></button>
          <div className="ans"><div><p>{a}</p></div></div>
        </div>))}</div></section>
  </>)
}
