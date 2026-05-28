import { useState, useCallback } from 'react'
import {
  HIRAGANA_BASE, HIRAGANA_DAKUTEN, HIRAGANA_COMBO,
  KATAKANA_BASE, KATAKANA_DAKUTEN, KATAKANA_COMBO,
  VOCAB, KANJI_N5, GRAMMAR, CONVERSATION,
  BUDAYA, BAHASA_KERJA, COUNTERS, VERB_ADVANCED, JLPT_N5_DRILL,
  MODULE_INFO,
} from '../data.js'
import { buildQuiz, shuffle } from '../utils/quiz.js'
import { ProgressBar, FlipCard, KanjiCard, VocabCard, Btn } from './UI.jsx'

function speak(text) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const clean = text.replace(/[⚠️（）()「」【】★※〜]/g,'').split(/\s/)[0]
  const u = new SpeechSynthesisUtterance(clean)
  u.lang = 'ja-JP'; u.rate = 0.82
  window.speechSynthesis.speak(u)
}

const QUIZ_MODULES = ['hiragana','katakana','vocabulary','grammar','conversation','kanji','jlpt-n5']

export default function ModulePage({ mod, progress, onBack, onSaveProgress }) {
  const [tab, setTab]     = useState('intro') // 'intro' | 'learn' | 'quiz'
  const c                 = mod.color
  const hasQuiz           = QUIZ_MODULES.includes(mod.id)
  const isDone            = progress.completedModules?.includes(mod.id)
  const info              = MODULE_INFO[mod.id]

  return (
    <div style={{ minHeight:'100vh', background:'#0b0f1a', color:'#f0ece4', fontFamily:'"DM Sans",sans-serif' }}>
      {/* Header */}
      <header style={{ borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'14px 24px', display:'flex', alignItems:'center', gap:16, position:'sticky', top:0, background:'#0b0f1a', zIndex:10 }}>
        <button onClick={onBack} style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.09)', color:'#f0ece4', borderRadius:8, padding:'7px 14px', cursor:'pointer', fontSize:13 }}>← Kembali</button>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:16, fontWeight:600 }}>{mod.title} <span style={{ fontFamily:'"Noto Serif JP",serif', color:'rgba(255,255,255,0.35)', fontSize:14 }}>{mod.sub}</span></div>
          <div style={{ fontSize:11, color:'#8890a4' }}>{mod.level}</div>
        </div>
        {isDone && <div style={{ fontSize:12, color:'#2a9d8f', fontWeight:600, background:'rgba(42,157,143,0.15)', padding:'4px 10px', borderRadius:20 }}>✓ Selesai</div>}
      </header>

      <div style={{ maxWidth:860, margin:'0 auto', padding:'24px' }}>
        {/* Tab bar */}
        <div style={{ display:'flex', gap:4, marginBottom:28, background:'rgba(255,255,255,0.04)', borderRadius:10, padding:4, width:'fit-content' }}>
          <Btn variant={tab==='intro'?'tab-on':'tab-off'} color={c} onClick={()=>setTab('intro')}>📋 Panduan</Btn>
          <Btn variant={tab==='learn'?'tab-on':'tab-off'} color={c} onClick={()=>setTab('learn')}>📖 Belajar</Btn>
          {hasQuiz && <Btn variant={tab==='quiz'?'tab-on':'tab-off'} color={c} onClick={()=>setTab('quiz')}>🎯 Quiz</Btn>}
        </div>

        {tab==='intro' && info && <IntroTab mod={mod} info={info} c={c} isDone={isDone} onStart={()=>setTab('learn')} />}
        {tab==='learn' && <LearnContent mod={mod} c={c} />}
        {tab==='quiz'  && <QuizContent  mod={mod} c={c} progress={progress} onSaveProgress={onSaveProgress} />}

        {/* Tandai Selesai for non-quiz modules */}
        {!hasQuiz && tab==='learn' && (
          <div style={{ marginTop:32, padding:'16px 20px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'space-between', gap:16 }}>
            <div>
              <div style={{ fontSize:14, fontWeight:600, marginBottom:3 }}>Sudah selesai membaca?</div>
              <div style={{ fontSize:12, color:'#8890a4' }}>Tandai modul ini selesai untuk membuka langkah berikutnya.</div>
            </div>
            <button onClick={()=>onSaveProgress(mod.id,100,50)} disabled={isDone}
              style={{ background:isDone?'rgba(255,255,255,0.08)':c, border:'none', color:isDone?'#8890a4':'#fff', borderRadius:10, padding:'10px 20px', cursor:isDone?'default':'pointer', fontSize:13, fontWeight:600, whiteSpace:'nowrap', fontFamily:'"DM Sans",sans-serif' }}>
              {isDone ? '✓ Sudah Selesai' : '✅ Tandai Selesai'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ── INTRO TAB ──────────────────────────────────────────────────────────────────
function IntroTab({ mod, info, c, isDone, onStart }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background:`${c}15`, border:`1px solid ${c}30`, borderRadius:14, padding:'24px', marginBottom:20 }}>
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:16, marginBottom:16 }}>
          <div>
            <div style={{ fontSize:11, color:c, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:6 }}>{mod.level}</div>
            <h2 style={{ fontSize:22, fontWeight:700, margin:'0 0 8px', letterSpacing:'-0.02em' }}>{mod.title}</h2>
            <div style={{ fontSize:13, color:'rgba(255,255,255,0.6)', lineHeight:1.7 }}>{info.why}</div>
          </div>
          <div style={{ fontSize:44, fontFamily:'"Noto Serif JP",serif', flexShrink:0 }}>{mod.icon}</div>
        </div>

        {/* Stats row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:10 }}>
          <StatCard icon="⏱️" label="Estimasi Waktu" value={info.time} c={c} />
          <StatCard icon="🎯" label="Kaitan JLPT" value={info.jlpt} c={c} />
          <StatCard icon="📊" label="Level" value={info.level} c={c} />
        </div>
      </div>

      {/* Apa yang dipelajari */}
      <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'18px 20px', marginBottom:16 }}>
        <div style={{ fontSize:13, fontWeight:600, color:c, marginBottom:12 }}>📚 Yang akan kamu pelajari:</div>
        <div style={{ display:'grid', gap:8 }}>
          {info.what.map((item, i) => (
            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:13, color:'rgba(255,255,255,0.75)' }}>
              <span style={{ color:c, fontSize:14, flexShrink:0, marginTop:1 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div style={{ background:'rgba(244,162,97,0.1)', border:'1px solid rgba(244,162,97,0.25)', borderRadius:12, padding:'16px 18px', marginBottom:24 }}>
        <div style={{ fontSize:13, fontWeight:600, color:'#f4a261', marginBottom:6 }}>💡 Tips Belajar Efektif:</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.7 }}>{info.tip}</div>
      </div>

      <button onClick={onStart} style={{ background:c, border:'none', color:'#fff', borderRadius:10, padding:'12px 28px', cursor:'pointer', fontSize:14, fontWeight:600, fontFamily:'"DM Sans",sans-serif' }}>
        Mulai Belajar →
      </button>
    </div>
  )
}

