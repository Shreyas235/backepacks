import { Banner, Head, CTA } from '../components/Buttons.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { values, reasons } from '../data/site.js'
export default function About() {
  return (<>
    <Banner title="About BAKEPACKS – Your Bakery Packaging Solutions Partner" sub="Helping bakeries and food businesses explore practical, presentable and requirement-based packaging solutions." />
    <section className="sec"><div className="wrap split">
      <div><h2>Who we are</h2>
        <p>BAKEPACKS is a bakery packaging solutions brand focused on helping businesses find packaging options suited to their products and operational requirements.</p>
        <p>Packaging is not just about placing a product inside a box or bag. It is about protecting the product, maintaining its presentation and creating a positive experience for customers.</p>
        <p>From bakery packaging and paper bags to customised packaging enquiries, we aim to understand each customer's requirement and explore suitable solutions. We believe every business deserves packaging that reflects the quality and identity of its products.</p></div>
      <Placeholder label="Our team / workspace" />
    </div></section>
    <section className="sec tint"><div className="wrap grid2">
      <div className="tile"><h3>Our vision</h3><p>To become a trusted packaging solutions partner for bakeries, cafés, confectioneries and food businesses by providing packaging options that support product presentation, convenience and business growth.</p></div>
      <div className="tile"><h3>Our mission</h3><p>To understand the individual packaging requirements of businesses and help them identify suitable solutions through product-focused recommendations, customisation discussions and customer-oriented service.</p></div>
    </div></section>
    <section className="sec"><div className="wrap"><Head title="Our values" />
      <div className="grid5">{values.map(([t, d]) => <div key={t} className="tile"><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    {/* Moved here from the old "Why Choose Us" page */}
    <section className="sec tint"><div className="wrap">
      <Head title="Why choose BAKEPACKS: We Focus on Your Requirement, Not Just the Product." sub="Choosing packaging is an important business decision. The right solution should consider your product, budget, quantity, branding and intended application." />
      <div className="grid3">{reasons.map(([t, d]) => <div key={t} className="tile"><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
    {/* One section, two columns: supplier checklist (left) + our approach (right) */}
    <section className="sec"><div className="wrap cols">
      <div>
        <h2>What should you look for in a packaging supplier?</h2>
        <p>Consider product suitability, customisation options, clear specifications, transparent quotations, responsive communication and dependable supply coordination. BAKEPACKS aims to build its service around these expectations.</p>
      </div>
      <div>
        <h2>We Understand Your Product Before We Discuss Your Packaging.</h2>
        <p>Different products need different packaging considerations. A cake, a pastry, a takeaway meal and a packaged food product cannot always use the same packaging format.</p>
        <p>That is why we encourage our customers to share their product details, dimensions, quantity and intended usage. This helps us understand their requirements and discuss suitable packaging options.</p>
        <p className="note">Client input needed: company background, establishment year, founder / management profile, business journey and operating locations.</p>
      </div>
    </div></section>
    <CTA title="Let's talk about your packaging" />
  </>)
}