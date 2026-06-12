import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const contactInfo = [
  {
    label: 'WhatsApp', value: '+62 838-2455-9457', sub: 'Respon dalam hitungan menit',
    href: 'https://wa.me/6283824559457', cta: 'Chat Sekarang',
    icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>),
    accent: 'bg-emerald-600 hover:bg-emerald-500 text-white',
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white',
  },
  {
    label: 'Email', value: 'kratontech@gmail.com', sub: 'Untuk brief & penawaran formal',
    href: 'mailto:kratontech@gmail.com', cta: 'Kirim Email',
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>),
    accent: 'border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-400',
    iconBg: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    label: 'Website', value: 'www.kratontech.id', sub: 'Company profile & portofolio',
    href: 'https://www.kratontech.id', cta: 'Kunjungi',
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>),
    accent: 'border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-400',
    iconBg: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-slate-800 group-hover:text-white',
  },
  {
    label: 'Lokasi', value: 'Cirebon, Jawa Barat', sub: 'Indonesia — Melayani seluruh wilayah',
    href: 'https://maps.google.com/?q=Cirebon,Jawa+Barat,Indonesia', cta: 'Lihat Maps',
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>),
    accent: 'border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-400',
    iconBg: 'bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 group-hover:bg-rose-500 group-hover:text-white',
  },
]

const serviceOptions = ['Digital Solution (Web / Mobile)', 'Networking & Infrastructure', 'Server & Cloud Services', 'Cyber Security', 'IT Consultant', 'Lainnya']

const inputClass = "w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-600 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/40"

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => { document.title = 'Kontak | Kraton Tech' }, [])

  function handleChange(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })) }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, company, service, message } = form
    const text = `Halo Kraton Tech,%0A%0ANama: ${name}%0APerusahaan: ${company}%0ALayanan: ${service}%0A%0APesan:%0A${message}`
    window.open(`https://wa.me/6283824559457?text=${text}`, '_blank')
    setSent(true)
  }

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900 transition-colors duration-300">

        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal flex items-center gap-2 mb-6"><div className="h-px w-8 bg-indigo-400" /><span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Hubungi Kami</span></div>
            <h1 className="section-reveal text-3xl font-extrabold text-white sm:text-5xl leading-tight">Diskusikan Kebutuhan <br /><span className="text-indigo-400">Infrastruktur & Digital Anda</span></h1>
            <p className="section-reveal mt-6 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
              Tim teknis kami siap membantu merancang solusi yang tepat — dari infrastruktur jaringan, cloud, keamanan siber, hingga transformasi digital bisnis Anda.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-8 lg:grid-cols-5">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-4">
              <div className="section-reveal"><p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">Informasi Kontak</p></div>
              {contactInfo.map((c, i) => (
                <div key={c.label}
                  className="section-reveal hover-card group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 transition-all duration-200 hover:border-indigo-200 dark:hover:border-indigo-600"
                  style={{ transitionDelay: `${i * 0.04}s` }}>
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${c.iconBg}`}>{c.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{c.label}</p>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm truncate">{c.value}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{c.sub}</p>
                    </div>
                  </div>
                  <a href={c.href} target="_blank" rel="noopener noreferrer"
                    className={`btn-press mt-3 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-150 ${c.accent}`}>
                    {c.cta}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </a>
                </div>
              ))}

              <div className="section-reveal overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
                <iframe title="Kraton Tech Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126521.79836551634!2d108.43319!3d-6.7063738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee1234567890%3A0x1234567890abcdef!2sCirebon%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1"
                  width="100%" height="180" style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>

            {/* RIGHT - Form */}
            <div className="lg:col-span-3">
              <div className="section-reveal rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 sm:p-8">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">Form Konsultasi</p>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Jadwalkan Konsultasi Gratis</h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Isi form berikut dan tim kami akan menghubungi Anda segera.</p>
                </div>

                {sent ? (
                  <div className="flex flex-col items-center gap-3 py-10 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Pesan terkirim ke WhatsApp!</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">Tim kami akan merespons dalam waktu singkat. Terima kasih telah menghubungi Kraton Tech.</p>
                    <button onClick={() => { setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' }); setSent(false) }}
                      className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:text-indigo-500">
                      Kirim pesan lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Lengkap <span className="text-red-500">*</span></label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">Perusahaan / Instansi</label>
                        <input name="company" value={form.company} onChange={handleChange} placeholder="PT. Contoh Indonesia" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">Email</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@perusahaan.com" className={inputClass} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">Nomor WhatsApp</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="08xxxxxxxxxx" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">Layanan yang Dibutuhkan <span className="text-red-500">*</span></label>
                      <select name="service" value={form.service} onChange={handleChange} required className={inputClass}>
                        <option value="">Pilih layanan...</option>
                        {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">Deskripsi Kebutuhan <span className="text-red-500">*</span></label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                        placeholder="Jelaskan kebutuhan infrastruktur atau proyek digital Anda secara singkat..."
                        className={inputClass + ' resize-none'} />
                    </div>
                    <button type="submit"
                      className="btn-press w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:-translate-y-0.5">
                      Kirim via WhatsApp
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </button>
                    <p className="text-center text-xs text-slate-400 dark:text-slate-500">Form akan diteruskan ke WhatsApp kami. Konsultasi pertama gratis, tanpa komitmen.</p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