function StatCard({ icon, label, value, c }) {
  return (
    <div style={{ background:'rgba(255,255,255,0.06)', borderRadius:10, padding:'12px 14px' }}>
      <div style={{ fontSize:18, marginBottom:4 }}>{icon}</div>
      <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)', marginBottom:3, textTransform:'uppercase', letterSpacing:'0.05em' }}>{label}</div>
      <div style={{ fontSize:12, color:'#f0ece4', fontWeight:500, lineHeight:1.4 }}>{value}</div>
    </div>
  )
}

// ── LEARN ROUTER ──────────────────────────────────────────────────────────────
function LearnContent({ mod, c }) {
  const map = {
    hiragana:        <HiraganaLearn c={c} />,
    katakana:        <KatakanaLearn c={c} />,
    vocabulary:      <VocabLearn c={c} />,
    grammar:         <GrammarLearn c={c} />,
    kanji:           <KanjiLearn c={c} />,
    conversation:    <ConversationLearn c={c} />,
    budaya:          <BudayaLearn c={c} />,
    'bahasa-kerja':  <BahasaKerjaLearn c={c} />,
    counter:         <CounterLearn c={c} />,
    'verb-advanced': <VerbAdvancedLearn c={c} />,
    'jlpt-n5':       <JlptInfoLearn c={c} />,
  }
  return map[mod.id] || null
}

