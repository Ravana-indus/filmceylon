import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const pageTitles: Record<string, string> = {
  '/': 'Film Ceylon | Sri Lanka Line Production for Global Shoots',
  '/services': 'Production Services | Film Ceylon',
  '/indian-film-desk': 'Indian Film Desk | Film Ceylon',
  '/hollywood': 'Hollywood & Streamers | Film Ceylon',
  '/europe': 'Europe & North America | Film Ceylon',
  '/locations': 'Film Locations in Sri Lanka | Film Ceylon',
  '/permits': 'Film Permits in Sri Lanka | Film Ceylon',
  '/about': 'About Film Ceylon',
  '/contact': 'Contact Film Ceylon',
}

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? 'Film Ceylon'
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-neutral-950 font-sans selection:bg-[#FF4A00] selection:text-white">
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
