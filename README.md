# 日本語 — Nihongo App

**Belajar Bahasa Jepang dari Nol, gratis, terstruktur.**

## 📚 Isi Konten

| Modul | Konten |
|-------|--------|
| Hiragana | 46 dasar + 25 dakuten + 33 kombinasi (104 huruf) |
| Katakana | 46 dasar + 25 dakuten + 33 kombinasi (104 huruf) |
| Kosakata | 9 kategori: Sapaan, Angka, Warna, Keluarga, Makanan, Waktu, Verba, Tubuh, Tempat |
| Tata Bahasa | Partikel, Pola Kalimat, Kata Sifat, Kata Kerja Dasar |
| Kanji N5 | 50 kanji JLPT N5 dengan on/kun yomi & contoh |
| Percakapan | 6 situasi: Perkenalan, Restoran, Belanja, Bantuan, Transportasi, Darurat |

## ⚡ Fitur
- Flip cards interaktif (klik untuk flip)
- 🔊 Audio pronunciation (Web Speech API — butuh browser modern)
- Quiz multiple choice dengan XP reward
- Progress & streak tersimpan di browser (localStorage)
- Lock system — modul terbuka bertahap
- Responsive mobile & desktop

---

## 🚀 Cara Deploy

### Option 1 — Vercel (Paling Mudah, Gratis)

1. **Push ke GitHub dulu:**
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/nihongo-app.git
   git push -u origin main
   ```

2. **Deploy ke Vercel:**
   - Buka [vercel.com](https://vercel.com) → login dengan GitHub
   - Klik **"New Project"** → Import repo `nihongo-app`
   - Settings otomatis terdeteksi (Vite)
   - Klik **Deploy** → selesai! URL langsung aktif ✅

3. Setiap `git push` akan auto-deploy ulang.

---

### Option 2 — Netlify (Gratis)

1. Push ke GitHub (sama seperti di atas)
2. Buka [netlify.com](https://netlify.com) → **"Add new site"** → **"Import from Git"**
3. Pilih repo → Build command: `npm run build`, Publish dir: `dist`
4. Klik **Deploy** ✅

---

### Option 3 — GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Tambahkan di `package.json`:
   ```json
   "homepage": "https://USERNAME.github.io/nihongo-app",
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. Ubah `vite.config.js`:
   ```js
   base: '/nihongo-app/'
   ```

4. Build & deploy:
   ```bash
   npm run build
   npm run deploy
   ```

---

## 💻 Jalankan Lokal

```bash
# Install dependencies
npm install

# Development mode (hot reload)
npm run dev
# → buka http://localhost:5173

# Build production
npm run build

# Preview hasil build
npm run preview
```

## 🗂️ Struktur Project

```
nihongo-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point React
    ├── App.jsx           # Root routing & state
    ├── data.js           # Semua data pembelajaran
    ├── storage.js        # localStorage helper
    ├── utils/
    │   └── quiz.js       # Quiz generator
    └── components/
        ├── UI.jsx         # FlipCard, KanjiCard, VocabCard, dll
        ├── HomePage.jsx   # Halaman beranda + path
        └── ModulePage.jsx # Halaman belajar & quiz
```