// ── HIRAGANA ──────────────────────────────────────────────────────────────────
function HiraganaLearn({ c }) {
  const [sec, setSec] = useState('base')
  const DATA   = { base:HIRAGANA_BASE, dakuten:HIRAGANA_DAKUTEN, combo:HIRAGANA_COMBO }
  const LABELS = { base:'46 Dasar', dakuten:'+ Dakuten (bersuara)', combo:'+ Kombinasi' }
  const DESCS  = {
    base:    'あいうえお — 46 huruf inti. Hafal baris per baris dari atas ke bawah.',
    dakuten: 'Huruf bersuara: が(ga) ざ(za) だ(da) ば(ba) dan semi-suara ぱ(pa). Tambahan tanda ゛ atau ゜.',
    combo:   'Kombinasi: きゃ(kya) しゃ(sha) ちゃ(cha) dll. Huruf kecil や ゆ よ ditempel ke konsonan.',
  }
  const groups = [...new Set(DATA[sec].map(h => h.group))]
  return (
    <div>
      <InfoBox color={c} text="Klik kartu untuk flip — lihat bacaan romaji. Klik lagi untuk balik. Ucapkan keras saat klik!" />
      <SegBtns items={LABELS} active={sec} onChange={setSec} c={c} />
      <p style={{ fontSize:13, color:'#8890a4', marginBottom:20 }}>{DESCS[sec]}</p>
      {groups.map(g => (
        <div key={g} style={{ marginBottom:22 }}>
          <div style={{ fontSize:11, color:c, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>BARIS {g}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {DATA[sec].filter(h => h.group===g).map(h => <FlipCard key={h.char} char={h.char} romaji={h.romaji} color={c} />)}
          </div>
        </div>
      ))}
      <TipBox color={c} title="Urutan Belajar" text="あ→か→さ→た→な→は→ま→や→ら→わ→ん lalu dakuten lalu kombinasi. 5 huruf/hari = selesai 2 minggu. Tulis sambil ucapkan!" />
    </div>
  )
}

// ── KATAKANA ──────────────────────────────────────────────────────────────────
function KatakanaLearn({ c }) {
  const [sec, setSec] = useState('base')
  const DATA   = { base:KATAKANA_BASE, dakuten:KATAKANA_DAKUTEN, combo:KATAKANA_COMBO }
  const LABELS = { base:'46 Dasar', dakuten:'+ Dakuten', combo:'+ Kombinasi' }
  const DESCS  = {
    base:    'Bunyi identik Hiragana, bentuk berbeda. Dipakai untuk kata serapan asing & nama orang asing.',
    dakuten: 'Versi bersuara: ガ ザ ダ バ dan semi-suara パ.',
    combo:   'キャ シャ チャ dll — sangat sering di kata serapan Barat.',
  }
  const groups = [...new Set(DATA[sec].map(k => k.group))]
  return (
    <div>
      <InfoBox color={c} text="Contoh kata: テレビ(TV) コーヒー(kopi) スマートフォン(smartphone) アイスクリーム(es krim) インドネシア(Indonesia)" />
      <SegBtns items={LABELS} active={sec} onChange={setSec} c={c} />
      <p style={{ fontSize:13, color:'#8890a4', marginBottom:20 }}>{DESCS[sec]}</p>
      {groups.map(g => (
        <div key={g} style={{ marginBottom:22 }}>
          <div style={{ fontSize:11, color:c, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>BARIS {g}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {DATA[sec].filter(k => k.group===g).map(k => <FlipCard key={k.char} char={k.char} romaji={k.romaji} color={c} />)}
          </div>
        </div>
      ))}
      <TipBox color={c} title="Tips Cepat" text="Setelah hafal Hiragana, Katakana lebih cepat (bunyi sama). Coba baca nama produk/merek di kemasan Jepang tiap hari!" />
    </div>
  )
}

// ── VOCABULARY ────────────────────────────────────────────────────────────────
const VOCAB_CATS = {
  greetings:  '👋 Sapaan', numbers:'🔢 Angka', days:'📅 Hari & Bulan',
  time:'⏰ Waktu', colors:'🎨 Warna', family:'👨‍👩‍👧 Keluarga',
  food:'🍜 Makanan', adjectives:'✨ Kata Sifat', verbs:'⚡ Kata Kerja',
  body:'🫀 Tubuh', places:'📍 Tempat', weather:'🌤️ Cuaca', transport:'🚆 Transportasi',
}
function VocabLearn({ c }) {
  const [cat, setCat] = useState('greetings')
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:20 }}>
        {Object.entries(VOCAB_CATS).map(([k,label]) => (
          <button key={k} onClick={()=>setCat(k)} style={{ padding:'6px 13px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:cat===k?c:'transparent', color:cat===k?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{label}</button>
        ))}
      </div>
      {cat==='numbers' && (
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'14px 16px', marginBottom:14 }}>
          <div style={{ fontSize:13, fontWeight:600, color:c, marginBottom:8 }}>📐 Sistem Angka Jepang (WAJIB pahami pola ini!)</div>
          <div style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:2 }}>
            <b style={{color:'#f4a261'}}>Pola dasar:</b> Gabungkan puluhan + satuan<br/>
            <code style={{color:'#2a9d8f'}}>11 = じゅう(10) + いち(1) = じゅういち</code><br/>
            <code style={{color:'#2a9d8f'}}>25 = に(2)×じゅう(10) + ご(5) = にじゅうご</code><br/>
            <code style={{color:'#2a9d8f'}}>135 = ひゃく + さんじゅう + ご = ひゃくさんじゅうご</code><br/>
            <span style={{color:'#e63946', fontSize:12}}>⚠️ Tidak beraturan: 300=さんびゃく · 600=ろっぴゃく · 800=はっぴゃく · 3000=さんぜん</span>
          </div>
        </div>
      )}
      <InfoBox color={c} text="Klik kartu untuk lihat arti. Klik 🔊 untuk dengar pengucapan asli." />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(172px,1fr))', gap:10, marginTop:12 }}>
        {(VOCAB[cat]||[]).map((v,i) => <VocabCard key={i} item={v} color={c} onSpeak={speak} />)}
      </div>
    </div>
  )
}

