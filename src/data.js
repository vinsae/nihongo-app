// data.js — semua data pembelajaran bahasa Jepang

// ─── HIRAGANA ────────────────────────────────────────────────────────────────
export const HIRAGANA_BASE = [
  { char:'あ',romaji:'a',group:'a' },{ char:'い',romaji:'i',group:'a' },{ char:'う',romaji:'u',group:'a' },{ char:'え',romaji:'e',group:'a' },{ char:'お',romaji:'o',group:'a' },
  { char:'か',romaji:'ka',group:'ka' },{ char:'き',romaji:'ki',group:'ka' },{ char:'く',romaji:'ku',group:'ka' },{ char:'け',romaji:'ke',group:'ka' },{ char:'こ',romaji:'ko',group:'ka' },
  { char:'さ',romaji:'sa',group:'sa' },{ char:'し',romaji:'shi',group:'sa' },{ char:'す',romaji:'su',group:'sa' },{ char:'せ',romaji:'se',group:'sa' },{ char:'そ',romaji:'so',group:'sa' },
  { char:'た',romaji:'ta',group:'ta' },{ char:'ち',romaji:'chi',group:'ta' },{ char:'つ',romaji:'tsu',group:'ta' },{ char:'て',romaji:'te',group:'ta' },{ char:'と',romaji:'to',group:'ta' },
  { char:'な',romaji:'na',group:'na' },{ char:'に',romaji:'ni',group:'na' },{ char:'ぬ',romaji:'nu',group:'na' },{ char:'ね',romaji:'ne',group:'na' },{ char:'の',romaji:'no',group:'na' },
  { char:'は',romaji:'ha',group:'ha' },{ char:'ひ',romaji:'hi',group:'ha' },{ char:'ふ',romaji:'fu',group:'ha' },{ char:'へ',romaji:'he',group:'ha' },{ char:'ほ',romaji:'ho',group:'ha' },
  { char:'ま',romaji:'ma',group:'ma' },{ char:'み',romaji:'mi',group:'ma' },{ char:'む',romaji:'mu',group:'ma' },{ char:'め',romaji:'me',group:'ma' },{ char:'も',romaji:'mo',group:'ma' },
  { char:'や',romaji:'ya',group:'ya' },{ char:'ゆ',romaji:'yu',group:'ya' },{ char:'よ',romaji:'yo',group:'ya' },
  { char:'ら',romaji:'ra',group:'ra' },{ char:'り',romaji:'ri',group:'ra' },{ char:'る',romaji:'ru',group:'ra' },{ char:'れ',romaji:'re',group:'ra' },{ char:'ろ',romaji:'ro',group:'ra' },
  { char:'わ',romaji:'wa',group:'wa' },{ char:'を',romaji:'wo',group:'wa' },{ char:'ん',romaji:'n',group:'n' },
]

export const HIRAGANA_DAKUTEN = [
  { char:'が',romaji:'ga',group:'ga' },{ char:'ぎ',romaji:'gi',group:'ga' },{ char:'ぐ',romaji:'gu',group:'ga' },{ char:'げ',romaji:'ge',group:'ga' },{ char:'ご',romaji:'go',group:'ga' },
  { char:'ざ',romaji:'za',group:'za' },{ char:'じ',romaji:'ji',group:'za' },{ char:'ず',romaji:'zu',group:'za' },{ char:'ぜ',romaji:'ze',group:'za' },{ char:'ぞ',romaji:'zo',group:'za' },
  { char:'だ',romaji:'da',group:'da' },{ char:'ぢ',romaji:'ji',group:'da' },{ char:'づ',romaji:'zu',group:'da' },{ char:'で',romaji:'de',group:'da' },{ char:'ど',romaji:'do',group:'da' },
  { char:'ば',romaji:'ba',group:'ba' },{ char:'び',romaji:'bi',group:'ba' },{ char:'ぶ',romaji:'bu',group:'ba' },{ char:'べ',romaji:'be',group:'ba' },{ char:'ぼ',romaji:'bo',group:'ba' },
  { char:'ぱ',romaji:'pa',group:'pa' },{ char:'ぴ',romaji:'pi',group:'pa' },{ char:'ぷ',romaji:'pu',group:'pa' },{ char:'ぺ',romaji:'pe',group:'pa' },{ char:'ぽ',romaji:'po',group:'pa' },
]

export const HIRAGANA_COMBO = [
  { char:'きゃ',romaji:'kya',group:'ky' },{ char:'きゅ',romaji:'kyu',group:'ky' },{ char:'きょ',romaji:'kyo',group:'ky' },
  { char:'しゃ',romaji:'sha',group:'sh' },{ char:'しゅ',romaji:'shu',group:'sh' },{ char:'しょ',romaji:'sho',group:'sh' },
  { char:'ちゃ',romaji:'cha',group:'ch' },{ char:'ちゅ',romaji:'chu',group:'ch' },{ char:'ちょ',romaji:'cho',group:'ch' },
  { char:'にゃ',romaji:'nya',group:'ny' },{ char:'にゅ',romaji:'nyu',group:'ny' },{ char:'にょ',romaji:'nyo',group:'ny' },
  { char:'ひゃ',romaji:'hya',group:'hy' },{ char:'ひゅ',romaji:'hyu',group:'hy' },{ char:'ひょ',romaji:'hyo',group:'hy' },
  { char:'みゃ',romaji:'mya',group:'my' },{ char:'みゅ',romaji:'myu',group:'my' },{ char:'みょ',romaji:'myo',group:'my' },
  { char:'りゃ',romaji:'rya',group:'ry' },{ char:'りゅ',romaji:'ryu',group:'ry' },{ char:'りょ',romaji:'ryo',group:'ry' },
  { char:'ぎゃ',romaji:'gya',group:'gy' },{ char:'ぎゅ',romaji:'gyu',group:'gy' },{ char:'ぎょ',romaji:'gyo',group:'gy' },
  { char:'じゃ',romaji:'ja',group:'j' },{ char:'じゅ',romaji:'ju',group:'j' },{ char:'じょ',romaji:'jo',group:'j' },
  { char:'びゃ',romaji:'bya',group:'by' },{ char:'びゅ',romaji:'byu',group:'by' },{ char:'びょ',romaji:'byo',group:'by' },
  { char:'ぴゃ',romaji:'pya',group:'py' },{ char:'ぴゅ',romaji:'pyu',group:'py' },{ char:'ぴょ',romaji:'pyo',group:'py' },
]

// ─── KATAKANA ─────────────────────────────────────────────────────────────────
export const KATAKANA_BASE = [
  { char:'ア',romaji:'a',group:'a' },{ char:'イ',romaji:'i',group:'a' },{ char:'ウ',romaji:'u',group:'a' },{ char:'エ',romaji:'e',group:'a' },{ char:'オ',romaji:'o',group:'a' },
  { char:'カ',romaji:'ka',group:'ka' },{ char:'キ',romaji:'ki',group:'ka' },{ char:'ク',romaji:'ku',group:'ka' },{ char:'ケ',romaji:'ke',group:'ka' },{ char:'コ',romaji:'ko',group:'ka' },
  { char:'サ',romaji:'sa',group:'sa' },{ char:'シ',romaji:'shi',group:'sa' },{ char:'ス',romaji:'su',group:'sa' },{ char:'セ',romaji:'se',group:'sa' },{ char:'ソ',romaji:'so',group:'sa' },
  { char:'タ',romaji:'ta',group:'ta' },{ char:'チ',romaji:'chi',group:'ta' },{ char:'ツ',romaji:'tsu',group:'ta' },{ char:'テ',romaji:'te',group:'ta' },{ char:'ト',romaji:'to',group:'ta' },
  { char:'ナ',romaji:'na',group:'na' },{ char:'ニ',romaji:'ni',group:'na' },{ char:'ヌ',romaji:'nu',group:'na' },{ char:'ネ',romaji:'ne',group:'na' },{ char:'ノ',romaji:'no',group:'na' },
  { char:'ハ',romaji:'ha',group:'ha' },{ char:'ヒ',romaji:'hi',group:'ha' },{ char:'フ',romaji:'fu',group:'ha' },{ char:'ヘ',romaji:'he',group:'ha' },{ char:'ホ',romaji:'ho',group:'ha' },
  { char:'マ',romaji:'ma',group:'ma' },{ char:'ミ',romaji:'mi',group:'ma' },{ char:'ム',romaji:'mu',group:'ma' },{ char:'メ',romaji:'me',group:'ma' },{ char:'モ',romaji:'mo',group:'ma' },
  { char:'ヤ',romaji:'ya',group:'ya' },{ char:'ユ',romaji:'yu',group:'ya' },{ char:'ヨ',romaji:'yo',group:'ya' },
  { char:'ラ',romaji:'ra',group:'ra' },{ char:'リ',romaji:'ri',group:'ra' },{ char:'ル',romaji:'ru',group:'ra' },{ char:'レ',romaji:'re',group:'ra' },{ char:'ロ',romaji:'ro',group:'ra' },
  { char:'ワ',romaji:'wa',group:'wa' },{ char:'ヲ',romaji:'wo',group:'wa' },{ char:'ン',romaji:'n',group:'n' },
]

export const KATAKANA_DAKUTEN = [
  { char:'ガ',romaji:'ga',group:'ga' },{ char:'ギ',romaji:'gi',group:'ga' },{ char:'グ',romaji:'gu',group:'ga' },{ char:'ゲ',romaji:'ge',group:'ga' },{ char:'ゴ',romaji:'go',group:'ga' },
  { char:'ザ',romaji:'za',group:'za' },{ char:'ジ',romaji:'ji',group:'za' },{ char:'ズ',romaji:'zu',group:'za' },{ char:'ゼ',romaji:'ze',group:'za' },{ char:'ゾ',romaji:'zo',group:'za' },
  { char:'ダ',romaji:'da',group:'da' },{ char:'ヂ',romaji:'ji',group:'da' },{ char:'ヅ',romaji:'zu',group:'da' },{ char:'デ',romaji:'de',group:'da' },{ char:'ド',romaji:'do',group:'da' },
  { char:'バ',romaji:'ba',group:'ba' },{ char:'ビ',romaji:'bi',group:'ba' },{ char:'ブ',romaji:'bu',group:'ba' },{ char:'ベ',romaji:'be',group:'ba' },{ char:'ボ',romaji:'bo',group:'ba' },
  { char:'パ',romaji:'pa',group:'pa' },{ char:'ピ',romaji:'pi',group:'pa' },{ char:'プ',romaji:'pu',group:'pa' },{ char:'ペ',romaji:'pe',group:'pa' },{ char:'ポ',romaji:'po',group:'pa' },
]

export const KATAKANA_COMBO = [
  { char:'キャ',romaji:'kya',group:'ky' },{ char:'キュ',romaji:'kyu',group:'ky' },{ char:'キョ',romaji:'kyo',group:'ky' },
  { char:'シャ',romaji:'sha',group:'sh' },{ char:'シュ',romaji:'shu',group:'sh' },{ char:'ショ',romaji:'sho',group:'sh' },
  { char:'チャ',romaji:'cha',group:'ch' },{ char:'チュ',romaji:'chu',group:'ch' },{ char:'チョ',romaji:'cho',group:'ch' },
  { char:'ニャ',romaji:'nya',group:'ny' },{ char:'ニュ',romaji:'nyu',group:'ny' },{ char:'ニョ',romaji:'nyo',group:'ny' },
  { char:'ヒャ',romaji:'hya',group:'hy' },{ char:'ヒュ',romaji:'hyu',group:'hy' },{ char:'ヒョ',romaji:'hyo',group:'hy' },
  { char:'ミャ',romaji:'mya',group:'my' },{ char:'ミュ',romaji:'myu',group:'my' },{ char:'ミョ',romaji:'myo',group:'my' },
  { char:'リャ',romaji:'rya',group:'ry' },{ char:'リュ',romaji:'ryu',group:'ry' },{ char:'リョ',romaji:'ryo',group:'ry' },
  { char:'ギャ',romaji:'gya',group:'gy' },{ char:'ギュ',romaji:'gyu',group:'gy' },{ char:'ギョ',romaji:'gyo',group:'gy' },
  { char:'ジャ',romaji:'ja',group:'j' },{ char:'ジュ',romaji:'ju',group:'j' },{ char:'ジョ',romaji:'jo',group:'j' },
  { char:'ビャ',romaji:'bya',group:'by' },{ char:'ビュ',romaji:'byu',group:'by' },{ char:'ビョ',romaji:'byo',group:'by' },
  { char:'ピャ',romaji:'pya',group:'py' },{ char:'ピュ',romaji:'pyu',group:'py' },{ char:'ピョ',romaji:'pyo',group:'py' },
]

