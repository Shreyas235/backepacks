import { Banner, Head, Btn } from '../components/Buttons.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { categories, industries } from '../data/site.js'
export default function Products() {
  return (<>
    <Banner title="Bakery Packaging Products and Custom Packaging Solutions" sub="Explore packaging categories for bakeries, cafés, confectioneries and food businesses." />
    {categories.map((c, i) => (
      <section key={c.t} className={'sec' + (i % 2 ? ' tint' : '')}><div className={'wrap split' + (i % 2 ? ' flip' : '')}>
        <Placeholder label={c.t} />
        <div><h2>{c.t}</h2><h3 className="sub">{c.h}</h3><p>{c.d}</p>
          <ul className="tags">{c.a.map(a => <li key={a}>{a}</li>)}</ul></div>
      </div></section>))}

    {/* Moved here from the old "Industries We Serve" page */}
    <section className="sec"><div className="wrap">
      <Head title="Packaging Solutions for Every Food Business" sub="From neighbourhood bakeries to growing food brands, explore packaging options based on your business requirements." />
      <div className="grid3">{industries.map(i => (
        <article key={i.t} className="card"><Placeholder label={i.t} /><div className="pad"><h3>{i.t}</h3><p>{i.d}</p></div></article>))}</div>
    </div></section>

    <section className="sec tint"><div className="wrap narrow center"><Head title="Can't Find the Packaging You Are Looking For?" sub="Every business has unique requirements. Share a product photograph, sample dimensions or packaging reference with our team. We will understand your requirement and discuss the next steps." />
      <Btn to="/contact">Send Your Requirement</Btn></div></section>
  </>)
}
