import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'

const nav = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/services', label: 'Layanan' },
  { href: '/projects', label: 'Portofolio' },
  { href: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [dark, setDark] = useDarkMode()
  const location = useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b border-white/20 dark:border-slate-700/50 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]' : ''}`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 font-extrabold tracking-tight text-lg">
            <img src="/logo.png" alt="Kraton Tech Logo" className="h-8 w-8 object-contain transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]" />
            <span className="text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-slate-600 dark:group-hover:text-slate-300">
              Kraton<span className="text-indigo-600 dark:text-indigo-400 transition-all duration-200 group-hover:text-indigo-500">tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop + Dark Toggle */}
          <div className="hidden md:flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            >
              {dark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <a
              href="/compro.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-700 dark:hover:text-indigo-400 hover:-translate-y-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Profil Perusahaan
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-500 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Konsultasi
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Hamburger + Dark Toggle Mobile */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {dark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
            <button
              aria-label="Buka/tutup menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 origin-center ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 origin-center ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 origin-center ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="overflow-hidden md:hidden"
          style={{
            maxHeight: menuOpen ? '400px' : '0',
            transition: menuOpen
              ? 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)'
              : 'max-height 0.25s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div
            className="border-t border-white/20 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 pb-4 pt-3 sm:px-6"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.98)',
              transition: menuOpen
                ? 'opacity 0.3s ease 0.05s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1) 0.05s'
                : 'opacity 0.2s ease, transform 0.2s ease',
            }}
          >
            <nav className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(-10px)',
                    transition: menuOpen
                      ? `opacity 0.25s ease ${0.08 + i * 0.05}s, transform 0.25s ease ${0.08 + i * 0.05}s`
                      : 'opacity 0.15s ease, transform 0.15s ease',
                  }}
                >
                  {isActive(item.href) && <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />}
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 border-t border-slate-100 dark:border-slate-700 pt-4 flex flex-col gap-2">
              <a
                href="/compro.pdf"
                download
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Unduh Profil Perusahaan
              </a>
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 active:scale-95"
              >
                Konsultasi Gratis
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        style={{
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </>
  )
}