// ─── VOCABULARY ───────────────────────────────────────────────────────────────
export const VOCAB = {
  // ── ANGKA 1-10 ───────────────────────────────────────────────────────────
  numbers: [
    { jp:'れい / ゼロ', romaji:'rei / zero', meaning:'Nol (0)' },
    { jp:'いち', romaji:'ichi', meaning:'Satu (1)' },
    { jp:'に', romaji:'ni', meaning:'Dua (2)' },
    { jp:'さん', romaji:'san', meaning:'Tiga (3)' },
    { jp:'よん / し', romaji:'yon / shi', meaning:'Empat (4)' },
    { jp:'ご', romaji:'go', meaning:'Lima (5)' },
    { jp:'ろく', romaji:'roku', meaning:'Enam (6)' },
    { jp:'なな / しち', romaji:'nana / shichi', meaning:'Tujuh (7)' },
    { jp:'はち', romaji:'hachi', meaning:'Delapan (8)' },
    { jp:'きゅう / く', romaji:'kyuu / ku', meaning:'Sembilan (9)' },
    { jp:'じゅう', romaji:'juu', meaning:'Sepuluh (10)' },
    { jp:'じゅういち', romaji:'juu-ichi', meaning:'Sebelas (11)' },
    { jp:'じゅうに', romaji:'juu-ni', meaning:'Dua belas (12)' },
    { jp:'じゅうさん', romaji:'juu-san', meaning:'Tiga belas (13)' },
    { jp:'じゅうよん', romaji:'juu-yon', meaning:'Empat belas (14)' },
    { jp:'じゅうご', romaji:'juu-go', meaning:'Lima belas (15)' },
    { jp:'にじゅう', romaji:'ni-juu', meaning:'Dua puluh (20)' },
    { jp:'にじゅうご', romaji:'ni-juu-go', meaning:'Dua puluh lima (25)' },
    { jp:'さんじゅう', romaji:'san-juu', meaning:'Tiga puluh (30)' },
    { jp:'よんじゅう', romaji:'yon-juu', meaning:'Empat puluh (40)' },
    { jp:'ごじゅう', romaji:'go-juu', meaning:'Lima puluh (50)' },
    { jp:'ろくじゅう', romaji:'roku-juu', meaning:'Enam puluh (60)' },
    { jp:'ななじゅう', romaji:'nana-juu', meaning:'Tujuh puluh (70)' },
    { jp:'はちじゅう', romaji:'hachi-juu', meaning:'Delapan puluh (80)' },
    { jp:'きゅうじゅう', romaji:'kyuu-juu', meaning:'Sembilan puluh (90)' },
    { jp:'ひゃく', romaji:'hyaku', meaning:'Seratus (100)' },
    { jp:'にひゃく', romaji:'ni-hyaku', meaning:'Dua ratus (200)' },
    { jp:'さんびゃく', romaji:'san-byaku ⚠️ bukan sanhyaku', meaning:'Tiga ratus (300)' },
    { jp:'よんひゃく', romaji:'yon-hyaku', meaning:'Empat ratus (400)' },
    { jp:'ごひゃく', romaji:'go-hyaku', meaning:'Lima ratus (500)' },
    { jp:'ろっぴゃく', romaji:'rop-pyaku ⚠️ bukan rokuhyaku', meaning:'Enam ratus (600)' },
    { jp:'ななひゃく', romaji:'nana-hyaku', meaning:'Tujuh ratus (700)' },
    { jp:'はっぴゃく', romaji:'hap-pyaku ⚠️ bukan hachihyaku', meaning:'Delapan ratus (800)' },
    { jp:'きゅうひゃく', romaji:'kyuu-hyaku', meaning:'Sembilan ratus (900)' },
    { jp:'せん', romaji:'sen', meaning:'Seribu (1.000)' },
    { jp:'にせん', romaji:'ni-sen', meaning:'Dua ribu (2.000)' },
    { jp:'さんぜん', romaji:'san-zen ⚠️ bukan sansen', meaning:'Tiga ribu (3.000)' },
    { jp:'よんせん', romaji:'yon-sen', meaning:'Empat ribu (4.000)' },
    { jp:'ごせん', romaji:'go-sen', meaning:'Lima ribu (5.000)' },
    { jp:'いちまん', romaji:'ichi-man', meaning:'Sepuluh ribu (10.000)' },
    { jp:'じゅうまん', romaji:'juu-man', meaning:'Seratus ribu (100.000)' },
    { jp:'ひゃくまん', romaji:'hyaku-man', meaning:'Satu juta (1.000.000)' },
  ],

  // ── SAPAAN & EKSPRESI SEHARI-HARI ─────────────────────────────────────────
  greetings: [
    { jp:'おはようございます', romaji:'Ohayou gozaimasu', meaning:'Selamat pagi (formal)' },
    { jp:'おはよう', romaji:'Ohayou', meaning:'Selamat pagi (kasual)' },
    { jp:'こんにちは', romaji:'Konnichiwa', meaning:'Halo / Selamat siang' },
    { jp:'こんばんは', romaji:'Konbanwa', meaning:'Selamat malam' },
    { jp:'さようなら', romaji:'Sayounara', meaning:'Selamat tinggal (formal)' },
    { jp:'じゃあね / またね', romaji:'Jaa ne / Mata ne', meaning:'Dadah / Sampai nanti (kasual)' },
    { jp:'ありがとうございます', romaji:'Arigatou gozaimasu', meaning:'Terima kasih (formal)' },
    { jp:'ありがとう', romaji:'Arigatou', meaning:'Terima kasih (kasual)' },
    { jp:'どういたしまして', romaji:'Dou itashimashite', meaning:'Sama-sama' },
    { jp:'すみません', romaji:'Sumimasen', meaning:'Permisi / Maaf (umum)' },
    { jp:'ごめんなさい', romaji:'Gomen nasai', meaning:'Minta maaf (serius)' },
    { jp:'はじめまして', romaji:'Hajimemashite', meaning:'Salam kenal' },
    { jp:'よろしくおねがいします', romaji:'Yoroshiku onegaishimasu', meaning:'Mohon bimbingannya' },
    { jp:'おやすみなさい', romaji:'Oyasumi nasai', meaning:'Selamat tidur' },
    { jp:'いただきます', romaji:'Itadakimasu', meaning:'Sebelum makan' },
    { jp:'ごちそうさまでした', romaji:'Gochisousama deshita', meaning:'Selesai makan' },
    { jp:'がんばって', romaji:'Ganbatte', meaning:'Semangat!' },
    { jp:'おつかれさまでした', romaji:'Otsukaresama deshita', meaning:'Terima kasih atas kerja kerasnya' },
    { jp:'おげんきですか', romaji:'Ogenki desu ka', meaning:'Apa kabar?' },
    { jp:'はい、げんきです', romaji:'Hai, genki desu', meaning:'Baik-baik saja' },
    { jp:'そうですか', romaji:'Sou desu ka', meaning:'Oh begitu? / Benarkah?' },
    { jp:'わかりました', romaji:'Wakarimashita', meaning:'Sudah mengerti' },
    { jp:'わかりません', romaji:'Wakarimasen', meaning:'Tidak mengerti' },
    { jp:'もういちどおねがいします', romaji:'Mou ichido onegaishimasu', meaning:'Tolong ulangi sekali lagi' },
  ],

  // ── HARI & BULAN ──────────────────────────────────────────────────────────
  days: [
    { jp:'にちようび', romaji:'Nichi-youbi', meaning:'Minggu (日曜日)' },
    { jp:'げつようび', romaji:'Getsu-youbi', meaning:'Senin (月曜日)' },
    { jp:'かようび', romaji:'Ka-youbi', meaning:'Selasa (火曜日)' },
    { jp:'すいようび', romaji:'Sui-youbi', meaning:'Rabu (水曜日)' },
    { jp:'もくようび', romaji:'Moku-youbi', meaning:'Kamis (木曜日)' },
    { jp:'きんようび', romaji:'Kin-youbi', meaning:'Jumat (金曜日)' },
    { jp:'どようび', romaji:'Do-youbi', meaning:'Sabtu (土曜日)' },
    { jp:'いちがつ', romaji:'Ichi-gatsu', meaning:'Januari (一月)' },
    { jp:'にがつ', romaji:'Ni-gatsu', meaning:'Februari (二月)' },
    { jp:'さんがつ', romaji:'San-gatsu', meaning:'Maret (三月)' },
    { jp:'しがつ', romaji:'Shi-gatsu', meaning:'April (四月)' },
    { jp:'ごがつ', romaji:'Go-gatsu', meaning:'Mei (五月)' },
    { jp:'ろくがつ', romaji:'Roku-gatsu', meaning:'Juni (六月)' },
    { jp:'しちがつ', romaji:'Shichi-gatsu', meaning:'Juli (七月)' },
    { jp:'はちがつ', romaji:'Hachi-gatsu', meaning:'Agustus (八月)' },
    { jp:'くがつ', romaji:'Ku-gatsu', meaning:'September (九月)' },
    { jp:'じゅうがつ', romaji:'Juu-gatsu', meaning:'Oktober (十月)' },
    { jp:'じゅういちがつ', romaji:'Juuichi-gatsu', meaning:'November (十一月)' },
    { jp:'じゅうにがつ', romaji:'Juuni-gatsu', meaning:'Desember (十二月)' },
    { jp:'はる', romaji:'haru', meaning:'Musim semi (春)' },
    { jp:'なつ', romaji:'natsu', meaning:'Musim panas (夏)' },
    { jp:'あき', romaji:'aki', meaning:'Musim gugur (秋)' },
    { jp:'ふゆ', romaji:'fuyu', meaning:'Musim dingin (冬)' },
  ],

  // ── WAKTU & EKSPRESI WAKTU ────────────────────────────────────────────────
  time: [
    { jp:'いま', romaji:'ima', meaning:'Sekarang' },
    { jp:'きょう', romaji:'kyou', meaning:'Hari ini' },
    { jp:'きのう', romaji:'kinou', meaning:'Kemarin' },
    { jp:'おととい', romaji:'ototoi', meaning:'Kemarin lusa' },
    { jp:'あした', romaji:'ashita', meaning:'Besok' },
    { jp:'あさって', romaji:'asatte', meaning:'Lusa' },
    { jp:'まいにち', romaji:'mainichi', meaning:'Setiap hari' },
    { jp:'まいあさ', romaji:'maiasa', meaning:'Setiap pagi' },
    { jp:'まいばん', romaji:'maiban', meaning:'Setiap malam' },
    { jp:'あさ', romaji:'asa', meaning:'Pagi' },
    { jp:'ひる', romaji:'hiru', meaning:'Siang' },
    { jp:'ゆうがた', romaji:'yuugata', meaning:'Sore' },
    { jp:'よる / ばん', romaji:'yoru / ban', meaning:'Malam' },
    { jp:'ごぜん', romaji:'gozen', meaning:'AM / sebelum tengah hari' },
    { jp:'ごご', romaji:'gogo', meaning:'PM / sesudah tengah hari' },
    { jp:'なんじ', romaji:'nanji', meaning:'Jam berapa?' },
    { jp:'いちじ', romaji:'ichi-ji', meaning:'Jam satu (1:00)' },
    { jp:'にじはん', romaji:'ni-ji han', meaning:'Jam setengah tiga (2:30)' },
    { jp:'ごふん', romaji:'go-fun', meaning:'Lima menit' },
    { jp:'じゅっぷん', romaji:'juppun', meaning:'Sepuluh menit' },
    { jp:'ことし', romaji:'kotoshi', meaning:'Tahun ini' },
    { jp:'きょねん', romaji:'kyonen', meaning:'Tahun lalu' },
    { jp:'らいねん', romaji:'rainen', meaning:'Tahun depan' },
    { jp:'せんしゅう', romaji:'senshuu', meaning:'Minggu lalu' },
    { jp:'こんしゅう', romaji:'konshuu', meaning:'Minggu ini' },
    { jp:'らいしゅう', romaji:'raishuu', meaning:'Minggu depan' },
  ],

  // ── WARNA ─────────────────────────────────────────────────────────────────
  colors: [
    { jp:'あか', romaji:'aka', meaning:'Merah (赤)' },
    { jp:'あお', romaji:'ao', meaning:'Biru (青)' },
    { jp:'きいろ', romaji:'kiiro', meaning:'Kuning (黄色)' },
    { jp:'しろ', romaji:'shiro', meaning:'Putih (白)' },
    { jp:'くろ', romaji:'kuro', meaning:'Hitam (黒)' },
    { jp:'みどり', romaji:'midori', meaning:'Hijau (緑)' },
    { jp:'むらさき', romaji:'murasaki', meaning:'Ungu (紫)' },
    { jp:'ちゃいろ', romaji:'chairo', meaning:'Coklat (茶色)' },
    { jp:'だいだいいろ', romaji:'daidaiiro', meaning:'Oranye (橙色)' },
    { jp:'ピンク', romaji:'pinku', meaning:'Pink' },
    { jp:'グレー / はいいろ', romaji:'guree / haiiro', meaning:'Abu-abu (灰色)' },
    { jp:'きんいろ', romaji:'kin-iro', meaning:'Emas (金色)' },
    { jp:'ぎんいろ', romaji:'gin-iro', meaning:'Perak (銀色)' },
    { jp:'みずいろ', romaji:'mizu-iro', meaning:'Biru muda (水色)' },
    { jp:'あかるい', romaji:'akarui iro', meaning:'Warna terang' },
    { jp:'くらい', romaji:'kurai iro', meaning:'Warna gelap' },
  ],

  // ── KELUARGA ─────────────────────────────────────────────────────────────
  family: [
    { jp:'ちち', romaji:'chichi', meaning:'Ayah (saya)' },
    { jp:'はは', romaji:'haha', meaning:'Ibu (saya)' },
    { jp:'おとうさん', romaji:'otousan', meaning:'Ayah (orang lain / sopan)' },
    { jp:'おかあさん', romaji:'okaasan', meaning:'Ibu (orang lain / sopan)' },
    { jp:'あに', romaji:'ani', meaning:'Kakak laki-laki (saya)' },
    { jp:'あね', romaji:'ane', meaning:'Kakak perempuan (saya)' },
    { jp:'おにいさん', romaji:'oniisan', meaning:'Kakak laki-laki (orang lain)' },
    { jp:'おねえさん', romaji:'oneesan', meaning:'Kakak perempuan (orang lain)' },
    { jp:'おとうと', romaji:'otouto', meaning:'Adik laki-laki' },
    { jp:'いもうと', romaji:'imouto', meaning:'Adik perempuan' },
    { jp:'そふ', romaji:'sofu', meaning:'Kakek (saya)' },
    { jp:'そぼ', romaji:'sobo', meaning:'Nenek (saya)' },
    { jp:'おじいさん', romaji:'ojiisan', meaning:'Kakek (orang lain)' },
    { jp:'おばあさん', romaji:'obaasan', meaning:'Nenek (orang lain)' },
    { jp:'おじさん', romaji:'ojisan', meaning:'Paman' },
    { jp:'おばさん', romaji:'obasan', meaning:'Bibi' },
    { jp:'かぞく', romaji:'kazoku', meaning:'Keluarga' },
    { jp:'りょうしん', romaji:'ryoushin', meaning:'Kedua orang tua' },
    { jp:'こども', romaji:'kodomo', meaning:'Anak / Anak-anak' },
    { jp:'むすこ', romaji:'musuko', meaning:'Anak laki-laki (saya)' },
    { jp:'むすめ', romaji:'musume', meaning:'Anak perempuan (saya)' },
    { jp:'しんせき', romaji:'shinseki', meaning:'Saudara / Kerabat' },
  ],

  // ── MAKANAN & MINUMAN ────────────────────────────────────────────────────
  food: [
    { jp:'ごはん', romaji:'gohan', meaning:'Nasi / Makanan' },
    { jp:'みず', romaji:'mizu', meaning:'Air putih' },
    { jp:'おちゃ', romaji:'ocha', meaning:'Teh (Jepang)' },
    { jp:'コーヒー', romaji:'koohii', meaning:'Kopi' },
    { jp:'ジュース', romaji:'juusu', meaning:'Jus' },
    { jp:'ラーメン', romaji:'raamen', meaning:'Ramen (mie)' },
    { jp:'うどん', romaji:'udon', meaning:'Udon (mie tebal)' },
    { jp:'そば', romaji:'soba', meaning:'Soba (mie soba)' },
    { jp:'すし', romaji:'sushi', meaning:'Sushi' },
    { jp:'さしみ', romaji:'sashimi', meaning:'Sashimi' },
    { jp:'てんぷら', romaji:'tenpura', meaning:'Tempura' },
    { jp:'やきとり', romaji:'yakitori', meaning:'Ayam bakar tusuk' },
    { jp:'おにぎり', romaji:'onigiri', meaning:'Nasi kepal' },
    { jp:'パン', romaji:'pan', meaning:'Roti' },
    { jp:'たまご', romaji:'tamago', meaning:'Telur' },
    { jp:'にく', romaji:'niku', meaning:'Daging' },
    { jp:'とりにく', romaji:'tori-niku', meaning:'Daging ayam' },
    { jp:'ぶたにく', romaji:'buta-niku', meaning:'Daging babi' },
    { jp:'ぎゅうにく', romaji:'gyuu-niku', meaning:'Daging sapi' },
    { jp:'さかな', romaji:'sakana', meaning:'Ikan' },
    { jp:'えび', romaji:'ebi', meaning:'Udang' },
    { jp:'やさい', romaji:'yasai', meaning:'Sayuran' },
    { jp:'くだもの', romaji:'kudamono', meaning:'Buah-buahan' },
    { jp:'りんご', romaji:'ringo', meaning:'Apel' },
    { jp:'みかん', romaji:'mikan', meaning:'Jeruk mandarin' },
    { jp:'バナナ', romaji:'banana', meaning:'Pisang' },
    { jp:'ケーキ', romaji:'keeki', meaning:'Kue' },
    { jp:'アイスクリーム', romaji:'aisu kuriimu', meaning:'Es krim' },
    { jp:'からい', romaji:'karai', meaning:'Pedas' },
    { jp:'あまい', romaji:'amai', meaning:'Manis' },
    { jp:'おいしい', romaji:'oishii', meaning:'Enak / Lezat' },
    { jp:'まずい', romaji:'mazui', meaning:'Tidak enak' },
  ],

  // ── KATA KERJA ───────────────────────────────────────────────────────────
  verbs: [
    { jp:'たべます', romaji:'tabemasu', meaning:'Makan' },
    { jp:'のみます', romaji:'nomimasu', meaning:'Minum' },
    { jp:'いきます', romaji:'ikimasu', meaning:'Pergi' },
    { jp:'きます', romaji:'kimasu', meaning:'Datang' },
    { jp:'かえります', romaji:'kaerimasu', meaning:'Pulang' },
    { jp:'みます', romaji:'mimasu', meaning:'Melihat / Menonton' },
    { jp:'ききます', romaji:'kikimasu', meaning:'Mendengar' },
    { jp:'はなします', romaji:'hanashimasu', meaning:'Berbicara' },
    { jp:'よみます', romaji:'yomimasu', meaning:'Membaca' },
    { jp:'かきます', romaji:'kakimasu', meaning:'Menulis' },
    { jp:'べんきょうします', romaji:'benkyou shimasu', meaning:'Belajar' },
    { jp:'ねます', romaji:'nemasu', meaning:'Tidur' },
    { jp:'おきます', romaji:'okimasu', meaning:'Bangun tidur' },
    { jp:'かいます', romaji:'kaimasu', meaning:'Membeli' },
    { jp:'うります', romaji:'urimasu', meaning:'Menjual' },
    { jp:'します', romaji:'shimasu', meaning:'Melakukan' },
    { jp:'わかります', romaji:'wakarimasu', meaning:'Mengerti' },
    { jp:'しっています', romaji:'shitte imasu', meaning:'Tahu / Mengetahui' },
    { jp:'すみます', romaji:'sumimasu', meaning:'Tinggal (di suatu tempat)' },
    { jp:'はたらきます', romaji:'hatarakimasu', meaning:'Bekerja' },
    { jp:'やすみます', romaji:'yasumimasu', meaning:'Istirahat / Absen' },
    { jp:'まちます', romaji:'machimasu', meaning:'Menunggu' },
    { jp:'あいます', romaji:'aimasu', meaning:'Bertemu' },
    { jp:'もらいます', romaji:'moraimasu', meaning:'Menerima / Mendapat' },
    { jp:'あげます', romaji:'agemasu', meaning:'Memberi' },
    { jp:'つかいます', romaji:'tsukaimasu', meaning:'Menggunakan' },
    { jp:'あけます', romaji:'akemasu', meaning:'Membuka' },
    { jp:'しめます', romaji:'shimemasu', meaning:'Menutup' },
    { jp:'のります', romaji:'norimasu', meaning:'Naik (kendaraan)' },
    { jp:'おります', romaji:'orimasu', meaning:'Turun (kendaraan)' },
  ],

  // ── TUBUH ─────────────────────────────────────────────────────────────────
  body: [
    { jp:'あたま', romaji:'atama', meaning:'Kepala (頭)' },
    { jp:'かみのけ', romaji:'kaminoke', meaning:'Rambut (髪の毛)' },
    { jp:'おでこ', romaji:'odeko', meaning:'Dahi' },
    { jp:'め', romaji:'me', meaning:'Mata (目)' },
    { jp:'まゆげ', romaji:'mayuge', meaning:'Alis' },
    { jp:'まつげ', romaji:'matsuge', meaning:'Bulu mata' },
    { jp:'みみ', romaji:'mimi', meaning:'Telinga (耳)' },
    { jp:'はな', romaji:'hana', meaning:'Hidung (鼻)' },
    { jp:'くち', romaji:'kuchi', meaning:'Mulut (口)' },
    { jp:'くちびる', romaji:'kuchibiru', meaning:'Bibir' },
    { jp:'は', romaji:'ha', meaning:'Gigi (歯)' },
    { jp:'した', romaji:'shita', meaning:'Lidah (舌)' },
    { jp:'あご', romaji:'ago', meaning:'Dagu' },
    { jp:'かお', romaji:'kao', meaning:'Wajah (顔)' },
    { jp:'くび', romaji:'kubi', meaning:'Leher (首)' },
    { jp:'かた', romaji:'kata', meaning:'Bahu (肩)' },
    { jp:'むね', romaji:'mune', meaning:'Dada (胸)' },
    { jp:'おなか', romaji:'onaka', meaning:'Perut (お腹)' },
    { jp:'せなか', romaji:'senaka', meaning:'Punggung (背中)' },
    { jp:'こし', romaji:'koshi', meaning:'Pinggang (腰)' },
    { jp:'うで', romaji:'ude', meaning:'Lengan (腕)' },
    { jp:'て', romaji:'te', meaning:'Tangan (手)' },
    { jp:'ゆび', romaji:'yubi', meaning:'Jari (指)' },
    { jp:'つめ', romaji:'tsume', meaning:'Kuku (爪)' },
    { jp:'あし', romaji:'ashi', meaning:'Kaki (足/脚)' },
    { jp:'ひざ', romaji:'hiza', meaning:'Lutut (膝)' },
  ],

  // ── TEMPAT & LOKASI ───────────────────────────────────────────────────────
  places: [
    { jp:'うち / いえ', romaji:'uchi / ie', meaning:'Rumah' },
    { jp:'がっこう', romaji:'gakkou', meaning:'Sekolah (学校)' },
    { jp:'だいがく', romaji:'daigaku', meaning:'Universitas (大学)' },
    { jp:'かいしゃ', romaji:'kaisha', meaning:'Kantor / Perusahaan (会社)' },
    { jp:'びょういん', romaji:'byouin', meaning:'Rumah sakit (病院)' },
    { jp:'えき', romaji:'eki', meaning:'Stasiun (駅)' },
    { jp:'バスてい', romaji:'basu tei', meaning:'Halte bus (バス停)' },
    { jp:'くうこう', romaji:'kuukou', meaning:'Bandara (空港)' },
    { jp:'スーパー', romaji:'suupaa', meaning:'Supermarket' },
    { jp:'コンビニ', romaji:'konbini', meaning:'Minimarket 24 jam' },
    { jp:'デパート', romaji:'depaato', meaning:'Department store' },
    { jp:'レストラン', romaji:'resutoran', meaning:'Restoran' },
    { jp:'カフェ', romaji:'kafe', meaning:'Kafe' },
    { jp:'ぎんこう', romaji:'ginkou', meaning:'Bank (銀行)' },
    { jp:'ゆうびんきょく', romaji:'yuubinkyoku', meaning:'Kantor pos (郵便局)' },
    { jp:'としょかん', romaji:'toshokan', meaning:'Perpustakaan (図書館)' },
    { jp:'こうえん', romaji:'kouen', meaning:'Taman (公園)' },
    { jp:'うみ', romaji:'umi', meaning:'Laut / Pantai (海)' },
    { jp:'やま', romaji:'yama', meaning:'Gunung (山)' },
    { jp:'かわ', romaji:'kawa', meaning:'Sungai (川)' },
    { jp:'ホテル', romaji:'hoteru', meaning:'Hotel' },
    { jp:'トイレ', romaji:'toire', meaning:'Toilet / Kamar mandi' },
    { jp:'いりぐち', romaji:'iriguchi', meaning:'Pintu masuk (入口)' },
    { jp:'でぐち', romaji:'deguchi', meaning:'Pintu keluar (出口)' },
  ],

  // ── KATA SIFAT ────────────────────────────────────────────────────────────
  adjectives: [
    { jp:'おおきい', romaji:'ookii', meaning:'Besar (大きい)' },
    { jp:'ちいさい', romaji:'chiisai', meaning:'Kecil (小さい)' },
    { jp:'たかい', romaji:'takai', meaning:'Tinggi / Mahal (高い)' },
    { jp:'ひくい', romaji:'hikui', meaning:'Rendah (低い)' },
    { jp:'やすい', romaji:'yasui', meaning:'Murah (安い)' },
    { jp:'あたらしい', romaji:'atarashii', meaning:'Baru (新しい)' },
    { jp:'ふるい', romaji:'furui', meaning:'Lama / Tua (古い)' },
    { jp:'いい / よい', romaji:'ii / yoi', meaning:'Bagus / Baik (良い)' },
    { jp:'わるい', romaji:'warui', meaning:'Buruk / Jelek (悪い)' },
    { jp:'おいしい', romaji:'oishii', meaning:'Enak (美味しい)' },
    { jp:'まずい', romaji:'mazui', meaning:'Tidak enak (まずい)' },
    { jp:'あつい', romaji:'atsui', meaning:'Panas (暑い/熱い)' },
    { jp:'さむい', romaji:'samui', meaning:'Dingin (寒い) — cuaca' },
    { jp:'つめたい', romaji:'tsumetai', meaning:'Dingin (冷たい) — benda' },
    { jp:'むずかしい', romaji:'muzukashii', meaning:'Sulit (難しい)' },
    { jp:'やさしい', romaji:'yasashii', meaning:'Mudah / Baik hati (易しい)' },
    { jp:'たのしい', romaji:'tanoshii', meaning:'Menyenangkan (楽しい)' },
    { jp:'つまらない', romaji:'tsumaranai', meaning:'Membosankan' },
    { jp:'いそがしい', romaji:'isogashii', meaning:'Sibuk (忙しい)' },
    { jp:'ひろい', romaji:'hiroi', meaning:'Luas / Lapang (広い)' },
    { jp:'せまい', romaji:'semai', meaning:'Sempit (狭い)' },
    { jp:'きれい', romaji:'kirei', meaning:'Cantik / Bersih (綺麗) — na-adj' },
    { jp:'にぎやか', romaji:'nigiyaka', meaning:'Ramai / Meriah (賑やか) — na-adj' },
    { jp:'しずか', romaji:'shizuka', meaning:'Tenang / Sunyi (静か) — na-adj' },
    { jp:'げんき', romaji:'genki', meaning:'Sehat / Bersemangat (元気) — na-adj' },
    { jp:'すき', romaji:'suki', meaning:'Suka (好き) — na-adj' },
    { jp:'きらい', romaji:'kirai', meaning:'Tidak suka / Benci (嫌い) — na-adj' },
    { jp:'じょうず', romaji:'jouzu', meaning:'Pandai / Mahir (上手) — na-adj' },
    { jp:'へた', romaji:'heta', meaning:'Tidak pandai (下手) — na-adj' },
  ],

  // ── CUACA ─────────────────────────────────────────────────────────────────
  weather: [
    { jp:'てんき', romaji:'tenki', meaning:'Cuaca (天気)' },
    { jp:'はれ', romaji:'hare', meaning:'Cerah / Sunny (晴れ)' },
    { jp:'くもり', romaji:'kumori', meaning:'Berawan (曇り)' },
    { jp:'あめ', romaji:'ame', meaning:'Hujan (雨)' },
    { jp:'ゆき', romaji:'yuki', meaning:'Salju (雪)' },
    { jp:'かぜ', romaji:'kaze', meaning:'Angin (風)' },
    { jp:'かみなり', romaji:'kaminari', meaning:'Petir (雷)' },
    { jp:'たいふう', romaji:'taifuu', meaning:'Topan (台風)' },
    { jp:'きり', romaji:'kiri', meaning:'Kabut (霧)' },
    { jp:'にじ', romaji:'niji', meaning:'Pelangi (虹)' },
    { jp:'きおん', romaji:'kion', meaning:'Suhu udara (気温)' },
    { jp:'しつど', romaji:'shitsudo', meaning:'Kelembaban (湿度)' },
    { jp:'あつい', romaji:'atsui', meaning:'Panas (暑い)' },
    { jp:'さむい', romaji:'samui', meaning:'Dingin / Sejuk (寒い)' },
    { jp:'すずしい', romaji:'suzushii', meaning:'Sejuk / Segar (涼しい)' },
    { jp:'あたたかい', romaji:'atatakai', meaning:'Hangat (暖かい)' },
  ],

  // ── TRANSPORTASI ─────────────────────────────────────────────────────────
  transport: [
    { jp:'でんしゃ', romaji:'densha', meaning:'Kereta listrik (電車)' },
    { jp:'しんかんせん', romaji:'shinkansen', meaning:'Kereta cepat (新幹線)' },
    { jp:'バス', romaji:'basu', meaning:'Bus' },
    { jp:'タクシー', romaji:'takushii', meaning:'Taksi' },
    { jp:'じてんしゃ', romaji:'jitensha', meaning:'Sepeda (自転車)' },
    { jp:'オートバイ', romaji:'ootobai', meaning:'Motor (オートバイ)' },
    { jp:'くるま', romaji:'kuruma', meaning:'Mobil (車)' },
    { jp:'ひこうき', romaji:'hikouki', meaning:'Pesawat (飛行機)' },
    { jp:'ふね', romaji:'fune', meaning:'Kapal (船)' },
    { jp:'ちかてつ', romaji:'chikatetsu', meaning:'Kereta bawah tanah / MRT (地下鉄)' },
    { jp:'えき', romaji:'eki', meaning:'Stasiun (駅)' },
    { jp:'のりかえ', romaji:'norikae', meaning:'Transfer / Ganti kereta (乗り換え)' },
    { jp:'きっぷ', romaji:'kippu', meaning:'Tiket (切符)' },
    { jp:'ていきけん', romaji:'teiki-ken', meaning:'Kartu langganan (定期券)' },
    { jp:'つぎの〜', romaji:'tsugi no ~', meaning:'~ berikutnya (次の)' },
  ],
}

