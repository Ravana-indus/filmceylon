import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Indian Film Desk', to: '/indian-film-desk' },
  { label: 'Hollywood', to: '/hollywood' },
  { label: 'Europe', to: '/europe' },
  { label: 'Locations', to: '/locations' },
  { label: 'Permits', to: '/permits' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-500 py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-white font-black uppercase tracking-tighter text-2xl leading-tight">
            Film
            <br />
            <span className="text-[#FF4A00]">Ceylon</span>
          </h3>
          <p className="text-[#FF4A00] text-sm mt-4">
            Powered by Ravana Industries
          </p>
          <p className="mt-4 text-neutral-500 leading-relaxed">
            Helping Indian, European, North American and Hollywood productions
            shoot in Sri Lanka.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-tight text-sm mb-6">
            Navigate
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-medium hover:text-[#FF4A00] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-tight text-sm mb-6">
            Get in Touch
          </h4>
          <div className="space-y-3 font-medium">
            <p>
              <a href="mailto:hello@filmceylon.com" className="hover:text-[#FF4A00] transition-colors">
                hello@filmceylon.com
              </a>
            </p>
            <p>
              <a href="https://wa.me/94770554200" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4A00] transition-colors">
                +94 77 055 4200
              </a>
            </p>
            <p className="text-sm leading-snug text-neutral-400">
              No 10, 30/1/1 Pamankada Ln,<br />Colombo 00600
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© {new Date().getFullYear()} Film Ceylon. All rights reserved.</p>
        <p>Sri Lanka</p>
      </div>
    </footer>
  )
}
