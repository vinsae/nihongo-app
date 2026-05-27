// components/ModulePage.jsx
import { useState, useCallback } from 'react'
import {
  HIRAGANA_BASE, HIRAGANA_DAKUTEN, HIRAGANA_COMBO,
  KATAKANA_BASE, KATAKANA_DAKUTEN, KATAKANA_COMBO,
  VOCAB, KANJI_N5, GRAMMAR, CONVERSATION,
  BUDAYA, BAHASA_KERJA, COUNTERS, VERB_ADVANCED, JLPT_N5_DRILL,
} from '../data.js'
import { buildQuiz } from '../utils/quiz.js'
import { ProgressBar, FlipCard, KanjiCard, VocabCard, Btn } from './UI.jsx'

function speak(text) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'ja-JP'; u.rate = 0.85
  window.speechSynthesis.speak(u)
}

export default function ModulePage({ mod, progress, onBack, onSaveProgress }) {
  const [tab, setTab] = useState('learn')
  const c = mod.color
  const hasQuiz = ['hiragana','katakana','kanji','vocabulary','jlpt-n5'].includes(mod.id)

  return (
    <div style={{ minHeight:'100vh', background:'#0b0f1a', color:'#f0ece4', fontFamily:'"DM Sans",sans-serif' }}>
      <header style={{ borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'14px 24px', display:'flex', alignItems:'center', gap:16, position:'sticky', top:0, background:'#0b0f1a', zIndex:10 }}>
        <button onClick={onBack} style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.09)', color:'#f0ece4', borderRadius:8, padding:'7px 14px', cursor:'pointer', fontSize:13 }}>← Kembali</button>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:16, fontWeight:600 }}>{mod.title} <span style={{ fontFamily:'"Noto Serif JP",serif', color:'rgba(255,255,255,0.35)', fontSize:14 }}>{mod.sub}</span></div>
          <div style={{ fontSize:11, color:'#8890a4' }}>{mod.level} · {mod.total} item</div>
        </div>
      </header>

      <div style={{ maxWidth:860, margin:'0 auto', padding:'24px' }}>
        <div style={{ display:'flex', gap:4, marginBottom:28, background:'rgba(255,255,255,0.04)', borderRadius:10, padding:4, width:'fit-content' }}>
          <Btn variant={tab==='learn'?'tab-on':'tab-off'} color={c} onClick={()=>setTab('learn')}>📖 Belajar</Btn>
          {hasQuiz && <Btn variant={tab==='quiz'?'tab-on':'tab-off'} color={c} onClick={()=>setTab('quiz')}>🎯 Quiz</Btn>}
        </div>
        {tab==='learn' && <LearnContent mod={mod} c={c} />}
        {tab==='quiz'  && <QuizContent  mod={mod} c={c} progress={progress} onSaveProgress={onSaveProgress} />}
      </div>
    </div>
  )
}

// ── ROUTER LEARN ──────────────────────────────────────────────────────────────
function LearnContent({ mod, c }) {
  const map = {
    hiragana:     <HiraganaLearn c={c} />,
    katakana:     <KatakanaLearn c={c} />,
    vocabulary:   <VocabLearn c={c} />,
    grammar:      <GrammarLearn c={c} />,
    kanji:        <KanjiLearn c={c} />,
    conversation: <ConversationLearn c={c} />,
    budaya:       <BudayaLearn c={c} />,
    'bahasa-kerja': <BahasaKerjaLearn c={c} />,
    counter:      <CounterLearn c={c} />,
    'verb-advanced': <VerbAdvancedLearn c={c} />,
    'jlpt-n5':    <JlptDrillLearn c={c} />,
  }
  return map[mod.id] || null
}

