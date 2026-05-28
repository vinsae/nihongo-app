import { useState, useCallback } from 'react'
import {
  HIRAGANA_BASE, HIRAGANA_DAKUTEN, HIRAGANA_COMBO,
  KATAKANA_BASE, KATAKANA_DAKUTEN, KATAKANA_COMBO,
  VOCAB, KANJI_N5, GRAMMAR, CONVERSATION,
  BUDAYA, BAHASA_KERJA, COUNTERS, VERB_ADVANCED, JLPT_N5_DRILL,
  MODULE_INFO, VERBS_GOL1, VERBS_GOL23, DASAR_KOMUNIKASI,
} from '../data.js'
import { buildQuiz, shuffle } from '../utils/quiz.js'
import { ProgressBar, FlipCard, KanjiCard, VocabCard, Btn } from './UI.jsx'

function speak(text) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const clean = text.replace(/[⚠️（）()「」【】★※〜]/g,'').trim().split(/[\s・]/)[0]
  const u = new SpeechSynthesisUtterance(clean)
  u.lang='ja-JP'; u.rate=0.82
  window.speechSynthesis.speak(u)
}

const QUIZ_IDS = ['hiragana-dasar','hiragana-lanjutan','katakana-dasar','katakana-lanjutan',
  'angka','sapaan-dasar','kata-ganti-tanya','waktu-kalender',
  'kosakata-benda','kata-sifat','kata-kerja-gol1','kata-kerja-gol23',
  'partikel-1','partikel-2','pola-kalimat','konjugasi-kk','te-form','pola-lanjutan',
  'kanji-1','kanji-2',
  'conv-perkenalan','conv-sehari','conv-belanja','conv-transport','conv-darurat',
  'jlpt-n5']

// MODULE_INFO fallback untuk modul yang belum ada entrynya
const INFO_FALLBACK = {
  why:'Materi penting untuk penguasaan bahasa Jepang N5.',
  what:['Pelajari konten modul ini dengan teliti','Ucapkan setiap contoh dengan keras'],
  time:'2–4 hari', jlpt:'Terkait dengan materi JLPT N5', tip:'Konsisten 30 menit/hari!', level:'N5', color:'#8338ec',
}
function getInfo(id) { return MODULE_INFO?.[id] || INFO_FALLBACK }

export default function ModulePage({ mod, progress, onBack, onSaveProgress }) {
  const [tab, setTab] = useState('intro')
  const c     = mod.color
  const hasQuiz = QUIZ_IDS.includes(mod.id)
  const isDone  = progress.completedModules?.includes(mod.id)
  const info    = getInfo(mod.id)

  return (
    <div style={{ minHeight:'100vh', background:'#0b0f1a', color:'#f0ece4', fontFamily:'"DM Sans",sans-serif' }}>
      <header style={{ borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'14px 24px', display:'flex', alignItems:'center', gap:14, position:'sticky', top:0, background:'#0b0f1a', zIndex:10 }}>
        <button onClick={onBack} style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.09)', color:'#f0ece4', borderRadius:8, padding:'7px 14px', cursor:'pointer', fontSize:13 }}>← Kembali</button>
        <div style={{ flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ fontSize:11, color:c, background:`${c}20`, borderRadius:4, padding:'2px 8px', fontWeight:600 }}>Step {mod.step}</span>
            <span style={{ fontSize:16, fontWeight:700 }}>{mod.title}</span>
            <span style={{ fontFamily:'"Noto Serif JP",serif', color:'rgba(255,255,255,0.35)', fontSize:13 }}>{mod.sub}</span>
          </div>
        </div>
        {isDone && <div style={{ fontSize:11, color:'#2a9d8f', fontWeight:700, background:'rgba(42,157,143,0.15)', padding:'4px 10px', borderRadius:20 }}>✓ Selesai</div>}
      </header>

      <div style={{ maxWidth:860, margin:'0 auto', padding:'24px' }}>
        <div style={{ display:'flex', gap:4, marginBottom:26, background:'rgba(255,255,255,0.04)', borderRadius:10, padding:4, width:'fit-content' }}>
          <Btn variant={tab==='intro'?'tab-on':'tab-off'} color={c} onClick={()=>setTab('intro')}>📋 Panduan</Btn>
          <Btn variant={tab==='learn'?'tab-on':'tab-off'} color={c} onClick={()=>setTab('learn')}>📖 Belajar</Btn>
          {hasQuiz && <Btn variant={tab==='quiz'?'tab-on':'tab-off'} color={c} onClick={()=>setTab('quiz')}>🎯 Quiz</Btn>}
        </div>

        {tab==='intro' && <IntroTab mod={mod} info={info} c={c} onStart={()=>setTab('learn')} />}
        {tab==='learn' && <LearnContent mod={mod} c={c} />}
        {tab==='quiz'  && <QuizContent  mod={mod} c={c} progress={progress} onSaveProgress={onSaveProgress} />}

        {!hasQuiz && tab==='learn' && (
          <div style={{ marginTop:28, padding:'16px 20px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'space-between', gap:16 }}>
            <div>
              <div style={{ fontSize:14, fontWeight:600, marginBottom:3 }}>Sudah selesai membaca?</div>
              <div style={{ fontSize:12, color:'#8890a4' }}>Tandai selesai untuk membuka langkah berikutnya.</div>
            </div>
            <button onClick={()=>onSaveProgress(mod.id,100,50)} disabled={isDone}
              style={{ background:isDone?'rgba(255,255,255,0.08)':c, border:'none', color:isDone?'#8890a4':'#fff', borderRadius:10, padding:'10px 20px', cursor:isDone?'default':'pointer', fontSize:13, fontWeight:600, whiteSpace:'nowrap', fontFamily:'"DM Sans",sans-serif' }}>
              {isDone?'✓ Sudah Selesai':'✅ Tandai Selesai'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ── INTRO TAB ──────────────────────────────────────────────────────────────────
function IntroTab({ mod, info, c, onStart }) {
  return (
    <div>
      <div style={{ background:`${c}15`, border:`1px solid ${c}30`, borderRadius:14, padding:'22px', marginBottom:18 }}>
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:16, marginBottom:16 }}>
          <div style={{ flex:1 }}>
            <h2 style={{ fontSize:20, fontWeight:700, margin:'0 0 10px' }}>{mod.title} — {mod.obj || 'Tujuan modul ini'}</h2>
            <p style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.75, margin:0 }}>{info.why}</p>
          </div>
          <div style={{ fontSize:40, fontFamily:'"Noto Serif JP",serif', flexShrink:0 }}>{mod.icon}</div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(155px,1fr))', gap:10 }}>
          {[['⏱️','Estimasi',info.time],['🎯','JLPT',info.jlpt],['📊','Level',info.level||'N5']].map(([e,l,v],i)=>(
            <div key={i} style={{ background:'rgba(255,255,255,0.07)', borderRadius:9, padding:'11px 13px' }}>
              <div style={{ fontSize:16, marginBottom:4 }}>{e}</div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)', marginBottom:2, textTransform:'uppercase', letterSpacing:'0.05em' }}>{l}</div>
              <div style={{ fontSize:12, fontWeight:500, lineHeight:1.4 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'16px 18px', marginBottom:14 }}>
        <div style={{ fontSize:13, fontWeight:600, color:c, marginBottom:10 }}>📚 Yang akan kamu pelajari:</div>
        <div style={{ display:'grid', gap:7 }}>
          {info.what.map((item,i)=>(
            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:9, fontSize:13, color:'rgba(255,255,255,0.75)' }}>
              <span style={{ color:c, fontSize:13, flexShrink:0, marginTop:1 }}>✓</span><span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background:'rgba(244,162,97,0.1)', border:'1px solid rgba(244,162,97,0.25)', borderRadius:12, padding:'14px 18px', marginBottom:22 }}>
        <div style={{ fontSize:13, fontWeight:600, color:'#f4a261', marginBottom:5 }}>💡 Tips Belajar:</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.7 }}>{info.tip}</div>
      </div>

      <button onClick={onStart} style={{ background:c, border:'none', color:'#fff', borderRadius:10, padding:'12px 28px', cursor:'pointer', fontSize:14, fontWeight:600, fontFamily:'"DM Sans",sans-serif' }}>
        Mulai Belajar →
      </button>
    </div>
  )
}

