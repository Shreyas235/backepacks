import { useRoute } from './router.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'

// To add a page: create it in /pages, import it, add a line here and in data/site.js nav.
const routes = { '/': Home, '/about': About, '/products': Products, '/contact': Contact }

export default function App() {
  const route = useRoute()
  const Page = routes[route] || Home
  return (<><Header route={route} /><main key={route} className="page"><Page /></main><Footer /></>)
}