// ─── KANJI N5 ─────────────────────────────────────────────────────────────────
export const KANJI_N5 = [
  { k:'日', on:'にち/じつ', kun:'ひ/か', m:'Matahari / Hari', ex:'日本（にほん）= Jepang' },
  { k:'月', on:'げつ/がつ', kun:'つき', m:'Bulan', ex:'月曜日（げつようび）= Senin' },
  { k:'火', on:'か', kun:'ひ', m:'Api', ex:'火曜日（かようび）= Selasa' },
  { k:'水', on:'すい', kun:'みず', m:'Air', ex:'水曜日（すいようび）= Rabu' },
  { k:'木', on:'もく/ぼく', kun:'き', m:'Pohon / Kayu', ex:'木曜日（もくようび）= Kamis' },
  { k:'金', on:'きん/こん', kun:'かね', m:'Emas / Uang', ex:'金曜日（きんようび）= Jumat' },
  { k:'土', on:'ど/と', kun:'つち', m:'Tanah', ex:'土曜日（どようび）= Sabtu' },
  { k:'山', on:'さん', kun:'やま', m:'Gunung', ex:'富士山（ふじさん）= Gunung Fuji' },
  { k:'川', on:'せん', kun:'かわ', m:'Sungai', ex:'川（かわ）= sungai' },
  { k:'人', on:'じん/にん', kun:'ひと', m:'Orang', ex:'日本人（にほんじん）= Orang Jepang' },
  { k:'口', on:'こう/く', kun:'くち', m:'Mulut', ex:'入口（いりぐち）= Pintu masuk' },
  { k:'目', on:'もく', kun:'め', m:'Mata', ex:'目（め）= mata' },
  { k:'手', on:'しゅ', kun:'て', m:'Tangan', ex:'手紙（てがみ）= Surat' },
  { k:'足', on:'そく', kun:'あし', m:'Kaki', ex:'足（あし）= kaki' },
  { k:'大', on:'だい/たい', kun:'おお', m:'Besar', ex:'大学（だいがく）= Universitas' },
  { k:'小', on:'しょう', kun:'ちい/こ', m:'Kecil', ex:'小さい（ちいさい）= kecil' },
  { k:'上', on:'じょう', kun:'うえ/かみ', m:'Atas', ex:'上（うえ）= atas' },
  { k:'下', on:'か/げ', kun:'した/しも', m:'Bawah', ex:'下（した）= bawah' },
  { k:'中', on:'ちゅう', kun:'なか', m:'Tengah / Dalam', ex:'中（なか）= dalam' },
  { k:'左', on:'さ', kun:'ひだり', m:'Kiri', ex:'左（ひだり）= kiri' },
  { k:'右', on:'う/ゆう', kun:'みぎ', m:'Kanan', ex:'右（みぎ）= kanan' },
  { k:'男', on:'だん/なん', kun:'おとこ', m:'Laki-laki', ex:'男の子（おとこのこ）= Anak laki' },
  { k:'女', on:'じょ/にょ', kun:'おんな', m:'Perempuan', ex:'女の子（おんなのこ）= Anak perempuan' },
  { k:'子', on:'し/す', kun:'こ', m:'Anak', ex:'子ども（こども）= anak' },
  { k:'本', on:'ほん', kun:'もと', m:'Buku / Asal', ex:'本（ほん）= buku' },
  { k:'一', on:'いち', kun:'ひと', m:'Satu', ex:'一つ（ひとつ）= satu buah' },
  { k:'二', on:'に', kun:'ふた', m:'Dua', ex:'二つ（ふたつ）= dua buah' },
  { k:'三', on:'さん', kun:'み', m:'Tiga', ex:'三日（みっか）= tiga hari' },
  { k:'四', on:'し', kun:'よ/よん', m:'Empat', ex:'四月（しがつ）= April' },
  { k:'五', on:'ご', kun:'いつ', m:'Lima', ex:'五月（ごがつ）= Mei' },
  { k:'六', on:'ろく', kun:'む/むい', m:'Enam', ex:'六月（ろくがつ）= Juni' },
  { k:'七', on:'しち', kun:'なな', m:'Tujuh', ex:'七月（しちがつ）= Juli' },
  { k:'八', on:'はち', kun:'や/やっ', m:'Delapan', ex:'八月（はちがつ）= Agustus' },
  { k:'九', on:'く/きゅう', kun:'ここの', m:'Sembilan', ex:'九月（くがつ）= September' },
  { k:'十', on:'じゅう', kun:'とお/と', m:'Sepuluh', ex:'十月（じゅうがつ）= Oktober' },
  { k:'百', on:'ひゃく', kun:'もも', m:'Seratus', ex:'三百（さんびゃく）= 300' },
  { k:'千', on:'せん', kun:'ち', m:'Seribu', ex:'三千（さんぜん）= 3000' },
  { k:'年', on:'ねん', kun:'とし', m:'Tahun', ex:'今年（ことし）= tahun ini' },
  { k:'学', on:'がく', kun:'まな', m:'Belajar', ex:'学生（がくせい）= pelajar' },
  { k:'校', on:'こう', kun:'-', m:'Sekolah', ex:'学校（がっこう）= sekolah' },
  { k:'先', on:'せん', kun:'さき', m:'Sebelumnya / Ujung', ex:'先生（せんせい）= guru' },
  { k:'生', on:'せい/しょう', kun:'いき/う', m:'Hidup / Lahir', ex:'先生（せんせい）= guru' },
  { k:'車', on:'しゃ', kun:'くるま', m:'Kendaraan', ex:'電車（でんしゃ）= kereta' },
  { k:'電', on:'でん', kun:'-', m:'Listrik', ex:'電話（でんわ）= telepon' },
  { k:'話', on:'わ', kun:'はなし/はな', m:'Bicara / Cerita', ex:'電話（でんわ）= telepon' },
  { k:'語', on:'ご', kun:'かた', m:'Bahasa', ex:'日本語（にほんご）= B. Jepang' },
  { k:'国', on:'こく/ごく', kun:'くに', m:'Negara', ex:'外国（がいこく）= negara asing' },
  { k:'時', on:'じ', kun:'とき', m:'Waktu / Jam', ex:'何時（なんじ）= jam berapa' },
  { k:'分', on:'ふん/ぶん', kun:'わ', m:'Menit / Bagian', ex:'五分（ごふん）= 5 menit' },
  { k:'円', on:'えん', kun:'-', m:'Yen (mata uang)', ex:'百円（ひゃくえん）= 100 yen' },
]

