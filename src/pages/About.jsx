import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: '50+', label: 'Total Proyek Selesai' },
  { value: '30+', label: 'Klien Aktif' },
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '99%', label: 'Uptime Garansi' },
]

const visionMission = [
  { type: 'Visi Kami', text: 'Menjadi perusahaan teknologi terpercaya dalam bidang digital solution, networking, dan transformasi teknologi modern di tingkat global.' },
  { type: 'Misi Kami', items: ['Mengembangkan solusi teknologi yang inovatif dan tepat guna.', 'Membantu berbagai skala bisnis dalam melakukan transformasi teknologi secara mulus.', 'Menyediakan layanan networking dan infrastruktur server yang profesional dan berkinerja tinggi.', 'Menjadi partner IT consultant yang terpercaya dan solutif.', 'Mengembangkan kapasitas sumber daya manusia yang unggul di bidang teknologi.'] },
]

const services = [
  { icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" /></svg>), title: 'Network Infrastructure', desc: 'Desain dan implementasi jaringan enterprise — LAN, WAN, SD-WAN, dan managed connectivity untuk skala bisnis apapun.' },
  { icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>), title: 'Cloud Solutions', desc: 'Migrasi, orkestrasi, dan manajemen cloud — AWS, Azure, Google Cloud — dengan arsitektur yang optimal dan efisien biaya.' },
  { icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>), title: 'Cyber Security', desc: 'Penilaian keamanan, penetration testing, SOC monitoring, dan implementasi zero-trust architecture untuk proteksi aset digital.' },
  { icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>), title: 'Digital Platform Development', desc: 'Pengembangan aplikasi web dan sistem enterprise — dari company profile hingga platform SaaS skala besar yang production-ready.' },
]

const values = [
  { title: 'Reliability First', desc: 'Setiap sistem yang kami bangun dirancang untuk uptime tinggi dan performa konsisten dalam kondisi apapun.' },
  { title: 'Security by Design', desc: 'Keamanan bukan tambahan — kami integrasikan sejak tahap arsitektur hingga deployment.' },
  { title: 'Scalable Architecture', desc: 'Solusi kami tumbuh bersama bisnis Anda — dari startup hingga enterprise tanpa refactor besar.' },
]

export default function About() {
  useReveal()
  useEffect(() => { document.title = 'Tentang | Kraton Tech' }, [])

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900 transition-colors duration-300">
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal flex items-center gap-2 mb-6"><div className="h-px w-8 bg-indigo-400" /><span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Tentang Kami</span></div>
            <h1 className="section-reveal text-3xl font-extrabold text-white sm:text-5xl leading-tight">Infrastruktur Digital <br /><span className="text-indigo-400">untuk Bisnis Modern</span></h1>
            <p className="section-reveal mt-6 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
              <span className="font-semibold text-slate-200">Kraton Tech</span> adalah perusahaan teknologi yang bergerak di bidang <span className="italic">digital solution, networking infrastructure, server management, cloud technology</span>, serta IT consultant.
            </p>
            <div className="section-reveal mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (<div key={s.label}><p className="text-3xl font-extrabold text-white">{s.value}</p><p className="mt-1 text-xs text-slate-500 uppercase tracking-wide">{s.label}</p></div>))}
            </div>
            <div className="section-reveal mt-10">
              <a href="/compro.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                Download Company Profile
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* VISION & MISSION */}
          <section className="py-16 border-b border-slate-100 dark:border-slate-800">
            <div className="section-reveal mb-8"><span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Arah Perusahaan</span><h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Visi & Misi</h2></div>
            <div className="grid gap-6 sm:grid-cols-2">
              {visionMission.map((item) => (
                <div key={item.type} className="section-reveal rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-6">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-1"><span className="text-xs font-bold text-white uppercase tracking-wider">{item.type}</span></div>
                  {item.text && <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{item.text}</p>}
                  {item.items && <ul className="space-y-2">{item.items.map((point) => (<li key={point} className="flex gap-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" /><span>{point}</span></li>))}</ul>}
                </div>
              ))}
            </div>
          </section>

          {/* CORE SERVICES */}
          <section className="py-16 border-b border-slate-100 dark:border-slate-800">
            <div className="section-reveal mb-8"><span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Kompetensi Inti</span><h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Fokus Layanan</h2></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((s, i) => (
                <div key={s.title} className="section-reveal hover-card group flex gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 transition-all duration-200 hover:border-indigo-200 dark:hover:border-indigo-600 hover:bg-indigo-50/40 dark:hover:bg-indigo-900/10" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">{s.icon}</div>
                  <div><h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{s.title}</h3><p className="mt-1 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          {/* VALUES */}
          <section className="py-16 border-b border-slate-100 dark:border-slate-800">
            <div className="section-reveal mb-8"><span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Prinsip Kerja</span><h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Nilai Kami</h2></div>
            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((v, i) => (
                <div key={v.title} className="section-reveal hover-card rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="mb-3 h-1 w-8 rounded-full bg-indigo-600" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{v.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="section-reveal flex flex-col gap-6 rounded-2xl bg-slate-950 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">Enterprise Consultation</p>
                <h3 className="text-lg font-bold text-white sm:text-xl">Siap mendiskusikan kebutuhan teknologi Anda?</h3>
                <p className="mt-1 text-sm text-slate-400">Konsultasi teknis gratis. Tim kami siap membantu.</p>
              </div>
              <Link to="/contact" className="btn-press shrink-0 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:-translate-y-0.5">
                Hubungi Kami
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