// ── LEARN ROUTER ──────────────────────────────────────────────────────────────
function LearnContent({ mod, c }) {
  // Hiragana
  if (mod.id==='hiragana-dasar')    return <CharLearn data={HIRAGANA_BASE}    color={c} title="46 Huruf Dasar Hiragana" tip="Mulai baris あ → か → さ → た → な → は → ま → や → ら → わ → ん. Tulis sambil ucapkan!" />
  if (mod.id==='hiragana-lanjutan') return <CharLearn data={[...HIRAGANA_DAKUTEN,...HIRAGANA_COMBO]} color={c} title="Dakuten & Kombinasi Hiragana" tip="Dakuten (゛) = bersuara. Handakuten (゜) = semi-suara. Kombinasi = dua huruf kecil digabung." />
  // Katakana
  if (mod.id==='katakana-dasar')    return <CharLearn data={KATAKANA_BASE}    color={c} title="46 Huruf Dasar Katakana" tip="Bunyi identik Hiragana. Contoh: テレビ(TV) コーヒー(kopi) インドネシア(Indonesia)" />
  if (mod.id==='katakana-lanjutan') return <CharLearn data={[...KATAKANA_DAKUTEN,...KATAKANA_COMBO]} color={c} title="Dakuten & Kombinasi Katakana" tip="Sama polanya dengan Hiragana lanjutan. Setelah ini kamu bisa baca hampir semua kata Jepang!" />
  // Pondasi
  if (mod.id==='angka')             return <VocabCatLearn cat="numbers" c={c} showNumberTip />
  if (mod.id==='sapaan-dasar')      return <VocabCatLearn cat="greetings" c={c} />
  if (mod.id==='kata-ganti-tanya')  return <KataGantiLearn c={c} />
  if (mod.id==='waktu-kalender')    return <WaktuLearn c={c} />
  // Kosakata
  if (mod.id==='kosakata-benda')    return <KosakataBendaLearn c={c} />
  if (mod.id==='kata-sifat')        return <VocabCatLearn cat="adjectives" c={c} />
  if (mod.id==='kata-kerja-gol1')   return <VerbGol1Learn c={c} />
  if (mod.id==='kata-kerja-gol23')  return <VerbGol23Learn c={c} />
  // Grammar
  if (mod.id==='partikel-1')        return <GrammarSectionLearn id="particles" c={c} />
  if (mod.id==='partikel-2')        return <GrammarSectionLearn id="particles" c={c} subset={['へ (e)','の (no)','と (to)','や (ya)','も (mo)','から (kara)','まで (made)','か (ka)','ね (ne)','よ (yo)']} />
  if (mod.id==='pola-kalimat')      return <GrammarSectionLearn id="sentence-patterns" c={c} />
  if (mod.id==='konjugasi-kk')      return <GrammarSectionLearn id="verb-conjugation" c={c} />
  if (mod.id==='te-form')           return <TeFormLearn c={c} />
  if (mod.id==='pola-lanjutan')     return <GrammarSectionLearn id="sentence-patterns" c={c} />
  // Kanji
  if (mod.id==='kanji-1')           return <KanjiLearn c={c} subset={KANJI_N5.slice(0,25)} />
  if (mod.id==='kanji-2')           return <KanjiLearn c={c} subset={KANJI_N5.slice(25)} />
  // Percakapan
  if (mod.id==='conv-perkenalan')   return <ConvLearn c={c} idx={0} />
  if (mod.id==='conv-sehari')       return <ConvLearn c={c} idx={1} />
  if (mod.id==='conv-belanja')      return <ConvLearn c={c} idx={2} />
  if (mod.id==='conv-transport')    return <ConvLearn c={c} idx={4} />
  if (mod.id==='conv-darurat')      return <ConvLearn c={c} idx={5} />
  // LPK
  if (mod.id==='budaya')            return <BudayaLearn c={c} />
  if (mod.id==='bahasa-kerja')      return <BahasaKerjaLearn c={c} />
  if (mod.id==='counter')           return <CounterLearn c={c} />
  if (mod.id==='jlpt-n5')           return <JlptInfoLearn c={c} />
  return <p style={{ color:'#8890a4', textAlign:'center', marginTop:40 }}>Konten sedang disiapkan...</p>
}

