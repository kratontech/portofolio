import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const values = [
  {
    title: 'Fokus ke Hasil',
    desc: 'Kami tidak menjual mimpi. Setiap project diukur dari dampak nyata buat bisnis kamu.',
  },
  {
    title: 'Kode Bersih',
    desc: 'Maintainable dari hari pertama. Bukan sekadar jalan, tapi mudah dikembangkan.',
  },
  {
    title: 'Transparan',
    desc: 'Update berkala, komunikasi jelas. Kamu selalu tahu apa yang sedang dikerjakan.',
  },
]

export default function About() {
  useReveal()

  useEffect(() => {
    document.title = 'Tentang | Kraton Tech'
  }, [])

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-reveal">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Tentang Kraton Tech</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-indigo-600" />
        </div>

        {/* About text */}
        <div className="section-reveal mt-8 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            Kraton Tech adalah partner teknologi yang menghadirkan solusi digital modern untuk mendukung pertumbuhan bisnis.
            Berfokus pada pengembangan website company profile, aplikasi berbasis web, serta layanan jaringan, kami membantu
            bisnis membangun identitas digital yang profesional dan terpercaya.
          </p>
          <p>
            Kami percaya bahwa setiap bisnis memiliki cerita dan potensi yang unik. Oleh karena itu, Kraton Tech menghadirkan
            solusi yang tidak hanya fungsional, tetapi juga dirancang untuk memperkuat citra dan meningkatkan daya saing di
            era digital.
          </p>
          <p>
            Dengan pendekatan yang adaptif, pengerjaan yang detail, dan komitmen terhadap kualitas, Kraton Tech siap menjadi
            bagian dari perjalanan transformasi digital Anda—dari ide, menjadi solusi nyata yang berdampak.
          </p>
        </div>

        {/* Values */}
        <div className="mt-12">
          <h2 className="section-reveal text-xl font-bold text-slate-900 sm:text-2xl">Nilai yang kami pegang</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="section-reveal hover-card rounded-2xl border bg-white p-5"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="mb-2 h-1 w-8 rounded-full bg-indigo-600" />
                <h3 className="font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="section-reveal mt-12 flex flex-col items-start gap-4 rounded-2xl border bg-indigo-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-bold text-slate-900">Tertarik bekerja sama?</h3>
            <p className="mt-1 text-sm text-slate-600">Konsultasi pertama gratis. Tidak ada komitmen.</p>
          </div>
          <Link
            to="/contact"
            className="btn-press shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-700 hover:-translate-y-0.5"
          >
            Hubungi Kami
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