// ─── GRAMMAR ──────────────────────────────────────────────────────────────────
// ─── MODULE INFO (penjelasan tiap tahapan) ────────────────────────────────────
export const MODULE_INFO = {
  hiragana: {
    why: 'Hiragana adalah alfabet pertama yang WAJIB dikuasai. Hampir semua kata Jepang bisa ditulis dengan Hiragana — tanpa ini, kamu tidak bisa membaca apapun.',
    what: ['46 huruf dasar (あ～ん)', '25 huruf dakuten — bersuara (が、ざ、だ、ば、ぱ)', '33 huruf kombinasi (きゃ、しゃ、ちゃ...)', 'Cara baca dan penulisan tiap huruf'],
    time: '1–2 minggu (belajar 5 huruf/hari)',
    jlpt: 'Semua seksi JLPT menggunakan Hiragana. Ini adalah syarat mutlak!',
    tip: 'Tulis setiap huruf berulang kali sambil ucapkan bunyinya. Gunakan mnemonik visual — あ mirip tanda baca "a" dengan kaki.',
    level: 'Mutlak untuk Pemula',
    color: '#e63946',
  },
  katakana: {
    why: 'Katakana dipakai untuk kata serapan asing (10-15% teks Jepang), nama orang asing, merek, dan kata penekanan. Jika tahu Hiragana, Katakana lebih cepat dipelajari karena bunyinya sama.',
    what: ['46 huruf dasar (ア～ン)', '25 huruf dakuten bersuara (ガ、ザ、ダ、バ、パ)', '33 huruf kombinasi (キャ、シャ...)', 'Membaca nama & kata serapan Barat'],
    time: '1 minggu (setelah hafal Hiragana)',
    jlpt: 'Moji-Goi section — soal membaca kata Katakana sering muncul.',
    tip: 'Latih membaca nama merek dan produk Jepang setiap hari. コーヒー (kopi), テレビ (TV), スマートフォン (smartphone).',
    level: 'Pemula Wajib',
    color: '#457b9d',
  },
  vocabulary: {
    why: 'JLPT N5 mengharuskan penguasaan ~800 kata kosakata. Kosakata adalah bahan bakar untuk berkomunikasi — semakin banyak kata yang kamu tahu, semakin lancar kamu berbicara.',
    what: ['Angka 0 – 1.000.000', 'Sapaan & ekspresi sehari-hari (24 frasa)', 'Hari, bulan, dan musim', 'Waktu & ekspresi temporal', 'Warna, keluarga, makanan, tempat', 'Kata sifat, kata kerja, tubuh, cuaca, transportasi'],
    time: '4–6 minggu (pelajari 1 kategori per 3 hari)',
    jlpt: 'Moji-Goi section (25 menit) — menguji kosakata dan kanji.',
    tip: 'Gunakan metode "kalimat contoh" — jangan hafal kata satu per satu, tapi hafalkan dalam kalimat. Misal: "まいにち ごはん を たべます" bukan cuma "ごはん = nasi".',
    level: 'N5 Dasar',
    color: '#2a9d8f',
  },
  grammar: {
    why: 'Tata bahasa adalah kerangka kalimat Jepang. Tanpa grammar, kata-kata yang kamu hafal tidak bisa disusun menjadi kalimat yang benar. JLPT N5 menguji ~80 poin grammar dasar.',
    what: ['15 partikel penting (は が を に で の と も へ から まで か ね よ)', 'Pola kalimat dasar (S は N/Adj/V です)', 'Konjugasi kata kerja ます (positif, negatif, lampau)', 'Konjugasi kata sifat i-adj & na-adj', 'Bentuk て (progressive, permintaan, izin)', 'Ekspresi: たい ましょう ことができる あります/います', 'Kata tanya: なに どこ いつ だれ いくら', 'Kata demonstratif: これ/それ/あれ, ここ/そこ/あそこ'],
    time: '4–6 minggu (pelajari 1 topik per 3–4 hari)',
    jlpt: 'Bunpou-Dokkai section (50 menit) — terbesar! Menguji partikel, konjugasi, dan pola kalimat.',
    tip: 'Jangan cuma hafal aturan — buat kalimat sendiri! Misal: setelah belajar partikel に, buat 5 kalimat dengan に tentang rutinitas harianmu.',
    level: 'N5 Inti',
    color: '#e9c46a',
  },
  kanji: {
    why: 'JLPT N5 membutuhkan penguasaan ~100 kanji dasar. Kanji mempercepat membaca teks Jepang karena satu karakter mewakili satu kata/konsep. Kanji N5 adalah yang paling umum dipakai sehari-hari.',
    what: ['50 kanji N5 dengan arti', 'On-yomi (cara baca Cina)', 'Kun-yomi (cara baca Jepang asli)', 'Contoh kata untuk tiap kanji', 'Hari dalam seminggu dari kanji (日月火水木金土)'],
    time: '4–6 minggu (hafal 5 kanji/hari + review)',
    jlpt: 'Moji-Goi section — membaca kanji dan memilih arti yang benar.',
    tip: 'Gunakan sistem spaced repetition (SRS) seperti Anki. Visualisasikan makna kanji: 山 = puncak-puncak gunung, 川 = aliran sungai, 木 = pohon dengan akar.',
    level: 'N5 Wajib',
    color: '#8338ec',
  },
  conversation: {
    why: 'Tujuan akhir belajar bahasa adalah BERBICARA. Modul ini mengajarkan frasa siap pakai untuk situasi nyata — dari perkenalan hingga darurat medis. Ini yang langsung bisa kamu gunakan hari ini!',
    what: ['Perkenalan diri (7 frasa)', 'Dialog di restoran (7 frasa)', 'Dialog berbelanja (7 frasa)', 'Meminta bantuan & arah (7 frasa)', 'Menggunakan transportasi (6 frasa)', 'Situasi darurat & dokter (6 frasa)'],
    time: '2–3 minggu (latih dengan teknik shadowing setiap hari)',
    jlpt: 'Chokai (Listening) section (30 menit) — mendengar percakapan situasional.',
    tip: 'Shadowing = dengar audio → tirukan langsung dengan suara keras tanpa jeda. Ini cara tercepat memperbaiki pengucapan dan kelancaran bicara.',
    level: 'N5 Praktikal',
    color: '#f4a261',
  },
}

