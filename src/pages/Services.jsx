import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    title: 'Web App / Dashboard',
    desc: 'Sistem internal: transaksi, laporan, manajemen data. Dibangun dengan teknologi modern yang cepat dan maintainable.',
    icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3',
  },
  {
    title: 'Company Profile',
    desc: 'Website company profile yang profesional dan berkesan. Desain custom sesuai identitas brand kamu.',
    icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
  },
  {
    title: 'Landing Page',
    desc: 'Landing page yang convert. Dioptimalkan untuk konversi, SEO, dan kecepatan loading di semua device.',
    icon: 'M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM9 6h.008v.008H9V6zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12.75 6h.008v.008h-.008V6zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
  },
  {
    title: 'Konsultasi IT',
    desc: 'Butuh arahan teknis? Kita bantu pilih stack, arsitektur, dan solusi yang paling cocok buat kebutuhan bisnis kamu.',
    icon: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155',
  },
]

export default function Services() {
  useReveal()

  useEffect(() => {
    document.title = 'Jasa | Kraton Tech'
  }, [])

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-reveal mb-10 sm:mb-12">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Jasa</h1>
          <p className="mt-2 text-slate-600 max-w-xl">
            Pilih yang sesuai kebutuhan, bukan yang paling keren di slide. Kami fokus ke solusi nyata.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="section-reveal hover-card group rounded-2xl border bg-white p-6 cursor-default"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-200 group-hover:bg-indigo-600 group-hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h2 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
                {s.title}
              </h2>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="section-reveal mt-12 rounded-2xl bg-slate-900 p-6 sm:p-8 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold">Butuh jasa yang belum ada di sini?</h2>
          <p className="mt-2 text-slate-400 text-sm">Ceritain kebutuhan kamu, kita diskusiin bareng.</p>
          <Link
            to="/contact"
            className="btn-press mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all duration-200 hover:bg-slate-100 hover:-translate-y-0.5"
          >
            Diskusi Sekarang
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
