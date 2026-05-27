// components/HomePage.jsx
import { MODULES_CONFIG } from '../data.js'
import { ProgressBar } from './UI.jsx'

export default function HomePage({ progress, onOpen }) {
  const totalXP      = progress.totalXP || 0
  const completed    = progress.completedModules?.length || 0
  const streak       = progress.streak || 0

  return (
    <div style={{ minHeight: '100vh', background: '#0b0f1a', color: '#f0ece4', fontFamily: '"DM Sans", sans-serif' }}>

      {/* ── Top Nav ── */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, background: '#0b0f1a', zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 38, height: 38, background: '#e63946', borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, fontFamily: '"Noto Serif JP", serif',
          }}>日</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em' }}>Nihongo</div>
            <div style={{ fontSize: 11, color: '#8890a4' }}>Belajar Bahasa Jepang</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          <Stat emoji="✦" value={`${totalXP} XP`} label="Total XP" />
          <Stat emoji="🔥" value={`${streak} hari`} label="Streak" />
          <Stat emoji="📚" value={`${completed}/6`} label="Selesai" />
        </div>
      </header>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '36px 24px' }}>

        {/* ── Hero ── */}
        <section style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            fontSize: 52, fontFamily: '"Noto Serif JP", serif',
            background: 'linear-gradient(135deg, #e63946 0%, #f4a261 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: 12,
          }}>日本語</div>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 12px', letterSpacing: '-0.03em' }}>
            Belajar Bahasa Jepang dari Nol
          </h1>
          <p style={{ color: '#8890a4', fontSize: 14, maxWidth: 440, margin: '0 auto 24px' }}>
            6 modul terstruktur dari Hiragana hingga percakapan sehari-hari.
            Klik modul untuk mulai belajar!
          </p>

          {/* Overall progress */}
          <div style={{ maxWidth: 320, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#8890a4', marginBottom: 6 }}>
              <span>Progress keseluruhan</span>
              <span>{Math.round((completed / 6) * 100)}%</span>
            </div>
            <ProgressBar value={completed} max={6} color="#e63946" height={6} />
          </div>
        </section>

        {/* ── Path indicator ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 36, flexWrap: 'wrap' }}>
          {MODULES_CONFIG.map((m, i) => {
            const done = progress.completedModules?.includes(m.id)
            return (
              <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: done ? m.color : 'rgba(255,255,255,0.06)',
                  border: `2px solid ${done ? m.color : 'rgba(255,255,255,0.12)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontFamily: '"Noto Serif JP", serif', color: '#fff', fontWeight: 700,
                  transition: 'all 0.3s',
                }}>
                  {done ? '✓' : i + 1}
                </div>
                {i < MODULES_CONFIG.length - 1 && (
                  <div style={{
                    width: 28, height: 2, borderRadius: 1,
                    background: done ? m.color + '60' : 'rgba(255,255,255,0.1)',
                    transition: 'background 0.3s',
                  }} />
                )}
              </div>
            )
          })}
        </div>

        {/* ── Module Cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))', gap: 14 }}>
          {MODULES_CONFIG.map((mod, i) => {
            const done   = progress.completedModules?.includes(mod.id)
            const score  = progress.quizScores?.[mod.id] || 0
            const locked = i > 0 && !progress.completedModules?.includes(MODULES_CONFIG[i - 1].id)
            return (
              <ModuleCard
                key={mod.id}
                mod={mod}
                done={done}
                score={score}
                locked={locked}
                onOpen={() => !locked && onOpen(mod)}
              />
            )
          })}
        </div>

        {/* ── Tips ── */}
        <div style={{
          marginTop: 40, background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 22px',
        }}>
          <p style={{ fontSize: 13, color: '#8890a4', lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: '#f0ece4' }}>💡 Tips belajar efektif:</strong>{' '}
            Kuasai Hiragana & Katakana dulu (target 1–2 minggu). Belajar 15–30 menit sehari
            jauh lebih efektif dari berjam-jam tapi jarang. Untuk Kanji, fokus pada makna
            dulu sebelum cara baca. Klik 🔊 pada kosakata untuk dengar pengucapan aslinya.
          </p>
        </div>
      </main>
    </div>
  )
}

// ── Sub components ────────────────────────────────────────────────────────────
function Stat({ emoji, value, label }) {
  return (
    <div style={{ textAlign: 'right' }}>
      <div style={{ fontSize: 15, fontWeight: 600 }}>{emoji} {value}</div>
      <div style={{ fontSize: 10, color: '#8890a4' }}>{label}</div>
    </div>
  )
}

function ModuleCard({ mod, done, score, locked, onOpen }) {
  return (
    <div
      onClick={onOpen}
      style={{
        background: mod.bg, border: `1px solid ${mod.color}28`,
        borderRadius: 14, padding: '20px', cursor: locked ? 'not-allowed' : 'pointer',
        transition: 'transform 0.15s, box-shadow 0.15s',
        opacity: locked ? 0.42 : 1, position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => { if (!locked) { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 10px 28px ${mod.color}20` } }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      {/* Badge + Icon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 10, color: mod.color, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
            {mod.level}
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em' }}>{mod.title}</div>
          <div style={{ fontSize: 13, fontFamily: '"Noto Serif JP", serif', color: 'rgba(255,255,255,0.4)', marginTop: 1 }}>{mod.sub}</div>
        </div>
        <div style={{ fontSize: 30, fontFamily: '"Noto Serif JP", serif', color: mod.color, opacity: 0.85 }}>{mod.icon}</div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', margin: '0 0 14px', lineHeight: 1.6 }}>{mod.desc}</p>

      {/* Progress (if done) */}
      {done && (
        <>
          <div style={{ height: 1, background: `${mod.color}25`, marginBottom: 10 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
            <span>Quiz terbaik</span>
            <span style={{ color: mod.color, fontWeight: 600 }}>{score}%</span>
          </div>
          <ProgressBar value={score} max={100} color={mod.color} height={3} />
        </>
      )}

      {/* Badges */}
      {locked && (
        <div style={{ position: 'absolute', top: 14, right: 14, fontSize: 16 }}>🔒</div>
      )}
      {done && !locked && (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          width: 20, height: 20, background: mod.color, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff',
        }}>✓</div>
      )}
    </div>
  )
}