// ─── GRAMMAR (80+ poin N5 lengkap) ──────────────────────────────────────────
export const GRAMMAR = [
  // ── 1. PARTIKEL ──────────────────────────────────────────────────────────
  {
    id: 'particles', title: 'Partikel', icon: '📌',
    intro: 'Partikel adalah kata pendek yang menempel setelah kata benda/kata kerja untuk menunjukkan fungsinya dalam kalimat. Ini adalah fondasi grammar Jepang — WAJIB hafal semua!',
    items: [
      { term:'は (wa)', desc:'Menandai TOPIK kalimat', ex:'わたし は がくせい です', tr:'Saya adalah pelajar', tip:'⚠️ は dibaca "wa" bukan "ha" saat jadi partikel. Berbeda dari が yang menandai subjek.' },
      { term:'が (ga)', desc:'Menandai SUBJEK — info baru atau penekanan', ex:'ねこ が います', tr:'Ada kucing (ini)', tip:'Pakai が untuk info baru. は untuk topik yang sudah diketahui. Ini perbedaan paling sulit N5!' },
      { term:'を (wo)', desc:'Menandai OBJEK langsung kata kerja', ex:'パン を たべます', tr:'Makan roti', tip:'を hanya dipakai sebagai partikel, tidak berdiri sendiri. Dibaca "o" bukan "wo".' },
      { term:'に (ni)', desc:'Arah tujuan / waktu spesifik / lokasi keberadaan', ex:'がっこう に いきます', tr:'Pergi ke sekolah', tip:'3 fungsi: 1) Tujuan: 学校に行く 2) Waktu: 3時に起きる 3) Keberadaan: 机に本がある' },
      { term:'で (de)', desc:'Lokasi aksi / alat / cara / bahan', ex:'としょかん で べんきょうします', tr:'Belajar di perpustakaan', tip:'Bedakan: に untuk keberadaan (ada di), で untuk aksi (melakukan di). 公園にいる vs 公園で遊ぶ' },
      { term:'へ (e)', desc:'Arah menuju (lebih menekankan arah, bisa gantikan に)', ex:'にほん へ いきます', tr:'Pergi ke Jepang', tip:'Dibaca "e" bukan "he". Hampir sama dengan に untuk arah, tapi に lebih umum dipakai.' },
      { term:'の (no)', desc:'Kepemilikan / modifikasi nomina / penjelasan', ex:'わたし の ほん', tr:'Buku saya (buku kepunyaan saya)', tip:'Seperti "milik/punya". Juga bisa: 日本語の先生 = guru bahasa Jepang (の menghubungkan dua nomina)' },
      { term:'と (to)', desc:'Dan (menyebut semua item) / Bersama dengan', ex:'りんご と みかん を たべます', tr:'Makan apel dan jeruk', tip:'Bedakan dengan や: と menyebut semua, や hanya contoh beberapa. りんごとみかん = hanya itu dua.' },
      { term:'や (ya)', desc:'Dan lain-lain (menyebut beberapa contoh)', ex:'りんご や みかん など', tr:'Apel, jeruk, dan lain-lain', tip:'Menunjukkan daftar tidak lengkap. Sering diikuti など (dan sebagainya).' },
      { term:'も (mo)', desc:'Juga / Pun — menambahkan hal serupa', ex:'わたし も がくせい です', tr:'Saya pun (juga) pelajar', tip:'Gantikan は atau が. わたしも = saya juga. 田中さんも来ました = Tanaka-san juga datang.' },
      { term:'から (kara)', desc:'Dari (titik asal) / Karena (sebab)', ex:'にほん から きました', tr:'Datang dari Jepang', tip:'2 fungsi: 1) Asal: 9時から = dari jam 9 2) Alasan: 雨だから = karena hujan' },
      { term:'まで (made)', desc:'Sampai / Hingga (batas waktu atau tempat)', ex:'えき まで あるきます', tr:'Jalan kaki sampai stasiun', tip:'Sering berpasangan: から～まで = dari～sampai. 9時から5時まで = dari jam 9 sampai jam 5.' },
      { term:'か (ka)', desc:'Membentuk kalimat TANYA', ex:'がくせい です か？', tr:'Apakah (kamu) pelajar?', tip:'Tambahkan か di akhir kalimat → jadi pertanyaan. Intonasi naik. Jawab: はい (ya) / いいえ (tidak).' },
      { term:'ね (ne)', desc:'Mencari persetujuan / konfirmasi lawan bicara', ex:'おいしい です ね', tr:'Enak ya (setuju kan?)', tip:'Seperti "ya" atau "kan" dalam bahasa Indonesia. Mengundang respon dari lawan bicara.' },
      { term:'よ (yo)', desc:'Menegaskan / memberikan info baru kepada lawan bicara', ex:'これ は おいしい です よ', tr:'Ini enak lho (saya kasih tahu)', tip:'Dipakai saat memberikan info yang lawan bicara belum tahu. Lebih tegas dari ね.' },
    ]
  },

  // ── 2. KATA KERJA GOLONGAN (動詞の分類) ───────────────────────────────────
  {
    id: 'verb-groups', title: 'Kata Kerja: 3 Golongan', icon: '⚡',
    intro: 'Semua kata kerja Jepang dibagi 3 golongan. Mengetahui golongan = tahu cara konjugasinya. Ini adalah kunci membentuk semua bentuk kata kerja!',
    items: [
      { term:'GOLONGAN 1 — 五段動詞 (Godan Doushi)', desc:'Akhiran: -u, -ku, -gu, -su, -tsu, -nu, -bu, -mu, -ru (bukan i/e sebelum ru)', ex:'かく (kaku) · のむ (nomu) · はなす (hanasu) · まつ (matsu) · よぶ (yobu)', tr:'Menulis · Minum · Berbicara · Menunggu · Memanggil', tip:'Cara ubah ke ます: ganti bunyi akhir ke baris i + ます. かく→かきます, のむ→のみます, はなす→はなします' },
      { term:'Golongan 1 — contoh kata N5', desc:'Kata kerja Godan yang wajib hafal', ex:'いく(pergi) · くる(datang*) · かう(beli) · のる(naik) · おきる* · かえる(pulang)', tr:'*くる dan おきる pengecualian', tip:'かう→かいます, のる→のります, かえる→かえります' },
      { term:'GOLONGAN 2 — 一段動詞 (Ichidan Doushi)', desc:'Akhiran: -iru atau -eru. Lebih mudah dikonjugasi!', ex:'たべる (taberu) · みる (miru) · おきる (okiru) · おしえる (oshieru)', tr:'Makan · Melihat · Bangun · Mengajar', tip:'Cara ubah ke ます: ganti る → ます saja! たべる→たべます, みる→みます, おきる→おきます' },
      { term:'Golongan 2 — contoh kata N5', desc:'Kata kerja Ichidan yang wajib hafal', ex:'たべる · みる · おきる · ねる · きる(pakai) · でる(keluar) · おしえる · はじめる', tr:'Makan · Lihat · Bangun · Tidur · Pakai · Keluar · Ajar · Mulai', tip:'Semua mudah: buang る, tambah ます' },
      { term:'GOLONGAN 3 — 不規則動詞 (Fukisoku Doushi)', desc:'HANYA 2 kata kerja: する dan くる. Tidak beraturan, WAJIB hafal!', ex:'する → します (melakukan) ・ くる → きます (datang)', tr:'する = melakukan, buat · くる = datang', tip:'する dipakai untuk: べんきょうする(belajar), うんどうする(olahraga), りょこうする(traveling) — kata benda + する = kata kerja!' },
      { term:'する — kata kerja serbaguna', desc:'Kata benda + する = kata kerja', ex:'べんきょう する · うんどう する · でんわ する · りょこう する', tr:'Belajar · Olahraga · Menelepon · Traveling', tip:'Ini sangat berguna! Hampir semua kata serapan bisa jadi kata kerja: ドライブする, スポーツする' },
    ]
  },

  // ── 3. KONJUGASI KATA KERJA ────────────────────────────────────────────────
  {
    id: 'verb-conjugation', title: 'Konjugasi Kata Kerja', icon: '🔄',
    intro: 'Dari bentuk ます (masu-kei), kamu bisa membuat semua bentuk yang dibutuhkan. Pelajari pola ini dan terapkan ke semua kata kerja!',
    items: [
      { term:'Bentuk ます (Positif Sekarang/Akan)', desc:'Tindakan sekarang atau yang akan datang — formal/sopan', ex:'たべます · のみます · いきます · します', tr:'(Saya) makan · minum · pergi · melakukan', tip:'Ini adalah bentuk dasar yang dipelajari pertama. Formal, cocok untuk percakapan dengan orang yang belum akrab.' },
      { term:'Bentuk ません (Negatif Sekarang)', desc:'Tidak melakukan sesuatu — sekarang/kebiasaan', ex:'にく を たべません · さけ を のみません', tr:'Tidak makan daging · Tidak minum alkohol', tip:'Rumus: ます → ません. Simpel! Hanya ganti satu suku kata.' },
      { term:'Bentuk ました (Positif Lampau)', desc:'Sudah melakukan sesuatu — masa lalu', ex:'きのう すし を たべました', tr:'Kemarin (saya) makan sushi', tip:'Rumus: ます → ました. Untuk cerita kejadian yang sudah berlalu.' },
      { term:'Bentuk ませんでした (Negatif Lampau)', desc:'Tidak melakukan di masa lalu', ex:'きのう がっこう に いきませんでした', tr:'Kemarin tidak pergi ke sekolah', tip:'Rumus: ます → ませんでした. Panjang tapi polanya konsisten.' },
      { term:'Bentuk て (Te-form) — Golongan 1', desc:'Aturan te-form godan (ada 4 pola!)', ex:'かく→かいて · のむ→のんで · はなす→はなして · まつ→まって', tr:'Menulis→(て) · Minum→(んで) · Bicara→(して) · Tunggu→(って)', tip:'Golongan 1 punya 4 pola. く/ぐ→いて/いで, む/ぬ/ぶ→んで, す→して, つ/る/う→って' },
      { term:'Bentuk て (Te-form) — Golongan 2 & 3', desc:'Te-form ichidan dan irregular — lebih mudah', ex:'たべる→たべて · みる→みて · する→して · くる→きて', tr:'Makan→(て) · Lihat→(て) · Lakukan→(して) · Datang→(きて)', tip:'Golongan 2: buang る, tambah て. Golongan 3: する→して, くる→きて (hafal!)' },
      { term:'〜ている (Progressive)', desc:'Sedang melakukan sesuatu SEKARANG', ex:'いま ごはん を たべています', tr:'Sekarang sedang makan', tip:'Te-form + います = sedang ~. Mirip "-ing" dalam bahasa Inggris.' },
      { term:'〜ていました (Progressive Lampau)', desc:'Sedang melakukan di masa lalu', ex:'きのう テレビ を みていました', tr:'Kemarin sedang menonton TV', tip:'Te-form + いました = sedang ~ (waktu lampau)' },
    ]
  },

  // ── 4. KONJUGASI KATA SIFAT ────────────────────────────────────────────────
  {
    id: 'adjective-conjugation', title: 'Konjugasi Kata Sifat', icon: '🎨',
    intro: 'Kata sifat Jepang ada 2 jenis: い-adjektiva dan な-adjektiva. Cara konjugasinya BERBEDA. Pahami perbedaannya dulu!',
    items: [
      { term:'い-adjektiva (i-keiyoushi) — Ciri', desc:'Selalu diakhiri huruf い. Bisa langsung sebelum nomina.', ex:'おおきい · ちいさい · あたらしい · たかい · あつい · さむい', tr:'Besar · Kecil · Baru · Mahal/Tinggi · Panas · Dingin', tip:'⚠️ いい (bagus) dan きれい pengecualian! きれい berakhiran い tapi adalah な-adjektiva.' },
      { term:'い-adj: Positif → Negatif', desc:'Ganti い → くない', ex:'たかい → たかくない · おいしい → おいしくない', tr:'Mahal → Tidak mahal · Enak → Tidak enak', tip:'Rumus konsisten: buang い, tambah くない. Contoh: あつい→あつくない = tidak panas.' },
      { term:'い-adj: Positif → Lampau', desc:'Ganti い → かった', ex:'たかい → たかかった · むずかしい → むずかしかった', tr:'(Dulunya) mahal · (Dulunya) sulit', tip:'Rumus: buang い, tambah かった. Ditambah です menjadi formal: たかかったです.' },
      { term:'い-adj: Negatif Lampau', desc:'Ganti い → くなかった', ex:'たかくなかった · さむくなかった', tr:'(Dulu) tidak mahal · (Dulu) tidak dingin', tip:'Empat bentuk: たかい(+now) たかくない(-now) たかかった(+past) たかくなかった(-past)' },
      { term:'い-adj: Menyambung kalimat (〜くて)', desc:'Ganti い → くて untuk menyambung ke kalimat berikutnya', ex:'このへや は ひろくて あかるい です', tr:'Kamar ini luas dan terang', tip:'くて dipakai untuk menyambung 2 sifat positif. Mirip "dan" dalam bahasa Indonesia.' },
      { term:'な-adjektiva (na-keiyoushi) — Ciri', desc:'Butuh な sebelum nomina. Tidak berakhiran い (kecuali きれい, きらい, げんき)', ex:'きれい · しずか · げんき · すき · じょうず · にぎやか', tr:'Cantik · Tenang · Sehat · Suka · Pandai · Ramai', tip:'Cara pakai: きれい な へや = kamar yang cantik. な harus ada di depan nomina!' },
      { term:'な-adj: Negatif', desc:'Tambahkan じゃない / ではない setelah な-adj (tanpa な)', ex:'しずか じゃない · きれい じゃない', tr:'Tidak tenang · Tidak cantik', tip:'Rumus: buang な, tambah じゃない/ではない. ではない lebih formal dari じゃない.' },
      { term:'な-adj: Lampau', desc:'Tambahkan だった / でした setelah な-adj', ex:'きれい だった · げんき でした', tr:'(Dulu) cantik · (Dulu) sehat', tip:'Positif lampau: きれいだった/でした. Negatif lampau: きれいじゃなかった/ではなかった.' },
    ]
  },

  // ── 5. POLA KALIMAT UTAMA N5 ──────────────────────────────────────────────
  {
    id: 'sentence-patterns', title: 'Pola Kalimat N5', icon: '🏗️',
    intro: 'Inilah 80+ poin grammar N5 yang diuji JLPT. Pelajari satu per satu dan buat kalimat sendiri untuk setiap pola!',
    items: [
      { term:'〜は〜です / じゃないです', desc:'Menyatakan/menolak identitas atau sifat', ex:'わたし は にほんじん じゃないです', tr:'Saya bukan orang Jepang', tip:'じゃないです = ではありません (formal). Keduanya benar.' },
      { term:'います / あります', desc:'Ada (hidup vs benda mati)', ex:'つくえ の うえ に ほん が あります', tr:'Di atas meja ada buku', tip:'います = makhluk hidup (人・動物). あります = benda mati. ねこがいます vs かぎがあります.' },
      { term:'〜てください', desc:'Meminta seseorang melakukan sesuatu (sopan)', ex:'まどを あけて ください', tr:'Tolong buka jendelanya', tip:'Te-form + ください. Semakin tinggi kata sopan yang dipakai, semakin formal permintaannya.' },
      { term:'〜ないでください', desc:'Meminta seseorang TIDAK melakukan sesuatu', ex:'ここで たばこを すわないでください', tr:'Tolong jangan merokok di sini', tip:'Bentuk ない + でください. Sering ada di papan pengumuman dan larangan.' },
      { term:'〜ましょう / 〜ましょうか', desc:'Mari kita ~ / Bagaimana kalau kita ~?', ex:'いっしょに たべましょう！', tr:'Mari makan bersama!', tip:'ましょう = ajakan tegas "ayo!". ましょうか = lebih halus, menanyakan pendapat.' },
      { term:'〜ませんか', desc:'Maukah ~ ? / Bagaimana kalau ~ ? (ajakan halus)', ex:'いっしょに えいがを みませんか？', tr:'Maukah menonton film bersama?', tip:'Lebih sopan dari ましょうか. Sering dipakai saat mengundang seseorang.' },
      { term:'〜たいです / 〜たくないです', desc:'Ingin melakukan ~ / Tidak ingin ~', ex:'にほんに いきたいです', tr:'Ingin pergi ke Jepang', tip:'Masu-stem + たい + です. Bukan kata kerja, tapi い-adjektiva! Jadi: たかい = たかくない.' },
      { term:'〜てもいいですか', desc:'Bolehkah saya ~ ? (minta izin)', ex:'しゃしんを とっても いいですか？', tr:'Bolehkah saya mengambil foto?', tip:'Te-form + もいいですか. Jawaban: はい、どうぞ (ya, silakan) / いいえ、いけません (tidak boleh).' },
      { term:'〜てはいけません', desc:'Tidak boleh ~ / Dilarang ~', ex:'ここでは たばこを すっては いけません', tr:'Di sini dilarang merokok', tip:'Sering di papan larangan. Lebih kuat dari ないでください (larangan keras).' },
      { term:'〜から (sebab)', desc:'Karena ~ / Sebab ~', ex:'あたまが いたいから、やすみます', tr:'Karena kepala sakit, saya istirahat', tip:'S1 + から + S2. から di tengah kalimat = "karena". Bedakan から = dari (asal tempat).' },
      { term:'〜ので (sebab formal)', desc:'Karena ~ (lebih sopan dari から)', ex:'じかんが ないので、いそぎます', tr:'Karena tidak ada waktu, saya terburu-buru', tip:'ので lebih formal/sopan dari から. Sering dipakai dalam situasi formal atau surat.' },
      { term:'〜ことができます', desc:'Bisa / Mampu melakukan ~', ex:'にほんごで はなすことが できます', tr:'Bisa berbicara dalam bahasa Jepang', tip:'V(kamus) + ことができます. Bentuk yang lebih formal dari できます saja.' },
      { term:'〜より〜のほうが', desc:'A lebih ~ daripada B (perbandingan)', ex:'バスより でんしゃの ほうが はやいです', tr:'Kereta lebih cepat daripada bus', tip:'Struktur: BよりAのほうが〜 = A lebih ~ dari B. より = "daripada".' },
      { term:'〜がいちばん〜 (superlative)', desc:'~ paling ~ (dari semuanya)', ex:'くだものの なかで りんごが いちばん すきです', tr:'Di antara buah-buahan, apel yang paling saya suka', tip:'の中で + Noun + がいちばん + Adj/Verb. いちばん = nomor satu / paling.' },
      { term:'〜つもりです', desc:'Berniat / Berencana melakukan ~', ex:'らいねん にほんに いくつもりです', tr:'Tahun depan berencana pergi ke Jepang', tip:'V(kamus) + つもりです. Rencana yang sudah ada niat kuat. Negatif: V(nai) + つもりです.' },
      { term:'〜ほうがいいです', desc:'Lebih baik ~ (saran/rekomendasi)', ex:'はやく ねたほうが いいですよ', tr:'Lebih baik tidur cepat lho', tip:'V(ta) + ほうがいいです = saran positif. V(nai) + ほうがいいです = saran negatif (lebih baik tidak ~).' },
      { term:'〜たりする (listing actions)', desc:'Melakukan hal-hal seperti ~ (daftar tidak lengkap)', ex:'しゅうまつは えいがを みたり かいものを したりします', tr:'Di akhir pekan, nonton film, belanja, dll.', tip:'V(ta) + り + V(ta) + り + します. Menunjukkan beberapa kegiatan secara bergantian, tidak semua disebutkan.' },
      { term:'〜ながら (sambil)', desc:'Melakukan dua hal bersamaan', ex:'おんがくを ききながら べんきょうします', tr:'Belajar sambil mendengarkan musik', tip:'V1(masu-stem) + ながら + V2. V2 = aksi utama. V1 = aksi sambil.' },
    ]
  },

  // ── 6. KATA TANYA & DEMONSTRATIF ─────────────────────────────────────────
  {
    id: 'question-demo', title: 'Kata Tanya & Demonstratif', icon: '❓',
    intro: 'Kata tanya dan kata tunjuk adalah hal pertama yang dibutuhkan untuk berkomunikasi. Hafalkan semua ini!',
    items: [
      { term:'なに / なん (nani/nan)', desc:'Apa?', ex:'これ は なん ですか？', tr:'Ini apa?', tip:'なに dipakai sebelum kata kerja/partikel. なん dipakai sebelum です atau counter (なんじ、なんさい).' },
      { term:'どこ (doko)', desc:'Di mana?', ex:'トイレ は どこ ですか？', tr:'Di mana toilet?', tip:'Sangat penting saat di Jepang! Kombinasi: どこから(dari mana?) どこへ(ke mana?) どこで(di mana melakukan?)' },
      { term:'いつ (itsu)', desc:'Kapan?', ex:'たんじょうびは いつ ですか？', tr:'Kapan ulang tahunmu?', tip:'Tidak perlu partikel setelah いつ dalam kalimat tanya.' },
      { term:'だれ / どなた (dare/donata)', desc:'Siapa? (どなた = lebih sopan)', ex:'あの ひと は だれ ですか？', tr:'Orang itu siapa?', tip:'どなた adalah bentuk sopan dari だれ. Pakai どなた untuk orang yang dihormati.' },
      { term:'どれ (dore)', desc:'Yang mana? (dari 3+ pilihan)', ex:'あなたの かばん は どれ ですか？', tr:'Tas kamu yang mana?', tip:'Untuk 2 pilihan pakai どちら(どっち). Untuk 3+ pilihan pakai どれ.' },
      { term:'どの (dono)', desc:'Yang mana ~ ? (sebelum nomina)', ex:'どの ほん が すき ですか？', tr:'Buku yang mana yang kamu suka?', tip:'どれ berdiri sendiri, どの diikuti nomina: どの本(buku yang mana) どの人(orang yang mana)' },
      { term:'どんな (donna)', desc:'Seperti apa? / Bagaimana jenisnya?', ex:'どんな たべもの が すき ですか？', tr:'Makanan seperti apa yang kamu suka?', tip:'Menanyakan jenis/karakteristik. Jawaban biasanya dengan kata sifat atau deskripsi.' },
      { term:'どう (dou)', desc:'Bagaimana? (cara/kondisi)', ex:'にほんご の べんきょう は どう ですか？', tr:'Bagaimana belajar bahasa Jepangnya?', tip:'Menanyakan cara atau keadaan. Jawaban biasanya: いいです、むずかしいです, dll.' },
      { term:'なぜ / どうして (naze/doushite)', desc:'Mengapa? / Kenapa?', ex:'どうして にほんごを べんきょうしますか？', tr:'Kenapa belajar bahasa Jepang?', tip:'どうして lebih percakapan sehari-hari. なぜ lebih formal. Jawab dengan: 〜から/〜ので (karena)' },
      { term:'いくら (ikura)', desc:'Berapa harganya?', ex:'これ は いくら ですか？', tr:'Ini berapa harganya?', tip:'Khusus untuk harga/biaya. Untuk jumlah benda: いくつ (berapa buah). Untuk orang: なんにん.' },
      { term:'これ/それ/あれ/どれ', desc:'Ini/Itu (dekat pendengar)/Itu (jauh)/Yang mana — berdiri sendiri', ex:'これ は わたしの かばん です', tr:'Ini adalah tas saya', tip:'これ = dekat pembicara. それ = dekat pendengar. あれ = jauh dari keduanya. どれ = mana.' },
      { term:'この/その/あの/どの', desc:'Ini/Itu/Itu/Yang mana — diikuti NOMINA', ex:'この ほん は おもしろいです', tr:'Buku ini menarik', tip:'Harus selalu diikuti nomina: このほん(buku ini), そのひと(orang itu), あのみせ(toko itu).' },
      { term:'ここ/そこ/あそこ/どこ', desc:'Di sini/Di situ/Di sana/Di mana — lokasi', ex:'トイレ は あそこ です', tr:'Toilet ada di sana', tip:'ここ = lokasi pembicara. そこ = lokasi pendengar. あそこ = lokasi jauh dari keduanya.' },
    ]
  },

  // ── 7. KATA GANTI ORANG & STRUKTUR KALIMAT ───────────────────────────────
  {
    id: 'pronouns-structure', title: 'Kata Ganti & Struktur', icon: '🗣️',
    intro: 'Struktur kalimat Jepang adalah SOV (Subjek-Objek-Verba) — berbeda dengan Indonesia/Inggris. Kata kerja SELALU di akhir kalimat!',
    items: [
      { term:'わたし / ぼく / おれ', desc:'Saya (formal) / Saya (pria casual) / Aku (pria sangat casual)', ex:'わたし は インドネシアじん です', tr:'Saya adalah orang Indonesia', tip:'Wanita: わたし/あたし. Pria: わたし(formal), ぼく(casual), おれ(sangat casual). Pemula pakai わたし saja!' },
      { term:'あなた / きみ / おまえ', desc:'Kamu (formal/distant) / Kamu (akrab pria) / Kamu (kasar)', ex:'あなた の なまえ は なんですか？', tr:'Siapa namamu?', tip:'⚠️ Orang Jepang JARANG pakai あなた — terasa dingin. Lebih sopan pakai nama + さん: 田中さんは〜' },
      { term:'かれ / かのじょ', desc:'Dia (laki-laki) / Dia (perempuan)', ex:'かれ は がくせい です', tr:'Dia (laki-laki) adalah pelajar', tip:'Di Jepang sehari-hari, lebih sering pakai nama + さん daripada かれ/かのじょ.' },
      { term:'わたしたち / みなさん', desc:'Kami/Kita / Semua orang', ex:'わたしたち は にほんじん です', tr:'Kami adalah orang Jepang', tip:'みなさん sering dipakai sebagai sapaan: みなさん、こんにちは！= Halo semua!' },
      { term:'Struktur Dasar: S は O を V', desc:'Subjek + Topik + Objek + Kata Kerja (SOV)', ex:'わたし は りんご を たべます', tr:'Saya makan apel', tip:'⚠️ Kata kerja SELALU di akhir! Ini perbedaan utama dari Indonesia. Biasakan urutan ini.' },
      { term:'Kalimat dengan tempat: S は [tempat] で V', desc:'Subjek melakukan sesuatu di suatu tempat', ex:'わたし は としょかん で ほん を よみます', tr:'Saya membaca buku di perpustakaan', tip:'Perhatikan urutan: S は [tempat]で [objek]を V. Semua keterangan sebelum kata kerja.' },
      { term:'Kalimat ada/memiliki: [tempat] に N が あります/います', desc:'Ada sesuatu di suatu tempat', ex:'つくえ の うえ に ねこ が います', tr:'Di atas meja ada kucing', tip:'Untuk menyatakan keberadaan: Lokasi + に + Benda + が + あります/います' },
      { term:'Kalimat tanya: 〜か', desc:'Mengubah pernyataan → pertanyaan dengan か', ex:'これ は ほん です か？', tr:'Apakah ini buku?', tip:'Cukup tambahkan か di akhir kalimat. Intonasi naik. Tidak perlu mengubah urutan kata!' },
    ]
  },
]

// ─── CONVERSATION ─────────────────────────────────────────────────────────────
export const CONVERSATION = [
  {
    situation: 'Perkenalan Diri', icon: '👋', color: '#e63946',
    phrases: [
      { jp:'はじめまして。', romaji:'Hajimemashite.', id:'Salam kenal.' },
      { jp:'わたしは〜です。', romaji:'Watashi wa ~ desu.', id:'Nama saya ~.' },
      { jp:'〜からきました。', romaji:'~ kara kimashita.', id:'Saya berasal dari ~.' },
      { jp:'にほんごをべんきょうしています。', romaji:'Nihongo wo benkyou shite imasu.', id:'Saya sedang belajar bahasa Jepang.' },
      { jp:'よろしくおねがいします。', romaji:'Yoroshiku onegaishimasu.', id:'Mohon bimbingannya.' },
      { jp:'おなまえはなんですか？', romaji:'Onamae wa nan desu ka?', id:'Siapa nama Anda?' },
      { jp:'しごとはなんですか？', romaji:'Shigoto wa nan desu ka?', id:'Apa pekerjaan Anda?' },
    ]
  },
  {
    situation: 'Di Restoran', icon: '🍜', color: '#f4a261',
    phrases: [
      { jp:'いらっしゃいませ。', romaji:'Irasshaimase.', id:'Selamat datang. (dari staf)' },
      { jp:'なんめいさまですか？', romaji:'Nan mei sama desu ka?', id:'Berapa orang?' },
      { jp:'メニューをみせてください。', romaji:'Menyuu wo misete kudasai.', id:'Tolong tunjukkan menunya.' },
      { jp:'〜をひとつください。', romaji:'~ wo hitotsu kudasai.', id:'Tolong satu ~.' },
      { jp:'おすすめはなんですか？', romaji:'Osusume wa nan desu ka?', id:'Apa yang direkomendasikan?' },
      { jp:'おいしいです！', romaji:'Oishii desu!', id:'Enak sekali!' },
      { jp:'おかいけいをおねがいします。', romaji:'Okaikei wo onegaishimasu.', id:'Minta nota/kasir.' },
    ]
  },
  {
    situation: 'Berbelanja', icon: '🛍️', color: '#2a9d8f',
    phrases: [
      { jp:'これはいくらですか？', romaji:'Kore wa ikura desu ka?', id:'Ini berapa harganya?' },
      { jp:'みせてください。', romaji:'Misete kudasai.', id:'Tolong tunjukkan.' },
      { jp:'これをください。', romaji:'Kore wo kudasai.', id:'Saya mau yang ini.' },
      { jp:'たかいですね。', romaji:'Takai desu ne.', id:'Mahal ya.' },
      { jp:'べつのいろはありますか？', romaji:'Betsu no iro wa arimasu ka?', id:'Ada warna lain?' },
      { jp:'ふくろはいりますか？', romaji:'Fukuro wa irimasu ka?', id:'Perlu kantong plastik?' },
      { jp:'クレジットカードはつかえますか？', romaji:'Kurejitto kaado wa tsukaemasu ka?', id:'Bisa pakai kartu kredit?' },
    ]
  },
  {
    situation: 'Meminta Bantuan', icon: '🆘', color: '#457b9d',
    phrases: [
      { jp:'すみません。', romaji:'Sumimasen.', id:'Permisi.' },
      { jp:'〜はどこですか？', romaji:'~ wa doko desu ka?', id:'Di mana ~?' },
      { jp:'わかりません。', romaji:'Wakarimasen.', id:'Saya tidak mengerti.' },
      { jp:'もういちどいってください。', romaji:'Mou ichido itte kudasai.', id:'Tolong ulangi sekali lagi.' },
      { jp:'ゆっくりはなしてください。', romaji:'Yukkuri hanashite kudasai.', id:'Tolong bicara lebih pelan.' },
      { jp:'にほんごがすこしわかります。', romaji:'Nihongo ga sukoshi wakarimasu.', id:'Saya mengerti sedikit bahasa Jepang.' },
      { jp:'たすけてください！', romaji:'Tasukete kudasai!', id:'Tolong bantu saya!' },
    ]
  },
  {
    situation: 'Transportasi', icon: '🚆', color: '#8338ec',
    phrases: [
      { jp:'〜えきはどこですか？', romaji:'~ eki wa doko desu ka?', id:'Di mana stasiun ~?' },
      { jp:'〜までいくらですか？', romaji:'~ made ikura desu ka?', id:'Berapa ongkos ke ~?' },
      { jp:'つぎのでんしゃはなんじですか？', romaji:'Tsugi no densha wa nanji desu ka?', id:'Kereta berikutnya jam berapa?' },
      { jp:'このでんしゃは〜にとまりますか？', romaji:'Kono densha wa ~ ni tomarimasu ka?', id:'Kereta ini berhenti di ~?' },
      { jp:'〜にいきたいのですが。', romaji:'~ ni ikitai no desu ga.', id:'Saya ingin pergi ke ~.' },
      { jp:'タクシーをよんでください。', romaji:'Takushii wo yonde kudasai.', id:'Tolong panggilkan taksi.' },
    ]
  },
  {
    situation: 'Di Dokter / Darurat', icon: '🏥', color: '#e76f51',
    phrases: [
      { jp:'びょういんはどこですか？', romaji:'Byouin wa doko desu ka?', id:'Di mana rumah sakit?' },
      { jp:'〜がいたいです。', romaji:'~ ga itai desu.', id:'~ saya sakit.' },
      { jp:'ねつがあります。', romaji:'Netsu ga arimasu.', id:'Saya demam.' },
      { jp:'きゅうきゅうしゃをよんでください。', romaji:'Kyuukyuusha wo yonde kudasai.', id:'Tolong panggil ambulans.' },
      { jp:'アレルギーがあります。', romaji:'Arerugii ga arimasu.', id:'Saya punya alergi.' },
      { jp:'やくをください。', romaji:'Yaku wo kudasai.', id:'Tolong berikan obat.' },
    ]
  },
]