// ── CHARACTER LEARN (Hiragana/Katakana) ───────────────────────────────────────
function CharLearn({ data, color, title, tip }) {
  const groups = [...new Set(data.map(h=>h.group))]
  return (
    <div>
      <InfoBox color={color} text="Klik kartu untuk flip — lihat bacaan romaji. Ucapkan dengan keras setiap kali klik!" />
      {groups.map(g=>(
        <div key={g} style={{ marginBottom:20 }}>
          <div style={{ fontSize:11, color:color, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>baris / grup {g}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {data.filter(h=>h.group===g).map(h=><FlipCard key={h.char} char={h.char} romaji={h.romaji} color={color}/>)}
          </div>
        </div>
      ))}
      <TipBox color={color} title="Tips" text={tip} />
    </div>
  )
}

// ── VOCAB CATEGORY LEARN ──────────────────────────────────────────────────────
function VocabCatLearn({ cat, c, showNumberTip }) {
  return (
    <div>
      {showNumberTip && (
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'14px 16px', marginBottom:14 }}>
          <div style={{ fontSize:13, fontWeight:600, color:c, marginBottom:8 }}>📐 Sistem Angka Jepang</div>
          <div style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:2 }}>
            <b style={{color:'#f4a261'}}>Pola:</b> gabungkan puluhan + satuan<br/>
            <code style={{color:'#2a9d8f'}}>11 = じゅう + いち = じゅういち</code><br/>
            <code style={{color:'#2a9d8f'}}>25 = に(2) × じゅう(10) + ご(5) = にじゅうご</code><br/>
            <code style={{color:'#2a9d8f'}}>300 = さんびゃく (BUKAN さんひゃく!) ⚠️</code><br/>
            <span style={{color:'#e63946',fontSize:12}}>⚠️ Tidak beraturan: 300=さんびゃく · 600=ろっぴゃく · 800=はっぴゃく · 3000=さんぜん</span>
          </div>
        </div>
      )}
      <InfoBox color={c} text="Klik kartu untuk lihat arti. Klik 🔊 untuk dengar pengucapan." />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(172px,1fr))', gap:10, marginTop:12 }}>
        {(VOCAB[cat]||[]).map((v,i)=><VocabCard key={i} item={v} color={c} onSpeak={speak}/>)}
      </div>
    </div>
  )
}

