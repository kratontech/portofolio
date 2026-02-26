import { Link } from 'react-router-dom'

const nav = [
  { href: '/services', label: 'Jasa' },
  { href: '/projects', label: 'Project' },
  { href: '/about', label: 'Tentang' },
  { href: '/contact', label: 'Kontak' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-white/70 backdrop-blur-md mt-8">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="space-y-2">
            <Link to="/" className="font-extrabold tracking-tight text-lg">
              Kraton <span className="text-indigo-600">Tech</span>
            </Link>
            <p className="text-xs text-slate-500 max-w-[220px]">Build fast. Ship clean. Maintainable.</p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-slate-600 transition-colors duration-200 hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Kraton Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