// ─── MODULES CONFIG ───────────────────────────────────────────────────────────
// ─── GRAMMAR QUIZ ─────────────────────────────────────────────────────────────
export const GRAMMAR_QUIZ = [
  { q:'わたし＿がくせいです。', answer:'は', choices:['は','が','を','に'], label:'Pilih partikel yang tepat' },
  { q:'がっこう＿いきます。', answer:'に', choices:['に','を','は','で'], label:'Pilih partikel yang tepat' },
  { q:'パン＿たべます。', answer:'を', choices:['を','が','は','に'], label:'Pilih partikel yang tepat' },
  { q:'バス＿いきます。(naik bus)', answer:'で', choices:['で','に','を','が'], label:'Pilih partikel yang tepat' },
  { q:'わたし＿ほん。(buku saya)', answer:'の', choices:['の','は','に','で'], label:'Pilih partikel yang tepat' },
  { q:'すし＿すきです。', answer:'が', choices:['が','は','を','に'], label:'Pilih partikel yang tepat' },
  { q:'ともだち＿いきます。(pergi bersama teman)', answer:'と', choices:['と','に','で','を'], label:'Pilih partikel yang tepat' },
  { q:'わたし＿がくせいです。(saya juga)', answer:'も', choices:['も','は','が','を'], label:'Pilih partikel yang tepat' },
  { q:'がくせい ですか？ → ___、がくせいです。', answer:'はい', choices:['はい','いいえ','そう','ちがい'], label:'Jawaban yang tepat?' },
  { q:'にほんご＿はなします。(bicara dalam bahasa Jepang)', answer:'で', choices:['で','を','が','に'], label:'Pilih partikel yang tepat' },
  { q:'としょかん＿ほん＿よみます。', answer:'で / を', choices:['で / を','に / が','は / に','の / で'], label:'Pilih 2 partikel yang tepat' },
  { q:'まいにち あさ＿おきます。(bangun pagi)', answer:'に', choices:['に','で','は','を'], label:'Pilih partikel yang tepat' },
]

// ─── CONVERSATION QUIZ ────────────────────────────────────────────────────────
export const CONVERSATION_QUIZ = [
  { q:'こんにちは', answer:'Halo / Selamat siang', choices:['Halo / Selamat siang','Selamat pagi','Selamat malam','Selamat tinggal'], label:'Apa artinya?' },
  { q:'ありがとうございます', answer:'Terima kasih', choices:['Terima kasih','Permisi','Maaf','Sama-sama'], label:'Apa artinya?' },
  { q:'すみません', answer:'Permisi / Maaf', choices:['Permisi / Maaf','Terima kasih','Selamat tinggal','Apa kabar?'], label:'Apa artinya?' },
  { q:'おつかれさまでした', answer:'Terima kasih atas kerja kerasnya', choices:['Terima kasih atas kerja kerasnya','Selamat pagi','Selamat datang','Mohon bimbingannya'], label:'Apa artinya?' },
  { q:'いただきます', answer:'Ucapan sebelum makan', choices:['Ucapan sebelum makan','Ucapan setelah makan','Selamat tidur','Selamat pagi'], label:'Apa artinya?' },
  { q:'もういちどおねがいします', answer:'Tolong ulangi sekali lagi', choices:['Tolong ulangi sekali lagi','Tolong bicara pelan','Saya tidak mengerti','Permisi'], label:'Apa artinya?' },
  { q:'〜はどこですか？', answer:'Di mana ~?', choices:['Di mana ~?','Berapa harga ~?','Apa itu ~?','Apakah ada ~?'], label:'Apa artinya?' },
  { q:'これはいくらですか？', answer:'Ini berapa harganya?', choices:['Ini berapa harganya?','Ini apa?','Bolehkah saya lihat ini?','Ini milik siapa?'], label:'Apa artinya?' },
  { q:'わかりました', answer:'Sudah mengerti / Paham', choices:['Sudah mengerti / Paham','Tidak mengerti','Tolong ulangi','Saya setuju'], label:'Apa artinya?' },
  { q:'よろしくおねがいします', answer:'Mohon bimbingannya', choices:['Mohon bimbingannya','Salam kenal','Terima kasih','Sampai jumpa'], label:'Apa artinya?' },
  { q:'おさきにしつれいします', answer:'Mohon maaf saya pulang lebih dulu', choices:['Mohon maaf saya pulang lebih dulu','Permisi saya masuk','Selamat tinggal','Saya pergi dulu'], label:'Apa artinya?' },
  { q:'ゆっくりはなしてください', answer:'Tolong bicara lebih pelan', choices:['Tolong bicara lebih pelan','Tolong ulangi sekali lagi','Saya tidak mengerti','Tolong bantu saya'], label:'Apa artinya?' },
]

// MODULES_CONFIG dipindah ke data_modules.js

// ─── BUDAYA JEPANG ────────────────────────────────────────────────────────────
export const BUDAYA = [
  {
    id: 'aisatsu-kerja', title: 'Salam di Tempat Kerja', icon: '🤝',
    items: [
      { jp: 'おはようございます', romaji: 'Ohayou gozaimasu', id: 'Selamat pagi (wajib diucapkan saat tiba)', tip: 'Diucapkan kepada semua orang saat tiba, bahkan ke atasan. Sangat penting!' },
      { jp: 'おつかれさまです', romaji: 'Otsukaresama desu', id: 'Terima kasih atas kerja kerasnya', tip: 'Diucapkan ke rekan kerja sepanjang hari & saat pulang. Sangat sering dipakai!' },
      { jp: 'よろしくおねがいします', romaji: 'Yoroshiku onegaishimasu', id: 'Mohon kerjasamanya / tolong dibantu', tip: 'Diucapkan saat meminta bantuan, mulai proyek baru, atau perkenalan kerja' },
      { jp: 'しつれいします', romaji: 'Shitsurei shimasu', id: 'Permisi (saat masuk ruangan / meninggalkan orang)', tip: 'Ucapkan sebelum masuk ruang atasan atau meninggalkan meeting' },
      { jp: 'いってきます', romaji: 'Ittekimasu', id: 'Saya pergi dulu (ke luar kantor)', tip: 'Diucapkan saat meninggalkan kantor sementara' },
      { jp: 'いってらっしゃい', romaji: 'Itterasshai', id: 'Hati-hati di jalan (jawaban dari rekan)', tip: 'Balasan dari rekan yang tinggal saat seseorang pergi keluar' },
      { jp: 'ただいま', romaji: 'Tadaima', id: 'Saya sudah kembali', tip: 'Diucapkan saat kembali ke tempat kerja' },
      { jp: 'おかえりなさい', romaji: 'Okaerinasai', id: 'Selamat datang kembali (balasan)', tip: 'Balasan dari rekan saat seseorang kembali' },
      { jp: 'おさきにしつれいします', romaji: 'Osaki ni shitsurei shimasu', id: 'Mohon maaf saya pulang lebih dulu', tip: 'WAJIB diucapkan saat pulang sebelum rekan lain. Sangat penting etikanya!' },
      { jp: 'ごくろうさまでした', romaji: 'Gokurousama deshita', id: 'Terima kasih atas kerja kerasnya (dari atasan ke bawahan)', tip: 'Dipakai atasan ke bawahan. Jangan pakai ke atasan — pakai おつかれさまです' },
    ]
  },
  {
    id: 'etos-kerja', title: 'Etos & Konsep Kerja Jepang', icon: '⚙️',
    items: [
      { jp: 'ほうれんそう (報・連・相)', romaji: 'Hōrenso', id: 'Lapor → Sambung → Konsultasi', tip: 'Konsep WAJIB di tempat kerja Jepang: ほうこく(lapor), れんらく(sambungkan info), そうだん(konsultasi). Selalu lakukan ini!' },
      { jp: 'かいぜん (改善)', romaji: 'Kaizen', id: 'Perbaikan terus-menerus', tip: 'Budaya perbaikan bertahap setiap hari. Selalu cari cara kerja yang lebih baik & efisien' },
      { jp: 'もったいない (勿体無い)', romaji: 'Mottainai', id: 'Sayang dibuang / jangan boros', tip: 'Sikap menghargai barang & tidak membuang-buang. Sangat dihargai di tempat kerja Jepang' },
      { jp: 'がんばります (頑張ります)', romaji: 'Ganbarimasu', id: 'Saya akan berusaha sepenuh hati', tip: 'Diucapkan saat mendapat tugas. Tunjukkan semangat & komitmen' },
      { jp: 'じかんをまもります (時間を守ります)', romaji: 'Jikan wo mamorimasu', id: 'Saya akan tepat waktu', tip: 'Ketepatan waktu adalah hal SANGAT serius di Jepang. Datang terlambat sangat memalukan' },
      { jp: 'ねまわし (根回し)', romaji: 'Nemawashi', id: 'Konsultasi informal sebelum keputusan', tip: 'Kebiasaan mendiskusikan ide ke semua pihak terkait sebelum rapat resmi' },
      { jp: 'いしきのたかさ (意識の高さ)', romaji: 'Ishiki no takasa', id: 'Kesadaran & tanggung jawab tinggi', tip: 'Pekerja Jepang sangat sadar terhadap kualitas pekerjaan dan nama baik perusahaan' },
      { jp: 'あいさつ (挨拶)', romaji: 'Aisatsu', id: 'Sapaan / Salam', tip: 'Salam yang baik adalah fondasi hubungan kerja. Selalu sapa dengan penuh hormat' },
      { jp: 'きびきびうごく (きびきび動く)', romaji: 'Kibikibi ugoku', id: 'Bergerak cepat & sigap', tip: 'Jepang menghargai kecepatan & responsivitas dalam bekerja. Jangan lamban!' },
      { jp: 'かくにん (確認)', romaji: 'Kakunin', id: 'Konfirmasi / Verifikasi', tip: 'Selalu konfirmasi tugas & instruksi agar tidak ada kesalahan. Lebih baik tanya dari pada salah' },
    ]
  },
  {
    id: 'norma-sosial', title: 'Norma Sosial & Etika', icon: '🎌',
    items: [
      { jp: 'おじぎ (お辞儀)', romaji: 'Ojigi', id: 'Membungkuk sebagai tanda hormat', tip: '15° = salam biasa, 30° = terima kasih, 45° = permintaan maaf serius. Semakin dalam = semakin hormat' },
      { jp: 'くつをぬぐ (靴を脱ぐ)', romaji: 'Kutsu wo nugu', id: 'Lepas sepatu saat masuk rumah', tip: 'WAJIB lepas sepatu sebelum masuk rumah/tatami. Ada genkan (area lepas sepatu) di pintu masuk' },
      { jp: 'わをみだすな (和を乱すな)', romaji: 'Wa wo midasu na', id: 'Jangan ganggu keharmonisan kelompok', tip: 'Wa (和) = harmoni kelompok. Hindari konflik terbuka, utamakan konsensus' },
      { jp: 'けんそん (謙遜)', romaji: 'Kenson', id: 'Rendah hati / Tidak sombong', tip: 'Memuji diri sendiri dianggap tidak sopan. Selalu merendah saat dipuji' },
      { jp: 'めいわく (迷惑)', romaji: 'Meiwaku', id: 'Merepotkan / Mengganggu orang lain', tip: 'Orang Jepang sangat menghindari merepotkan orang. Jaga volume suara, antri, buang sampah pada tempatnya' },
      { jp: 'おみやげ (お土産)', romaji: 'Omiyage', id: 'Oleh-oleh', tip: 'Budaya membawa oleh-oleh dari perjalanan untuk dibagikan ke rekan kerja. Sangat dihargai!' },
      { jp: 'なまえのよびかた', romaji: 'Namae no yobikata', id: 'Cara memanggil nama', tip: 'Panggil dengan nama keluarga + さん (misal: 田中さん). Jangan sebut nama depan kecuali diizinkan' },
      { jp: 'めいしのわたしかた (名刺の渡し方)', romaji: 'Meishi no watashibata', id: 'Etika kartu nama', tip: 'Berikan & terima kartu nama dengan dua tangan, membungkuk. Baca dulu sebelum simpan. Jangan ditulis atau dilipat!' },
    ]
  },
  {
    id: 'kehidupan-sehari', title: 'Kehidupan Sehari-hari di Jepang', icon: '🏙️',
    items: [
      { jp: 'ごみのぶんべつ (ゴミの分別)', romaji: 'Gomi no bunbetsu', id: 'Pemilahan sampah', tip: 'Sampah di Jepang dipilah ketat: もえるごみ(sampah bakar), もえないごみ(tidak bakar), プラ(plastik), カン(kaleng). Periksa aturan daerah setempat!' },
      { jp: 'でんしゃのマナー', romaji: 'Densha no manaa', id: 'Etika di kereta', tip: 'Di kereta: nada HP silent, tidak telepon, bicara pelan, berikan kursi prioritas, antri tertib di garis' },
      { jp: 'きんえん (禁煙)', romaji: "Kin'en", id: 'Dilarang merokok', tip: 'Merokok hanya di area yang diizinkan (喫煙所). Merokok sembarangan bisa kena denda!' },
      { jp: 'コンビニのつかいかた', romaji: 'Konbini no tsukaikata', id: 'Cara pakai minimarket', tip: 'Konbini (7-Eleven, Lawson, FamilyMart) buka 24 jam. Bisa bayar tagihan, cetak dokumen, kirim paket, dll' },
      { jp: 'てあらい・うがい (手洗い・うがい)', romaji: 'Tearai / Ugai', id: 'Cuci tangan & kumur-kumur', tip: 'Kebiasaan sanitasi dasar yang sangat dijaga orang Jepang, terutama musim flu' },
      { jp: 'おふろのはいりかた (お風呂の入り方)', romaji: 'Ofuro no hairikata', id: 'Cara mandi di Jepang', tip: 'Bilas badan dulu sebelum masuk bathtub. Air bathtub dipakai bersama keluarga — jangan dikotori!' },
    ]
  },
]