// ── KATA GANTI & TANYA ────────────────────────────────────────────────────────
function KataGantiLearn({ c }) {
  const [tab, setTab] = useState('pronouns')
  const sections = { pronouns:'👤 Kata Ganti', demonstratives:'👆 Demonstratif', questionWords:'❓ Kata Tanya' }
  const data = DASAR_KOMUNIKASI[tab] || []
  return (
    <div>
      <InfoBox color={c} text="Kata ganti & kata tanya adalah kosa kata PERTAMA yang dibutuhkan untuk berkomunikasi dalam situasi nyata." />
      <SegBtns items={sections} active={tab} onChange={setTab} c={c} />
      <div style={{ display:'grid', gap:10 }}>
        {data.map((item,i)=>(
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${c}20`, borderRadius:10, padding:'14px 16px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:5 }}>
              <span style={{ fontSize:20, fontFamily:'"Noto Serif JP",serif' }}>{item.jp}</span>
              <button onClick={()=>speak(item.jp)} style={{ background:'transparent', border:'none', fontSize:14, cursor:'pointer', color:c }}>🔊</button>
              <span style={{ fontSize:12, color:'rgba(255,255,255,0.4)' }}>({item.romaji})</span>
            </div>
            <div style={{ fontSize:13, fontWeight:500, marginBottom:item.note?6:0 }}>{item.meaning}</div>
            {item.note && <div style={{ fontSize:12, color:'#f4a261', lineHeight:1.6, background:'rgba(244,162,97,0.08)', borderRadius:6, padding:'6px 9px' }}>💡 {item.note}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── WAKTU & KALENDER ──────────────────────────────────────────────────────────
function WaktuLearn({ c }) {
  const [tab, setTab] = useState('time')
  return (
    <div>
      <InfoBox color={c} text="Ekspresi waktu sangat sering dipakai sehari-hari. Pelajari hari, bulan, jam, dan ekspresi waktu sekaligus!" />
      <SegBtns items={{ time:'⏰ Waktu Harian', days:'📅 Hari & Bulan' }} active={tab} onChange={setTab} c={c} />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(172px,1fr))', gap:10 }}>
        {(tab==='time' ? VOCAB.time : VOCAB.days).map((v,i)=><VocabCard key={i} item={v} color={c} onSpeak={speak}/>)}
      </div>
    </div>
  )
}

// ── KOSAKATA BENDA ────────────────────────────────────────────────────────────
const BENDA_CATS = { food:'🍜 Makanan', places:'📍 Tempat', transport:'🚆 Transport', body:'🫀 Tubuh', family:'👨‍👩‍👧 Keluarga', colors:'🎨 Warna', weather:'🌤️ Cuaca' }
function KosakataBendaLearn({ c }) {
  const [cat, setCat] = useState('food')
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:18 }}>
        {Object.entries(BENDA_CATS).map(([k,v])=>(
          <button key={k} onClick={()=>setCat(k)} style={{ padding:'6px 13px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:cat===k?c:'transparent', color:cat===k?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{v}</button>
        ))}
      </div>
      <InfoBox color={c} text="Klik 🔊 untuk dengar pengucapan. Hafalkan dalam kalimat, bukan kata satu per satu!" />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(172px,1fr))', gap:10 }}>
        {(VOCAB[cat]||[]).map((v,i)=><VocabCard key={i} item={v} color={c} onSpeak={speak}/>)}
      </div>
    </div>
  )
}

// ── KATA KERJA GOLONGAN 1 ─────────────────────────────────────────────────────
function VerbGol1Learn({ c }) {
  const endGroups = [...new Set(VERBS_GOL1.map(v=>v.end))]
  const [eg, setEg] = useState(endGroups[0])
  return (
    <div>
      <div style={{ background:`${c}12`, border:`1px solid ${c}28`, borderRadius:10, padding:'14px 16px', marginBottom:16, fontSize:13, color:'rgba(255,255,255,0.8)', lineHeight:1.8 }}>
        <strong style={{ color:c }}>Golongan 1 (五段動詞/Godan):</strong> Kata kerja berakhiran bunyi -u, -ku, -gu, -su, -tsu, -nu, -bu, -mu, -ru (kecuali -iru/-eru).<br/>
        <strong style={{ color:'#f4a261' }}>Cara ke ます:</strong> Ganti bunyi akhir ke baris i + ます. かく(k<b>u</b>) → かき(k<b>i</b>)ます
      </div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:16 }}>
        {endGroups.map(e=>(
          <button key={e} onClick={()=>setEg(e)} style={{ padding:'5px 12px', borderRadius:16, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:eg===e?c:'transparent', color:eg===e?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s' }}>～{e}</button>
        ))}
      </div>
      <div style={{ display:'grid', gap:8 }}>
        {VERBS_GOL1.filter(v=>v.end===eg).map((v,i)=>(
          <VerbCard key={i} v={v} c={c} />
        ))}
      </div>
      <TipBox color={c} title="⚠️ Peringatan" text="Beberapa kata kerja berakhiran -ru tapi BUKAN Golongan 2! Contoh: かえる(pulang), のる(naik), はいる(masuk), はしる(lari) = semuanya Golongan 1. Tandai dengan ⚠️ dan hafal!" />
    </div>
  )
}

// ── KATA KERJA GOLONGAN 2 & 3 ─────────────────────────────────────────────────
function VerbGol23Learn({ c }) {
  const [tab, setTab] = useState('2-iru')
  const tabs = { '2-iru':'Gol.2 (-iru)', '2-eru':'Gol.2 (-eru)', '3':'Gol.3 (Irregular)' }
  const filtered = VERBS_GOL23.filter(v => {
    if (tab==='3') return v.group===3
    if (tab==='2-iru') return v.group===2 && v.end==='-iru'
    return v.group===2 && v.end==='-eru'
  })
  return (
    <div>
      <div style={{ background:`${c}12`, border:`1px solid ${c}28`, borderRadius:10, padding:'14px 16px', marginBottom:16, fontSize:13, color:'rgba(255,255,255,0.8)', lineHeight:1.8 }}>
        <strong style={{ color:c }}>Golongan 2 (一段動詞/Ichidan):</strong> Berakhiran -iru atau -eru.<br/>
        <strong style={{ color:'#f4a261' }}>Cara ke ます:</strong> Buang る, tambah ます. たべ<s>る</s> → たべます ✓<br/>
        <strong style={{ color:'#e63946' }}>Golongan 3 (不規則動詞):</strong> Hanya する dan くる. WAJIB hafal bentuknya!
      </div>
      <SegBtns items={tabs} active={tab} onChange={setTab} c={c} />
      <div style={{ display:'grid', gap:8 }}>
        {filtered.map((v,i)=><VerbCard key={i} v={v} c={c} />)}
      </div>
    </div>
  )
}

function VerbCard({ v, c }) {
  return (
    <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:10, padding:'12px 14px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:12 }}>
        <div style={{ flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6, flexWrap:'wrap' }}>
            <span style={{ fontSize:18, fontFamily:'"Noto Serif JP",serif', color:'#f0ece4' }}>{v.dict}</span>
            <button onClick={()=>speak(v.dict)} style={{ background:'transparent', border:'none', fontSize:13, cursor:'pointer', color:c }}>🔊</button>
            <span style={{ fontSize:12, color:c, background:`${c}20`, borderRadius:4, padding:'2px 8px', fontWeight:600 }}>{v.meaning}</span>
            {v.note && <span style={{ fontSize:10, color:'#e63946' }}>{v.note}</span>}
          </div>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', fontSize:12 }}>
            <span style={{ color:'rgba(255,255,255,0.5)' }}>ます形: <span style={{ color:'#f0ece4', fontFamily:'"Noto Serif JP",serif' }}>{v.masu}</span></span>
            <span style={{ color:'rgba(255,255,255,0.5)' }}>ない形: <span style={{ color:'#f0ece4', fontFamily:'"Noto Serif JP",serif' }}>{v.nai}</span></span>
            <span style={{ color:'rgba(255,255,255,0.5)' }}>て形: <span style={{ color:'#f0ece4', fontFamily:'"Noto Serif JP",serif' }}>{v.te}</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── GRAMMAR SECTION LEARN ─────────────────────────────────────────────────────
function GrammarSectionLearn({ id, c, subset }) {
  const sec = GRAMMAR.find(g=>g.id===id)
  if (!sec) return <p style={{ color:'#8890a4' }}>Konten tidak ditemukan.</p>
  const items = subset ? sec.items.filter(item=>subset.some(s=>item.term.startsWith(s.split(' ')[0]))) : sec.items
  return (
    <div>
      {sec.intro && <InfoBox color={c} text={sec.intro} />}
      <div style={{ display:'grid', gap:10 }}>
        {items.map((item,i)=>(
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:10, padding:'14px 16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8, gap:12 }}>
              <span style={{ fontSize:14, fontWeight:700, color:c, lineHeight:1.4 }}>{item.term}</span>
              <span style={{ fontSize:11, color:'rgba(255,255,255,0.4)', flexShrink:0, textAlign:'right' }}>{item.desc}</span>
            </div>
            {item.ex && (
              <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:8, padding:'10px 14px', borderLeft:`3px solid ${c}60`, cursor:'pointer', marginBottom:item.tip?8:0 }} onClick={()=>speak(item.ex)}>
                <div style={{ fontSize:16, fontFamily:'"Noto Serif JP",serif', marginBottom:4, lineHeight:1.5 }}>{item.ex} <span style={{ fontSize:11, color:c }}>🔊</span></div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)' }}>→ {item.tr}</div>
              </div>
            )}
            {item.tip && <div style={{ fontSize:12, color:'#f4a261', lineHeight:1.65, background:'rgba(244,162,97,0.08)', borderRadius:6, padding:'8px 10px' }}>💡 {item.tip}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── TE-FORM LEARN ─────────────────────────────────────────────────────────────
function TeFormLearn({ c }) {
  const sec = GRAMMAR.find(g=>g.id==='verb-conjugation')
  const teItems = sec ? sec.items.filter((_,i)=>i>=4) : []
  return (
    <div>
      <InfoBox color={c} text="Bentuk て (te-form) adalah salah satu yang paling sering dipakai! Digunakan untuk menyambung kalimat, minta tolong, progressive, dan banyak pola penting lainnya." />
      <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:10, padding:'14px 16px', marginBottom:16 }}>
        <div style={{ fontSize:13, fontWeight:600, color:c, marginBottom:10 }}>📋 Aturan Te-form:</div>
        <div style={{ display:'grid', gap:6, fontSize:13, color:'rgba(255,255,255,0.75)' }}>
          {[['Gol.2 (-iru/-eru)','Buang る, tambah て','たべる → たべて ✓'],
            ['Gol.1 (く)','く → いて','かく → かいて'],
            ['Gol.1 (ぐ)','ぐ → いで','およぐ → およいで'],
            ['Gol.1 (す)','す → して','はなす → はなして'],
            ['Gol.1 (つ・る・う)','→ って','まつ → まって / かえる → かえって'],
            ['Gol.1 (む・ぶ・ぬ)','→ んで','のむ → のんで / よぶ → よんで'],
            ['Gol.3','する→して / くる→きて','Hafal! Tidak bisa diturunkan'],
            ['Pengecualian いく','いく → いって (bukan いきて!)','Hafal khusus!'],
          ].map(([g,r,e],i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'1.2fr 1.5fr 1.5fr', gap:8, background:'rgba(255,255,255,0.04)', borderRadius:7, padding:'8px 12px' }}>
              <span style={{ color:c, fontWeight:600 }}>{g}</span>
              <span>{r}</span>
              <span style={{ fontFamily:'"Noto Serif JP",serif', color:'#f0ece4' }}>{e}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ fontSize:13, fontWeight:600, color:c, marginBottom:10 }}>Pola te-form yang wajib tahu:</div>
      <div style={{ display:'grid', gap:8 }}>
        {[['〜てください','Tolong lakukan ~','みてください = Tolong lihat'],
          ['〜ないでください','Tolong jangan ~','はいらないでください = Tolong jangan masuk'],
          ['〜ています','Sedang melakukan ~','たべています = Sedang makan'],
          ['〜てもいいですか','Bolehkah saya ~ ?','はいってもいいですか = Boleh masuk?'],
          ['〜てはいけません','Dilarang ~','はいってはいけません = Dilarang masuk'],
        ].map(([p,u,e],i)=>(
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${c}22`, borderRadius:9, padding:'12px 14px' }}>
            <div style={{ fontSize:13, color:c, fontWeight:700, marginBottom:3 }}>{p}</div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginBottom:5 }}>{u}</div>
            <div style={{ fontSize:14, fontFamily:'"Noto Serif JP",serif', cursor:'pointer' }} onClick={()=>speak(e.split(' = ')[0])}>{e.split(' = ')[0]} <span style={{fontSize:11,color:c}}>🔊</span> <span style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>= {e.split(' = ')[1]}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── KANJI LEARN ───────────────────────────────────────────────────────────────
function KanjiLearn({ c, subset }) {
  const [q, setQ] = useState('')
  const pool = subset || KANJI_N5
  const filtered = pool.filter(k=>k.k.includes(q)||k.m.toLowerCase().includes(q.toLowerCase())||k.on.includes(q)||k.kun.includes(q))
  return (
    <div>
      <InfoBox color={c} text="Klik kartu untuk lihat arti, on-yomi, kun-yomi, dan contoh kata. Target: 5 kanji per hari!" />
      <input placeholder="Cari kanji, arti, atau bacaan…" value={q} onChange={e=>setQ(e.target.value)}
        style={{ width:'100%', maxWidth:300, padding:'9px 14px', borderRadius:8, fontSize:13, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#f0ece4', outline:'none', marginBottom:18, fontFamily:'"DM Sans",sans-serif' }} />
      <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
        {filtered.map((k,i)=><KanjiCard key={i} kanji={k}/>)}
      </div>
      {!filtered.length && <p style={{ color:'#8890a4', textAlign:'center', marginTop:24 }}>Tidak ditemukan.</p>}
      <TipBox color={c} title="Cara Hafal Kanji" text="1) Lihat bentuk → bayangkan maknanya secara visual. 2) Pelajari 1 kata contoh. 3) Tulis 5× sambil ucapkan. 4) Review besoknya. Ulangi setiap 3 hari." />
    </div>
  )
}

// ── CONVERSATION LEARN ────────────────────────────────────────────────────────
function ConvLearn({ c, idx }) {
  const cv = CONVERSATION[idx] || CONVERSATION[0]
  return (
    <div>
      <InfoBox color={cv.color} text="Klik 🔊 untuk dengar. Shadowing = dengar langsung tirukan dengan keras! Latih 10 menit sehari." />
      <div style={{ display:'grid', gap:10 }}>
        {cv.phrases.map((p,i)=>(
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', borderLeft:`3px solid ${cv.color}`, borderRadius:'0 10px 10px 0', padding:'14px 16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div>
                <div style={{ fontSize:18, fontFamily:'"Noto Serif JP",serif', marginBottom:4 }}>{p.jp}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:4 }}>{p.romaji}</div>
                <div style={{ fontSize:13, color:cv.color, fontWeight:500 }}>{p.id}</div>
              </div>
              <button onClick={()=>speak(p.jp)} style={{ background:'transparent', border:'none', fontSize:18, cursor:'pointer', color:cv.color, paddingLeft:12 }}>🔊</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── BUDAYA ────────────────────────────────────────────────────────────────────
function BudayaLearn({ c }) {
  const [idx,setIdx] = useState(0)
  const sec = BUDAYA[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:18 }}>
        {BUDAYA.map((b,i)=><button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?c:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{b.icon} {b.title}</button>)}
      </div>
      <InfoBox color={c} text="Budaya kerja Jepang sangat berbeda. Memahami ini adalah kunci sukses bekerja di sana!" />
      <div style={{ display:'grid', gap:10 }}>
        {sec.items.map((item,i)=>(
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
  const [idx,setIdx] = useState(0)
  const sec = BAHASA_KERJA[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:18 }}>
        {BAHASA_KERJA.map((b,i)=><button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?b.color:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{b.icon} {b.title}</button>)}
      </div>
      <InfoBox color={sec.color} text="Hafalkan bagian Keselamatan Kerja terlebih dahulu — paling penting saat kerja di pabrik!" />
      <div style={{ display:'grid', gap:10 }}>
        {sec.items.map((item,i)=>(
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
  const [idx,setIdx] = useState(0)
  const cnt = COUNTERS[idx]
  return (
    <div>
      <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:18 }}>
        {COUNTERS.map((ct,i)=><button key={i} onClick={()=>setIdx(i)} style={{ padding:'7px 14px', borderRadius:20, fontSize:12, fontWeight:500, cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)', background:idx===i?c:'transparent', color:idx===i?'#fff':'rgba(255,255,255,0.5)', transition:'all 0.2s', whiteSpace:'nowrap' }}>{ct.counter}</button>)}
      </div>
      <div style={{ background:`${c}15`, border:`1px solid ${c}30`, borderRadius:10, padding:'14px 18px', marginBottom:16 }}>
        <div style={{ fontSize:18, color:c, fontWeight:700, fontFamily:'"Noto Serif JP",serif', marginBottom:4 }}>{cnt.counter}</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.65)' }}>{cnt.use}</div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(120px,1fr))', gap:10 }}>
        {cnt.examples.map((ex,i)=>(
          <div key={i} onClick={()=>speak(ex.jp)} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'14px', cursor:'pointer', textAlign:'center', transition:'border-color 0.2s' }}
            onMouseEnter={e=>e.currentTarget.style.borderColor=c+'66'}
            onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.3)', marginBottom:4 }}>{ex.n}</div>
            <div style={{ fontSize:22, fontFamily:'"Noto Serif JP",serif', marginBottom:4 }}>{ex.jp}</div>
            <div style={{ fontSize:11, color:c }}>{ex.romaji}</div>
          </div>
        ))}
      </div>
      <TipBox color={c} title="Tips" text="Mulai hafal 〜つ (hitotsu~too) — bisa untuk benda apapun. Perhatikan perubahan bunyi: 1本=いっぽん 3本=さんぼん 6本=ろっぽん." />
    </div>
  )
}

// ── JLPT INFO ─────────────────────────────────────────────────────────────────
function JlptInfoLearn({ c }) {
  return (
    <div>
      <InfoBox color={c} text="Pelajari info ujian di sini, lalu gunakan tab Quiz untuk latihan soal format JLPT N5!" />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(190px,1fr))', gap:14, marginBottom:22 }}>
        {[{icon:'📖',title:'Moji-Goi',desc:'Kanji & Kosakata',dur:'25 menit',color:'#e63946'},
          {icon:'📝',title:'Bunpou-Dokkai',desc:'Grammar & Reading',dur:'50 menit',color:'#457b9d'},
          {icon:'🎧',title:'Chokai',desc:'Mendengarkan',dur:'30 menit',color:'#2a9d8f'}].map((s,i)=>(
          <div key={i} style={{ background:`${s.color}15`, border:`1px solid ${s.color}30`, borderRadius:12, padding:'18px' }}>
            <div style={{ fontSize:26, marginBottom:8 }}>{s.icon}</div>
            <div style={{ fontSize:14, fontWeight:600, marginBottom:3 }}>{s.title}</div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginBottom:7 }}>{s.desc}</div>
            <div style={{ fontSize:11, color:s.color, fontWeight:600 }}>{s.dur}</div>
          </div>
        ))}
      </div>
      <div style={{ background:'rgba(230,57,70,0.1)', border:'1px solid rgba(230,57,70,0.2)', borderRadius:10, padding:'16px 18px' }}>
        <div style={{ fontSize:13, fontWeight:600, color:'#e63946', marginBottom:8 }}>📋 Info JLPT N5</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.65)', lineHeight:1.9 }}>
          • Ujian 2x setahun: Juli & Desember<br/>
          • Passing: min 80/180 poin total, tiap seksi min 19 poin<br/>
          • Target: ~800 kosakata · ~100 kanji · ~80 poin grammar<br/>
          • Estimasi: 150–300 jam belajar (3–6 bulan konsisten)<br/>
          • Daftar: <strong style={{ color:'#e63946' }}>jlpt.jp</strong>
        </div>
      </div>
    </div>
  )
}

// ── QUIZ ──────────────────────────────────────────────────────────────────────
function QuizContent({ mod, c, progress, onSaveProgress }) {
  const qMap = {
    'hiragana-dasar':'hiragana','hiragana-lanjutan':'hiragana',
    'katakana-dasar':'katakana','katakana-lanjutan':'katakana',
    'angka':'vocabulary','sapaan-dasar':'vocabulary',
    'kata-ganti-tanya':'conversation','waktu-kalender':'vocabulary',
    'kosakata-benda':'vocabulary','kata-sifat':'vocabulary',
    'kata-kerja-gol1':'vocabulary','kata-kerja-gol23':'vocabulary',
    'partikel-1':'grammar','partikel-2':'grammar',
    'pola-kalimat':'grammar','konjugasi-kk':'grammar',
    'te-form':'grammar','pola-lanjutan':'grammar',
    'kanji-1':'kanji','kanji-2':'kanji',
    'conv-perkenalan':'conversation','conv-sehari':'conversation',
    'conv-belanja':'conversation','conv-transport':'conversation',
    'conv-darurat':'conversation','jlpt-n5':'jlpt-n5',
  }
  const qId = qMap[mod.id] || mod.id
  const [qs,setQs]       = useState(()=>buildQuiz(qId,10))
  const [idx,setIdx]     = useState(0)
  const [sel,setSel]     = useState(null)
  const [score,setScore] = useState(0)
  const [done,setDone]   = useState(false)

  const restart = useCallback(()=>{ setQs(buildQuiz(qId,10));setIdx(0);setSel(null);setScore(0);setDone(false) },[qId])

  const answer = (ch) => {
    if (sel!==null) return
    setSel(ch)
    const ok = ch===qs[idx].answer
    const ns = ok?score+1:score
    if (ok) setScore(ns)
    setTimeout(()=>{
      if (idx+1>=qs.length) {
        setDone(true)
        const pct=Math.round((ns/qs.length)*100)
        onSaveProgress(mod.id,pct,Math.round(pct*0.5))
      } else { setIdx(i=>i+1);setSel(null) }
    },950)
  }

  if (!qs.length) return <p style={{ color:'#8890a4', textAlign:'center', marginTop:40 }}>Quiz tidak tersedia.</p>
  if (done) return <QuizResult score={score} total={qs.length} c={c} onRetry={restart} />

  const q = qs[idx]
  const isLong = (q.q||'').length>8

  return (
    <div style={{ maxWidth:500, margin:'0 auto' }}>
      <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:8 }}>
        <span>Soal {idx+1} / {qs.length}</span>
        <span style={{ color:c, fontWeight:600 }}>✦ {score} benar</span>
      </div>
      <ProgressBar value={idx+1} max={qs.length} color={c} height={4} />
      <div style={{ textAlign:'center', margin:'28px 0 24px' }}>
        <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', marginBottom:12, letterSpacing:'0.04em' }}>{q.label}</div>
        <div style={{ fontSize:isLong?14:64, fontFamily:'"Noto Serif JP",serif', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14, padding:isLong?'16px 20px':'20px 28px', display:'inline-block', minWidth:120, lineHeight:1.5 }}>{q.q}</div>
        <div style={{ marginTop:10 }}>
          <button onClick={()=>speak(q.q)} style={{ background:'transparent', border:'none', color:c, cursor:'pointer', fontSize:13 }}>🔊 Dengarkan</button>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
        {q.choices.map((ch,i)=>{
          const isRight=ch===q.answer,isSel=ch===sel
          let bg='rgba(255,255,255,0.05)',bor='rgba(255,255,255,0.09)'
          if (sel!==null) {
            if (isRight){bg='rgba(42,157,143,0.25)';bor='#2a9d8f'}
            else if(isSel){bg='rgba(230,57,70,0.25)';bor='#e63946'}
          }
          return (
            <button key={i} onClick={()=>answer(ch)} style={{ background:bg,border:`1px solid ${bor}`,color:'#f0ece4',borderRadius:10,padding:'13px 10px',cursor:sel?'default':'pointer',fontSize:ch.length>14?11:15,fontFamily:'"Noto Serif JP",serif',transition:'all 0.15s',textAlign:'center',lineHeight:1.4 }}>
              {ch}
              {sel!==null&&isRight&&<span style={{ display:'block',fontSize:10,color:'#2a9d8f',marginTop:4 }}>✓ Benar</span>}
              {sel!==null&&isSel&&!isRight&&<span style={{ display:'block',fontSize:10,color:'#e63946',marginTop:4 }}>✗ Salah</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function QuizResult({ score, total, c, onRetry }) {
  const pct=Math.round((score/total)*100)
  const [emoji,msg]=pct>=90?['🏆','Luar Biasa!']:pct>=70?['⭐','Bagus Sekali!']:pct>=50?['👍','Lumayan!']:['📚','Terus Berlatih!']
  return (
    <div style={{ maxWidth:400, margin:'0 auto', textAlign:'center', padding:'32px 0' }}>
      <div style={{ fontSize:60, marginBottom:14 }}>{emoji}</div>
      <h2 style={{ fontSize:22, fontWeight:700, margin:'0 0 8px' }}>{msg}</h2>
      <p style={{ color:'rgba(255,255,255,0.5)', margin:'0 0 24px' }}>Benar <strong style={{ color:c }}>{score}/{total}</strong> soal</p>
      <div style={{ background:`${c}20`, border:`1px solid ${c}40`, borderRadius:14, padding:'20px', marginBottom:24 }}>
        <div style={{ fontSize:40, fontWeight:700, color:c }}>{pct}%</div>
        <div style={{ fontSize:13, color:'rgba(255,255,255,0.5)', marginTop:4 }}>{pct>=80?'🌟 XP tersimpan! Lanjut ke step berikutnya!':'Coba lagi untuk raih 80%+'}</div>
      </div>
      <button onClick={onRetry} style={{ background:c,border:'none',color:'#fff',borderRadius:10,padding:'12px 28px',cursor:'pointer',fontSize:14,fontWeight:500,fontFamily:'"DM Sans",sans-serif' }}>Coba Lagi 🔄</button>
    </div>
  )
}

// ── HELPERS ──────────────────────────────────────────────────────────────────
function InfoBox({ color, text }) {
  return <div style={{ background:color+'12',border:`1px solid ${color}28`,borderRadius:10,padding:'11px 14px',marginBottom:16,fontSize:13,color:'rgba(255,255,255,0.7)',lineHeight:1.65 }}>ℹ️ {text}</div>
}
function TipBox({ color, title, text }) {
  return <div style={{ marginTop:20,background:color+'12',border:`1px solid ${color}28`,borderRadius:10,padding:'13px 16px',fontSize:13,color:'rgba(255,255,255,0.7)',lineHeight:1.7 }}><strong style={{ color }}>{title}:</strong> {text}</div>
}
function SegBtns({ items, active, onChange, c }) {
  return (
    <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:16 }}>
      {Object.entries(items).map(([k,v])=>(
        <button key={k} onClick={()=>onChange(k)} style={{ padding:'7px 14px',borderRadius:20,fontSize:12,fontWeight:500,cursor:'pointer',border:'1px solid rgba(255,255,255,0.1)',background:active===k?c:'transparent',color:active===k?'#fff':'rgba(255,255,255,0.5)',transition:'all 0.2s' }}>{v}</button>
      ))}
    </div>
  )
}
