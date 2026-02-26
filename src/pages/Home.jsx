import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const tags = ['Web', 'Mobile', 'Sistem Internal', 'Maintenance']
const benefits = [
  'UI responsif (mobile sampai desktop)',
  'Struktur code rapi & scalable',
  'SEO basic & performa optimal',
  'Support & maintenance (opsional)',
]
const stats = [
  { num: '10+', label: 'Project selesai' },
  { num: '1+', label: 'Tahun pengalaman' },
  { num: '100%', label: 'Klien puas' },
]

export default function Home() {
  useReveal()

  useEffect(() => {
    document.title = 'Kraton Tech | Company Profile'
  }, [])

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 left-1/2 h-96 w-96 sm:h-[420px] sm:w-[420px] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute top-40 -right-40 h-80 w-80 rounded-full bg-fuchsia-400/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Text */}
            <div className="space-y-5 section-reveal" style={{ transitionDelay: '0s' }}>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available untuk project baru
              </div>

              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-4xl lg:text-5xl">
                Bangun website & aplikasi yang{' '}
                <span className="text-indigo-600">rapi, cepat,</span> dan siap dipakai bisnis.
              </h1>

              <p className="max-w-prose text-slate-600 text-sm sm:text-base leading-relaxed">
                Kraton Tech bantu kamu dari landing page sampai sistem internal. Fokus ke hasil, bukan janji-janji.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="btn-press inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-700 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Lihat Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="btn-press inline-flex items-center gap-2 rounded-xl border bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-900 backdrop-blur transition-all duration-200 hover:bg-white hover:shadow-sm hover:-translate-y-0.5"
                >
                  Hubungi Kami
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-white/70 px-3 py-1 backdrop-blur transition-colors duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Card */}
            <div className="section-reveal hover-card rounded-2xl border bg-white/70 p-6 sm:p-8 shadow-sm backdrop-blur" style={{ transitionDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                <h2 className="text-lg font-bold">Yang kamu dapat</h2>
              </div>
              <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs text-slate-500">Mulai dari konsultasi gratis. Tidak ada biaya tersembunyi.</p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mt-16 sm:mt-20 section-reveal grid grid-cols-2 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="hover-card rounded-2xl border bg-white/60 px-5 py-5 text-center backdrop-blur">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">{stat.num}</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