// ── GRAMMAR ───────────────────────────────────────────────────────────────────
function GrammarLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const sec = GRAMMAR[idx]
  return (
    <div>
      {/* Section tabs */}
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:20 }}>
        {GRAMMAR.map((g,i) => (
          <button key={g.id} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?c:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{g.icon} {g.title}</button>
        ))}
      </div>

      {/* Section intro */}
      {sec.intro && (
        <div style={{ background:`${c}12`, border:`1px solid ${c}28`, borderRadius:10, padding:'12px 16px', marginBottom:18, fontSize:13, color:'rgba(255,255,255,0.75)', lineHeight:1.7 }}>
          💡 {sec.intro}
        </div>
      )}

      {/* Items */}
      <div style={{ display:'grid', gap:10 }}>
        {sec.items.map((item,i) => (
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:10, padding:'14px 16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8, gap:12 }}>
              <span style={{ fontSize:14, fontWeight:700, color:c, lineHeight:1.4 }}>{item.term}</span>
              <span style={{ fontSize:11, color:'rgba(255,255,255,0.4)', flexShrink:0, textAlign:'right', maxWidth:200, lineHeight:1.4 }}>{item.desc}</span>
            </div>
            {item.ex && (
              <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:8, padding:'10px 14px', borderLeft:`3px solid ${c}60`, cursor:'pointer', marginBottom:8 }} onClick={()=>speak(item.ex)}>
                <div style={{ fontSize:16, fontFamily:'"Noto Serif JP",serif', marginBottom:5, lineHeight:1.5 }}>{item.ex} <span style={{ fontSize:11, color:c }}>🔊</span></div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)' }}>→ {item.tr}</div>
              </div>
            )}
            {item.tip && (
              <div style={{ fontSize:12, color:'#f4a261', lineHeight:1.65, background:'rgba(244,162,97,0.08)', borderRadius:6, padding:'8px 10px' }}>
                💡 {item.tip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── KANJI ─────────────────────────────────────────────────────────────────────
function KanjiLearn({ c }) {
  const [q, setQ] = useState('')
  const filtered = KANJI_N5.filter(k =>
    k.k.includes(q) || k.m.toLowerCase().includes(q.toLowerCase()) ||
    k.on.includes(q) || k.kun.includes(q)
  )
  return (
    <div>
      <InfoBox color={c} text="Klik kartu untuk lihat arti, on-yomi, kun-yomi, dan contoh kata. Target: 5 kanji per hari!" />
      <input placeholder="Cari kanji, arti, atau cara baca…" value={q} onChange={e=>setQ(e.target.value)}
        style={{ width:'100%', maxWidth:300, padding:'9px 14px', borderRadius:8, fontSize:13, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#f0ece4', outline:'none', marginBottom:20, fontFamily:'"DM Sans",sans-serif' }} />
      <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
        {filtered.map((k,i) => <KanjiCard key={i} kanji={k} />)}
      </div>
      {!filtered.length && <p style={{ color:'#8890a4', textAlign:'center', marginTop:24 }}>Tidak ditemukan.</p>}
      <TipBox color={c} title="Strategi Hafal Kanji" text="1) Lihat bentuknya, bayangkan makna visualnya. 2) Pelajari kata yang menggunakannya. 3) Tulis 5x sambil ucapkan. 4) Review keesokan harinya. Metode spaced repetition = paling efektif!" />
    </div>
  )
}

// ── CONVERSATION ──────────────────────────────────────────────────────────────
function ConversationLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const cv = CONVERSATION[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:18 }}>
        {CONVERSATION.map((cv2,i) => (
          <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?cv2.color:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{cv2.icon} {cv2.situation}</button>
        ))}
      </div>
      <InfoBox color={cv.color} text="Klik 🔊 untuk dengar pengucapan asli. Latih shadowing: dengar → tirukan langsung dengan keras tanpa jeda!" />
      <div style={{ display:'grid', gap:10, marginTop:12 }}>
        {cv.phrases.map((p,i) => (
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', borderLeft:`3px solid ${cv.color}`, borderRadius:'0 10px 10px 0', padding:'14px 16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div>
                <div style={{ fontSize:18, fontFamily:'"Noto Serif JP",serif', marginBottom:4 }}>{p.jp}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:5 }}>{p.romaji}</div>
                <div style={{ fontSize:13, color:cv.color, fontWeight:500 }}>{p.id}</div>
              </div>
              <button onClick={()=>speak(p.jp)} style={{ background:'transparent', border:'none', fontSize:18, cursor:'pointer', color:cv.color, flexShrink:0, paddingLeft:12 }}>🔊</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── BUDAYA ────────────────────────────────────────────────────────────────────
function BudayaLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const sec = BUDAYA[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:18 }}>
        {BUDAYA.map((b,i) => <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?c:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{b.icon} {b.title}</button>)}
      </div>
      <InfoBox color={c} text="Memahami budaya kerja Jepang sama pentingnya dengan bahasa. Ini kunci sukses bekerja di Jepang!" />
      <div style={{ display:'grid', gap:10 }}>
        {sec.items.map((item,i) => (
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', borderLeft:`3px solid ${c}`, borderRadius:'0 10px 10px 0', padding:'14px 16px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:5 }}>
              <span style={{ fontSize:18, fontFamily:'"Noto Serif JP",serif' }}>{item.jp}</span>
              <button onClick={()=>speak(item.jp)} style={{ background:'transparent', border:'none', fontSize:14, cursor:'pointer', color:c }}>🔊</button>
            </div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:4 }}>{item.romaji}</div>
            <div style={{ fontSize:13, fontWeight:500, marginBottom:item.tip?7:0 }}>{item.id}</div>
            {item.tip && <div style={{ fontSize:12, color:'#f4a261', lineHeight:1.65, background:'rgba(244,162,97,0.08)', borderRadius:6, padding:'7px 10px' }}>💡 {item.tip}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── BAHASA KERJA ──────────────────────────────────────────────────────────────
function BahasaKerjaLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const sec = BAHASA_KERJA[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:18 }}>
        {BAHASA_KERJA.map((b,i) => <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?b.color:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{b.icon} {b.title}</button>)}
      </div>
      <InfoBox color={sec.color} text="Hafalkan bagian Keselamatan Kerja terlebih dahulu — ini yang paling penting saat bekerja di pabrik!" />
      <div style={{ display:'grid', gap:10 }}>
        {sec.items.map((item,i) => (
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${sec.color}20`, borderRadius:10, padding:'14px 16px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
              <span style={{ fontSize:17, fontFamily:'"Noto Serif JP",serif' }}>{item.jp}</span>
              <button onClick={()=>speak(item.jp)} style={{ background:'transparent', border:'none', fontSize:14, cursor:'pointer', color:sec.color }}>🔊</button>
            </div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:4 }}>{item.romaji}</div>
            <div style={{ fontSize:13, color:sec.color, fontWeight:500, marginBottom:item.tip?6:0 }}>{item.id}</div>
            {item.tip && <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', lineHeight:1.6 }}>💡 {item.tip}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── COUNTER ───────────────────────────────────────────────────────────────────
function CounterLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const cnt = COUNTERS[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:18 }}>
        {COUNTERS.map((ct,i) => <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?c:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{ct.counter}</button>)}
      </div>
      <div style={{ background:`${c}15`, border:`1px solid ${c}30`, borderRadius:10, padding:'14px 18px', marginBottom:18 }}>
        <div style={{ fontSize:18, color:c, fontWeight:700, fontFamily:'"Noto Serif JP",serif', marginBottom:4 }}>{cnt.counter}</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.65)' }}>{cnt.use}</div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(120px,1fr))', gap:10 }}>
        {cnt.examples.map((ex,i) => (
          <div key={i} onClick={()=>speak(ex.jp)} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'14px', cursor:'pointer', textAlign:'center', transition:'border-color 0.2s' }}
            onMouseEnter={e=>e.currentTarget.style.borderColor=c+'66'}
            onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.3)', marginBottom:4 }}>{ex.n}</div>
            <div style={{ fontSize:22, fontFamily:'"Noto Serif JP",serif', marginBottom:4 }}>{ex.jp}</div>
            <div style={{ fontSize:11, color:c }}>{ex.romaji}</div>
            {ex.note && <div style={{ fontSize:9, color:'rgba(255,255,255,0.3)', marginTop:3 }}>{ex.note}</div>}
          </div>
        ))}
      </div>
      <TipBox color={c} title="Tips" text="Mulai hafal 〜つ (hitotsu~too) — bisa untuk benda apapun. Perhatikan perubahan bunyi: 1本=いっぽん 3本=さんぼん 6本=ろっぽん 8本=はっぽん." />
    </div>
  )
}

// ── VERB ADVANCED ─────────────────────────────────────────────────────────────
function VerbAdvancedLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const verb = VERB_ADVANCED[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:18 }}>
        {VERB_ADVANCED.map((v,i) => <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?c:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{v.icon} {v.title}</button>)}
      </div>
      <InfoBox color={c} text={verb.desc} />
      <div style={{ fontSize:12, color:c, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:10 }}>Aturan</div>
      <div style={{ display:'grid', gap:8, marginBottom:22 }}>
        {verb.rules.map((r,i) => (
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:9, padding:'12px 14px' }}>
            <div style={{ fontSize:12, color:c, fontWeight:600, marginBottom:3 }}>{r.group}</div>
            <div style={{ fontSize:13, color:'rgba(255,255,255,0.7)', marginBottom:6 }}>{r.rule}</div>
            <div style={{ fontSize:13, fontFamily:'"Noto Serif JP",serif', background:'rgba(255,255,255,0.05)', borderRadius:6, padding:'6px 10px' }}>{r.example}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize:12, color:c, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:10 }}>Pola Penggunaan</div>
      <div style={{ display:'grid', gap:8 }}>
        {verb.patterns.map((p,i) => (
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${c}22`, borderRadius:9, padding:'12px 14px' }}>
            <div style={{ fontSize:13, color:c, fontWeight:600, marginBottom:3 }}>{p.pattern}</div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginBottom:6 }}>{p.use}</div>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ fontSize:16, fontFamily:'"Noto Serif JP",serif' }}>{p.ex}</span>
              <button onClick={()=>speak(p.ex)} style={{ background:'transparent', border:'none', fontSize:13, cursor:'pointer', color:c }}>🔊</button>
              <span style={{ fontSize:12, color:'rgba(255,255,255,0.45)' }}>= {p.tr}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── JLPT INFO ─────────────────────────────────────────────────────────────────
