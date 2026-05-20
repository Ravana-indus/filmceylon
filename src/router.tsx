import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import IndianFilmDesk from './pages/IndianFilmDesk'
import Hollywood from './pages/Hollywood'
import Europe from './pages/Europe'
import Locations from './pages/Locations'
import Permits from './pages/Permits'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <Services /> },
      { path: '/indian-film-desk', element: <IndianFilmDesk /> },
      { path: '/hollywood', element: <Hollywood /> },
      { path: '/europe', element: <Europe /> },
      { path: '/locations', element: <Locations /> },
      { path: '/permits', element: <Permits /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])

export default router
