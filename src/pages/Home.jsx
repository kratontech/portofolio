import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const stats = [
  { num: '50+', label: 'Total Proyek Selesai' },
  { num: '30+', label: 'Klien Enterprise' },
  { num: '3+', label: 'Tahun Pengalaman' },
  { num: '99%', label: 'Uptime Garansi' },
]

const coreServices = [
  { label: '01', title: 'Digital Solution', desc: 'Website, web app, mobile app, dan integrasi sistem untuk kebutuhan digital bisnis modern.', icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>) },
  { label: '02', title: 'Networking & Infrastructure', desc: 'Desain jaringan enterprise, Mikrotik, routing & switching, VPN, dan network monitoring.', icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" /></svg>) },
  { label: '03', title: 'Server & Cloud Services', desc: 'Linux/Windows server, cloud deployment, VPS management, migrasi, dan virtualisasi.', icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>) },
  { label: '04', title: 'Cyber Security', desc: 'Security hardening, firewall, security assessment, dan basic penetration testing.', icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>) },
  { label: '05', title: 'IT Consultant', desc: 'Technology planning, infrastructure design, digital transformation strategy, dan IT support.', icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>) },
]

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Linux', category: 'Server' },
  { name: 'Mikrotik', category: 'Network' },
  { name: 'Cisco', category: 'Network' },
  { name: 'VMware', category: 'Virtualization' },
  { name: 'AWS / Azure / GCP', category: 'Cloud' },
]

const reasons = [
  { title: 'Professional Team', desc: 'Tim bersertifikat dengan pengalaman di proyek enterprise skala nasional.', icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>) },
  { title: 'Modern Technology', desc: 'Stack teknologi terkini — cloud-native, containerized, dan production-ready.', icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>) },
  { title: 'Secure Infrastructure', desc: 'Security by design — setiap solusi dibangun dengan standar keamanan enterprise.', icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>) },
  { title: 'Scalable Solutions', desc: 'Arsitektur yang tumbuh bersama bisnis Anda — dari startup hingga korporasi.', icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>) },
]

export default function Home() {
  useReveal()
  useEffect(() => { document.title = 'Kraton Tech | Enterprise IT Solutions' }, [])

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900 transition-colors duration-300">

        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-32">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-indigo-600/10 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Enterprise IT Solutions</span>
            </div>
            <h1 className="section-reveal text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
              Akselerasi{' '}<span className="text-indigo-400">Transformasi Digital</span>{' '}Bisnis Anda
            </h1>
            <p className="section-reveal mt-6 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
              Kraton Tech menghadirkan solusi teknologi enterprise terintegrasi — dari infrastruktur jaringan, cloud & server, keamanan siber, hingga pengembangan platform digital.
            </p>
            <div className="section-reveal mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-press inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:-translate-y-0.5">
                Jadwalkan Konsultasi
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link to="/services" className="btn-press inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-200 hover:border-slate-500 hover:bg-slate-800 hover:-translate-y-0.5">
                Lihat Layanan
              </Link>
            </div>
            <div className="section-reveal mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-slate-800 pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-white">{s.num}</p>
                  <p className="mt-1 text-xs text-slate-500 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="py-16 sm:py-20 border-b border-slate-100 dark:border-slate-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal mb-10">
              <div className="flex items-center gap-2 mb-3"><div className="h-px w-8 bg-indigo-600" /><span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Kompetensi Inti</span></div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Core Services</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm max-w-xl">Layanan enterprise terintegrasi yang dirancang untuk mendukung seluruh aspek infrastruktur dan operasi digital bisnis Anda.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreServices.map((s, i) => (
                <Link key={s.label} to="/services"
                  className="section-reveal hover-card group flex gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 transition-all duration-200 hover:border-indigo-200 dark:hover:border-indigo-600 hover:shadow-sm hover:-translate-y-0.5"
                  style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all duration-200 group-hover:bg-indigo-600 group-hover:text-white">{s.icon}</div>
                  <div>
                    <span className="text-[10px] font-bold text-indigo-400 tracking-widest">{s.label}</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-200">{s.title}</h3>
                    <p className="mt-1 text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              ))}
              <Link to="/services"
                className="section-reveal hover-card group flex items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 p-5 text-sm font-semibold text-slate-500 dark:text-slate-400 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400"
                style={{ transitionDelay: `${coreServices.length * 0.05}s` }}>
                Lihat Semua Layanan
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 sm:py-20 border-b border-slate-100 dark:border-slate-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal mb-10">
              <div className="flex items-center gap-2 mb-3"><div className="h-px w-8 bg-indigo-600" /><span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Keunggulan Kami</span></div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Why Choose Us</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((r, i) => (
                <div key={r.title}
                  className="section-reveal hover-card rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 transition-all duration-200 hover:border-indigo-200 dark:hover:border-indigo-600"
                  style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">{r.icon}</div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">{r.title}</h3>
                  <p className="mt-1.5 text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-16 sm:py-20 border-b border-slate-100 dark:border-slate-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal mb-10">
              <div className="flex items-center gap-2 mb-3"><div className="h-px w-8 bg-indigo-600" /><span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Teknologi</span></div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Technology Stack</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm max-w-xl">Tools dan platform yang kami kuasai untuk menghadirkan solusi enterprise yang handal.</p>
            </div>
            <div className="section-reveal flex flex-wrap gap-3">
              {techStack.map((t, i) => (
                <div key={t.name}
                  className="hover-card group flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 transition-all duration-200 hover:border-indigo-200 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                  style={{ transitionDelay: `${i * 0.03}s` }}>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">{t.name}</span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{t.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal flex flex-col gap-6 rounded-2xl bg-slate-950 p-8 sm:p-12 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">Enterprise Consultation</p>
                <h3 className="text-xl font-bold text-white sm:text-2xl max-w-sm">Siap memulai transformasi digital?</h3>
                <p className="mt-2 text-sm text-slate-400 max-w-sm">Konsultasi infrastruktur gratis bersama tim teknis kami. Tidak ada komitmen awal.</p>
              </div>
              <div className="flex flex-col gap-3 sm:items-end">
                <Link to="/contact" className="btn-press inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:-translate-y-0.5">
                  Jadwalkan Meeting
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
                <Link to="/services" className="text-xs text-slate-500 underline underline-offset-4 hover:text-slate-300 transition-colors">Lihat semua layanan →</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
