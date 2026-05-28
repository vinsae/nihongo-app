import {
  HIRAGANA_BASE, HIRAGANA_DAKUTEN, HIRAGANA_COMBO,
  KATAKANA_BASE, KATAKANA_DAKUTEN, KATAKANA_COMBO,
  VOCAB, KANJI_N5, GRAMMAR_QUIZ, CONVERSATION_QUIZ,
  JLPT_N5_DRILL, VERBS_GOL1, VERBS_GOL23, DASAR_KOMUNIKASI,
  VOCAB_N4, VOCAB_N3,
} from '../data.js'

// ── UTILS ────────────────────────────────────────────────────────────────────
export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]
  }
  return a
}

function pickOthers(pool, exclude, key, n) {
  const others = pool.filter(x => x !== exclude && x[key] !== exclude[key])
  return shuffle(others).slice(0, n).map(x => x[key])
}

function vocabToQ(items, key='meaning', qKey='jp', label='Apa artinya?', count=10) {
  return shuffle(items).slice(0, count).map(v => ({
    q: v[qKey], label, answer: v[key],
    choices: shuffle([v[key], ...pickOthers(items, v, key, 3)]),
  }))
}

function charToRomaji(pool, label, count=10) {
  return shuffle(pool).slice(0, count).map(h => ({
    q: h.char, label, answer: h.romaji,
    choices: shuffle([h.romaji, ...pickOthers(pool, h, 'romaji', 3)]),
  }))
}

