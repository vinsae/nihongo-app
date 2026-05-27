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
  numbers: [
    { jp:'いち', romaji:'ichi', meaning:'Satu (1)' },
    { jp:'に', romaji:'ni', meaning:'Dua (2)' },
    { jp:'さん', romaji:'san', meaning:'Tiga (3)' },
    { jp:'よん', romaji:'yon', meaning:'Empat (4)' },
    { jp:'ご', romaji:'go', meaning:'Lima (5)' },
    { jp:'ろく', romaji:'roku', meaning:'Enam (6)' },
    { jp:'なな', romaji:'nana', meaning:'Tujuh (7)' },
    { jp:'はち', romaji:'hachi', meaning:'Delapan (8)' },
    { jp:'きゅう', romaji:'kyuu', meaning:'Sembilan (9)' },
    { jp:'じゅう', romaji:'juu', meaning:'Sepuluh (10)' },
    { jp:'ひゃく', romaji:'hyaku', meaning:'Seratus (100)' },
    { jp:'せん', romaji:'sen', meaning:'Seribu (1000)' },
  ],
  greetings: [
    { jp:'おはようございます', romaji:'Ohayou gozaimasu', meaning:'Selamat pagi (formal)' },
    { jp:'こんにちは', romaji:'Konnichiwa', meaning:'Halo / Selamat siang' },
    { jp:'こんばんは', romaji:'Konbanwa', meaning:'Selamat malam' },
    { jp:'さようなら', romaji:'Sayounara', meaning:'Selamat tinggal' },
    { jp:'ありがとうございます', romaji:'Arigatou gozaimasu', meaning:'Terima kasih (formal)' },
    { jp:'すみません', romaji:'Sumimasen', meaning:'Permisi / Maaf' },
    { jp:'はじめまして', romaji:'Hajimemashite', meaning:'Salam kenal' },
    { jp:'よろしくおねがいします', romaji:'Yoroshiku onegaishimasu', meaning:'Mohon bimbingannya' },
    { jp:'おやすみなさい', romaji:'Oyasumi nasai', meaning:'Selamat tidur' },
    { jp:'いただきます', romaji:'Itadakimasu', meaning:'Sebelum makan' },
    { jp:'ごちそうさまでした', romaji:'Gochisousama deshita', meaning:'Selesai makan' },
    { jp:'がんばって', romaji:'Ganbatte', meaning:'Semangat!' },
  ],
  colors: [
    { jp:'あか', romaji:'aka', meaning:'Merah (赤)' },
    { jp:'あお', romaji:'ao', meaning:'Biru / Hijau (青)' },
    { jp:'きいろ', romaji:'kiiro', meaning:'Kuning (黄色)' },
    { jp:'しろ', romaji:'shiro', meaning:'Putih (白)' },
    { jp:'くろ', romaji:'kuro', meaning:'Hitam (黒)' },
    { jp:'みどり', romaji:'midori', meaning:'Hijau (緑)' },
    { jp:'むらさき', romaji:'murasaki', meaning:'Ungu (紫)' },
    { jp:'ちゃいろ', romaji:'chairo', meaning:'Coklat (茶色)' },
    { jp:'だいだいいろ', romaji:'daidaiiro', meaning:'Oranye (橙)' },
    { jp:'ピンク', romaji:'pinku', meaning:'Pink' },
  ],
  family: [
    { jp:'ちち', romaji:'chichi', meaning:'Ayah (saya)' },
    { jp:'はは', romaji:'haha', meaning:'Ibu (saya)' },
    { jp:'おとうさん', romaji:'otousan', meaning:'Ayah (orang lain)' },
    { jp:'おかあさん', romaji:'okaasan', meaning:'Ibu (orang lain)' },
    { jp:'あに', romaji:'ani', meaning:'Kakak laki-laki (saya)' },
    { jp:'あね', romaji:'ane', meaning:'Kakak perempuan (saya)' },
    { jp:'おとうと', romaji:'otouto', meaning:'Adik laki-laki' },
    { jp:'いもうと', romaji:'imouto', meaning:'Adik perempuan' },
    { jp:'そふ', romaji:'sofu', meaning:'Kakek (saya)' },
    { jp:'そぼ', romaji:'sobo', meaning:'Nenek (saya)' },
    { jp:'かぞく', romaji:'kazoku', meaning:'Keluarga' },
    { jp:'こども', romaji:'kodomo', meaning:'Anak' },
  ],
  food: [
    { jp:'ごはん', romaji:'gohan', meaning:'Nasi / Makanan' },
    { jp:'みず', romaji:'mizu', meaning:'Air' },
    { jp:'おちゃ', romaji:'ocha', meaning:'Teh' },
    { jp:'ラーメン', romaji:'raamen', meaning:'Ramen' },
    { jp:'すし', romaji:'sushi', meaning:'Sushi' },
    { jp:'てんぷら', romaji:'tenpura', meaning:'Tempura' },
    { jp:'パン', romaji:'pan', meaning:'Roti' },
    { jp:'たまご', romaji:'tamago', meaning:'Telur' },
    { jp:'にく', romaji:'niku', meaning:'Daging' },
    { jp:'さかな', romaji:'sakana', meaning:'Ikan' },
    { jp:'やさい', romaji:'yasai', meaning:'Sayuran' },
    { jp:'くだもの', romaji:'kudamono', meaning:'Buah' },
  ],
  time: [
    { jp:'いま', romaji:'ima', meaning:'Sekarang' },
    { jp:'きょう', romaji:'kyou', meaning:'Hari ini' },
    { jp:'きのう', romaji:'kinou', meaning:'Kemarin' },
    { jp:'あした', romaji:'ashita', meaning:'Besok' },
    { jp:'まいにち', romaji:'mainichi', meaning:'Setiap hari' },
    { jp:'あさ', romaji:'asa', meaning:'Pagi' },
    { jp:'ひる', romaji:'hiru', meaning:'Siang' },
    { jp:'よる', romaji:'yoru', meaning:'Malam' },
    { jp:'なんじ', romaji:'nanji', meaning:'Jam berapa?' },
    { jp:'ごぜん', romaji:'gozen', meaning:'AM (pagi)' },
    { jp:'ごご', romaji:'gogo', meaning:'PM (siang/sore)' },
    { jp:'らいねん', romaji:'rainen', meaning:'Tahun depan' },
  ],
  verbs: [
    { jp:'たべます', romaji:'tabemasu', meaning:'Makan' },
    { jp:'のみます', romaji:'nomimasu', meaning:'Minum' },
    { jp:'いきます', romaji:'ikimasu', meaning:'Pergi' },
    { jp:'きます', romaji:'kimasu', meaning:'Datang' },
    { jp:'みます', romaji:'mimasu', meaning:'Melihat / Menonton' },
    { jp:'ききます', romaji:'kikimasu', meaning:'Mendengar' },
    { jp:'はなします', romaji:'hanashimasu', meaning:'Berbicara' },
    { jp:'よみます', romaji:'yomimasu', meaning:'Membaca' },
    { jp:'かきます', romaji:'kakimasu', meaning:'Menulis' },
    { jp:'べんきょうします', romaji:'benkyou shimasu', meaning:'Belajar' },
    { jp:'ねます', romaji:'nemasu', meaning:'Tidur' },
    { jp:'おきます', romaji:'okimasu', meaning:'Bangun' },
    { jp:'かいます', romaji:'kaimasu', meaning:'Membeli' },
    { jp:'します', romaji:'shimasu', meaning:'Melakukan' },
    { jp:'わかります', romaji:'wakarimasu', meaning:'Mengerti' },
  ],
  body: [
    { jp:'あたま', romaji:'atama', meaning:'Kepala' },
    { jp:'かみ', romaji:'kami', meaning:'Rambut' },
    { jp:'め', romaji:'me', meaning:'Mata' },
    { jp:'みみ', romaji:'mimi', meaning:'Telinga' },
    { jp:'はな', romaji:'hana', meaning:'Hidung' },
    { jp:'くち', romaji:'kuchi', meaning:'Mulut' },
    { jp:'は', romaji:'ha', meaning:'Gigi' },
    { jp:'かお', romaji:'kao', meaning:'Wajah' },
    { jp:'くび', romaji:'kubi', meaning:'Leher' },
    { jp:'かた', romaji:'kata', meaning:'Bahu' },
    { jp:'て', romaji:'te', meaning:'Tangan' },
    { jp:'あし', romaji:'ashi', meaning:'Kaki' },
    { jp:'せなか', romaji:'senaka', meaning:'Punggung' },
    { jp:'おなか', romaji:'onaka', meaning:'Perut' },
  ],
  places: [
    { jp:'がっこう', romaji:'gakkou', meaning:'Sekolah' },
    { jp:'びょういん', romaji:'byouin', meaning:'Rumah sakit' },
    { jp:'えき', romaji:'eki', meaning:'Stasiun' },
    { jp:'スーパー', romaji:'suupaa', meaning:'Supermarket' },
    { jp:'コンビニ', romaji:'konbini', meaning:'Minimarket' },
    { jp:'ぎんこう', romaji:'ginkou', meaning:'Bank' },
    { jp:'としょかん', romaji:'toshokan', meaning:'Perpustakaan' },
    { jp:'レストラン', romaji:'resutoran', meaning:'Restoran' },
    { jp:'ホテル', romaji:'hoteru', meaning:'Hotel' },
    { jp:'くうこう', romaji:'kuukou', meaning:'Bandara' },
    { jp:'ゆうびんきょく', romaji:'yuubinkyoku', meaning:'Kantor pos' },
    { jp:'こうえん', romaji:'kouen', meaning:'Taman' },
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
export const GRAMMAR = [
  {
    id: 'particles', title: 'Partikel Dasar', icon: '📌',
    items: [
      { term:'は (wa)', desc:'Menandai topik kalimat', ex:'わたし は がくせい です', tr:'Saya adalah pelajar', tip:'は dibaca "wa" bukan "ha" saat jadi partikel' },
      { term:'が (ga)', desc:'Menandai subjek kalimat', ex:'ねこ が います', tr:'Ada kucing', tip:'Dipakai saat memperkenalkan subjek baru' },
      { term:'を (wo)', desc:'Menandai objek langsung', ex:'パン を たべます', tr:'Makan roti', tip:'を hanya dipakai sebagai partikel' },
      { term:'に (ni)', desc:'Arah / waktu / lokasi', ex:'がっこう に いきます', tr:'Pergi ke sekolah', tip:'Juga untuk "jam": 三時に（さんじに）= jam 3' },
      { term:'で (de)', desc:'Lokasi aksi / alat / cara', ex:'バス で いきます', tr:'Pergi naik bus', tip:'Lokasi aksi: 図書館で勉強します' },
      { term:'の (no)', desc:'Kepemilikan / modifikasi', ex:'わたし の ほん', tr:'Buku saya', tip:'Seperti "punya/milik" dalam bahasa Indonesia' },
      { term:'と (to)', desc:'Dan / Bersama dengan', ex:'ともだち と いきます', tr:'Pergi bersama teman', tip:'Untuk menyebutkan dua hal: りんごとみかん' },
      { term:'も (mo)', desc:'Juga / Pun', ex:'わたし も がくせい です', tr:'Saya juga pelajar', tip:'Menggantikan は atau が: わたしも = saya juga' },
      { term:'か (ka)', desc:'Membentuk kalimat tanya', ex:'がくせい ですか？', tr:'Apakah kamu pelajar?', tip:'Di akhir kalimat, nada naik' },
      { term:'ね (ne)', desc:'Konfirmasi / persetujuan', ex:'いい です ね', tr:'Bagus ya', tip:'Seperti "ya" atau "kan" dalam bahasa Indonesia' },
    ]
  },
  {
    id: 'patterns', title: 'Pola Kalimat', icon: '🏗️',
    items: [
      { term:'S は N です', desc:'Menyatakan identitas/profesi', ex:'わたし は がくせい です', tr:'Saya adalah pelajar', tip:'Untuk perkenalan diri' },
      { term:'S は Adj です', desc:'Menyatakan sifat/keadaan', ex:'きょう は あつい です', tr:'Hari ini panas', tip:'i-adj langsung + です' },
      { term:'S は V ます', desc:'Kalimat aksi (polite/present)', ex:'まいにち べんきょう します', tr:'Belajar setiap hari', tip:'Bentuk ます untuk formal' },
      { term:'S は V ません', desc:'Kalimat negatif', ex:'にく を たべません', tr:'Tidak makan daging', tip:'ません = tidak (present)' },
      { term:'S は V ました', desc:'Kalimat lampau', ex:'きのう いきました', tr:'Kemarin pergi', tip:'ました = sudah / tadi' },
      { term:'S は V ませんでした', desc:'Negatif lampau', ex:'きのう たべませんでした', tr:'Kemarin tidak makan', tip:'ませんでした = tidak (past)' },
      { term:'~ を ください', desc:'Meminta sesuatu', ex:'みず を ください', tr:'Tolong berikan air', tip:'Di toko/restoran, sopan tapi tidak super formal' },
      { term:'~ は どこ ですか', desc:'Menanyakan lokasi', ex:'トイレ は どこ ですか', tr:'Di mana toilet?', tip:'Sangat berguna saat traveling ke Jepang!' },
      { term:'~ は いくら ですか', desc:'Menanyakan harga', ex:'これ は いくら ですか', tr:'Ini berapa harganya?', tip:'いくら = berapa (harga)' },
      { term:'～てください', desc:'Meminta melakukan sesuatu', ex:'ゆっくり はなして ください', tr:'Tolong bicara pelan', tip:'Bentuk て + ください' },
    ]
  },
  {
    id: 'adjectives', title: 'Kata Sifat', icon: '🎨',
    items: [
      { term:'おおきい (i-adj)', desc:'Besar', ex:'おおきい いえ', tr:'Rumah besar', tip:'Negatif: おおきくない' },
      { term:'ちいさい (i-adj)', desc:'Kecil', ex:'ちいさい ねこ', tr:'Kucing kecil', tip:'Negatif: ちいさくない' },
      { term:'あたらしい (i-adj)', desc:'Baru', ex:'あたらしい くるま', tr:'Mobil baru', tip:'Negatif: あたらしくない' },
      { term:'たかい (i-adj)', desc:'Tinggi / Mahal', ex:'たかい やま', tr:'Gunung tinggi', tip:'Konteks menentukan arti' },
      { term:'やすい (i-adj)', desc:'Murah', ex:'やすい ごはん', tr:'Makanan murah', tip:'Negatif: やすくない' },
      { term:'おいしい (i-adj)', desc:'Enak', ex:'おいしい すし', tr:'Sushi enak', tip:'Kata penting di restoran!' },
      { term:'たのしい (i-adj)', desc:'Menyenangkan', ex:'たのしい りょこう', tr:'Perjalanan menyenangkan', tip:'Negatif: たのしくない' },
      { term:'きれい (na-adj)', desc:'Cantik / Bersih', ex:'きれい な はな', tr:'Bunga cantik', tip:'な-adj + な + nomina' },
      { term:'すき (na-adj)', desc:'Suka', ex:'おちゃ が すき です', tr:'Saya suka teh', tip:'が すき です = suka ~' },
      { term:'げんき (na-adj)', desc:'Sehat / Bersemangat', ex:'おげんき ですか？', tr:'Apa kabar?', tip:'Sapaan umum sehari-hari' },
    ]
  },
  {
    id: 'verbs', title: 'Kata Kerja Dasar', icon: '⚡',
    items: [
      { term:'たべます → たべません', desc:'Makan (present → negatif)', ex:'にく を たべます', tr:'Makan daging', tip:'Rumus: ます → ません' },
      { term:'たべます → たべました', desc:'Makan (present → lampau)', ex:'すし を たべました', tr:'Tadi makan sushi', tip:'Rumus: ます → ました' },
      { term:'いきます → いきました', desc:'Pergi (present → lampau)', ex:'がっこう に いきました', tr:'Tadi pergi ke sekolah', tip:'Kata kerja gerak paling umum' },
      { term:'います / あります', desc:'Ada (makhluk hidup / benda)', ex:'ねこ が います / ほん が あります', tr:'Ada kucing / Ada buku', tip:'います untuk hidup, あります untuk benda' },
      { term:'わかります', desc:'Mengerti', ex:'にほんご が わかります', tr:'Mengerti bahasa Jepang', tip:'Diikuti が bukan を' },
      { term:'できます', desc:'Bisa / Mampu', ex:'にほんご が できます', tr:'Bisa bahasa Jepang', tip:'Diikuti が bukan を' },
      { term:'みます → みました', desc:'Melihat / Menonton', ex:'テレビ を みます', tr:'Menonton TV', tip:'Juga untuk "nonton film"' },
      { term:'します', desc:'Melakukan (kata kerja serbaguna)', ex:'べんきょう を します', tr:'Belajar (melakukan belajar)', tip:'する + nomina = verba' },
      { term:'てform + います', desc:'Sedang melakukan', ex:'たべています', tr:'Sedang makan', tip:'て-form + います = sedang ~' },
      { term:'てform + ください', desc:'Tolong lakukan', ex:'みて ください', tr:'Tolong lihat', tip:'て-form + ください = tolong ~' },
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
export const MODULES_CONFIG = [
  { id:'hiragana',     title:'Hiragana',      sub:'ひらがな', desc:'46 huruf dasar + dakuten + kombinasi. Fondasi utama!', level:'Langkah 1', icon:'あ', color:'#e63946', bg:'rgba(230,57,70,0.10)',    total:104 },
  { id:'katakana',     title:'Katakana',      sub:'カタカナ', desc:'46 huruf serapan + dakuten + kombinasi. Untuk kata asing.', level:'Langkah 2', icon:'ア', color:'#457b9d', bg:'rgba(69,123,157,0.10)', total:104 },
  { id:'vocabulary',   title:'Kosakata',      sub:'語彙',     desc:'9 kategori: Angka, Sapaan, Warna, Keluarga, Makanan, Waktu, Verba, Tubuh, Tempat.', level:'Langkah 3', icon:'語', color:'#2a9d8f', bg:'rgba(42,157,143,0.10)', total:120 },
  { id:'grammar',      title:'Tata Bahasa',   sub:'文法',     desc:'Partikel, pola kalimat, kata sifat, dan kata kerja dasar.', level:'Langkah 4', icon:'文', color:'#e9c46a', bg:'rgba(233,196,106,0.10)', total:40 },
  { id:'kanji',        title:'Kanji N5',      sub:'漢字',     desc:'50 kanji JLPT N5 dengan on/kun yomi dan contoh penggunaan.', level:'Langkah 5', icon:'漢', color:'#8338ec', bg:'rgba(131,56,236,0.10)', total:50 },
  { id:'conversation', title:'Percakapan',    sub:'会話',     desc:'6 situasi: Perkenalan, Restoran, Belanja, Bantuan, Transportasi, Darurat.', level:'Langkah 6', icon:'話', color:'#f4a261', bg:'rgba(244,162,97,0.10)', total:42 },
]

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

// ─── UPDATE MODULES CONFIG ────────────────────────────────────────────────────
export const NEW_MODULES = [
  { id:'budaya',      title:'Budaya Jepang',     sub:'日本文化',  desc:'Etos kerja, salam di kantor, norma sosial, kehidupan sehari-hari di Jepang.', level:'Langkah 7', icon:'🎌', color:'#e76f51', bg:'rgba(231,111,81,0.10)',  total:34 },
  { id:'bahasa-kerja',title:'Bahasa Kerja',       sub:'職場言語',  desc:'Keselamatan kerja, instruksi pabrik, kosakata industri & kehidupan asrama.', level:'Langkah 8', icon:'🏭', color:'#2a9d8f', bg:'rgba(42,157,143,0.10)', total:36 },
  { id:'counter',     title:'Kata Bilangan',      sub:'助数詞',    desc:'Cara menghitung benda: 一本、二枚、三台... sangat penting untuk sehari-hari.', level:'Langkah 9', icon:'🔢', color:'#457b9d', bg:'rgba(69,123,157,0.10)', total:40 },
  { id:'verb-advanced',title:'Kata Kerja Lanjutan', sub:'動詞活用', desc:'Bentuk て, ない, たい, dan ことができる — kunci berbicara lancar.', level:'Langkah 10', icon:'⚡', color:'#8338ec', bg:'rgba(131,56,236,0.10)', total:20 },
  { id:'jlpt-n5',     title:'JLPT N5 Drill',      sub:'N5試験',   desc:'Latihan soal format JLPT N5: kanji, partikel, kosakata. Siap ujian!', level:'Langkah 11', icon:'📝', color:'#e63946', bg:'rgba(230,57,70,0.10)',  total:24 },
]