function JlptInfoLearn({ c }) {
  return (
    <div>
      <InfoBox color={c} text="Pelajari info JLPT di sini lalu gunakan tab Quiz untuk latihan soal format N5!" />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:14, marginBottom:24 }}>
        {[{icon:'📖',title:'Moji-Goi',desc:'Kanji & Kosakata',count:'25 menit',color:'#e63946'},{icon:'📝',title:'Bunpou-Dokkai',desc:'Grammar & Reading',count:'50 menit',color:'#457b9d'},{icon:'🎧',title:'Chokai',desc:'Listening',count:'30 menit',color:'#2a9d8f'}].map((item,i) => (
          <div key={i} style={{ background:`${item.color}15`, border:`1px solid ${item.color}30`, borderRadius:12, padding:'18px' }}>
            <div style={{ fontSize:28, marginBottom:8 }}>{item.icon}</div>
            <div style={{ fontSize:15, fontWeight:600, marginBottom:4 }}>{item.title}</div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginBottom:8 }}>{item.desc}</div>
            <div style={{ fontSize:11, color:item.color, fontWeight:600 }}>{item.count}</div>
          </div>
        ))}
      </div>
      <div style={{ background:'rgba(230,57,70,0.1)', border:'1px solid rgba(230,57,70,0.2)', borderRadius:10, padding:'16px 18px' }}>
        <div style={{ fontSize:13, fontWeight:600, color:'#e63946', marginBottom:8 }}>📋 Info JLPT N5</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.65)', lineHeight:1.9 }}>
          • Ujian 2x setahun: Juli & Desember<br/>• Total waktu: ~105 menit<br/>
          • Skor lulus: min 80/180 (tiap seksi min 19 poin)<br/>
          • Target: ~800 kosakata, ~100 kanji, ~80 poin grammar<br/>
          • Estimasi belajar: 150–300 jam (3–6 bulan konsisten)<br/>
          • Info & daftar: <strong style={{ color:'#e63946' }}>jlpt.jp</strong>
        </div>
      </div>
    </div>
  )
}