// ─── BAHASA TEMPAT KERJA ──────────────────────────────────────────────────────
export const BAHASA_KERJA = [
  {
    id: 'keselamatan', title: 'Keselamatan Kerja (安全)', icon: '⛑️', color: '#e63946',
    items: [
      { jp: '危険！(きけん)', romaji: 'Kiken!', id: 'Berbahaya!', tip: 'Kata terpenting — hafalkan!' },
      { jp: '注意！(ちゅうい)', romaji: 'Chuui!', id: 'Hati-hati! / Perhatian!', tip: 'Sering ada di rambu keselamatan pabrik' },
      { jp: '安全第一 (あんぜんだいいち)', romaji: 'Anzen daiichi', id: 'Keselamatan nomor satu', tip: 'Moto keselamatan kerja paling umum di pabrik Jepang' },
      { jp: 'けがをしました', romaji: 'Kega wo shimashita', id: 'Saya terluka', tip: 'Segera ucapkan jika terjadi kecelakaan kerja' },
      { jp: 'きんきゅうていし (緊急停止)', romaji: 'Kinkyuu teishi', id: 'Hentikan darurat / Emergency stop', tip: 'Tombol merah besar di mesin pabrik — hentikan segala operasi' },
      { jp: 'ほごぐを つけてください', romaji: 'Hogogu wo tsukete kudasai', id: 'Tolong pakai alat pelindung', tip: 'ほごぐ = APD (helm, sarung tangan, kacamata pelindung, dll)' },
      { jp: 'かじ！(火事)', romaji: 'Kaji!', id: 'Kebakaran!', tip: 'Teriak ini jika ada kebakaran' },
      { jp: 'きゅうきゅうしゃを よんでください', romaji: 'Kyuukyuusha wo yonde kudasai', id: 'Tolong panggil ambulans', tip: '119 = nomor darurat ambulans & pemadam Jepang' },
    ]
  },
  {
    id: 'instruksi-kerja', title: 'Instruksi Kerja Umum', icon: '📋', color: '#2a9d8f',
    items: [
      { jp: 'はじめてください', romaji: 'Hajimete kudasai', id: 'Tolong mulai', tip: 'Dari atasan/supervisor saat memulai pekerjaan' },
      { jp: 'とめてください', romaji: 'Tomete kudasai', id: 'Tolong hentikan', tip: 'Instruksi berhenti dari supervisor' },
      { jp: 'もういちどやってください', romaji: 'Mou ichido yatte kudasai', id: 'Tolong lakukan sekali lagi', tip: 'Jika ada kesalahan, supervisor akan minta diulang' },
      { jp: 'かくにんしてください (確認してください)', romaji: 'Kakunin shite kudasai', id: 'Tolong konfirmasi / cek dulu', tip: 'Selalu konfirmasi sebelum & sesudah pekerjaan penting' },
      { jp: 'ほうこくしてください (報告してください)', romaji: 'Houkoku shite kudasai', id: 'Tolong lapor', tip: 'Laporan adalah budaya wajib (part of hōrensō)' },
      { jp: 'わかりましたか？', romaji: 'Wakarimashita ka?', id: 'Sudah mengerti?', tip: 'Supervisor sering tanya ini setelah beri instruksi' },
      { jp: 'はい、わかりました', romaji: 'Hai, wakarimashita', id: 'Ya, saya mengerti', tip: 'Jawaban standar. Selalu jawab dengan jelas & tegas' },
      { jp: 'すみません、もういちどおねがいします', romaji: 'Sumimasen, mou ichido onegaishimasu', id: 'Maaf, tolong ulangi sekali lagi', tip: 'Jangan ragu minta diulangi — lebih baik tanya dari pada salah kerja' },
      { jp: 'てつだってください', romaji: 'Tetsudatte kudasai', id: 'Tolong bantu saya', tip: 'Saat butuh bantuan rekan kerja' },
      { jp: 'おわりました', romaji: 'Owarimashita', id: 'Sudah selesai', tip: 'Lapor ke supervisor setelah menyelesaikan tugas' },
    ]
  },
  {
    id: 'kosakata-pabrik', title: 'Kosakata Pabrik / Industri', icon: '🏭', color: '#8338ec',
    items: [
      { jp: 'きかい (機械)', romaji: 'Kikai', id: 'Mesin' },
      { jp: 'こうじょう (工場)', romaji: 'Koujou', id: 'Pabrik' },
      { jp: 'せいひん (製品)', romaji: 'Seihin', id: 'Produk / Barang jadi' },
      { jp: 'ざいりょう (材料)', romaji: 'Zairyou', id: 'Bahan baku' },
      { jp: 'ふりょうひん (不良品)', romaji: 'Furyouhin', id: 'Produk cacat / reject' },
      { jp: 'けんさ (検査)', romaji: 'Kensa', id: 'Inspeksi / Pemeriksaan kualitas' },
      { jp: 'ラインをとめる', romaji: 'Rain wo tomeru', id: 'Hentikan lini produksi', tip: 'Hentikan jika ada masalah — lebih baik terlambat dari barang cacat' },
      { jp: 'シフト', romaji: 'Shifuto', id: 'Shift kerja' },
      { jp: 'ざんぎょう (残業)', romaji: 'Zangyou', id: 'Lembur', tip: 'Overtime — sering terjadi di perusahaan Jepang' },
      { jp: 'ユニフォーム', romaji: 'Yunifoomu', id: 'Seragam kerja' },
      { jp: 'きゅうけい (休憩)', romaji: 'Kyuukei', id: 'Istirahat' },
      { jp: 'たいきん (退勤)', romaji: 'Taikin', id: 'Absen pulang / clock out' },
    ]
  },
  {
    id: 'kehidupan-asrama', title: 'Kehidupan Asrama / Dorm', icon: '🏠', color: '#f4a261',
    items: [
      { jp: 'りょう (寮)', romaji: 'Ryou', id: 'Asrama', tip: 'Peserta magang biasanya tinggal di asrama perusahaan' },
      { jp: 'ルールをまもってください', romaji: 'Ruuru wo mamotte kudasai', id: 'Tolong patuhi aturan', tip: 'Asrama punya aturan ketat: jam malam, kebersihan, tidak bawa tamu' },
      { jp: 'そうじをしてください', romaji: 'Souji wo shite kudasai', id: 'Tolong bersihkan', tip: 'Kebersihan bersama diatur jadwal. Wajib ikut piket' },
      { jp: 'でんきをけしてください (電気を消してください)', romaji: 'Denki wo keshite kudasai', id: 'Tolong matikan lampu', tip: 'Hemat energi sangat ditekankan' },
      { jp: 'うるさくしないでください', romaji: 'Urusaku shinai de kudasai', id: 'Tolong jangan berisik', tip: 'Jam malam biasanya ketat. Jaga ketenangan asrama' },
      { jp: 'ごみはきちんとすてください', romaji: 'Gomi wa kichin to sutete kudasai', id: 'Buang sampah pada tempatnya', tip: 'Pemilahan sampah ketat — periksa jadwal & kategori di asrama' },
    ]
  },
]

// ─── COUNTER WORDS (助数詞) ────────────────────────────────────────────────────
export const COUNTERS = [
  {
    id: 'hito', counter: '〜人 (にん/り)', use: 'Menghitung orang',
    examples: [
      { n: 1, jp: 'ひとり', romaji: 'hitori', note: '(tidak pakai にん)' },
      { n: 2, jp: 'ふたり', romaji: 'futari', note: '(tidak pakai にん)' },
      { n: 3, jp: 'さんにん', romaji: 'san-nin', note: '' },
      { n: 4, jp: 'よにん', romaji: 'yo-nin', note: '' },
      { n: 5, jp: 'ごにん', romaji: 'go-nin', note: '' },
      { n: 10, jp: 'じゅうにん', romaji: 'juu-nin', note: '' },
    ]
  },
  {
    id: 'hon', counter: '〜本 (ほん)', use: 'Benda panjang (botol, pensil, pipa, lengan)',
    examples: [
      { n: 1, jp: 'いっぽん', romaji: 'ippon', note: '' },
      { n: 2, jp: 'にほん', romaji: 'nihon', note: '' },
      { n: 3, jp: 'さんぼん', romaji: 'sanbon', note: '' },
      { n: 4, jp: 'よんほん', romaji: 'yonhon', note: '' },
      { n: 6, jp: 'ろっぽん', romaji: 'roppon', note: '' },
      { n: 10, jp: 'じゅっぽん', romaji: 'juppon', note: '' },
    ]
  },
  {
    id: 'mai', counter: '〜枚 (まい)', use: 'Benda tipis & datar (kertas, piring, baju, papan)',
    examples: [
      { n: 1, jp: 'いちまい', romaji: 'ichi-mai', note: '' },
      { n: 2, jp: 'にまい', romaji: 'ni-mai', note: '' },
      { n: 3, jp: 'さんまい', romaji: 'san-mai', note: '' },
      { n: 5, jp: 'ごまい', romaji: 'go-mai', note: '' },
      { n: 10, jp: 'じゅうまい', romaji: 'juu-mai', note: '' },
    ]
  },
  {
    id: 'ko', counter: '〜個 (こ)', use: 'Benda kecil bulat (apel, telur, kancing, batu)',
    examples: [
      { n: 1, jp: 'いっこ', romaji: 'ikko', note: '' },
      { n: 2, jp: 'にこ', romaji: 'ni-ko', note: '' },
      { n: 3, jp: 'さんこ', romaji: 'san-ko', note: '' },
      { n: 5, jp: 'ごこ', romaji: 'go-ko', note: '' },
      { n: 10, jp: 'じゅっこ', romaji: 'jukko', note: '' },
    ]
  },
  {
    id: 'dai', counter: '〜台 (だい)', use: 'Kendaraan & mesin (mobil, motor, komputer, mesin)',
    examples: [
      { n: 1, jp: 'いちだい', romaji: 'ichi-dai', note: '' },
      { n: 2, jp: 'にだい', romaji: 'ni-dai', note: '' },
      { n: 3, jp: 'さんだい', romaji: 'san-dai', note: '' },
      { n: 5, jp: 'ごだい', romaji: 'go-dai', note: '' },
    ]
  },
  {
    id: 'satsu', counter: '〜冊 (さつ)', use: 'Buku & majalah',
    examples: [
      { n: 1, jp: 'いっさつ', romaji: 'issatsu', note: '' },
      { n: 2, jp: 'にさつ', romaji: 'ni-satsu', note: '' },
      { n: 3, jp: 'さんさつ', romaji: 'san-satsu', note: '' },
      { n: 5, jp: 'ごさつ', romaji: 'go-satsu', note: '' },
    ]
  },
  {
    id: 'hiki', counter: '〜匹 (ひき)', use: 'Hewan kecil (kucing, anjing, ikan)',
    examples: [
      { n: 1, jp: 'いっぴき', romaji: 'ippiki', note: '' },
      { n: 2, jp: 'にひき', romaji: 'ni-hiki', note: '' },
      { n: 3, jp: 'さんびき', romaji: 'sanbiki', note: '' },
      { n: 5, jp: 'ごひき', romaji: 'go-hiki', note: '' },
    ]
  },
  {
    id: 'tsu', counter: '〜つ (ひとつ～とお)', use: 'Cara hitung umum (1-10) untuk benda apapun',
    examples: [
      { n: 1, jp: 'ひとつ', romaji: 'hitotsu', note: '' },
      { n: 2, jp: 'ふたつ', romaji: 'futatsu', note: '' },
      { n: 3, jp: 'みっつ', romaji: 'mittsu', note: '' },
      { n: 4, jp: 'よっつ', romaji: 'yottsu', note: '' },
      { n: 5, jp: 'いつつ', romaji: 'itsutsu', note: '' },
      { n: 6, jp: 'むっつ', romaji: 'muttsu', note: '' },
      { n: 7, jp: 'ななつ', romaji: 'nanatsu', note: '' },
      { n: 8, jp: 'やっつ', romaji: 'yattsu', note: '' },
      { n: 9, jp: 'ここのつ', romaji: 'kokonotsu', note: '' },
      { n: 10, jp: 'とお', romaji: 'too', note: '' },
    ]
  },
]

// ─── KATA KERJA LANJUTAN ─────────────────────────────────────────────────────
export const VERB_ADVANCED = [
  {
    id: 'te-form', title: 'Bentuk Te (〜て)', icon: '🔗',
    desc: 'Bentuk て digunakan untuk menyambung kalimat, menyatakan sedang melakukan, dan meminta tolong.',
    rules: [
      { group: 'Kata kerja る (ichidan)', rule: 'Ganti ます → て', example: 'たべます → たべて (makan → sedang makan)' },
      { group: 'Kata kerja う (godan) — く', rule: 'く → いて', example: 'かきます → かいて (menulis)' },
      { group: 'Kata kerja う (godan) — ぐ', rule: 'ぐ → いで', example: 'およぎます → およいで (berenang)' },
      { group: 'Kata kerja う (godan) — す', rule: 'す → して', example: 'はなします → はなして (bicara)' },
      { group: 'Kata kerja う (godan) — つ・る・う', rule: '→ って', example: 'まちます → まって (menunggu)' },
      { group: 'Kata kerja う (godan) — む・ぶ・ぬ', rule: '→ んで', example: 'のみます → のんで (minum)' },
      { group: 'Pengecualian (fukisoku)', rule: 'します → して / きます → きて', example: 'べんきょうします → べんきょうして' },
    ],
    patterns: [
      { pattern: 'V-て + います', use: 'Sedang melakukan (present continuous)', ex: 'たべています', tr: 'Sedang makan' },
      { pattern: 'V-て + ください', use: 'Tolong lakukan', ex: 'みてください', tr: 'Tolong lihat' },
      { pattern: 'V-て + もいいですか', use: 'Bolehkah saya melakukan ~?', ex: 'はいってもいいですか', tr: 'Bolehkah saya masuk?' },
      { pattern: 'V-て + はいけません', use: 'Dilarang / tidak boleh', ex: 'はいってはいけません', tr: 'Dilarang masuk' },
    ]
  },
  {
    id: 'nai-form', title: 'Bentuk Negatif (〜ない)', icon: '🚫',
    desc: 'Bentuk ない untuk menyatakan "tidak melakukan" dalam percakapan informal atau dengan pola tertentu.',
    rules: [
      { group: 'Kata kerja る (ichidan)', rule: 'Ganti る → ない', example: 'たべる → たべない (tidak makan)' },
      { group: 'Kata kerja う (godan)', rule: 'Ganti ～う → ～あない', example: 'かく → かかない (tidak menulis)' },
      { group: 'Pengecualian', rule: 'する → しない / くる → こない', example: 'べんきょうする → べんきょうしない' },
    ],
    patterns: [
      { pattern: 'V-ない + でください', use: 'Tolong jangan lakukan', ex: 'はいらないでください', tr: 'Tolong jangan masuk' },
      { pattern: 'V-ない + といけません', use: 'Harus melakukan', ex: 'たべないといけません', tr: 'Harus makan' },
      { pattern: 'V-ない + ほうがいい', use: 'Lebih baik tidak melakukan', ex: 'たべないほうがいい', tr: 'Lebih baik tidak makan' },
    ]
  },
  {
    id: 'tai-form', title: 'Ingin Melakukan (〜たい)', icon: '💭',
    desc: 'Gunakan たい setelah bentuk ます (tanpa ます) untuk menyatakan keinginan.',
    rules: [
      { group: 'Rumus', rule: 'V-ます (tanpa ます) + たい + です', example: 'たべます → たべたいです (ingin makan)' },
      { group: 'Negatif', rule: 'V-たく + ないです', example: 'たべたくないです (tidak ingin makan)' },
      { group: 'Lampau', rule: 'V-たかった + です', example: 'たべたかったです (tadi ingin makan)' },
    ],
    patterns: [
      { pattern: '〜に いきたいです', use: 'Ingin pergi ke ~', ex: 'にほんに いきたいです', tr: 'Ingin pergi ke Jepang' },
      { pattern: '〜を たべたいです', use: 'Ingin makan ~', ex: 'すしを たべたいです', tr: 'Ingin makan sushi' },
      { pattern: '〜が したいです', use: 'Ingin melakukan ~', ex: 'べんきょうが したいです', tr: 'Ingin belajar' },
    ]
  },
  {
    id: 'koto-ga-dekiru', title: 'Kemampuan (〜ことができる)', icon: '💪',
    desc: 'Menyatakan "bisa" atau "mampu" melakukan sesuatu.',
    rules: [
      { group: 'Rumus formal', rule: 'V-る + ことができます', example: 'にほんごをはなすことができます (bisa berbahasa Jepang)' },
      { group: 'Rumus informal', rule: 'V-る + ことができる', example: 'およぐことができる (bisa berenang)' },
      { group: 'Negatif', rule: 'V-る + ことができません', example: 'うんてんすることができません (tidak bisa mengemudi)' },
    ],
    patterns: [
      { pattern: 'N + が + できます', use: 'Bisa ~ (untuk skill/bahasa)', ex: 'にほんごができます', tr: 'Bisa bahasa Jepang' },
      { pattern: 'N + が + できません', use: 'Tidak bisa ~', ex: 'うんてんができません', tr: 'Tidak bisa mengemudi' },
    ]
  },
]

