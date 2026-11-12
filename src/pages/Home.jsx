import { Btn, Head, CTA } from '../components/Buttons.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { Link } from '../router.jsx'
import { categories, matters, industries, reasons, steps } from '../data/site.js'
export default function Home() {
  return (<>
    <section className="hero"><div className="wrap split">
      <div className="hero-text">
        <h1>Bakery Packaging Solutions That Make Every Product Special</h1>
        <p>Discover practical and attractive bakery packaging solutions designed around your products and business requirements. From bakery boxes and paper bags to customised food packaging, BAKEPACKS helps businesses explore packaging that combines functionality, presentation and convenience.</p>
        <div className="row"><Btn to="/products">Explore Our Products</Btn><Btn to="/contact" ghost>Request a Quote</Btn></div>
      </div>
      <Placeholder label="Hero – bakery box" ratio="5 / 4" />
    </div></section>

    <section className="sec"><div className="wrap split">
      <Placeholder label="Packaging in a bakery" ratio="1 / 1" />
      <div><h2>More Than Packaging. It's Your Product's First Impression.</h2>
        <p>Packaging plays an important role in how customers experience your products. It protects your products, makes handling convenient and communicates your brand identity even before the customer opens the package.</p>
        <p>Whether you operate a neighbourhood bakery, a premium confectionery, a café or a growing food brand, we help you explore packaging options based on your product dimensions, quantity, presentation and business needs.</p>
        <p>Our objective is simple: to help businesses find packaging solutions that work for their products and support their brand image.</p></div>
    </div></section>

    <section className="sec tint"><div className="wrap">
      <Head title="Our product categories" sub="From everyday bakery packaging to customised packaging requirements, explore solutions for different food products and business applications." />
      <div className="grid4">{categories.map(c => (
        <Link key={c.t} to="/products" className="card"><Placeholder label={c.t} /><div className="pad"><h3>{c.t}</h3><p>{c.d}</p><small>{c.a.slice(0, 4).join(' · ')}</small></div></Link>))}</div>
    </div></section>

    <section className="sec"><div className="wrap">
      <Head title="The Right Packaging Makes a Difference." sub="Great products deserve equally thoughtful packaging. The right packaging helps businesses maintain product presentation, improve convenience and create a consistent experience for their customers." />
      <div className="grid4">{matters.map(([t, d]) => <div key={t} className="tile"><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>

    <section className="sec dark"><div className="wrap">
      <Head title="Industries we serve" sub="Every food business has its own packaging requirements. BAKEPACKS aims to support different businesses with packaging options based on their products and applications." />
      <div className="chips">{industries.map(i => <Link key={i.t} to="/industries" className="chip">{i.t}</Link>)}</div>
    </div></section>

    <section className="sec"><div className="wrap">
      <Head title="Why choose BAKEPACKS?" sub="Packaging should be selected based on the product, the customer and the business requirement. We focus on understanding your needs first." />
      <div className="grid3">{reasons.map(([t, d]) => <div key={t} className="tile"><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>

    <section className="sec tint"><div className="wrap">
      <Head title="How it works" sub="Getting your packaging requirement started is simple." />
      <ol className="steps">{steps.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>

    <section className="sec"><div className="wrap">
      <Head title="What Our Customers Say" sub="Customer satisfaction and long-term business relationships are important to us." />
      <div className="tile quote"><p>Genuine customer feedback will appear here once approved.</p><small>Customer name · Business name</small></div>
    </div></section>

    <CTA title="Looking for the Right Packaging for Your Business?" text="Whether you need everyday bakery packaging or want to explore customised packaging for your brand, BAKEPACKS is ready to understand your requirements. Tell us what you make, how you pack it and what you need." />
  </>)
}
