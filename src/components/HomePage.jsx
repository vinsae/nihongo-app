import { STAGES, MODULES_CONFIG } from '../data_modules.js'
import { ProgressBar } from './UI.jsx'

export default function HomePage({ progress, onOpen }) {
  const totalXP   = progress.totalXP || 0
  const completed = progress.completedModules?.length || 0
  const streak    = progress.streak || 0
  const totalMods = MODULES_CONFIG.length

  return (
    <div style={{ minHeight:'100vh', background:'#0b0f1a', color:'#f0ece4', fontFamily:'"DM Sans",sans-serif' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet"/>

      {/* Nav */}
      <header style={{ borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'16px 28px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, background:'#0b0f1a', zIndex:10 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:38, height:38, background:'linear-gradient(135deg,#e63946,#c1121f)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, fontFamily:'"Noto Serif JP",serif' }}>日</div>
          <div>
            <div style={{ fontSize:16, fontWeight:700, letterSpacing:'-0.02em' }}>Nihongo LPK</div>
            <div style={{ fontSize:11, color:'#8890a4' }}>Kurikulum N5 Lengkap</div>
          </div>
        </div>
        <div style={{ display:'flex', gap:20 }}>
          {[['✦', totalXP+' XP','Total XP'],['🔥',streak+' hari','Streak'],['📚',completed+'/'+totalMods,'Selesai']].map(([e,v,l],i) => (
            <div key={i} style={{ textAlign:'right' }}>
              <div style={{ fontSize:15, fontWeight:600 }}>{e} {v}</div>
              <div style={{ fontSize:10, color:'#8890a4' }}>{l}</div>
            </div>
          ))}
        </div>
      </header>

      <main style={{ maxWidth:920, margin:'0 auto', padding:'32px 24px' }}>
        {/* Hero */}
        <section style={{ textAlign:'center', marginBottom:40 }}>
          <div style={{ fontSize:52, fontFamily:'"Noto Serif JP",serif', background:'linear-gradient(135deg,#e63946,#f4a261)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:10 }}>日本語</div>
          <h1 style={{ fontSize:26, fontWeight:700, margin:'0 0 10px', letterSpacing:'-0.03em' }}>Belajar Bahasa Jepang — dari Nol sampai N5</h1>
          <p style={{ color:'#8890a4', fontSize:14, maxWidth:500, margin:'0 auto 20px', lineHeight:1.7 }}>
            <strong style={{ color:'#f0ece4' }}>{totalMods} modul</strong> terstruktur dalam <strong style={{ color:'#f0ece4' }}>8 tahap</strong> — urut dari Step 1 hingga Step {totalMods}. Selesaikan satu langkah untuk membuka langkah berikutnya.
          </p>
          <div style={{ maxWidth:360, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#8890a4', marginBottom:5 }}>
              <span>Progress keseluruhan</span>
              <span>{Math.round((completed/totalMods)*100)}% ({completed}/{totalMods})</span>
            </div>
            <ProgressBar value={completed} max={totalMods} color="#e63946" height={7} />
          </div>
        </section>

        {/* Stages */}
        {STAGES.map(stage => {
          const stageMods  = MODULES_CONFIG.filter(m => m.stage === stage.id)
          const stageTotal = stageMods.length
          const stageDone  = stageMods.filter(m => progress.completedModules?.includes(m.id)).length
          const stagePct   = Math.round((stageDone/stageTotal)*100)

          return (
            <div key={stage.id} style={{ marginBottom:36 }}>
              {/* Stage header */}
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14, paddingBottom:10, borderBottom:`1px solid ${stage.color}30` }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:34, height:34, background:`${stage.color}20`, border:`1px solid ${stage.color}40`, borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>{stage.icon}</div>
                  <div>
                    <div style={{ fontSize:14, fontWeight:700, letterSpacing:'-0.01em' }}>Tahap {stage.id}: {stage.title}</div>
                    <div style={{ fontSize:11, color:'#8890a4' }}>{stage.desc}</div>
                  </div>
                </div>
                <div style={{ textAlign:'right', flexShrink:0 }}>
                  <div style={{ fontSize:12, fontWeight:600, color: stagePct===100 ? '#2a9d8f' : stage.color }}>{stageDone}/{stageTotal}</div>
                  <div style={{ width:80, marginTop:4 }}><ProgressBar value={stageDone} max={stageTotal} color={stage.color} height={3} /></div>
                </div>
              </div>

              {/* Module cards */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(248px,1fr))', gap:12 }}>
                {stageMods.map((mod, stageIdx) => {
                  const globalIdx = MODULES_CONFIG.indexOf(mod)
                  const done      = progress.completedModules?.includes(mod.id)
                  const score     = progress.quizScores?.[mod.id] || 0
                  const locked    = globalIdx > 0 && !progress.completedModules?.includes(MODULES_CONFIG[globalIdx-1].id)
                  return (
                    <ModuleCard key={mod.id} mod={mod} done={done} score={score} locked={locked}
                      onOpen={() => !locked && onOpen(mod)} />
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Footer tips */}
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'18px 22px', marginTop:8 }}>
          <p style={{ fontSize:13, color:'#8890a4', lineHeight:1.8, margin:0 }}>
            <strong style={{ color:'#f0ece4' }}>💡 Panduan belajar:</strong>{' '}
            Ikuti urutan step 1→{totalMods}. Jangan loncat! Setiap modul punya tab <strong style={{ color:'#f0ece4' }}>📋 Panduan</strong> — baca dulu sebelum belajar.
            Target ideal: <strong style={{ color:'#f0ece4' }}>1 modul / 3 hari</strong> = selesai semua dalam ~3 bulan.
            Belajar konsisten 30 menit/hari lebih efektif dari belajar 3 jam sekali seminggu. 頑張れ！
          </p>
        </div>
      </main>
    </div>
  )
}

function ModuleCard({ mod, done, score, locked, onOpen }) {
  return (
    <div onClick={onOpen} style={{
      background:mod.bg, border:`1px solid ${mod.color}28`, borderRadius:13, padding:'16px 18px',
      cursor:locked?'not-allowed':'pointer', opacity:locked?0.4:1,
      transition:'transform 0.15s, box-shadow 0.15s', position:'relative', overflow:'hidden',
    }}
    onMouseEnter={e=>{ if(!locked){e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow=`0 8px 24px ${mod.color}20`}}}
    onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none' }}
    >
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:4 }}>
            <span style={{ fontSize:10, color:'rgba(255,255,255,0.35)', background:'rgba(255,255,255,0.07)', borderRadius:4, padding:'2px 6px' }}>Step {mod.step}</span>
            {done && <span style={{ fontSize:10, color:'#2a9d8f', background:'rgba(42,157,143,0.15)', borderRadius:4, padding:'2px 6px' }}>✓ Selesai</span>}
          </div>
          <div style={{ fontSize:16, fontWeight:700, letterSpacing:'-0.01em', lineHeight:1.2 }}>{mod.title}</div>
          <div style={{ fontSize:12, fontFamily:'"Noto Serif JP",serif', color:'rgba(255,255,255,0.35)', marginTop:2 }}>{mod.sub}</div>
        </div>
        <div style={{ fontSize:24, color:mod.color, opacity:0.8, flexShrink:0 }}>{mod.icon}</div>
      </div>
      <p style={{ fontSize:12, color:'rgba(255,255,255,0.42)', margin:'0 0 10px', lineHeight:1.55, minHeight:36 }}>{mod.desc}</p>
      {done && mod.hasQuiz && (
        <>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'rgba(255,255,255,0.35)', marginBottom:5 }}>
            <span>Skor quiz</span><span style={{ color:mod.color, fontWeight:600 }}>{score}%</span>
          </div>
          <ProgressBar value={score} max={100} color={mod.color} height={3} />
        </>
      )}
      {locked && <div style={{ position:'absolute', top:13, right:13, fontSize:14 }}>🔒</div>}
    </div>
  )
}
