import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const categories = ['Semua', 'Company Profile', 'Web Application', 'Mobile App', 'Network Infrastructure', 'Server & Cloud', 'Enterprise Solution']

const projects = [
  { title: 'Website Profile UKM Adcom', category: 'Company Profile', desc: 'Website profile komunitas Android Developer STMIK IKMI dengan tampilan modern dan interaktif.', tech: ['React', 'Tailwind CSS', 'Netlify'], challenge: 'Membangun identitas digital komunitas dengan desain yang mencerminkan semangat developer.', result: 'Peningkatan visibilitas komunitas dan kemudahan rekrutmen anggota baru.', status: 'Selesai', image: '/images/projects/adcom.png', url: 'https://adcom-stmikikmi.netlify.app/' },
  { title: 'Website Profile Himatif', category: 'Company Profile', desc: 'Website profile himpunan teknik informatika dengan desain informatif dan profesional.', tech: ['React', 'Tailwind CSS', 'Netlify'], challenge: 'Menampilkan struktur organisasi, kegiatan, dan informasi akademik secara terstruktur.', result: 'Platform digital resmi himpunan yang aktif digunakan untuk publikasi kegiatan.', status: 'Selesai', image: '/images/projects/himatif.png', url: 'https://himatif-stmik.netlify.app/' },
  { title: 'Platform Pencari Kerja', category: 'Web Application', desc: 'Platform karir lokal yang menampilkan lowongan pekerjaan dengan fitur pencarian dan filter kategori.', tech: ['JavaScript', 'GitHub Pages', 'REST API'], challenge: 'Aggregasi data lowongan kerja dari berbagai sumber dengan performa pencarian yang cepat.', result: 'Membantu ratusan pencari kerja di Cirebon menemukan lowongan yang relevan.', status: 'Selesai', image: '/images/projects/karir.png', url: 'https://ddhodi.github.io/karircirebon.github.io/' },
  { title: 'E-Learning Platform', category: 'Web Application', desc: 'Platform pembelajaran online dengan manajemen kursus, progress tracking, dan sistem sertifikasi digital.', tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'], challenge: 'Membangun sistem autentikasi multi-role (admin, instruktur, siswa) dengan dashboard yang intuitif.', result: 'Mendukung lebih dari 500 pengguna aktif dengan uptime 99.5% selama masa operasional.', status: 'Selesai', image: null, url: null },
  { title: 'KasirKu – POS Vapeshop', category: 'Mobile App', desc: 'Aplikasi kasir Android khusus vapeshop dengan manajemen produk multi-kategori (Device, Liquid, Coil, Aksesoris), transaksi tunai & QRIS, serta laporan penjualan harian.', tech: ['React Native', 'Android', 'SQLite'], challenge: 'Merancang alur kasir yang cepat dengan kategori produk spesifik vapeshop dan dukungan pembayaran QRIS tanpa koneksi server eksternal.', result: 'Proses transaksi lebih terstruktur dengan fitur backup/restore data JSON sehingga data aman saat ganti perangkat.', status: 'Selesai', image: '/images/projects/kasirku.png', url: null },
  { title: 'Network Infrastructure Office', category: 'Network Infrastructure', desc: 'Perancangan dan implementasi jaringan enterprise untuk kantor 3 lantai dengan 80+ endpoint.', tech: ['Mikrotik', 'Cisco', 'VLAN', 'VPN'], challenge: 'Segmentasi jaringan antar divisi dengan bandwidth management dan keamanan akses terpusat.', result: 'Stabilitas jaringan meningkat signifikan, latensi internal turun hingga 60%.', status: 'Selesai', image: null, url: null },
  { title: 'Server Migration & Virtualization', category: 'Server & Cloud', desc: 'Migrasi server fisik ke lingkungan virtual berbasis Proxmox untuk efisiensi resource dan kemudahan manajemen.', tech: ['Proxmox', 'Linux', 'VMware', 'Backup Tools'], challenge: 'Zero-downtime migration dengan memastikan semua layanan berjalan tanpa interupsi selama proses.', result: 'Penghematan biaya operasional 40% dan kemudahan disaster recovery dengan snapshot otomatis.', status: 'Selesai', image: null, url: null },
  { title: 'Enterprise IT Infrastructure', category: 'Enterprise Solution', desc: 'Implementasi infrastruktur IT menyeluruh — jaringan, server, keamanan, dan monitoring terpusat untuk perusahaan manufaktur.', tech: ['Linux', 'Docker', 'Mikrotik', 'Zabbix', 'pfSense'], challenge: 'Integrasi sistem lama (legacy) dengan infrastruktur modern tanpa mengganggu operasional produksi.', result: 'Infrastruktur yang fully monitored dengan alert real-time dan response time insiden < 15 menit.', status: 'Selesai', image: null, url: null },
]

const techColors = {
  'React': 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800',
  'React Native': 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800',
  'Node.js': 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
  'Python': 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
  'Docker': 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  'Linux': 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800',
  'Mikrotik': 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
  'Cisco': 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
  'VMware': 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
  'Proxmox': 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
  'PostgreSQL': 'bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800',
  'Firebase': 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
  'pfSense': 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
  'Zabbix': 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  'VLAN': 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
  'VPN': 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800',
  'Android': 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
  'Tailwind CSS': 'bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800',
  'JavaScript': 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
  'REST API': 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
  'GitHub Pages': 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
  'Netlify': 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800',
  'Backup Tools': 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
  'SQLite': 'bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800',
}

function TechBadge({ name }) {
  const cls = techColors[name] || 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
  return <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium ${cls}`}>{name}</span>
}

export default function Projects() {
  useReveal()
  const [active, setActive] = useState('Semua')

  useEffect(() => {
    document.querySelectorAll('.section-reveal').forEach(el => el.classList.add('visible'))
  }, [active])

  useEffect(() => { document.title = 'Portfolio | Kraton Tech' }, [])

  const filtered = active === 'Semua' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900 transition-colors duration-300">

        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal flex items-center gap-2 mb-6"><div className="h-px w-8 bg-indigo-400" /><span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Portfolio</span></div>
            <h1 className="section-reveal text-3xl font-extrabold text-white sm:text-5xl leading-tight">Proyek yang Telah <br /><span className="text-indigo-400">Kami Selesaikan</span></h1>
            <p className="section-reveal mt-6 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
              Dari pengembangan platform digital hingga implementasi infrastruktur enterprise — setiap proyek diselesaikan dengan standar teknis yang terukur.
            </p>
            <div className="section-reveal mt-8 flex items-center gap-6">
              <div><p className="text-3xl font-extrabold text-white">{projects.length}+</p><p className="mt-0.5 text-xs text-slate-500 uppercase tracking-wide">Proyek Selesai</p></div>
              <div className="h-8 w-px bg-slate-800" />
              <div><p className="text-3xl font-extrabold text-white">{categories.length - 1}</p><p className="mt-0.5 text-xs text-slate-500 uppercase tracking-wide">Kategori Layanan</p></div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">

          {/* FILTER TABS */}
          <div className="section-reveal mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 ${
                  active === cat
                    ? 'border-indigo-600 bg-indigo-600 text-white'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <div className="grid gap-5 sm:grid-cols-2">
            {filtered.map((project) => (
              <div key={project.title}
                className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden transition-all duration-200 hover:border-indigo-200 dark:hover:border-indigo-600 hover:shadow-md hover:-translate-y-0.5">
                {project.image ? (
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={e => e.stopPropagation()}>
                        <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-900 backdrop-blur shadow">Lihat Website →</span>
                      </a>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />{project.status}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-14 items-center justify-between border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 px-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{project.status}
                    </span>
                    <span className="rounded-full bg-indigo-50 dark:bg-indigo-900/40 px-2.5 py-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">{project.category}</span>
                  </div>
                )}

                <div className="p-5">
                  <h2 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-200">{project.title}</h2>
                  <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{project.desc}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/40 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">Challenge</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">Hasil</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map(t => <TechBadge key={t} name={t} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="section-reveal mt-12 flex flex-col gap-6 rounded-2xl bg-slate-950 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">Next Project</p>
              <h3 className="text-lg font-bold text-white sm:text-xl">Proyek Anda bisa menjadi yang berikutnya.</h3>
              <p className="mt-1 text-sm text-slate-400">Diskusikan kebutuhan teknis bersama tim kami.</p>
            </div>
            <Link to="/contact" className="btn-press shrink-0 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:-translate-y-0.5">
              Mulai Diskusi
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
