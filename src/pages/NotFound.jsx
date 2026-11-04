import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Halaman Tidak Ditemukan | Kraton Tech'
    // Cegah halaman ini diindeks mesin pencari
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <section className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-px w-8 bg-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Error 404</span>
          </div>
          <h1 className="text-6xl font-extrabold leading-none text-white sm:text-8xl">404</h1>
          <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-4xl">
            Halaman <span className="text-indigo-400">Tidak Ditemukan</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Alamat yang Anda tuju tidak tersedia atau sudah dipindahkan. Periksa kembali URL-nya, atau kembali ke halaman utama.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Link to="/" className="btn-press inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500">
              Kembali ke Beranda
            </Link>
            <Link to="/contact" className="btn-press inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-slate-500 hover:bg-slate-800">
              Hubungi Kami
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
