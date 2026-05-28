// data_modules.js — struktur 29 modul dalam 8 tahap

export const STAGES = [
  { id:1, title:'Huruf',      icon:'✍️', color:'#e63946', desc:'Hiragana & Katakana — fondasi mutlak' },
  { id:2, title:'Pondasi',    icon:'🧱', color:'#f4a261', desc:'Angka, sapaan, kata ganti & waktu' },
  { id:3, title:'Kosakata',   icon:'📖', color:'#e9c46a', desc:'Kata benda, sifat & semua golongan kata kerja' },
  { id:4, title:'Grammar',    icon:'📐', color:'#2a9d8f', desc:'Partikel, konjugasi & pola kalimat N5' },
  { id:5, title:'Kanji',      icon:'漢', color:'#8338ec', desc:'100 kanji N5 wajib' },
  { id:6, title:'Percakapan', icon:'💬', color:'#457b9d', desc:'Dialog nyata: perkenalan, belanja, transportasi' },
  { id:7, title:'LPK & Kerja',icon:'🏭', color:'#e76f51', desc:'Budaya kerja, bahasa pabrik, bilangan' },
  { id:8, title:'JLPT N5',    icon:'📝', color:'#e63946', desc:'Latihan soal & simulasi ujian' },
]

export const MODULES_CONFIG = [
  // ── TAHAP 1: HURUF ──────────────────────────────────────────────────────
  {
    id:'hiragana-dasar', step:1, stage:1,
    title:'Hiragana Dasar', sub:'ひらがな', icon:'あ', color:'#e63946', bg:'rgba(230,57,70,0.10)',
    desc:'46 huruf inti あ〜ん. Ini adalah langkah PERTAMA yang wajib dikuasai sebelum apapun.', total:46, hasQuiz:true,
    obj:'Hafal 46 huruf dasar Hiragana dan cara bacanya',
  },
  {
    id:'hiragana-lanjutan', step:2, stage:1,
    title:'Hiragana Lanjutan', sub:'濁音・拗音', icon:'が', color:'#e63946', bg:'rgba(230,57,70,0.10)',
    desc:'25 huruf dakuten bersuara (が ざ だ ば ぱ) + 33 huruf kombinasi (きゃ しゃ ちゃ...)', total:58, hasQuiz:true,
    obj:'Hafal huruf bersuara dan kombinasi Hiragana',
  },
  {
    id:'katakana-dasar', step:3, stage:1,
    title:'Katakana Dasar', sub:'カタカナ', icon:'ア', color:'#c1121f', bg:'rgba(193,18,31,0.10)',
    desc:'46 huruf Katakana — bunyi sama Hiragana tapi bentuk beda. Untuk kata serapan asing.', total:46, hasQuiz:true,
    obj:'Hafal 46 huruf dasar Katakana',
  },
  {
    id:'katakana-lanjutan', step:4, stage:1,
    title:'Katakana Lanjutan', sub:'濁音・拗音', icon:'ガ', color:'#c1121f', bg:'rgba(193,18,31,0.10)',
    desc:'25 huruf dakuten + 33 kombinasi Katakana. Plus latihan membaca nama & merek asing.', total:58, hasQuiz:true,
    obj:'Hafal huruf bersuara dan kombinasi Katakana',
  },

  // ── TAHAP 2: PONDASI ────────────────────────────────────────────────────
  {
    id:'angka', step:5, stage:2,
    title:'Angka & Bilangan', sub:'数字', icon:'🔢', color:'#f4a261', bg:'rgba(244,162,97,0.10)',
    desc:'Sistem angka Jepang dari 0 hingga 1 juta. Termasuk angka tidak beraturan yang sering salah!', total:40, hasQuiz:true,
    obj:'Bisa menyebut angka 0-1.000.000 dan memahami sistem bilangan',
  },
  {
    id:'sapaan-dasar', step:6, stage:2,
    title:'Sapaan & Ekspresi', sub:'挨拶', icon:'👋', color:'#f4a261', bg:'rgba(244,162,97,0.10)',
    desc:'24 sapaan & ekspresi sehari-hari wajib. Mulai dari おはようございます hingga がんばって!', total:24, hasQuiz:true,
    obj:'Hafalkan semua sapaan dasar dan ekspresi penting',
  },
  {
    id:'kata-ganti-tanya', step:7, stage:2,
    title:'Kata Ganti & Tanya', sub:'代名詞・疑問詞', icon:'❓', color:'#f4a261', bg:'rgba(244,162,97,0.10)',
    desc:'わたし/あなた/かれ + これ/それ/あれ + なに/どこ/いつ/だれ/いくら — dasar komunikasi!', total:28, hasQuiz:true,
    obj:'Kuasai kata ganti orang, demonstratif, dan semua kata tanya N5',
  },
  {
    id:'waktu-kalender', step:8, stage:2,
    title:'Waktu & Kalender', sub:'時間・曜日', icon:'📅', color:'#f4a261', bg:'rgba(244,162,97,0.10)',
    desc:'Jam, hari dalam seminggu (月〜日), bulan (1〜12月), musim, ekspresi waktu sehari-hari.', total:50, hasQuiz:true,
    obj:'Bisa menyebut jam, hari, bulan, dan ekspresi waktu',
  },

  // ── TAHAP 3: KOSAKATA ───────────────────────────────────────────────────
  {
    id:'kosakata-benda', step:9, stage:3,
    title:'Kata Benda Dasar', sub:'名詞', icon:'📦', color:'#e9c46a', bg:'rgba(233,196,106,0.10)',
    desc:'Kata benda N5: makanan, tempat, transportasi, rumah, pakaian, hewan, tubuh & profesi.', total:90, hasQuiz:true,
    obj:'Kuasai 90+ kata benda yang paling sering dipakai di N5',
  },
  {
    id:'kata-sifat', step:10, stage:3,
    title:'Kata Sifat N5', sub:'形容詞', icon:'✨', color:'#e9c46a', bg:'rgba(233,196,106,0.10)',
    desc:'30 i-adjektiva + 20 na-adjektiva N5. Cara pakai sebelum nomina dan dalam kalimat.', total:50, hasQuiz:true,
    obj:'Hafal semua kata sifat N5 dan bedakan i-adj vs na-adj',
  },
  {
    id:'kata-kerja-gol1', step:11, stage:3,
    title:'Kata Kerja Golongan 1', sub:'五段動詞', icon:'⚡', color:'#e9c46a', bg:'rgba(233,196,106,0.10)',
    desc:'Godan Doushi: 30+ kata kerja akhiran -u -ku -gu -su -tsu -nu -bu -mu -ru dengan konjugasi.', total:35, hasQuiz:true,
    obj:'Hafal kata kerja Golongan 1 dan aturan konjugasinya ke ます/ない/て',
  },
  {
    id:'kata-kerja-gol23', step:12, stage:3,
    title:'Kata Kerja Gol. 2 & 3', sub:'一段・不規則動詞', icon:'🔥', color:'#e9c46a', bg:'rgba(233,196,106,0.10)',
    desc:'Ichidan (-iru/-eru) + Irregular (する・くる). Plus kosakata する: べんきょうする, りょこうする...', total:30, hasQuiz:true,
    obj:'Hafal kata kerja Golongan 2&3 dan semua konjugasinya',
  },

  // ── TAHAP 4: GRAMMAR ────────────────────────────────────────────────────
  {
    id:'partikel-1', step:13, stage:4,
    title:'Partikel Inti', sub:'助詞 は が を', icon:'📌', color:'#2a9d8f', bg:'rgba(42,157,143,0.10)',
    desc:'Tiga partikel terpenting dan tersering salah: は (topik), が (subjek), を (objek). Bedakan dengan tepat!', total:12, hasQuiz:true,
    obj:'Kuasai perbedaan は vs が dan kapan pakai を',
  },
  {
    id:'partikel-2', step:14, stage:4,
    title:'Partikel Lanjutan', sub:'助詞 に で へ...', icon:'🗺️', color:'#2a9d8f', bg:'rgba(42,157,143,0.10)',
    desc:'に・で・へ・の・と・も・から・まで・か・ね・よ — lengkap dengan perbedaan に vs で!', total:16, hasQuiz:true,
    obj:'Kuasai semua partikel N5 dan kapan menggunakannya',
  },
  {
    id:'pola-kalimat', step:15, stage:4,
    title:'Pola Kalimat Dasar', sub:'基本文型', icon:'🏗️', color:'#2a9d8f', bg:'rgba(42,157,143,0.10)',
    desc:'S は N/Adj です + negatif + tanya + lampau. Struktur SOV & pola あります/います.', total:14, hasQuiz:true,
    obj:'Bisa membuat kalimat dasar positif, negatif, tanya, dan lampau',
  },
  {
    id:'konjugasi-kk', step:16, stage:4,
    title:'Konjugasi Kata Kerja', sub:'動詞活用', icon:'🔄', color:'#2a9d8f', bg:'rgba(42,157,143,0.10)',
    desc:'ます/ません/ました/ませんでした + konjugasi i-adj & na-adj (4 bentuk masing-masing).', total:16, hasQuiz:true,
    obj:'Konjugasikan kata kerja & kata sifat ke semua 4 bentuk',
  },
  {
    id:'te-form', step:17, stage:4,
    title:'Bentuk て (Te-form)', sub:'て形', icon:'🔗', color:'#2a9d8f', bg:'rgba(42,157,143,0.10)',
    desc:'Aturan te-form Gol.1,2,3 + てください・ないでください・ている・てもいい・てはいけない.', total:14, hasQuiz:true,
    obj:'Bentuk te-form dengan benar dan gunakan dalam 5 pola utama',
  },
  {
    id:'pola-lanjutan', step:18, stage:4,
    title:'Pola Grammar Lanjutan', sub:'応用文法', icon:'🎯', color:'#2a9d8f', bg:'rgba(42,157,143,0.10)',
    desc:'たい・ましょう・ことができる・から/ので・より〜ほうが・いちばん・つもり・ほうがいい・たりする・ながら', total:18, hasQuiz:true,
    obj:'Kuasai 10 pola grammar lanjutan N5 yang sering keluar di ujian',
  },

  // ── TAHAP 5: KANJI ──────────────────────────────────────────────────────
  {
    id:'kanji-1', step:19, stage:5,
    title:'Kanji: Alam & Angka', sub:'漢字①', icon:'🌿', color:'#8338ec', bg:'rgba(131,56,236,0.10)',
    desc:'25 kanji: 日月火水木金土山川 + 一二三四五六七八九十百千年円時分. Kanji paling dasar!', total:25, hasQuiz:true,
    obj:'Hafal 25 kanji alam & angka dengan on/kun yomi & contoh',
  },
  {
    id:'kanji-2', step:20, stage:5,
    title:'Kanji: Manusia & Arah', sub:'漢字②', icon:'👤', color:'#8338ec', bg:'rgba(131,56,236,0.10)',
    desc:'25 kanji: 人口目耳手足大小上下中左右男女子本国語電車話学校先生', total:25, hasQuiz:true,
    obj:'Hafal 25 kanji tentang manusia, tubuh, arah & kehidupan',
  },

  // ── TAHAP 6: PERCAKAPAN ─────────────────────────────────────────────────
  {
    id:'conv-perkenalan', step:21, stage:6,
    title:'Percakapan: Perkenalan', sub:'自己紹介', icon:'🤝', color:'#457b9d', bg:'rgba(69,123,157,0.10)',
    desc:'Memperkenalkan diri, menanyakan nama, profesi, asal negara. Dialog lengkap dengan romaji.', total:14, hasQuiz:true,
    obj:'Bisa memperkenalkan diri dalam bahasa Jepang dengan lancar',
  },
  {
    id:'conv-sehari', step:22, stage:6,
    title:'Percakapan: Sehari-hari', sub:'日常会話', icon:'☕', color:'#457b9d', bg:'rgba(69,123,157,0.10)',
    desc:'Dialog di kafe, restoran, minta tolong, apa kabar. Termasuk ekspresi sopan dan kasual.', total:16, hasQuiz:true,
    obj:'Bisa berdialog santai dalam situasi sehari-hari',
  },
  {
    id:'conv-belanja', step:23, stage:6,
    title:'Percakapan: Belanja', sub:'買い物', icon:'🛍️', color:'#457b9d', bg:'rgba(69,123,157,0.10)',
    desc:'Di toko: menanyakan harga, ukuran, warna. Di restoran: pesan, tanya rekomendasi, bayar.', total:14, hasQuiz:true,
    obj:'Bisa berbelanja dan makan di restoran Jepang tanpa masalah',
  },
  {
    id:'conv-transport', step:24, stage:6,
    title:'Percakapan: Transportasi', sub:'交通', icon:'🚆', color:'#457b9d', bg:'rgba(69,123,157,0.10)',
    desc:'Naik kereta, bus, taksi. Tanya arah, stasiun, tiket, jadwal. Sangat penting saat di Jepang!', total:14, hasQuiz:true,
    obj:'Bisa menggunakan transportasi umum di Jepang mandiri',
  },
  {
    id:'conv-darurat', step:25, stage:6,
    title:'Percakapan: Darurat', sub:'緊急・病院', icon:'🏥', color:'#457b9d', bg:'rgba(69,123,157,0.10)',
    desc:'Situasi darurat: sakit, minta bantuan, di dokter, mendeskripsikan keluhan fisik.', total:12, hasQuiz:true,
    obj:'Bisa menangani situasi darurat & kunjungan dokter di Jepang',
  },

  // ── TAHAP 7: LPK & KERJA ────────────────────────────────────────────────
  {
    id:'budaya', step:26, stage:7,
    title:'Budaya Kerja Jepang', sub:'日本文化', icon:'🎌', color:'#e76f51', bg:'rgba(231,111,81,0.10)',
    desc:'Etos kerja, salam di kantor (おつかれさまです), ほうれんそう, kaizen, norma sosial Jepang.', total:34, hasQuiz:false,
    obj:'Pahami etika & budaya kerja Jepang agar tidak salah langkah',
  },
  {
    id:'bahasa-kerja', step:27, stage:7,
    title:'Bahasa di Tempat Kerja', sub:'職場言語', icon:'🏭', color:'#e76f51', bg:'rgba(231,111,81,0.10)',
    desc:'Keselamatan kerja (危険！), instruksi pabrik, kosakata industri, kehidupan asrama.', total:36, hasQuiz:false,
    obj:'Kuasai kosakata wajib di tempat kerja & pabrik Jepang',
  },
  {
    id:'counter', step:28, stage:7,
    title:'Kata Bilangan (Counter)', sub:'助数詞', icon:'🔢', color:'#e76f51', bg:'rgba(231,111,81,0.10)',
    desc:'〜人 〜本 〜枚 〜個 〜台 〜冊 〜匹 〜つ — cara menghitung benda dengan benar.', total:40, hasQuiz:false,
    obj:'Gunakan counter yang tepat untuk berbagai jenis benda',
  },

  // ── TAHAP 8: JLPT N5 ────────────────────────────────────────────────────
  {
    id:'jlpt-n5', step:29, stage:8,
    title:'JLPT N5 Simulasi', sub:'N5試験', icon:'📝', color:'#e63946', bg:'rgba(230,57,70,0.10)',
    desc:'Latihan soal format asli JLPT N5: Moji-Goi, Bunpou, Goi. Ukur kesiapanmu!', total:24, hasQuiz:true,
    obj:'Lulus simulasi JLPT N5 dengan skor ≥80%',
  },
]
