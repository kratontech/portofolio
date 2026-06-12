import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    id: 'digital', label: '01', title: 'Digital Solution',
    summary: 'Pengembangan platform digital end-to-end — dari website hingga sistem terintegrasi.',
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>),
    items: [
      { name: 'Website Development', desc: 'Company profile, landing page, dan web marketing yang performant dan SEO-ready.' },
      { name: 'Web Application', desc: 'Dashboard, sistem manajemen, dan aplikasi bisnis berbasis browser.' },
      { name: 'Mobile Application', desc: 'Aplikasi Android & iOS native maupun cross-platform dengan UX optimal.' },
      { name: 'System Integration', desc: 'Integrasi antar sistem, API, dan layanan pihak ketiga secara seamless.' },
    ],
  },
  {
    id: 'network', label: '02', title: 'Networking & Infrastructure',
    summary: 'Perancangan dan implementasi jaringan enterprise yang andal, terstruktur, dan mudah dikelola.',
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" /></svg>),
    items: [
      { name: 'Network Configuration', desc: 'Desain dan konfigurasi jaringan LAN/WAN untuk lingkungan kantor hingga multi-site.' },
      { name: 'Mikrotik Configuration', desc: 'Setup RouterOS, bandwidth management, hotspot, dan VLAN berbasis Mikrotik.' },
      { name: 'Routing & Switching', desc: 'Konfigurasi perangkat Cisco, HP, Ubiquiti, dan vendor lainnya sesuai standar enterprise.' },
      { name: 'VPN Setup', desc: 'Implementasi site-to-site VPN dan remote access yang aman untuk tim terdistribusi.' },
      { name: 'Network Monitoring', desc: 'Pemantauan jaringan real-time dengan alerting dan dashboard manajemen terpusat.' },
    ],
  },
  {
    id: 'cloud', label: '03', title: 'Server & Cloud Services',
    summary: 'Manajemen server dan infrastruktur cloud — on-premise maupun hybrid — dengan keandalan tinggi.',
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>),
    items: [
      { name: 'Linux & Windows Server', desc: 'Instalasi, konfigurasi, dan hardening server Linux (Ubuntu, CentOS) dan Windows Server.' },
      { name: 'Cloud Deployment', desc: 'Deploy aplikasi dan infrastruktur di AWS, Azure, atau Google Cloud dengan best practice.' },
      { name: 'VPS Management', desc: 'Pengelolaan VPS mulai dari provisioning, monitoring, hingga optimasi performa.' },
      { name: 'Server Migration', desc: 'Migrasi data, aplikasi, dan layanan antar server tanpa downtime signifikan.' },
      { name: 'Virtualization', desc: 'Implementasi virtualisasi berbasis Proxmox, VMware, atau KVM untuk efisiensi resource.' },
    ],
  },
  {
    id: 'security', label: '04', title: 'Cyber Security',
    summary: 'Perlindungan infrastruktur dan aset digital dengan pendekatan keamanan berlapis.',
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>),
    items: [
      { name: 'Security Hardening', desc: 'Penguatan konfigurasi server, OS, dan jaringan untuk meminimalkan attack surface.' },
      { name: 'Basic Penetration Testing', desc: 'Simulasi serangan terkontrol untuk menguji ketahanan sistem dan jaringan.' },
      { name: 'Firewall Configuration', desc: 'Setup dan tuning firewall (pfSense, iptables, Fortinet) sesuai kebijakan keamanan organisasi.' },
      { name: 'Security Assessment', desc: 'Audit keamanan menyeluruh untuk mengidentifikasi celah dan risiko pada infrastruktur.' },
    ],
  },
  {
    id: 'consultant', label: '05', title: 'IT Consultant',
    summary: 'Pendampingan strategis dan teknis untuk memastikan investasi teknologi memberikan hasil optimal.',
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>),
    items: [
      { name: 'Technology Planning', desc: 'Penyusunan roadmap teknologi jangka pendek dan panjang sesuai visi bisnis.' },
      { name: 'Infrastructure Design', desc: 'Perancangan arsitektur infrastruktur yang skalabel, efisien, dan future-proof.' },
      { name: 'Digital Transformation Strategy', desc: 'Panduan transformasi digital menyeluruh — dari proses, sistem, hingga SDM.' },
      { name: 'IT Support & Maintenance', desc: 'Dukungan teknis berkelanjutan dan pemeliharaan infrastruktur secara proaktif.' },
    ],
  },
]

export default function Services() {
  useReveal()
  useEffect(() => { document.title = 'Layanan | Kraton Tech' }, [])

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900 transition-colors duration-300">

        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal flex items-center gap-2 mb-6"><div className="h-px w-8 bg-indigo-400" /><span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Layanan</span></div>
            <h1 className="section-reveal text-3xl font-extrabold text-white sm:text-5xl leading-tight">Solusi Teknologi <br /><span className="text-indigo-400">Terintegrasi & Terukur</span></h1>
            <p className="section-reveal mt-6 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
              Dari infrastruktur jaringan hingga keamanan siber dan pengembangan platform digital — semua dalam satu mitra teknologi yang berpengalaman.
            </p>
            <div className="section-reveal mt-10 flex flex-wrap gap-2">
              {services.map((s) => (
                <span key={s.id} className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
                  <span className="text-indigo-400 font-bold">{s.label}</span>{s.title}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE SECTIONS */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
          {services.map((s, si) => (
            <div key={s.id}
              className="section-reveal rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden"
              style={{ transitionDelay: `${si * 0.04}s` }}>
              <div className="flex items-start gap-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-700/30 px-6 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">{s.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-indigo-400 tracking-widest">{s.label}</span>
                    <h2 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">{s.title}</h2>
                  </div>
                  <p className="mt-0.5 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{s.summary}</p>
                </div>
              </div>
              <div className="grid gap-px bg-slate-100 dark:bg-slate-700 sm:grid-cols-2">
                {s.items.map((item) => (
                  <div key={item.name} className="group bg-white dark:bg-slate-800 px-6 py-4 transition-colors duration-150 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20">
                    <div className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-150">{item.name}</p>
                        <p className="mt-0.5 text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="section-reveal flex flex-col gap-6 rounded-2xl bg-slate-950 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">Enterprise Consultation</p>
              <h3 className="text-lg font-bold text-white sm:text-xl">Ada kebutuhan di luar daftar layanan ini?</h3>
              <p className="mt-1 text-sm text-slate-400">Diskusikan dengan tim kami — konsultasi teknis pertama gratis.</p>
            </div>
            <Link to="/contact" className="btn-press shrink-0 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:-translate-y-0.5">
              Hubungi Kami
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
