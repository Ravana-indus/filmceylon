import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Indian Film Desk', to: '/indian-film-desk' },
  { label: 'Hollywood & International', to: '/hollywood' },
  { label: 'Europe Desk', to: '/europe' },
  { label: 'Locations', to: '/locations' },
  { label: 'Permits', to: '/permits' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex items-start justify-between mix-blend-difference text-white">
        <Link to="/" className="leading-none">
          <span className="block font-black text-xl md:text-2xl uppercase tracking-tighter">
            Film
          </span>
          <span className="block font-black text-xl md:text-2xl uppercase tracking-tighter text-[#FF4A00]">
            Ceylon
          </span>
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 uppercase font-bold tracking-tight text-sm cursor-pointer"
        >
          Menu
          <span className="block w-2 h-2 rounded-full bg-[#FF4A00]" />
        </button>
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
                  className="block text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.9] hover:text-[#FF4A00] transition-colors"
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
