// components/HomePage.jsx
import { MODULES_CONFIG, NEW_MODULES } from '../data.js'
import { ProgressBar } from './UI.jsx'

const ALL_MODULES = [...MODULES_CONFIG, ...NEW_MODULES]

export default function HomePage({ progress, onOpen }) {
  const totalXP   = progress.totalXP || 0
  const completed = progress.completedModules?.length || 0
  const streak    = progress.streak || 0

  return (
    <div style={{ minHeight:'100vh', background:'#0b0f1a', color:'#f0ece4', fontFamily:'"DM Sans",sans-serif' }}>
      {/* Top Nav */}
      <header style={{
        borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'16px 28px',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, background:'#0b0f1a', zIndex:10,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:38, height:38, background:'#e63946', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, fontFamily:'"Noto Serif JP",serif' }}>日</div>
          <div>
            <div style={{ fontSize:16, fontWeight:600, letterSpacing:'-0.02em' }}>Nihongo LPK</div>
            <div style={{ fontSize:11, color:'#8890a4' }}>Belajar Bahasa Jepang</div>
          </div>
        </div>
        <div style={{ display:'flex', gap:20 }}>
          <Stat emoji="✦" value={`${totalXP} XP`} label="Total XP" />
          <Stat emoji="🔥" value={`${streak} hari`} label="Streak" />
          <Stat emoji="📚" value={`${completed}/${ALL_MODULES.length}`} label="Selesai" />
        </div>
      </header>

      <main style={{ maxWidth:900, margin:'0 auto', padding:'36px 24px' }}>
        {/* Hero */}
        <section style={{ textAlign:'center', marginBottom:44 }}>
          <div style={{ fontSize:52, fontFamily:'"Noto Serif JP",serif', background:'linear-gradient(135deg,#e63946 0%,#f4a261 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:12 }}>日本語</div>
          <h1 style={{ fontSize:26, fontWeight:700, margin:'0 0 10px', letterSpacing:'-0.03em' }}>Belajar Bahasa Jepang — Kurikulum LPK Lengkap</h1>
          <p style={{ color:'#8890a4', fontSize:14, maxWidth:480, margin:'0 auto 22px', lineHeight:1.7 }}>
            11 modul terstruktur — dari Hiragana hingga Budaya Kerja Jepang. Cocok untuk persiapan magang & kerja ke Jepang!
          </p>
          <div style={{ maxWidth:340, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#8890a4', marginBottom:6 }}>
              <span>Progress keseluruhan</span>
              <span>{Math.round((completed / ALL_MODULES.length) * 100)}%</span>
            </div>
            <ProgressBar value={completed} max={ALL_MODULES.length} color="#e63946" height={6} />
          </div>
        </section>

        {/* Section: Dasar */}
        <SectionLabel label="📘 Tahap 1 — Dasar (Hiragana s/d Percakapan)" />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(256px,1fr))', gap:12, marginBottom:32 }}>
          {MODULES_CONFIG.map((mod, i) => {
            const done   = progress.completedModules?.includes(mod.id)
            const score  = progress.quizScores?.[mod.id] || 0
            const locked = i > 0 && !progress.completedModules?.includes(MODULES_CONFIG[i-1].id)
            return <ModuleCard key={mod.id} mod={mod} done={done} score={score} locked={locked} onOpen={() => !locked && onOpen(mod)} />
          })}
        </div>

        {/* Section: LPK */}
        <SectionLabel label="🏭 Tahap 2 — Kurikulum LPK (Budaya s/d JLPT N5)" />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(256px,1fr))', gap:12, marginBottom:36 }}>
          {NEW_MODULES.map((mod, i) => {
            const done   = progress.completedModules?.includes(mod.id)
            const score  = progress.quizScores?.[mod.id] || 0
            const prevId = i === 0 ? MODULES_CONFIG[MODULES_CONFIG.length - 1].id : NEW_MODULES[i-1].id
            const locked = !progress.completedModules?.includes(prevId)
            return <ModuleCard key={mod.id} mod={mod} done={done} score={score} locked={locked} onOpen={() => !locked && onOpen(mod)} />
          })}
        </div>

        {/* Tips */}
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'18px 22px' }}>
          <p style={{ fontSize:13, color:'#8890a4', lineHeight:1.8, margin:0 }}>
            <strong style={{ color:'#f0ece4' }}>💡 Kurikulum ini berdasarkan standar LPK & IM Japan:</strong>{' '}
            Tahap 1 fokus pada kemampuan bahasa dasar (N5). Tahap 2 mempersiapkan kamu untuk benar-benar bekerja di Jepang —
            termasuk etos kerja, bahasa pabrik, dan etika sosial yang sangat penting di lapangan.
            Target: kuasai semua modul dalam 3-6 bulan untuk siap magang!
          </p>
        </div>
      </main>
    </div>
  )
}

function SectionLabel({ label }) {
  return (
    <div style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.6)', marginBottom:14, paddingBottom:10, borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
      {label}
    </div>
  )
}

function Stat({ emoji, value, label }) {
  return (
    <div style={{ textAlign:'right' }}>
      <div style={{ fontSize:15, fontWeight:600 }}>{emoji} {value}</div>
      <div style={{ fontSize:10, color:'#8890a4' }}>{label}</div>
    </div>
  )
}

function ModuleCard({ mod, done, score, locked, onOpen }) {
  return (
    <div onClick={onOpen} style={{
      background:mod.bg, border:`1px solid ${mod.color}28`, borderRadius:14, padding:'18px',
      cursor:locked ? 'not-allowed' : 'pointer', transition:'transform 0.15s, box-shadow 0.15s',
      opacity:locked ? 0.42 : 1, position:'relative', overflow:'hidden',
    }}
    onMouseEnter={e => { if (!locked) { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow=`0 10px 28px ${mod.color}20` }}}
    onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
    >
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
        <div>
          <div style={{ fontSize:10, color:mod.color, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:4 }}>{mod.level}</div>
          <div style={{ fontSize:17, fontWeight:700 }}>{mod.title}</div>
          <div style={{ fontSize:12, fontFamily:'"Noto Serif JP",serif', color:'rgba(255,255,255,0.35)', marginTop:1 }}>{mod.sub}</div>
        </div>
        <div style={{ fontSize:28, color:mod.color, opacity:0.85 }}>{mod.icon}</div>
      </div>
      <p style={{ fontSize:12, color:'rgba(255,255,255,0.42)', margin:'0 0 12px', lineHeight:1.55 }}>{mod.desc}</p>
      {done && (
        <>
          <div style={{ height:1, background:`${mod.color}22`, marginBottom:8 }} />
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'rgba(255,255,255,0.35)', marginBottom:5 }}>
            <span>Quiz terbaik</span>
            <span style={{ color:mod.color, fontWeight:600 }}>{score}%</span>
          </div>
          <ProgressBar value={score} max={100} color={mod.color} height={3} />
        </>
      )}
      {locked && <div style={{ position:'absolute', top:14, right:14, fontSize:15 }}>🔒</div>}
      {done && <div style={{ position:'absolute', top:14, right:14, width:19, height:19, background:mod.color, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10 }}>✓</div>}
    </div>
  )
}
