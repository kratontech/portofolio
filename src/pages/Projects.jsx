import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    title: 'Website Profile UKM Adcom',
    desc: 'Website profile komunitas Android Developer dengan tampilan modern dan interaktif.',
    tags: ['Web', 'Company Profile'],
    status: 'Selesai',
    image: '/images/projects/adcom.png',
    url: 'https://adcom-stmikikmi.netlify.app/',
  },
  {
    title: 'Website Profile Himatif',
    desc: 'Website profile himpunan teknik informatika dengan desain informatif dan profesional.',
    tags: ['Web', 'Company Profile'],
    status: 'Selesai',
    image: '/images/projects/himatif.png',
    url: 'https://himatif-stmik.netlify.app/',
  },
  {
    title: 'Website Pencari Kerja',
    desc: 'Platform pencari kerja yang menampilkan berbagai lowongan pekerjaan dengan fitur pencarian dan filter.',
    tags: ['Web App', 'Career Platform'],
    status: 'Selesai',
    image: '/images/projects/karir.png',
    url: 'https://ddhodi.github.io/karircirebon.github.io/',
  },
]

export default function Projects() {
  useReveal()

  useEffect(() => {
    document.title = 'Project | Kraton Tech'
  }, [])

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-reveal mb-10 sm:mb-12">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Project</h1>
          <p className="mt-2 text-slate-600 max-w-xl">
            Sebagian contoh dari yang pernah kami kerjakan. Setiap project punya cerita dan tantangan unik.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="section-reveal group block rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                    Lihat Website →
                  </span>
                </div>

                {/* Status */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h2 className="font-semibold text-slate-900 transition-colors duration-200 group-hover:text-indigo-600">
                  {project.title}
                </h2>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{project.desc}</p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="section-reveal mt-12 flex flex-col gap-4 items-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-8 text-center">
          <h3 className="font-bold text-slate-900">Project kamu bisa jadi yang berikutnya</h3>
          <p className="mt-1 text-sm text-slate-600">Ceritain ide kamu, kita wujudkan bersama.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 hover:-translate-y-0.5"
          >
            Mulai Diskusi
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
