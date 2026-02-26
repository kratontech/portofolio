# Kraton Tech — React + Vite

Website company profile Kraton Tech, dibangun ulang menggunakan **React 18 + Vite + Tailwind CSS v3 + React Router v6**.

---

## 🗂️ Struktur Project

```
kraton-tech/
├── public/
│   └── images/
│       └── projects/
│           ├── adcom.png
│           ├── himatif.png
│           └── karir.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## ⚙️ Step-by-Step Instalasi

### Prasyarat
Pastikan sudah terinstall:
- **Node.js** v18 atau lebih baru → https://nodejs.org
- **npm** (sudah include bersama Node.js)

Cek versi:
```bash
node -v
npm -v
```

---

### Langkah 1 — Extract & Masuk ke Folder Project

```bash
# Extract file zip, lalu masuk ke folder
cd kraton-tech
```

---

### Langkah 2 — Install Dependencies

```bash
npm install
```

Ini akan menginstall semua package yang dibutuhkan:
- `react`, `react-dom` — library React
- `react-router-dom` — routing antar halaman
- `vite` — build tool yang cepat
- `tailwindcss`, `postcss`, `autoprefixer` — styling

---

### Langkah 3 — Copy Gambar Project

Salin folder gambar dari project Astro lama ke folder `public/`:

```
public/
└── images/
    └── projects/
        ├── adcom.png
        ├── himatif.png
        └── karir.png
```

> Gambar ini digunakan di halaman **Project**.

---

### Langkah 4 — Jalankan Development Server

```bash
npm run dev
```

Buka browser di: **http://localhost:5173**

---

### Langkah 5 — Build untuk Production

```bash
npm run build
```

Hasil build ada di folder `dist/`. Siap di-deploy ke Netlify, Vercel, atau hosting manapun.

---

### Langkah 6 — Preview Build Production (Opsional)

```bash
npm run preview
```

---

## 🚀 Deploy ke Netlify (Gratis)

1. Push project ke GitHub
2. Buka https://netlify.com → **New site from Git**
3. Pilih repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Klik **Deploy**

---

## 📄 Halaman

| Route | Halaman |
|-------|---------|
| `/` | Home |
| `/services` | Jasa |
| `/projects` | Project |
| `/about` | Tentang |
| `/contact` | Kontak |

---

## 🛠️ Tech Stack

| Library | Versi | Fungsi |
|---------|-------|--------|
| React | 18 | UI Framework |
| Vite | 5 | Build Tool |
| React Router | 6 | Client-side Routing |
| Tailwind CSS | 3 | Styling Utility |

---

## ✏️ Kustomisasi

### Mengganti Nomor WhatsApp
Edit di `src/pages/Contact.jsx`:
```jsx
href="https://wa.me/6283824559457"  // ganti dengan nomor kamu
```

### Mengganti Email
Edit di `src/pages/Contact.jsx`:
```jsx
href="mailto:kratontech@gmail.com"  // ganti dengan email kamu
```

### Menambah Project Baru
Edit array `projects` di `src/pages/Projects.jsx`:
```jsx
{
  title: 'Nama Project',
  desc: 'Deskripsi singkat project.',
  tags: ['Web', 'Landing Page'],
  status: 'Selesai',
  image: '/images/projects/nama-gambar.png',
  url: 'https://link-project.com',
},
```

---

© 2025 Kraton Tech. All rights reserved.