// ── HIRAGANA ──────────────────────────────────────────────────────────────────
function HiraganaLearn({ c }) {
  const [sec, setSec] = useState('base')
  const secs = { base:HIRAGANA_BASE, dakuten:HIRAGANA_DAKUTEN, combo:HIRAGANA_COMBO }
  const labels = { base:'46 Dasar', dakuten:'+ Dakuten', combo:'+ Kombinasi' }
  const descs = {
    base:'あ い う え お — huruf dasar. Hafal baris per baris.',
    dakuten:'Huruf bersuara (が ざ だ ば) dan semi-suara (ぱ).',
    combo:'Dua huruf digabung: きゃ (kya), しゃ (sha), dll.',
  }
  const groups = [...new Set(secs[sec].map(h=>h.group))]
  return (
    <div>
      <InfoBox color={c} text="Klik kartu untuk flip — lihat bacaan romaji. Klik lagi untuk balik." />
      <SegmentBtns items={labels} active={sec} onChange={setSec} c={c} />
      <p style={{ fontSize:13, color:'#8890a4', marginBottom:20 }}>{descs[sec]}</p>
      {groups.map(g=>(
        <div key={g} style={{ marginBottom:20 }}>
          <div style={{ fontSize:11, color:c, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>baris {g}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {secs[sec].filter(h=>h.group===g).map(h=><FlipCard key={h.char} char={h.char} romaji={h.romaji} color={c}/>)}
          </div>
        </div>
      ))}
      <TipBox color={c} title="Tips Hiragana" text="Mulai baris あ (a i u e o) lalu ka, sa, ta, na, ha, ma, ya, ra, wa, n. Tulis berulang sambil ucapkan bunyinya. Target 5 huruf per hari." />
    </div>
  )
}

// ── KATAKANA ──────────────────────────────────────────────────────────────────
function KatakanaLearn({ c }) {
  const [sec, setSec] = useState('base')
  const secs = { base:KATAKANA_BASE, dakuten:KATAKANA_DAKUTEN, combo:KATAKANA_COMBO }
  const labels = { base:'46 Dasar', dakuten:'+ Dakuten', combo:'+ Kombinasi' }
  const descs = {
    base:'Bunyi sama Hiragana, bentuk berbeda. Untuk kata serapan & nama asing.',
    dakuten:'Versi bersuara: ガ ザ ダ バ パ dan seterusnya.',
    combo:'キャ シャ チャ dll — sering di kata serapan asing.',
  }
  const groups = [...new Set(secs[sec].map(k=>k.group))]
  return (
    <div>
      <InfoBox color={c} text="Contoh: テレビ (TV), コーヒー (kopi), スマートフォン (smartphone), レストラン (restoran)" />
      <SegmentBtns items={labels} active={sec} onChange={setSec} c={c} />
      <p style={{ fontSize:13, color:'#8890a4', marginBottom:20 }}>{descs[sec]}</p>
      {groups.map(g=>(
        <div key={g} style={{ marginBottom:20 }}>
          <div style={{ fontSize:11, color:c, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>baris {g}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {secs[sec].filter(k=>k.group===g).map(k=><FlipCard key={k.char} char={k.char} romaji={k.romaji} color={c}/>)}
          </div>
        </div>
      ))}
      <TipBox color={c} title="Tips Katakana" text="Setelah hafal Hiragana, Katakana jauh lebih mudah karena bunyinya sama. Coba baca nama-nama di kemasan produk Jepang untuk latihan." />
    </div>
  )
}

// ── VOCABULARY ────────────────────────────────────────────────────────────────
const VOCAB_CATS = { greetings:'👋 Sapaan', numbers:'🔢 Angka', colors:'🎨 Warna', family:'👨‍👩‍👧 Keluarga', food:'🍜 Makanan', time:'⏰ Waktu', verbs:'⚡ Kata Kerja', body:'🫀 Tubuh', places:'📍 Tempat' }

function VocabLearn({ c }) {
  const [cat, setCat] = useState('greetings')
  return (
    <div>
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
        {Object.entries(VOCAB_CATS).map(([k,label])=>(
          <button key={k} onClick={()=>setCat(k)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:cat===k?c:'transparent', color:cat===k?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{label}</button>
        ))}
      </div>
      <InfoBox color={c} text="Klik kartu untuk lihat arti. Klik 🔊 untuk dengar pengucapan." />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(178px,1fr))', gap:10, marginTop:16 }}>
        {(VOCAB[cat]||[]).map((v,i)=><VocabCard key={i} item={v} color={c} onSpeak={speak}/>)}
      </div>
    </div>
  )
}

// ── GRAMMAR ───────────────────────────────────────────────────────────────────
function GrammarLearn({ c }) {
  const [idx, setIdx] = useState(0)
  return (
    <div>
      <SegmentBtns items={Object.fromEntries(GRAMMAR.map(g=>[g.id, g.icon+' '+g.title]))} active={GRAMMAR[idx].id} onChange={v=>setIdx(GRAMMAR.findIndex(g=>g.id===v))} c={c} />
      <div style={{ display:'grid', gap:10, marginTop:4 }}>
        {GRAMMAR[idx].items.map((item,i)=>(
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:10, padding:'14px 16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8, gap:12 }}>
              <span style={{ fontSize:14, fontWeight:600, color:c }}>{item.term}</span>
              <span style={{ fontSize:12, color:'rgba(255,255,255,0.4)', flexShrink:0 }}>{item.desc}</span>
            </div>
            {item.ex && (
              <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:8, padding:'10px 14px', borderLeft:`2px solid ${c}60` }}>
                <div style={{ fontSize:16, fontFamily:'"Noto Serif JP",serif', marginBottom:4, cursor:'pointer' }} onClick={()=>speak(item.ex)}>{item.ex} <span style={{ fontSize:12, color:c }}>🔊</span></div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)' }}>{item.tr}</div>
              </div>
            )}
            {item.tip && <div style={{ fontSize:12, color:'#f4a261', marginTop:8, opacity:0.85 }}>💡 {item.tip}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── KANJI ─────────────────────────────────────────────────────────────────────
function KanjiLearn({ c }) {
  const [search, setSearch] = useState('')
  const filtered = KANJI_N5.filter(k=>k.k.includes(search)||k.m.toLowerCase().includes(search.toLowerCase())||k.on.includes(search)||k.kun.includes(search))
  return (
    <div>
      <InfoBox color={c} text="Klik kartu untuk melihat arti dan cara baca. Target hafal 5 kanji per hari!" />
      <input placeholder="Cari kanji, arti, atau bacaan…" value={search} onChange={e=>setSearch(e.target.value)} style={{ width:'100%', maxWidth:300, padding:'9px 14px', borderRadius:8, fontSize:13, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#f0ece4', outline:'none', marginBottom:20, fontFamily:'"DM Sans",sans-serif' }} />
      <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
        {filtered.map((k,i)=><KanjiCard key={i} kanji={k}/>)}
      </div>
      {filtered.length===0 && <p style={{ color:'#8890a4', fontSize:14, textAlign:'center', marginTop:24 }}>Tidak ditemukan.</p>}
      <TipBox color={c} title="Tips Kanji" text="Fokus pada makna dulu. Visualisasikan: 山 mirip puncak gunung, 川 mirip aliran sungai. Tulis berulang sambil ucapkan artinya." />
    </div>
  )
}

// ── CONVERSATION ──────────────────────────────────────────────────────────────
function ConversationLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const conv = CONVERSATION[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
        {CONVERSATION.map((cv,i)=>(
          <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?cv.color:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{cv.icon} {cv.situation}</button>
        ))}
      </div>
      <InfoBox color={conv.color} text="Klik 🔊 untuk mendengar. Latih dengan shadowing: dengar lalu tirukan langsung." />
      <div style={{ display:'grid', gap:10, marginTop:16 }}>
        {conv.phrases.map((p,i)=>(
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', borderLeft:`3px solid ${conv.color}`, borderRadius:'0 10px 10px 0', padding:'14px 16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div>
                <div style={{ fontSize:18, fontFamily:'"Noto Serif JP",serif', color:'#f0ece4', marginBottom:4 }}>{p.jp}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:5 }}>{p.romaji}</div>
                <div style={{ fontSize:13, color:conv.color, fontWeight:500 }}>{p.id}</div>
              </div>
              <button onClick={()=>speak(p.jp)} style={{ background:'transparent', border:'none', fontSize:18, cursor:'pointer', color:conv.color, flexShrink:0, paddingLeft:12 }} title="Dengarkan">🔊</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── BUDAYA JEPANG ─────────────────────────────────────────────────────────────
function BudayaLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const sec = BUDAYA[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
        {BUDAYA.map((b,i)=>(
          <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?c:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{b.icon} {b.title}</button>
        ))}
      </div>
      <InfoBox color={c} text="Budaya kerja Jepang sangat berbeda. Memahami ini adalah kunci sukses bekerja di Jepang!" />
      <div style={{ display:'grid', gap:10, marginTop:4 }}>
        {sec.items.map((item,i)=>(
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderLeft:`3px solid ${c}`, borderRadius:'0 10px 10px 0', padding:'14px 16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:12 }}>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:6 }}>
                  <span style={{ fontSize:18, fontFamily:'"Noto Serif JP",serif', color:'#f0ece4' }}>{item.jp}</span>
                  <button onClick={()=>speak(item.jp.replace(/[（）()「」【】]/g,'').split(' ')[0])} style={{ background:'transparent', border:'none', fontSize:14, cursor:'pointer', color:c }}>🔊</button>
                </div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:4 }}>{item.romaji}</div>
                <div style={{ fontSize:13, color:'#f0ece4', fontWeight:500, marginBottom:item.tip?6:0 }}>{item.id}</div>
                {item.tip && <div style={{ fontSize:12, color:'#f4a261', lineHeight:1.6 }}>💡 {item.tip}</div>}
              </div>
            </div>
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
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
        {BAHASA_KERJA.map((b,i)=>(
          <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?b.color:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{b.icon} {b.title}</button>
        ))}
      </div>
      <InfoBox color={sec.color} text="Kosakata ini sangat penting di lapangan kerja Jepang. Hafalkan terutama bagian Keselamatan Kerja!" />
      <div style={{ display:'grid', gap:10, marginTop:4 }}>
        {sec.items.map((item,i)=>(
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${sec.color}22`, borderRadius:10, padding:'14px 16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                  <span style={{ fontSize:18, fontFamily:'"Noto Serif JP",serif', color:'#f0ece4' }}>{item.jp}</span>
                  <button onClick={()=>speak(item.jp.replace(/[（）()「」【】]/g,'').split('(')[0].trim())} style={{ background:'transparent', border:'none', fontSize:14, cursor:'pointer', color:sec.color }}>🔊</button>
                </div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:4 }}>{item.romaji}</div>
                <div style={{ fontSize:13, color:sec.color, fontWeight:500, marginBottom:item.tip?5:0 }}>{item.id}</div>
                {item.tip && <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', lineHeight:1.6 }}>💡 {item.tip}</div>}
              </div>
            </div>
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
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
        {COUNTERS.map((ct,i)=>(
          <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?c:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{ct.counter}</button>
        ))}
      </div>
      <div style={{ background:`${c}15`, border:`1px solid ${c}30`, borderRadius:10, padding:'14px 18px', marginBottom:20 }}>
        <div style={{ fontSize:18, color:c, fontWeight:700, marginBottom:4, fontFamily:'"Noto Serif JP",serif' }}>{cnt.counter}</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.65)' }}>{cnt.use}</div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))', gap:10 }}>
        {cnt.examples.map((ex,i)=>(
          <div key={i} onClick={()=>speak(ex.jp)} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'14px', cursor:'pointer', textAlign:'center', transition:'all 0.15s' }}
            onMouseEnter={e=>e.currentTarget.style.borderColor=c+'66'}
            onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}
          >
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:4 }}>{ex.n}</div>
            <div style={{ fontSize:22, fontFamily:'"Noto Serif JP",serif', color:'#f0ece4', marginBottom:4 }}>{ex.jp}</div>
            <div style={{ fontSize:11, color:c }}>{ex.romaji}</div>
            {ex.note && <div style={{ fontSize:10, color:'rgba(255,255,255,0.3)', marginTop:3 }}>{ex.note}</div>}
          </div>
        ))}
      </div>
      <TipBox color={c} title="Tips Counter" text="Klik kartu untuk dengar pengucapan. Perhatikan perubahan bunyi saat angka tertentu (1本=いっぽん bukan いちほん). Mulai hafal 〜つ dulu karena bisa untuk benda apapun!" />
    </div>
  )
}

// ── VERB ADVANCED ─────────────────────────────────────────────────────────────
function VerbAdvancedLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const verb = VERB_ADVANCED[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
        {VERB_ADVANCED.map((v,i)=>(
          <button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?c:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{v.icon} {v.title}</button>
        ))}
      </div>
      <InfoBox color={c} text={verb.desc} />

      {/* Rules */}
      <div style={{ marginBottom:20 }}>
        <div style={{ fontSize:12, color:c, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:10 }}>Aturan Pembentukan</div>
        <div style={{ display:'grid', gap:8 }}>
          {verb.rules.map((r,i)=>(
            <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:9, padding:'12px 14px' }}>
              <div style={{ fontSize:12, color:c, fontWeight:600, marginBottom:4 }}>{r.group}</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.7)', marginBottom:4 }}>{r.rule}</div>
              <div style={{ fontSize:13, fontFamily:'"Noto Serif JP",serif', color:'#f0ece4', background:'rgba(255,255,255,0.05)', borderRadius:6, padding:'6px 10px', cursor:'pointer' }} onClick={()=>speak(r.example.split(' → ')[1]?.split(' ')[0]||'')}>{r.example}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Patterns */}
      <div>
        <div style={{ fontSize:12, color:c, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:10 }}>Pola Penggunaan</div>
        <div style={{ display:'grid', gap:8 }}>
          {verb.patterns.map((p,i)=>(
            <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${c}22`, borderRadius:9, padding:'12px 14px' }}>
              <div style={{ fontSize:13, color:c, fontWeight:600, marginBottom:3 }}>{p.pattern}</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginBottom:6 }}>{p.use}</div>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ fontSize:16, fontFamily:'"Noto Serif JP",serif', color:'#f0ece4' }}>{p.ex}</span>
                <button onClick={()=>speak(p.ex)} style={{ background:'transparent', border:'none', fontSize:13, cursor:'pointer', color:c }}>🔊</button>
                <span style={{ fontSize:12, color:'rgba(255,255,255,0.45)' }}>= {p.tr}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── JLPT N5 DRILL LEARN ───────────────────────────────────────────────────────
function JlptDrillLearn({ c }) {
  return (
    <div>
      <InfoBox color={c} text="JLPT N5 adalah level dasar ujian kemampuan bahasa Jepang. Gunakan tab Quiz untuk latihan soal format JLPT!" />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:14, marginTop:8 }}>
        {[
          { icon:'📖', title:'Moji-Goi', desc:'Membaca Kanji & Kosakata', count:'8 soal', color:'#e63946' },
          { icon:'📝', title:'Bunpou', desc:'Tata Bahasa & Partikel', count:'8 soal', color:'#457b9d' },
          { icon:'💬', title:'Goi', desc:'Kosakata Sifat & Umum', count:'8 soal', color:'#2a9d8f' },
        ].map((item,i)=>(
          <div key={i} style={{ background:`${item.color}15`, border:`1px solid ${item.color}30`, borderRadius:12, padding:'18px' }}>
            <div style={{ fontSize:28, marginBottom:8 }}>{item.icon}</div>
            <div style={{ fontSize:15, fontWeight:600, marginBottom:4 }}>{item.title}</div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginBottom:8 }}>{item.desc}</div>
            <div style={{ fontSize:11, color:item.color, fontWeight:600 }}>{item.count}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:24, background:'rgba(230,57,70,0.1)', border:'1px solid rgba(230,57,70,0.2)', borderRadius:10, padding:'16px 18px' }}>
        <div style={{ fontSize:13, fontWeight:600, color:'#e63946', marginBottom:8 }}>📋 Info JLPT N5</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.65)', lineHeight:1.8 }}>
          • Ujian diadakan 2x setahun (Juli & Desember)<br/>
          • Skor lulus: 80/180 poin<br/>
          • Seksi: Moji-Goi (25 mnt), Chokai (30 mnt), Bunpou-Dokkai (50 mnt)<br/>
          • Target kosakata: ~800 kata<br/>
          • Target kanji: ~100 kanji<br/>
          • Daftar di: <span style={{ color:'#e63946' }}>jlpt.jp</span>
        </div>
      </div>
    </div>
  )
}

// ── QUIZ CONTENT ──────────────────────────────────────────────────────────────
function QuizContent({ mod, c, progress, onSaveProgress }) {
  const [questions, setQuestions] = useState(()=>getQuestions(mod.id))
  const [qIdx,setQIdx] = useState(0)
  const [selected,setSelected] = useState(null)
  const [score,setScore] = useState(0)
  const [finished,setFinished] = useState(false)

  const restart = useCallback(()=>{
    setQuestions(getQuestions(mod.id))
    setQIdx(0);setSelected(null);setScore(0);setFinished(false)
  },[mod.id])

  const handleAnswer = (choice) => {
    if (selected!==null) return
    setSelected(choice)
    const correct = choice===questions[qIdx].answer
    const ns = correct ? score+1 : score
    if (correct) setScore(ns)
    setTimeout(()=>{
      if (qIdx+1>=questions.length) {
        setFinished(true)
        const pct = Math.round((ns/questions.length)*100)
        onSaveProgress(mod.id, pct, Math.round(pct*0.5))
      } else {
        setQIdx(i=>i+1); setSelected(null)
      }
    }, 900)
  }

  if (!questions.length) return <p style={{ color:'#8890a4', textAlign:'center', marginTop:40 }}>Quiz tidak tersedia untuk modul ini. Gunakan tab Belajar.</p>
  if (finished) return <QuizResult score={score} total={questions.length} c={c} onRetry={restart}/>

  const q = questions[qIdx]
  const isLong = (q.q||'').length > 6

  return (
    <div style={{ maxWidth:480, margin:'0 auto' }}>
      <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:8 }}>
        <span>Soal {qIdx+1} / {questions.length}</span>
        <span style={{ color:c, fontWeight:600 }}>✦ {score} benar</span>
      </div>
      <ProgressBar value={qIdx+1} max={questions.length} color={c} height={4}/>

      <div style={{ textAlign:'center', margin:'30px 0 26px' }}>
        <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', marginBottom:12, letterSpacing:'0.04em' }}>{q.label}</div>
        <div style={{ fontSize:isLong?18:64, fontFamily:'"Noto Serif JP",serif', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14, padding:isLong?'16px 20px':'22px 32px', display:'inline-block', minWidth:120, color:'#f0ece4', lineHeight:1.3 }}>{q.q}</div>
        <div style={{ marginTop:12 }}>
          <button onClick={()=>speak(q.q)} style={{ background:'transparent', border:'none', color:c, cursor:'pointer', fontSize:13 }}>🔊 Dengarkan</button>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
        {q.choices.map((ch,i)=>{
          const isCorrect=ch===q.answer, isSel=ch===selected
          let bg='rgba(255,255,255,0.05)', bor='rgba(255,255,255,0.09)'
          if (selected!==null) {
            if (isCorrect) { bg='rgba(42,157,143,0.25)'; bor='#2a9d8f' }
            else if (isSel) { bg='rgba(230,57,70,0.25)'; bor='#e63946' }
          }
          return (
            <button key={i} onClick={()=>handleAnswer(ch)} style={{ background:bg, border:`1px solid ${bor}`, color:'#f0ece4', borderRadius:10, padding:'14px 10px', cursor:selected?'default':'pointer', fontSize:ch.length>12?12:16, fontFamily:'"Noto Serif JP",serif', transition:'all 0.15s', textAlign:'center', lineHeight:1.4 }}>
              {ch}
              {selected!==null && isCorrect && <span style={{ display:'block', fontSize:10, color:'#2a9d8f', marginTop:4 }}>✓ Benar</span>}
              {selected!==null && isSel && !isCorrect && <span style={{ display:'block', fontSize:10, color:'#e63946', marginTop:4 }}>✗ Salah</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function getQuestions(moduleId) {
  if (['hiragana','katakana','kanji','vocabulary'].includes(moduleId)) return buildQuiz(moduleId, 10)
  if (moduleId==='jlpt-n5') {
    const all = [...JLPT_N5_DRILL.mojigoi, ...JLPT_N5_DRILL.bunpou, ...JLPT_N5_DRILL.vocabulary]
    return shuffle(all).slice(0,12)
  }
  return []
}

function shuffle(a) {
  const arr=[...a]
  for (let i=arr.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]] }
  return arr
}

function QuizResult({ score, total, c, onRetry }) {
  const pct=Math.round((score/total)*100)
  const emoji=pct>=90?'🏆':pct>=70?'⭐':pct>=50?'👍':'📚'
  const msg=pct>=90?'Luar Biasa!':pct>=70?'Bagus Sekali!':pct>=50?'Lumayan!':'Terus Berlatih!'
  return (
    <div style={{ maxWidth:400, margin:'0 auto', textAlign:'center', padding:'32px 0' }}>
      <div style={{ fontSize:60, marginBottom:16 }}>{emoji}</div>
      <h2 style={{ fontSize:24, fontWeight:700, margin:'0 0 8px' }}>{msg}</h2>
      <p style={{ color:'rgba(255,255,255,0.5)', margin:'0 0 26px' }}>Kamu benar <strong style={{ color:c }}>{score} dari {total}</strong> soal</p>
      <div style={{ background:`${c}20`, border:`1px solid ${c}40`, borderRadius:14, padding:'22px', marginBottom:26 }}>
        <div style={{ fontSize:42, fontWeight:700, color:c }}>{pct}%</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.5)', marginTop:4 }}>{pct>=80?'🌟 XP tersimpan!':'Coba lagi untuk XP lebih tinggi'}</div>
      </div>
      <button onClick={onRetry} style={{ background:c, border:'none', color:'#fff', borderRadius:10, padding:'12px 28px', cursor:'pointer', fontSize:14, fontWeight:500, fontFamily:'"DM Sans",sans-serif' }}>Coba Lagi 🔄</button>
    </div>
  )
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
function InfoBox({ color, text }) {
  return <div style={{ background:color+'12', border:`1px solid ${color}28`, borderRadius:10, padding:'11px 14px', marginBottom:18, fontSize:13, color:'rgba(255,255,255,0.65)', lineHeight:1.6 }}>ℹ️ {text}</div>
}
function TipBox({ color, title, text }) {
  return <div style={{ marginTop:22, background:color+'12', border:`1px solid ${color}28`, borderRadius:10, padding:'14px 16px', fontSize:13, color:'rgba(255,255,255,0.65)', lineHeight:1.7 }}><strong style={{ color }}>{title}:</strong> {text}</div>
}
function SegmentBtns({ items, active, onChange, c }) {
  return (
    <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:18 }}>
      {Object.entries(items).map(([k,v])=>(
        <button key={k} onClick={()=>onChange(k)} style={{ padding:'7px 16px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:active===k?c:'transparent', color:active===k?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s' }}>{v}</button>
      ))}
    </div>
  )
}