// ─── JLPT N5 DRILL ────────────────────────────────────────────────────────────
export const JLPT_N5_DRILL = {
  mojigoi: [
    // Kanji reading questions
    { q: '日本語', choices: ['にほんご', 'にっぽんご', 'にほんぐ', 'にっぽんぐ'], answer: 'にほんご', type: 'kanji-read', label: 'Cara baca yang benar?' },
    { q: '何時ですか', choices: ['なんじですか', 'なにじですか', 'なんときですか', 'なにときですか'], answer: 'なんじですか', type: 'kanji-read', label: 'Cara baca yang benar?' },
    { q: '先生', choices: ['せんせい', 'せんしょう', 'さきせい', 'さきしょう'], answer: 'せんせい', type: 'kanji-read', label: 'Cara baca yang benar?' },
    { q: '大学生', choices: ['だいがくせい', 'おおがくせい', 'たいがくせい', 'だいがくしょう'], answer: 'だいがくせい', type: 'kanji-read', label: 'Cara baca yang benar?' },
    { q: '電車', choices: ['でんしゃ', 'でんしゃあ', 'でんじゃ', 'てんしゃ'], answer: 'でんしゃ', type: 'kanji-read', label: 'Cara baca yang benar?' },
    { q: '毎日', choices: ['まいにち', 'まいひ', 'まいじつ', 'たいにち'], answer: 'まいにち', type: 'kanji-read', label: 'Cara baca yang benar?' },
    { q: '学校', choices: ['がっこう', 'がくこう', 'がっこ', 'がくしょう'], answer: 'がっこう', type: 'kanji-read', label: 'Cara baca yang benar?' },
    { q: '水曜日', choices: ['すいようび', 'みずようび', 'すいようにち', 'みずようにち'], answer: 'すいようび', type: 'kanji-read', label: 'Cara baca yang benar?' },
  ],
  bunpou: [
    { q: 'わたし＿がくせいです。', choices: ['は', 'が', 'を', 'に'], answer: 'は', type: 'particle', label: 'Pilih partikel yang tepat' },
    { q: 'がっこう＿いきます。', choices: ['に', 'を', 'は', 'で'], answer: 'に', type: 'particle', label: 'Pilih partikel yang tepat' },
    { q: 'パン＿たべます。', choices: ['を', 'が', 'は', 'に'], answer: 'を', type: 'particle', label: 'Pilih partikel yang tepat' },
    { q: 'バス＿いきます。', choices: ['で', 'に', 'を', 'が'], answer: 'で', type: 'particle', label: 'Pilih partikel yang tepat' },
    { q: 'これ＿わたしのほんです。', choices: ['は', 'が', 'を', 'で'], answer: 'は', type: 'particle', label: 'Pilih partikel yang tepat' },
    { q: 'わたし＿ほん。(kepunyaan)', choices: ['の', 'は', 'に', 'で'], answer: 'の', type: 'particle', label: 'Pilih partikel yang tepat' },
    { q: 'すし＿すきです。', choices: ['が', 'は', 'を', 'に'], answer: 'が', type: 'particle', label: 'Pilih partikel yang tepat' },
    { q: 'きのう＿たべませんでした。', choices: ['は', 'を', 'に', 'で'], answer: 'は', type: 'particle', label: 'Pilih partikel yang tepat (topik)' },
  ],
  vocabulary: [
    { q: 'あたらしい', choices: ['Baru', 'Lama', 'Besar', 'Kecil'], answer: 'Baru', type: 'vocab', label: 'Apa artinya?' },
    { q: 'むずかしい', choices: ['Sulit', 'Mudah', 'Menyenangkan', 'Membosankan'], answer: 'Sulit', type: 'vocab', label: 'Apa artinya?' },
    { q: 'たのしい', choices: ['Menyenangkan', 'Sedih', 'Marah', 'Takut'], answer: 'Menyenangkan', type: 'vocab', label: 'Apa artinya?' },
    { q: 'やすい', choices: ['Murah', 'Mahal', 'Tinggi', 'Rendah'], answer: 'Murah', type: 'vocab', label: 'Apa artinya?' },
    { q: 'いそがしい', choices: ['Sibuk', 'Santai', 'Sehat', 'Sakit'], answer: 'Sibuk', type: 'vocab', label: 'Apa artinya?' },
    { q: 'ひろい', choices: ['Luas', 'Sempit', 'Tinggi', 'Rendah'], answer: 'Luas', type: 'vocab', label: 'Apa artinya?' },
    { q: 'あかるい', choices: ['Terang', 'Gelap', 'Panas', 'Dingin'], answer: 'Terang', type: 'vocab', label: 'Apa artinya?' },
    { q: 'さむい', choices: ['Dingin', 'Panas', 'Hangat', 'Sejuk'], answer: 'Dingin', type: 'vocab', label: 'Apa artinya?' },
  ],
}

// NEW_MODULES dipindah ke data_modules.js

// ─── RE-EXPORT dari data_modules ─────────────────────────────────────────────
export { STAGES, MODULES_CONFIG } from './data_modules.js'

// ─── KATA KERJA GOLONGAN 1 (五段動詞) ────────────────────────────────────────
export const VERBS_GOL1 = [
  { dict:'かく',  masu:'かきます',  nai:'かかない', te:'かいて',  meaning:'Menulis',          end:'く',  note:'' },
  { dict:'きく',  masu:'ききます',  nai:'きかない', te:'きいて',  meaning:'Mendengar/Bertanya', end:'く',  note:'' },
  { dict:'およぐ',masu:'およぎます',nai:'およがない',te:'およいで',meaning:'Berenang',           end:'ぐ',  note:'ぐ→いで' },
  { dict:'はなす',masu:'はなします',nai:'はなさない',te:'はなして',meaning:'Berbicara',          end:'す',  note:'' },
  { dict:'かえす',masu:'かえします',nai:'かえさない',te:'かえして',meaning:'Mengembalikan',      end:'す',  note:'' },
  { dict:'まつ',  masu:'まちます',  nai:'またない', te:'まって',  meaning:'Menunggu',           end:'つ',  note:'つ→って' },
  { dict:'もつ',  masu:'もちます',  nai:'もたない', te:'もって',  meaning:'Membawa/Memegang',   end:'つ',  note:'' },
  { dict:'しぬ',  masu:'しにます',  nai:'しなない', te:'しんで',  meaning:'Mati',               end:'ぬ',  note:'ぬ→んで' },
  { dict:'よぶ',  masu:'よびます',  nai:'よばない', te:'よんで',  meaning:'Memanggil',          end:'ぶ',  note:'ぶ→んで' },
  { dict:'あそぶ',masu:'あそびます',nai:'あそばない',te:'あそんで',meaning:'Bermain',            end:'ぶ',  note:'' },
  { dict:'のむ',  masu:'のみます',  nai:'のまない', te:'のんで',  meaning:'Minum',              end:'む',  note:'む→んで' },
  { dict:'よむ',  masu:'よみます',  nai:'よまない', te:'よんで',  meaning:'Membaca',            end:'む',  note:'' },
  { dict:'やすむ',masu:'やすみます',nai:'やすまない',te:'やすんで',meaning:'Istirahat',          end:'む',  note:'' },
  { dict:'かう',  masu:'かいます',  nai:'かわない', te:'かって',  meaning:'Membeli',            end:'う',  note:'う→って' },
  { dict:'つかう',masu:'つかいます',nai:'つかわない',te:'つかって',meaning:'Menggunakan',        end:'う',  note:'' },
  { dict:'おわる',masu:'おわります',nai:'おわらない',te:'おわって',meaning:'Selesai/Berakhir',   end:'る',  note:'⚠️Gol1!' },
  { dict:'かえる',masu:'かえります',nai:'かえらない',te:'かえって',meaning:'Pulang',             end:'る',  note:'⚠️Gol1!' },
  { dict:'はいる',masu:'はいります',nai:'はいらない',te:'はいって',meaning:'Masuk',              end:'る',  note:'⚠️Gol1!' },
  { dict:'のる',  masu:'のります',  nai:'のらない', te:'のって',  meaning:'Naik kendaraan',     end:'る',  note:'⚠️Gol1!' },
  { dict:'いく',  masu:'いきます',  nai:'いかない', te:'いって',  meaning:'Pergi',              end:'く',  note:'いく→いって(kecuali)' },
  { dict:'ある',  masu:'あります',  nai:'ない(khusus)',te:'あって',meaning:'Ada (benda)',         end:'る',  note:'⚠️Gol1! Negatif: ない' },
  { dict:'わかる',masu:'わかります',nai:'わからない',te:'わかって',meaning:'Mengerti',           end:'る',  note:'⚠️Gol1!' },
  { dict:'いう',  masu:'いいます',  nai:'いわない', te:'いって',  meaning:'Berkata',            end:'う',  note:'' },
  { dict:'おく',  masu:'おきます',  nai:'おかない', te:'おいて',  meaning:'Meletakkan',         end:'く',  note:'' },
  { dict:'あるく',masu:'あるきます',nai:'あるかない',te:'あるいて',meaning:'Berjalan kaki',       end:'く',  note:'' },
  { dict:'はしる',masu:'はしります',nai:'はしらない',te:'はしって',meaning:'Berlari',            end:'る',  note:'⚠️Gol1!' },
  { dict:'はたらく',masu:'はたらきます',nai:'はたらかない',te:'はたらいて',meaning:'Bekerja',    end:'く',  note:'' },
  { dict:'きる',  masu:'きります',  nai:'きらない', te:'きって',  meaning:'Memotong',           end:'る',  note:'⚠️Gol1! Beda: きる(pakai)=Gol2' },
]

// ─── KATA KERJA GOLONGAN 2 & 3 ───────────────────────────────────────────────
export const VERBS_GOL23 = [
  // Golongan 2 (Ichidan -iru)
  { dict:'みる',    masu:'みます',    nai:'みない',    te:'みて',    meaning:'Melihat/Menonton', group:2, end:'-iru' },
  { dict:'きる',    masu:'きます',    nai:'きない',    te:'きて',    meaning:'Memakai (baju)',   group:2, end:'-iru', note:'Beda: きる(potong)=Gol1' },
  { dict:'おきる',  masu:'おきます',  nai:'おきない',  te:'おきて',  meaning:'Bangun tidur',     group:2, end:'-iru' },
  { dict:'いる',    masu:'います',    nai:'いない',    te:'いて',    meaning:'Ada (makhluk)',     group:2, end:'-iru' },
  { dict:'おりる',  masu:'おります',  nai:'おりない',  te:'おりて',  meaning:'Turun kendaraan',  group:2, end:'-iru' },
  { dict:'あびる',  masu:'あびます',  nai:'あびない',  te:'あびて',  meaning:'Mandi (shower)',    group:2, end:'-iru' },
  { dict:'できる',  masu:'できます',  nai:'できない',  te:'できて',  meaning:'Bisa/Mampu',        group:2, end:'-iru', note:'できる juga verb Gol2' },
  // Golongan 2 (Ichidan -eru)
  { dict:'たべる',  masu:'たべます',  nai:'たべない',  te:'たべて',  meaning:'Makan',            group:2, end:'-eru' },
  { dict:'ねる',    masu:'ねます',    nai:'ねない',    te:'ねて',    meaning:'Tidur',             group:2, end:'-eru' },
  { dict:'おしえる',masu:'おしえます',nai:'おしえない',te:'おしえて',meaning:'Mengajar/Memberi tahu',group:2,end:'-eru' },
  { dict:'でる',    masu:'でます',    nai:'でない',    te:'でて',    meaning:'Keluar',            group:2, end:'-eru' },
  { dict:'あける',  masu:'あけます',  nai:'あけない',  te:'あけて',  meaning:'Membuka',           group:2, end:'-eru' },
  { dict:'しめる',  masu:'しめます',  nai:'しめない',  te:'しめて',  meaning:'Menutup',           group:2, end:'-eru' },
  { dict:'つける',  masu:'つけます',  nai:'つけない',  te:'つけて',  meaning:'Menyalakan',        group:2, end:'-eru' },
  { dict:'けす',    masu:'けします',  nai:'けさない',  te:'けして',  meaning:'Memadamkan/Hapus',  group:1, end:'す',   note:'⚠️Gol1! berakhiran su' },
  { dict:'みせる',  masu:'みせます',  nai:'みせない',  te:'みせて',  meaning:'Menunjukkan',       group:2, end:'-eru' },
  { dict:'はじめる',masu:'はじめます',nai:'はじめない',te:'はじめて',meaning:'Memulai',           group:2, end:'-eru' },
  { dict:'おぼえる',masu:'おぼえます',nai:'おぼえない',te:'おぼえて',meaning:'Menghafal',         group:2, end:'-eru' },
  { dict:'かんがえる',masu:'かんがえます',nai:'かんがえない',te:'かんがえて',meaning:'Berpikir',  group:2, end:'-eru' },
  // Golongan 3 (Irregular)
  { dict:'する',    masu:'します',    nai:'しない',    te:'して',    meaning:'Melakukan',        group:3, end:'する', note:'IRREGULAR — hafal!' },
  { dict:'くる',    masu:'きます',    nai:'こない',    te:'きて',    meaning:'Datang',           group:3, end:'くる', note:'IRREGULAR — hafal! こない bukan くない' },
  // Suru compounds
  { dict:'べんきょうする', masu:'べんきょうします', nai:'べんきょうしない', te:'べんきょうして', meaning:'Belajar',   group:3, end:'N+する' },
  { dict:'うんどうする',   masu:'うんどうします',   nai:'うんどうしない',   te:'うんどうして',   meaning:'Olahraga', group:3, end:'N+する' },
  { dict:'りょこうする',   masu:'りょこうします',   nai:'りょこうしない',   te:'りょこうして',   meaning:'Traveling', group:3, end:'N+する' },
  { dict:'でんわする',     masu:'でんわします',     nai:'でんわしない',     te:'でんわして',     meaning:'Menelepon', group:3, end:'N+する' },
  { dict:'しょうかいする', masu:'しょうかいします', nai:'しょうかいしない', te:'しょうかいして', meaning:'Memperkenalkan',group:3,end:'N+する' },
]

// ─── KATA GANTI & KATA TANYA ─────────────────────────────────────────────────
export const DASAR_KOMUNIKASI = {
  pronouns: [
    { jp:'わたし',   romaji:'watashi',   meaning:'Saya (formal, universal)', note:'Dipakai oleh siapa saja — pilihan paling aman untuk pemula' },
    { jp:'わたしたち',romaji:'watashitachi',meaning:'Kami / Kita',          note:'Jamak dari わたし' },
    { jp:'ぼく',     romaji:'boku',      meaning:'Saya (pria, casual)',      note:'Pria pakai saat bicara dengan teman. Jangan pakai ke atasan' },
    { jp:'おれ',     romaji:'ore',       meaning:'Aku (pria, sangat kasual)',note:'Sangat informal. Hindari pakai ke orang yang belum akrab' },
    { jp:'あたし',   romaji:'atashi',    meaning:'Saya (wanita, casual)',    note:'Wanita pakai saat santai. Lebih feminim dari わたし' },
    { jp:'あなた',   romaji:'anata',     meaning:'Kamu / Anda (formal)',     note:'⚠️ Jarang dipakai! Lebih sopan pakai nama+さん: 田中さん' },
    { jp:'きみ',     romaji:'kimi',      meaning:'Kamu (pria ke pria, akrab)',note:'Pria pakai ke teman dekat. Jangan ke atasan' },
    { jp:'かれ',     romaji:'kare',      meaning:'Dia (laki-laki)',           note:'Juga bisa berarti "pacar (pria)"' },
    { jp:'かのじょ', romaji:'kanojo',    meaning:'Dia (perempuan)',          note:'Juga bisa berarti "pacar (wanita)"' },
    { jp:'みなさん', romaji:'minasan',   meaning:'Semua orang / hadirin',    note:'Sapaan formal: みなさん、こんにちは！' },
  ],
  demonstratives: [
    { jp:'これ',  romaji:'kore',  meaning:'Ini (benda dekat pembicara)',   note:'Berdiri sendiri tanpa nomina' },
    { jp:'それ',  romaji:'sore',  meaning:'Itu (benda dekat pendengar)',   note:'Berdiri sendiri tanpa nomina' },
    { jp:'あれ',  romaji:'are',   meaning:'Itu (benda jauh dari keduanya)',note:'Berdiri sendiri tanpa nomina' },
    { jp:'どれ',  romaji:'dore',  meaning:'Yang mana? (3+ pilihan)',       note:'Untuk 2 pilihan: どちら/どっち' },
    { jp:'この',  romaji:'kono',  meaning:'Ini ~ (diikuti nomina)',        note:'このほん = buku ini' },
    { jp:'その',  romaji:'sono',  meaning:'Itu ~ (diikuti nomina)',        note:'そのひと = orang itu' },
    { jp:'あの',  romaji:'ano',   meaning:'Itu ~ (jauh, diikuti nomina)',  note:'あのみせ = toko itu (di sana)' },
    { jp:'どの',  romaji:'dono',  meaning:'Yang mana ~ (diikuti nomina)',  note:'どのかばん = tas yang mana' },
    { jp:'ここ',  romaji:'koko',  meaning:'Di sini (lokasi pembicara)',    note:'Untuk tempat/lokasi' },
    { jp:'そこ',  romaji:'soko',  meaning:'Di situ (lokasi pendengar)',    note:'Untuk tempat/lokasi' },
    { jp:'あそこ',romaji:'asoko', meaning:'Di sana (jauh dari keduanya)', note:'Untuk tempat/lokasi' },
    { jp:'どこ',  romaji:'doko',  meaning:'Di mana?',                      note:'Untuk tempat/lokasi' },
  ],
  questionWords: [
    { jp:'なに / なん', romaji:'nani / nan', meaning:'Apa?',              note:'なん sebelum です atau counter (なんじ, なんさい, なんぼん)' },
    { jp:'どこ',        romaji:'doko',        meaning:'Di mana?',          note:'Kombinasi: どこから(dari mana) どこへ(ke mana) どこで(melakukan di mana)' },
    { jp:'いつ',        romaji:'itsu',        meaning:'Kapan?',            note:'いつ tidak perlu partikel: いつ行きますか？' },
    { jp:'だれ / どなた',romaji:'dare / donata',meaning:'Siapa?',         note:'どなた = bentuk sopan dari だれ. Pakai ke orang dihormati' },
    { jp:'どれ',        romaji:'dore',        meaning:'Yang mana? (pilihan)',note:'Untuk 2 pilihan: どちら. Untuk 3+: どれ' },
    { jp:'どんな',      romaji:'donna',       meaning:'Seperti apa? / Jenis apa?', note:'Menanyakan karakteristik/jenis' },
    { jp:'どう',        romaji:'dou',         meaning:'Bagaimana? (kondisi/cara)', note:'どうですか = bagaimana? (meminta pendapat)' },
    { jp:'なぜ / どうして',romaji:'naze / doushite',meaning:'Mengapa? Kenapa?', note:'どうして = lebih kasual. なぜ = lebih formal/tulis' },
    { jp:'いくら',      romaji:'ikura',       meaning:'Berapa harganya?', note:'Khusus untuk harga. Jumlah: いくつ. Orang: なんにん' },
    { jp:'いくつ',      romaji:'ikutsu',      meaning:'Berapa jumlah? / Berapa usia?', note:'Untuk umur: おいくつですか = berapa umur Anda?' },
    { jp:'なんじ',      romaji:'nanji',       meaning:'Jam berapa?',      note:'なん + じ(counter jam). なんぷん = berapa menit' },
    { jp:'なんさい',    romaji:'nansai',      meaning:'Berapa tahun usianya?', note:'Lebih sopan: おいくつですか？' },
  ],
}