// ── QUIZ ──────────────────────────────────────────────────────────────────────
function QuizContent({ mod, c, progress, onSaveProgress }) {
  const [qs,setQs]       = useState(()=>buildQuiz(mod.id,10))
  const [idx,setIdx]     = useState(0)
  const [sel,setSel]     = useState(null)
  const [score,setScore] = useState(0)
  const [done,setDone]   = useState(false)

  const restart = useCallback(()=>{
    setQs(buildQuiz(mod.id,10));setIdx(0);setSel(null);setScore(0);setDone(false)
  },[mod.id])

  const answer = (ch) => {
    if (sel!==null) return
    setSel(ch)
    const ok = ch===qs[idx].answer
    const ns = ok ? score+1 : score
    if (ok) setScore(ns)
    setTimeout(()=>{
      if (idx+1>=qs.length) {
        setDone(true)
        const pct = Math.round((ns/qs.length)*100)
        onSaveProgress(mod.id, pct, Math.round(pct*0.5))
      } else { setIdx(i=>i+1); setSel(null) }
    }, 950)
  }

  if (!qs.length) return <p style={{ color:'#8890a4', textAlign:'center', marginTop:40 }}>Quiz tidak tersedia untuk modul ini.</p>
  if (done) return <QuizResult score={score} total={qs.length} c={c} onRetry={restart} />

  const q = qs[idx]
  const isLong = (q.q||'').length > 8

  return (
    <div style={{ maxWidth:500, margin:'0 auto' }}>
      <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:8 }}>
        <span>Soal {idx+1} / {qs.length}</span>
        <span style={{ color:c, fontWeight:600 }}>✦ {score} benar</span>
      </div>
      <ProgressBar value={idx+1} max={qs.length} color={c} height={4} />
      <div style={{ textAlign:'center', margin:'30px 0 26px' }}>
        <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', marginBottom:12, letterSpacing:'0.04em' }}>{q.label}</div>
        <div style={{ fontSize:isLong?15:64, fontFamily:'"Noto Serif JP",serif', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14, padding:isLong?'16px 20px':'22px 32px', display:'inline-block', minWidth:120, lineHeight:1.5 }}>
          {q.q}
        </div>
        <div style={{ marginTop:12 }}>
          <button onClick={()=>speak(q.q)} style={{ background:'transparent', border:'none', color:c, cursor:'pointer', fontSize:13 }}>🔊 Dengarkan</button>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
        {q.choices.map((ch,i) => {
          const isRight=ch===q.answer, isSel=ch===sel
          let bg='rgba(255,255,255,0.05)', bor='rgba(255,255,255,0.09)'
          if (sel!==null) {
            if (isRight) { bg='rgba(42,157,143,0.25)'; bor='#2a9d8f' }
            else if (isSel) { bg='rgba(230,57,70,0.25)'; bor='#e63946' }
          }
          return (
            <button key={i} onClick={()=>answer(ch)} style={{ background:bg, border:`1px solid ${bor}`, color:'#f0ece4', borderRadius:10, padding:'14px 10px', cursor:sel?'default':'pointer', fontSize:ch.length>14?11:15, fontFamily:'"Noto Serif JP",serif', transition:'all 0.15s', textAlign:'center', lineHeight:1.4 }}>
              {ch}
              {sel!==null && isRight && <span style={{ display:'block', fontSize:10, color:'#2a9d8f', marginTop:4 }}>✓ Benar</span>}
              {sel!==null && isSel && !isRight && <span style={{ display:'block', fontSize:10, color:'#e63946', marginTop:4 }}>✗ Salah</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function QuizResult({ score, total, c, onRetry }) {
  const pct = Math.round((score/total)*100)
  const [emoji,msg] = pct>=90?['🏆','Luar Biasa!']:pct>=70?['⭐','Bagus Sekali!']:pct>=50?['👍','Lumayan!']:['📚','Terus Berlatih!']
  return (
    <div style={{ maxWidth:400, margin:'0 auto', textAlign:'center', padding:'32px 0' }}>
      <div style={{ fontSize:60, marginBottom:16 }}>{emoji}</div>
      <h2 style={{ fontSize:24, fontWeight:700, margin:'0 0 8px' }}>{msg}</h2>
      <p style={{ color:'rgba(255,255,255,0.5)', margin:'0 0 26px' }}>Benar <strong style={{ color:c }}>{score} dari {total}</strong> soal</p>
      <div style={{ background:`${c}20`, border:`1px solid ${c}40`, borderRadius:14, padding:'22px', marginBottom:26 }}>
        <div style={{ fontSize:42, fontWeight:700, color:c }}>{pct}%</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.5)', marginTop:4 }}>{pct>=80?'🌟 XP tersimpan!':'Coba lagi untuk XP lebih tinggi'}</div>
      </div>
      <button onClick={onRetry} style={{ background:c, border:'none', color:'#fff', borderRadius:10, padding:'12px 28px', cursor:'pointer', fontSize:14, fontWeight:500, fontFamily:'"DM Sans",sans-serif' }}>Coba Lagi 🔄</button>
    </div>
  )
}

// ── SHARED ───────────────────────────────────────────────────────────────────
function InfoBox({ color, text }) {
  return <div style={{ background:color+'12', border:`1px solid ${color}28`, borderRadius:10, padding:'11px 14px', marginBottom:18, fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.65 }}>ℹ️ {text}</div>
}
function TipBox({ color, title, text }) {
  return <div style={{ marginTop:22, background:color+'12', border:`1px solid ${color}28`, borderRadius:10, padding:'14px 16px', fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.7 }}><strong style={{ color }}>{title}:</strong> {text}</div>
}
function SegBtns({ items, active, onChange, c }) {
  return (
    <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:18 }}>
      {Object.entries(items).map(([k,v]) => (
        <button key={k} onClick={()=>onChange(k)} style={{ padding:'7px 16px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:active===k?c:'transparent', color:active===k?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s' }}>{v}</button>
      ))}
    </div>
  )
}