// ── MAIN BUILDER ─────────────────────────────────────────────────────────────
export function buildQuiz(moduleId, count=10) {
  switch(moduleId) {

    // ── HURUF ──
    case 'hiragana-dasar':
      return charToRomaji(HIRAGANA_BASE, 'Apa bunyi huruf hiragana ini?', count)

    case 'hiragana-lanjutan':
      return charToRomaji([...HIRAGANA_DAKUTEN,...HIRAGANA_COMBO], 'Apa bunyi huruf hiragana ini?', count)

    case 'katakana-dasar':
      return charToRomaji(KATAKANA_BASE, 'Apa bunyi huruf katakana ini?', count)

    case 'katakana-lanjutan':
      return charToRomaji([...KATAKANA_DAKUTEN,...KATAKANA_COMBO], 'Apa bunyi huruf katakana ini?', count)

    // ── PONDASI ──
    case 'angka': {
      const nums = VOCAB.numbers
      // Mix: JP→arti dan juga arti→JP
      const q1 = shuffle(nums).slice(0,5).map(v => ({
        q: v.jp, label:'Apa artinya angka ini?', answer: v.meaning,
        choices: shuffle([v.meaning, ...pickOthers(nums, v, 'meaning', 3)]),
      }))
      const q2 = shuffle(nums).slice(0,5).map(v => ({
        q: v.meaning, label:'Bagaimana cara bacanya dalam bahasa Jepang?', answer: v.romaji,
        choices: shuffle([v.romaji, ...pickOthers(nums, v, 'romaji', 3)]),
      }))
      return shuffle([...q1,...q2]).slice(0, count)
    }

    case 'sapaan-dasar':
      return vocabToQ(VOCAB.greetings, 'meaning', 'jp', 'Apa artinya sapaan ini?', count)

    case 'kata-ganti-tanya': {
      const pronouns = DASAR_KOMUNIKASI.pronouns.map(p => ({
        q: p.jp, label:'Apa artinya?', answer: p.meaning,
        choices: shuffle([p.meaning, ...pickOthers(DASAR_KOMUNIKASI.pronouns, p, 'meaning', 3)]),
      }))
      const qtanya = DASAR_KOMUNIKASI.questionWords.map(p => ({
        q: p.jp, label:'Apa artinya kata tanya ini?', answer: p.meaning,
        choices: shuffle([p.meaning, ...pickOthers(DASAR_KOMUNIKASI.questionWords, p, 'meaning', 3)]),
      }))
      const demo = DASAR_KOMUNIKASI.demonstratives.map(p => ({
        q: p.jp, label:'Apa artinya?', answer: p.meaning,
        choices: shuffle([p.meaning, ...pickOthers(DASAR_KOMUNIKASI.demonstratives, p, 'meaning', 3)]),
      }))
      return shuffle([...pronouns,...qtanya,...demo]).slice(0, count)
    }

    case 'waktu-kalender': {
      const all = [...VOCAB.time, ...VOCAB.days]
      return vocabToQ(all, 'meaning', 'jp', 'Apa artinya?', count)
    }

    // ── KOSAKATA ──
    case 'kosakata-benda': {
      const all = [...VOCAB.food,...VOCAB.places,...VOCAB.transport,...VOCAB.body,...VOCAB.family]
      return vocabToQ(all, 'meaning', 'jp', 'Apa artinya?', count)
    }

    case 'kata-sifat': {
      const q1 = shuffle(VOCAB.adjectives).slice(0,5).map(v => ({
        q: v.jp, label:'Apa artinya kata sifat ini?', answer: v.meaning,
        choices: shuffle([v.meaning, ...pickOthers(VOCAB.adjectives, v, 'meaning', 3)]),
      }))
      const q2 = shuffle(VOCAB.adjectives).slice(0,5).map(v => ({
        q: v.meaning.replace(/ \(.*\)/,'').split(' / ')[0], label:'Apa kata sifat Jepangnya?', answer: v.jp,
        choices: shuffle([v.jp, ...pickOthers(VOCAB.adjectives, v, 'jp', 3)]),
      }))
      return shuffle([...q1,...q2]).slice(0, count)
    }

    case 'kata-kerja-gol1': {
      const q1 = shuffle(VERBS_GOL1).slice(0,5).map(v => ({
        q: `${v.dict} (${v.meaning}) → ます形は?`, label:'Ubah ke bentuk ます', answer: v.masu,
        choices: shuffle([v.masu, ...pickOthers(VERBS_GOL1, v, 'masu', 3)]),
      }))
      const q2 = shuffle(VERBS_GOL1).slice(0,5).map(v => ({
        q: `${v.dict} (${v.meaning}) → て形は?`, label:'Ubah ke bentuk て', answer: v.te,
        choices: shuffle([v.te, ...pickOthers(VERBS_GOL1, v, 'te', 3)]),
      }))
      return shuffle([...q1,...q2]).slice(0, count)
    }

    case 'kata-kerja-gol23': {
      const q1 = shuffle(VERBS_GOL23).slice(0,5).map(v => ({
        q: `${v.dict} (${v.meaning}) → ます形は?`, label:'Ubah ke bentuk ます', answer: v.masu,
        choices: shuffle([v.masu, ...pickOthers(VERBS_GOL23, v, 'masu', 3)]),
      }))
      const q2 = shuffle(VERBS_GOL23).slice(0,5).map(v => ({
        q: `${v.dict} (${v.meaning}) → ない形は?`, label:'Ubah ke bentuk ない', answer: v.nai,
        choices: shuffle([v.nai, ...pickOthers(VERBS_GOL23, v, 'nai', 3)]),
      }))
      return shuffle([...q1,...q2]).slice(0, count)
    }

    // ── GRAMMAR ──
    case 'partikel-1':
      return shuffle(PARTICLE_Q1).slice(0, count)

    case 'partikel-2':
      return shuffle(PARTICLE_Q2).slice(0, count)

    case 'pola-kalimat':
      return shuffle(POLA_Q).slice(0, count)

    case 'konjugasi-kk':
      return shuffle(KONJUGASI_Q).slice(0, count)

    case 'te-form':
      return shuffle(TEFORM_Q).slice(0, count)

    case 'pola-lanjutan':
      return shuffle(POLA_LANJUTAN_Q).slice(0, count)

    // ── KANJI ──
    case 'kanji-1': {
      const pool = KANJI_N5.slice(0,25)
      const q1 = shuffle(pool).slice(0,5).map(k => ({
        q: k.k, label:'Apa arti kanji ini?', answer: k.m,
        choices: shuffle([k.m, ...pickOthers(pool, k, 'm', 3)]),
      }))
      const q2 = shuffle(pool).slice(0,5).map(k => ({
        q: k.k, label:'Cara baca ON-yomi-nya?', answer: k.on.split('/')[0],
        choices: shuffle([k.on.split('/')[0], ...pickOthers(pool, k, 'on', 3).map(o=>o.split('/')[0])]),
      }))
      return shuffle([...q1,...q2]).slice(0, count)
    }

    case 'kanji-2': {
      const pool = KANJI_N5.slice(25)
      const q1 = shuffle(pool).slice(0,5).map(k => ({
        q: k.k, label:'Apa arti kanji ini?', answer: k.m,
        choices: shuffle([k.m, ...pickOthers(pool, k, 'm', 3)]),
      }))
      const q2 = shuffle(pool).slice(0,5).map(k => ({
        q: k.m, label:'Kanji yang benar?', answer: k.k,
        choices: shuffle([k.k, ...pickOthers(pool, k, 'k', 3)]),
      }))
      return shuffle([...q1,...q2]).slice(0, count)
    }

    // ── PERCAKAPAN ──
    case 'conv-perkenalan':
    case 'conv-sehari':
    case 'conv-belanja':
    case 'conv-transport':
    case 'conv-darurat':
      return shuffle(CONVERSATION_QUIZ).slice(0, count)

    // ── JLPT N5 ──
    case 'jlpt-n5': {
      const all = [...JLPT_N5_DRILL.mojigoi,...JLPT_N5_DRILL.bunpou,...JLPT_N5_DRILL.vocabulary]
      return shuffle(all).slice(0, count)
    }

    default:
      return []
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// QUIZ DATA SPECIFIC TO EACH GRAMMAR STEP
// ══════════════════════════════════════════════════════════════════════════════

const PARTICLE_Q1 = [
  { q:'わたし＿がくせいです。',          label:'Pilih partikel は・が・を yang tepat', answer:'は', choices:['は','が','を','に'] },
  { q:'ねこ＿います。',                   label:'Pilih partikel は・が・を yang tepat', answer:'が', choices:['が','は','を','で'] },
  { q:'パン＿たべます。',                 label:'Pilih partikel は・が・を yang tepat', answer:'を', choices:['を','が','は','に'] },
  { q:'きのう なに＿たべましたか？',      label:'Pilih partikel は・が・を yang tepat', answer:'を', choices:['を','が','は','で'] },
  { q:'だれ＿きましたか？',              label:'Pilih partikel は・が・を yang tepat', answer:'が', choices:['が','は','を','か'] },
  { q:'にほんご＿むずかしいです。',       label:'Pilih partikel は・が・を yang tepat', answer:'は', choices:['は','が','を','で'] },
  { q:'おちゃ＿すきです。',              label:'Pilih partikel は・が・を yang tepat (suka)', answer:'が', choices:['が','を','は','に'] },
  { q:'まいにち ごはん＿たべます。',      label:'Pilih partikel は・が・を yang tepat', answer:'を', choices:['を','が','は','と'] },
  { q:'えいご＿わかりますか？',          label:'Pilih partikel は・が・を yang tepat', answer:'が', choices:['が','を','は','で'] },
  { q:'テレビ＿みます。',                label:'Pilih partikel は・が・を yang tepat', answer:'を', choices:['を','が','は','に'] },
  { q:'わたし＿やまださんです。',         label:'Pilih partikel は・が・を yang tepat', answer:'は', choices:['は','が','を','と'] },
  { q:'あそこ に いぬ＿います。',         label:'Pilih partikel は・が・を yang tepat', answer:'が', choices:['が','は','を','も'] },
]

const PARTICLE_Q2 = [
  { q:'がっこう＿いきます。(ke sekolah)',  label:'Pilih partikel に・で・へ yang tepat', answer:'に', choices:['に','で','へ','を'] },
  { q:'としょかん＿べんきょうします。',    label:'Pilih partikel に・で・へ yang tepat', answer:'で', choices:['で','に','へ','が'] },
  { q:'バス＿いきます。(naik bus)',        label:'Pilih partikel に・で・へ yang tepat', answer:'で', choices:['で','に','を','が'] },
  { q:'わたし＿ほん。(buku saya)',         label:'Pilih partikel の yang tepat', answer:'の', choices:['の','は','に','と'] },
  { q:'ともだち＿いきます。(bersama)',     label:'Pilih partikel と・も・や yang tepat', answer:'と', choices:['と','も','や','に'] },
  { q:'わたし＿がくせいです。(saya juga)',label:'Pilih partikel も yang tepat', answer:'も', choices:['も','は','と','が'] },
  { q:'にほん＿きました。(dari Jepang)',   label:'Pilih partikel から・まで yang tepat', answer:'から', choices:['から','まで','に','へ'] },
  { q:'えき＿あるきます。(sampai stasiun)',label:'Pilih partikel から・まで yang tepat', answer:'まで', choices:['まで','から','に','で'] },
  { q:'がくせい です＿？(tanda tanya)',    label:'Pilih partikel か・ね・よ yang tepat', answer:'か', choices:['か','ね','よ','な'] },
  { q:'いい です＿。(konfirmasi "ya")',    label:'Pilih partikel か・ね・よ yang tepat', answer:'ね', choices:['ね','か','よ','な'] },
  { q:'あれは おいしい です＿！(info baru)',label:'Pilih partikel か・ね・よ yang tepat',answer:'よ', choices:['よ','ね','か','な'] },
  { q:'にほんご＿はなします。(dalam bahasa Jepang)', label:'Partikel untuk "alat/cara"?', answer:'で', choices:['で','に','を','が'] },
]

const POLA_Q = [
  { q:'わたしは やまだ ___。(saya adalah Yamada)', label:'Lengkapi kalimat dengan pola です', answer:'です', choices:['です','ます','でした','ません'] },
  { q:'きのう たべ___ (tidak makan kemarin)', label:'Pilih konjugasi yang tepat', answer:'ませんでした', choices:['ませんでした','ません','ました','ます'] },
  { q:'ねこ が ___ (ada kucing — makhluk)', label:'Pilih kata yang tepat', answer:'います', choices:['います','あります','いません','ません'] },
  { q:'つくえ の うえ に ほん が ___ (ada buku)', label:'Pilih kata yang tepat', answer:'あります', choices:['あります','います','ありません','いません'] },
  { q:'トイレ は ___ ですか？ (di mana?)', label:'Lengkapi kata tanya', answer:'どこ', choices:['どこ','なに','いつ','だれ'] },
  { q:'これは ___ ですか？ (berapa harganya?)', label:'Lengkapi kata tanya', answer:'いくら', choices:['いくら','なに','どこ','いくつ'] },
  { q:'A:「たべますか？」B:「いいえ、___」', label:'Jawaban negatif yang tepat', answer:'たべません', choices:['たべません','たべます','たべました','たべている'] },
  { q:'おおきい です → おおきく ___ (negatif i-adj)', label:'Konjugasi negatif i-adj', answer:'ないです', choices:['ないです','じゃないです','ありません','ません'] },
  { q:'きれいな → きれい ___ (negatif na-adj)', label:'Konjugasi negatif na-adj', answer:'じゃないです', choices:['じゃないです','くないです','ないです','ません'] },
  { q:'いきます → (lampau positif)', label:'Konjugasi lampau', answer:'いきました', choices:['いきました','いきません','いきましょう','いきます'] },
  { q:'たかかった = harga dulu mahal → sekarang?', label:'Apa arti bentuk lampau adjektif?', answer:'Dulu mahal (bentuk lampau i-adj)', choices:['Dulu mahal (bentuk lampau i-adj)','Tidak mahal','Sedang mahal','Akan mahal'] },
  { q:'A:「にほんごが わかりますか？」B:「すこし___」', label:'Jawaban "sedikit mengerti"', answer:'わかります', choices:['わかります','わかりません','わかりました','わかって'] },
]

const KONJUGASI_Q = [
  { q:'たべる → ます形', label:'Golongan 2: ubah ke ます', answer:'たべます', choices:['たべます','たべます','たべます','たびます'] },
  { q:'のむ → ます形', label:'Golongan 1: ubah ke ます', answer:'のみます', choices:['のみます','のむます','のんます','のびます'] },
  { q:'する → ます形', label:'Golongan 3: ubah ke ます', answer:'します', choices:['します','するます','しります','してます'] },
  { q:'くる → ます形', label:'Golongan 3: ubah ke ます', answer:'きます', choices:['きます','くます','くるます','こます'] },
  { q:'たべます → ない形', label:'Ubah ke bentuk ない (Gol.2)', answer:'たべない', choices:['たべない','たべません','たびない','たべぬ'] },
  { q:'かく → ない形', label:'Ubah ke bentuk ない (Gol.1 -ku)', answer:'かかない', choices:['かかない','かきない','かくない','かいない'] },
  { q:'おおきい → ない形 (negatif)', label:'Konjugasi negatif i-adj', answer:'おおきくない', choices:['おおきくない','おおきじゃない','おおきくありません','おおきない'] },
  { q:'しずか(な) → ない形 (negatif)', label:'Konjugasi negatif na-adj', answer:'しずかじゃない', choices:['しずかじゃない','しずかくない','しずかない','しずかません'] },
  { q:'たべます → 過去形 (lampau positif)', label:'Ubah ke lampau', answer:'たべました', choices:['たべました','たべます','たべた','たべって'] },
  { q:'いきます → 過去否定形 (lampau negatif)', label:'Ubah ke lampau negatif', answer:'いきませんでした', choices:['いきませんでした','いきませんだ','いきなかった','いきませんでます'] },
  { q:'あたらしい → 過去形 (lampau i-adj)', label:'Ubah ke lampau i-adj', answer:'あたらしかった', choices:['あたらしかった','あたらしでした','あたらしいでした','あたらしくた'] },
  { q:'げんき(な) → 過去形 (lampau na-adj)', label:'Ubah ke lampau na-adj', answer:'げんきだった', choices:['げんきだった','げんきかった','げんきでした','げんきました'] },
]

const TEFORM_Q = [
  { q:'たべる → て形', label:'Golongan 2: ubah ke て', answer:'たべて', choices:['たべて','たべって','たべいて','たびて'] },
  { q:'のむ → て形', label:'Golongan 1 (-mu): ubah ke て', answer:'のんで', choices:['のんで','のみて','のんて','のむて'] },
  { q:'かく → て形', label:'Golongan 1 (-ku): ubah ke て', answer:'かいて', choices:['かいて','かくて','かって','かいで'] },
  { q:'はなす → て形', label:'Golongan 1 (-su): ubah ke て', answer:'はなして', choices:['はなして','はなすて','はなんで','はなって'] },
  { q:'まつ → て形', label:'Golongan 1 (-tsu): ubah ke て', answer:'まって', choices:['まって','まちて','まつて','まいて'] },
  { q:'する → て形', label:'Golongan 3: ubah ke て', answer:'して', choices:['して','するて','しんで','すて'] },
  { q:'くる → て形', label:'Golongan 3: ubah ke て', answer:'きて', choices:['きて','くるて','きって','こて'] },
  { q:'いく → て形 (pengecualian!)', label:'Pengecualian: いく → ?', answer:'いって', choices:['いって','いきて','いいて','いって'] },
  { q:'みて ください = ?', label:'Apa artinya pola てください?', answer:'Tolong lihat', choices:['Tolong lihat','Sedang melihat','Sudah melihat','Boleh melihat'] },
  { q:'たべています = ?', label:'Apa artinya pola ている?', answer:'Sedang makan', choices:['Sedang makan','Sudah makan','Tolong makan','Akan makan'] },
  { q:'はいってもいいですか = ?', label:'Apa artinya pola てもいい?', answer:'Bolehkah masuk?', choices:['Bolehkah masuk?','Tolong masuk!','Jangan masuk!','Sudah masuk'] },
  { q:'ここで たばこを すっては いけません = ?', label:'Apa artinya pola てはいけない?', answer:'Dilarang merokok di sini', choices:['Dilarang merokok di sini','Tolong jangan merokok','Sedang merokok','Boleh merokok di sini'] },
]

const POLA_LANJUTAN_Q = [
  { q:'にほんに いき___ です。(ingin pergi)', label:'Pola たい: ingin melakukan', answer:'たい', choices:['たい','ましょう','ください','てもいい'] },
  { q:'いっしょに たべ___！(ayo makan)', label:'Pola ましょう: ajakan', answer:'ましょう', choices:['ましょう','ませんか','ください','たい'] },
  { q:'えいがを み___ か？(maukah nonton?)', label:'Pola ませんか: ajakan halus', answer:'ませんか', choices:['ませんか','ましょうか','ますか','たいですか'] },
  { q:'にほんごが はなすことが ___。(bisa berbicara)', label:'Pola ことができる: mampu', answer:'できます', choices:['できます','います','あります','します'] },
  { q:'バスより でんしゃの ___ はやいです。(kereta lebih cepat)', label:'Pola より〜ほうが: perbandingan', answer:'ほうが', choices:['ほうが','ほど','より','まで'] },
  { q:'くだものの なかで りんごが ___ すきです。(paling suka)', label:'Pola いちばん: superlatif', answer:'いちばん', choices:['いちばん','もっと','より','たいへん'] },
  { q:'あたまが いたい ___ やすみます。(karena sakit kepala)', label:'Pola から: alasan', answer:'から', choices:['から','ので','が','けど'] },
  { q:'らいねん にほんに いく ___ です。(berniat pergi)', label:'Pola つもり: niat/rencana', answer:'つもり', choices:['つもり','はず','予定','ところ'] },
  { q:'はやく ねた ___ いいですよ。(lebih baik tidur cepat)', label:'Pola ほうがいい: saran', answer:'ほうが', choices:['ほうが','つもり','いちばん','ほど'] },
  { q:'おんがくを きき___ べんきょうします。(sambil mendengar)', label:'Pola ながら: sambil', answer:'ながら', choices:['ながら','てから','ながら','あとで'] },
  { q:'えいがを みたり かいものを し___ します。(melakukan hal-hal seperti)', label:'Pola たりする', answer:'たり', choices:['たり','て','てから','たら'] },
  { q:'にほんごが でき___ はずです。(seharusnya bisa)', label:'Pola はず: seharusnya', answer:'る', choices:['る','た','て','ない'] },
]
