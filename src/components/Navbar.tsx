import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Indian Film Desk', to: '/indian-film-desk' },
  { label: 'Hollywood & Streamers', to: '/hollywood' },
  { label: 'Europe & North America', to: '/europe' },
  { label: 'Locations', to: '/locations' },
  { label: 'Services', to: '/services' },
  { label: 'Permits', to: '/permits' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const shellClassName = isHome
    ? 'absolute top-0 left-0 w-full z-50 p-6 md:p-8 flex items-start justify-between text-white'
    : 'absolute top-0 left-0 w-full z-50 p-6 md:p-8 flex items-start justify-between text-neutral-950'
  const logoAccentClassName = 'text-[#FF4A00]'
  const secondaryLinkClassName = isHome
    ? 'text-white/75 hover:text-white'
    : 'text-neutral-500 hover:text-neutral-950'

  return (
    <>
      <nav className={shellClassName}>
        <Link to="/" className="leading-none">
          <span className="block font-black text-xl md:text-2xl uppercase tracking-tighter">
            Film
          </span>
          <span className={`block font-black text-xl md:text-2xl uppercase tracking-tighter ${logoAccentClassName}`}>
            Ceylon
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden lg:flex items-center gap-5 text-xs font-bold uppercase tracking-[0.18em]">
            <NavLink
              to="/indian-film-desk"
              className={({ isActive }) =>
                isActive ? 'text-[#FF4A00]' : secondaryLinkClassName
              }
            >
              Indian Desk
            </NavLink>
            <NavLink
              to="/hollywood"
              className={({ isActive }) =>
                isActive ? 'text-[#FF4A00]' : secondaryLinkClassName
              }
            >
              Hollywood
            </NavLink>
            <NavLink
              to="/locations"
              className={({ isActive }) =>
                isActive ? 'text-[#FF4A00]' : secondaryLinkClassName
              }
            >
              Locations
            </NavLink>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] transition-colors ${
                isActive
                  ? 'bg-[#FF4A00] text-white'
                  : isHome
                    ? 'border border-white/30 text-white hover:border-white hover:bg-white hover:text-neutral-950'
                    : 'border border-neutral-300 text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white'
              }`
            }
          >
            Contact Desk
          </NavLink>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 uppercase font-bold tracking-tight text-sm cursor-pointer"
          >
            Menu
            <span className="block w-2 h-2 rounded-full bg-[#FF4A00]" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-[#111] text-[#F4F4F0] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="leading-none"
              >
                <span className="block font-black text-xl md:text-2xl uppercase tracking-tighter">
                  Film
                </span>
                <span className="block font-black text-xl md:text-2xl uppercase tracking-tighter text-[#FF4A00]">
                  Ceylon
                </span>
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.9] transition-colors ${
                    location.pathname === link.to ? 'text-[#FF4A00]' : 'hover:text-[#FF4A00]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 text-neutral-500 text-sm">
              Powered by Ravana Industries
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
