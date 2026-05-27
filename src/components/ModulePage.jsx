// components/ModulePage.jsx
import { useState, useCallback } from 'react'
import {
  HIRAGANA_BASE, HIRAGANA_DAKUTEN, HIRAGANA_COMBO,
  KATAKANA_BASE, KATAKANA_DAKUTEN, KATAKANA_COMBO,
  VOCAB, KANJI_N5, GRAMMAR, CONVERSATION,
} from '../data.js'
import { buildQuiz } from '../utils/quiz.js'
import { ProgressBar, FlipCard, KanjiCard, VocabCard, Btn } from './UI.jsx'

// ── Audio helper ─────────────────────────────────────────────────────────────
function speak(text) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'ja-JP'
  u.rate = 0.85
  window.speechSynthesis.speak(u)
}

// ── ModulePage ────────────────────────────────────────────────────────────────
export default function ModulePage({ mod, progress, onBack, onSaveProgress }) {
  const [tab, setTab] = useState('learn')
  const c = mod.color

  return (
    <div style={{ minHeight: '100vh', background: '#0b0f1a', color: '#f0ece4', fontFamily: '"DM Sans", sans-serif' }}>
      {/* Header */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16,
        position: 'sticky', top: 0, background: '#0b0f1a', zIndex: 10,
      }}>
        <button
          onClick={onBack}
          style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)',
            color: '#f0ece4', borderRadius: 8, padding: '7px 14px', cursor: 'pointer', fontSize: 13,
          }}
        >← Kembali</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>
            {mod.title}{' '}
            <span style={{ fontFamily: '"Noto Serif JP", serif', color: 'rgba(255,255,255,0.35)', fontSize: 14 }}>{mod.sub}</span>
          </div>
          <div style={{ fontSize: 11, color: '#8890a4' }}>{mod.level} · {mod.total} item</div>
        </div>
      </header>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '24px 24px' }}>
        {/* Tabs */}
        <div style={{
          display: 'flex', gap: 4, marginBottom: 28,
          background: 'rgba(255,255,255,0.04)', borderRadius: 10,
          padding: 4, width: 'fit-content',
        }}>
          <Btn variant={tab === 'learn' ? 'tab-on' : 'tab-off'} color={c} onClick={() => setTab('learn')}>📖 Belajar</Btn>
          {['hiragana', 'katakana', 'kanji', 'vocabulary'].includes(mod.id) && (
            <Btn variant={tab === 'quiz' ? 'tab-on' : 'tab-off'} color={c} onClick={() => setTab('quiz')}>🎯 Quiz</Btn>
          )}
        </div>

        {tab === 'learn' && <LearnContent mod={mod} c={c} />}
        {tab === 'quiz'  && <QuizContent  mod={mod} c={c} progress={progress} onSaveProgress={onSaveProgress} />}
      </div>
    </div>
  )
}

// ── LEARN CONTENT ─────────────────────────────────────────────────────────────
function LearnContent({ mod, c }) {
  if (mod.id === 'hiragana') return <HiraganaLearn c={c} />
  if (mod.id === 'katakana') return <KatakanaLearn c={c} />
  if (mod.id === 'vocabulary') return <VocabLearn c={c} />
  if (mod.id === 'grammar')    return <GrammarLearn c={c} />
  if (mod.id === 'kanji')      return <KanjiLearn c={c} />
  if (mod.id === 'conversation') return <ConversationLearn c={c} />
  return null
}

// ── HIRAGANA ──────────────────────────────────────────────────────────────────
function HiraganaLearn({ c }) {
  const [section, setSection] = useState('base')
  const sections = { base: HIRAGANA_BASE, dakuten: HIRAGANA_DAKUTEN, combo: HIRAGANA_COMBO }
  const labels = {
    base:    { label: '46 Dasar', desc: 'あ い う え お — huruf dasar hiragana. Hafal baris per baris.' },
    dakuten: { label: '+ Dakuten', desc: 'Huruf bersuara (が ざ だ ば) dan semi-suara (ぱ). Ditambah tanda ゛ atau ゜.' },
    combo:   { label: '+ Kombinasi', desc: 'Dua huruf digabung: きゃ (kya), しゃ (sha), dll. Huruf kecil や ゆ よ.' },
  }

  const groups = [...new Set(sections[section].map(h => h.group))]

  return (
    <div>
      <InfoBox color={c} text="Klik kartu untuk flip — lihat bacaan romaji. Klik lagi untuk balik." />

      {/* Section tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {Object.entries(labels).map(([k, v]) => (
          <button key={k} onClick={() => setSection(k)} style={{
            padding: '7px 16px', borderRadius: 20, fontSize: 12, fontWeight: 500,
            cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)',
            background: section === k ? c : 'transparent',
            color: section === k ? '#fff' : 'rgba(255,255,255,0.5)',
            transition: 'all 0.2s',
          }}>{v.label}</button>
        ))}
      </div>
      <p style={{ fontSize: 13, color: '#8890a4', marginBottom: 24 }}>{labels[section].desc}</p>

      {groups.map(group => (
        <div key={group} style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, color: c, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
            baris {group}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {sections[section].filter(h => h.group === group).map(h => (
              <FlipCard key={h.char} char={h.char} romaji={h.romaji} color={c} />
            ))}
          </div>
        </div>
      ))}

      <TipBox color={c} title="Tips Hiragana" text="Mulai dari baris あ (a i u e o) lalu ka, sa, ta, na, ha, ma, ya, ra, wa, n. Tulis ulang berulang kali sambil mengucapkan bunyinya. Target hafal 5 huruf per hari." />
    </div>
  )
}

// ── KATAKANA ──────────────────────────────────────────────────────────────────
function KatakanaLearn({ c }) {
  const [section, setSection] = useState('base')
  const sections = { base: KATAKANA_BASE, dakuten: KATAKANA_DAKUTEN, combo: KATAKANA_COMBO }
  const labels = {
    base:    { label: '46 Dasar', desc: 'Bunyi sama dengan Hiragana, tapi bentuk berbeda. Dipakai untuk kata serapan & nama asing.' },
    dakuten: { label: '+ Dakuten', desc: 'Versi bersuara Katakana: ガ ザ ダ バ パ dan seterusnya.' },
    combo:   { label: '+ Kombinasi', desc: 'キャ シャ チャ dll. Sering muncul pada kata serapan bahasa asing.' },
  }
  const groups = [...new Set(sections[section].map(k => k.group))]

  return (
    <div>
      <InfoBox color={c} text="Contoh kata Katakana: テレビ (TV), コーヒー (kopi), スマートフォン (smartphone), レストラン (restoran)" />

      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {Object.entries(labels).map(([k, v]) => (
          <button key={k} onClick={() => setSection(k)} style={{
            padding: '7px 16px', borderRadius: 20, fontSize: 12, fontWeight: 500,
            cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)',
            background: section === k ? c : 'transparent',
            color: section === k ? '#fff' : 'rgba(255,255,255,0.5)',
            transition: 'all 0.2s',
          }}>{v.label}</button>
        ))}
      </div>
      <p style={{ fontSize: 13, color: '#8890a4', marginBottom: 24 }}>{labels[section].desc}</p>

      {groups.map(group => (
        <div key={group} style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, color: c, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>baris {group}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {sections[section].filter(k => k.group === group).map(k => (
              <FlipCard key={k.char} char={k.char} romaji={k.romaji} color={c} />
            ))}
          </div>
        </div>
      ))}

      <TipBox color={c} title="Tips Katakana" text="Setelah hafal Hiragana, Katakana jauh lebih mudah karena bunyinya sama persis. Coba baca nama-nama di kemasan produk Jepang untuk latihan." />
    </div>
  )
}

// ── VOCABULARY ────────────────────────────────────────────────────────────────
const VOCAB_CATS = {
  greetings: '👋 Sapaan',
  numbers:   '🔢 Angka',
  colors:    '🎨 Warna',
  family:    '👨‍👩‍👧 Keluarga',
  food:      '🍜 Makanan',
  time:      '⏰ Waktu',
  verbs:     '⚡ Kata Kerja',
  body:      '🫀 Tubuh',
  places:    '📍 Tempat',
}

function VocabLearn({ c }) {
  const [cat, setCat] = useState('greetings')
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
        {Object.entries(VOCAB_CATS).map(([k, label]) => (
          <button key={k} onClick={() => setCat(k)} style={{
            padding: '7px 14px', borderRadius: 20, fontSize: 12, fontWeight: 500,
            cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)',
            background: cat === k ? c : 'transparent',
            color: cat === k ? '#fff' : 'rgba(255,255,255,0.5)',
            transition: 'all 0.2s', whiteSpace: 'nowrap',
          }}>{label}</button>
        ))}
      </div>
      <InfoBox color={c} text="Klik kartu untuk lihat arti. Klik 🔊 untuk dengar pengucapan (butuh speaker)." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10, marginTop: 16 }}>
        {(VOCAB[cat] || []).map((v, i) => (
          <VocabCard key={i} item={v} color={c} onSpeak={speak} />
        ))}
      </div>
    </div>
  )
}

// ── GRAMMAR ───────────────────────────────────────────────────────────────────
function GrammarLearn({ c }) {
  const [idx, setIdx] = useState(0)
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
        {GRAMMAR.map((g, i) => (
          <button key={g.id} onClick={() => setIdx(i)} style={{
            padding: '7px 16px', borderRadius: 20, fontSize: 12, fontWeight: 500,
            cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)',
            background: idx === i ? c : 'transparent',
            color: idx === i ? '#fff' : 'rgba(255,255,255,0.5)',
            transition: 'all 0.2s',
          }}>{g.icon} {g.title}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gap: 10 }}>
        {GRAMMAR[idx].items.map((item, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 10, padding: '14px 16px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: c }}>{item.term}</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', flexShrink: 0 }}>{item.desc}</span>
            </div>
            {item.ex && (
              <div style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 8,
                padding: '10px 14px', borderLeft: `2px solid ${c}60`,
              }}>
                <div
                  style={{ fontSize: 16, fontFamily: '"Noto Serif JP", serif', marginBottom: 4, cursor: 'pointer' }}
                  onClick={() => speak(item.ex)}
                  title="Klik untuk dengar"
                >
                  {item.ex} <span style={{ fontSize: 12, color: c }}>🔊</span>
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{item.tr}</div>
              </div>
            )}
            {item.tip && (
              <div style={{ fontSize: 12, color: '#f4a261', marginTop: 8, opacity: 0.8 }}>
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
  const [search, setSearch] = useState('')
  const filtered = KANJI_N5.filter(k =>
    k.k.includes(search) || k.m.toLowerCase().includes(search.toLowerCase()) ||
    k.on.includes(search) || k.kun.includes(search)
  )
  return (
    <div>
      <InfoBox color={c} text="Klik kartu untuk melihat arti dan cara baca (on-yomi & kun-yomi). Target hafal 5 kanji per hari!" />

      <input
        placeholder="Cari kanji, arti, atau bacaan…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%', maxWidth: 300, padding: '9px 14px', borderRadius: 8, fontSize: 13,
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
          color: '#f0ece4', outline: 'none', marginBottom: 20,
          fontFamily: '"DM Sans", sans-serif',
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {filtered.map((k, i) => <KanjiCard key={i} kanji={k} />)}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: '#8890a4', fontSize: 14, textAlign: 'center', marginTop: 24 }}>Tidak ditemukan.</p>
      )}

      <TipBox color={c} title="Tips Kanji" text="Fokus pada makna dulu sebelum cara baca. Visualisasikan: 山 mirip puncak gunung, 川 mirip aliran sungai. Tulis berulang sambil ucapkan artinya." />
    </div>
  )
}

// ── CONVERSATION ──────────────────────────────────────────────────────────────
function ConversationLearn({ c }) {
  const [idx, setIdx] = useState(0)
  const conv = CONVERSATION[idx]

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
        {CONVERSATION.map((cv, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            padding: '7px 14px', borderRadius: 20, fontSize: 12, fontWeight: 500,
            cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)',
            background: idx === i ? cv.color : 'transparent',
            color: idx === i ? '#fff' : 'rgba(255,255,255,0.5)',
            transition: 'all 0.2s', whiteSpace: 'nowrap',
          }}>{cv.icon} {cv.situation}</button>
        ))}
      </div>

      <InfoBox color={conv.color} text="Klik 🔊 untuk mendengar pengucapan. Latih dengan teknik shadowing: dengar lalu tirukan langsung." />

      <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
        {conv.phrases.map((p, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)',
            borderLeft: `3px solid ${conv.color}`,
            borderRadius: '0 10px 10px 0',
            padding: '14px 16px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 18, fontFamily: '"Noto Serif JP", serif', color: '#f0ece4', marginBottom: 4 }}>
                  {p.jp}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 6 }}>{p.romaji}</div>
                <div style={{ fontSize: 13, color: conv.color, fontWeight: 500 }}>{p.id}</div>
              </div>
              <button
                onClick={() => speak(p.jp)}
                style={{
                  background: 'transparent', border: 'none', fontSize: 18,
                  cursor: 'pointer', color: conv.color, flexShrink: 0, paddingLeft: 12,
                }}
                title="Dengarkan"
              >🔊</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── QUIZ CONTENT ──────────────────────────────────────────────────────────────
function QuizContent({ mod, c, progress, onSaveProgress }) {
  const [questions, setQuestions] = useState(() => buildQuiz(mod.id, 10))
  const [qIdx,     setQIdx]     = useState(0)
  const [selected, setSelected] = useState(null)
  const [score,    setScore]    = useState(0)
  const [finished, setFinished] = useState(false)

  const restart = useCallback(() => {
    setQuestions(buildQuiz(mod.id, 10))
    setQIdx(0); setSelected(null); setScore(0); setFinished(false)
  }, [mod.id])

  const handleAnswer = (choice) => {
    if (selected !== null) return
    setSelected(choice)
    const correct = choice === questions[qIdx].answer
    const ns = correct ? score + 1 : score
    if (correct) setScore(ns)
    setTimeout(() => {
      if (qIdx + 1 >= questions.length) {
        setFinished(true)
        const pct = Math.round((ns / questions.length) * 100)
        onSaveProgress(mod.id, pct, Math.round(pct * 0.5))
      } else {
        setQIdx(i => i + 1)
        setSelected(null)
      }
    }, 900)
  }

  if (finished) return <QuizResult score={score} total={questions.length} c={c} onRetry={restart} />

  const q = questions[qIdx]
  if (!q) return null

  const isVocab = mod.id === 'vocabulary'

  return (
    <div style={{ maxWidth: 480, margin: '0 auto' }}>
      {/* Progress bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
        <span>Soal {qIdx + 1} / {questions.length}</span>
        <span style={{ color: c, fontWeight: 600 }}>✦ {score} benar</span>
      </div>
      <ProgressBar value={qIdx + 1} max={questions.length} color={c} height={4} />

      {/* Question card */}
      <div style={{ textAlign: 'center', margin: '32px 0 28px' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 14, letterSpacing: '0.04em' }}>{q.label}</div>
        <div style={{
          fontSize: isVocab ? 26 : 68,
          fontFamily: '"Noto Serif JP", serif',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16, padding: '24px 32px',
          display: 'inline-block', minWidth: 130,
          color: '#f0ece4', lineHeight: 1.2,
        }}>
          {q.q}
        </div>
        <div style={{ marginTop: 14 }}>
          <button
            onClick={() => speak(q.q)}
            style={{ background: 'transparent', border: 'none', color: c, cursor: 'pointer', fontSize: 14 }}
          >🔊 Dengarkan</button>
        </div>
      </div>

      {/* Choices */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {q.choices.map((ch, i) => {
          const isCorrect  = ch === q.answer
          const isSelected = ch === selected
          let bg  = 'rgba(255,255,255,0.05)'
          let bor = 'rgba(255,255,255,0.09)'
          if (selected !== null) {
            if (isCorrect)        { bg = 'rgba(42,157,143,0.25)'; bor = '#2a9d8f' }
            else if (isSelected)  { bg = 'rgba(230,57,70,0.25)';  bor = '#e63946' }
          }
          return (
            <button key={i} onClick={() => handleAnswer(ch)} style={{
              background: bg, border: `1px solid ${bor}`,
              color: '#f0ece4', borderRadius: 10,
              padding: isVocab ? '12px 10px' : '18px 10px',
              cursor: selected ? 'default' : 'pointer',
              fontSize: isVocab ? 13 : 22,
              fontFamily: '"Noto Serif JP", serif',
              transition: 'all 0.15s', textAlign: 'center', lineHeight: 1.3,
            }}>
              {ch}
              {selected !== null && isCorrect && <span style={{ display: 'block', fontSize: 11, color: '#2a9d8f', marginTop: 4 }}>✓ Benar</span>}
              {selected !== null && isSelected && !isCorrect && <span style={{ display: 'block', fontSize: 11, color: '#e63946', marginTop: 4 }}>✗ Salah</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function QuizResult({ score, total, c, onRetry }) {
  const pct  = Math.round((score / total) * 100)
  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚'
  const msg   = pct >= 90 ? 'Luar Biasa!' : pct >= 70 ? 'Bagus Sekali!' : pct >= 50 ? 'Lumayan!' : 'Terus Berlatih!'

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center', padding: '32px 0' }}>
      <div style={{ fontSize: 60, marginBottom: 16 }}>{emoji}</div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 8px' }}>{msg}</h2>
      <p style={{ color: 'rgba(255,255,255,0.5)', margin: '0 0 28px' }}>
        Kamu benar <strong style={{ color: c }}>{score} dari {total}</strong> soal
      </p>
      <div style={{
        background: `${c}20`, border: `1px solid ${c}40`,
        borderRadius: 14, padding: '24px', marginBottom: 28,
      }}>
        <div style={{ fontSize: 42, fontWeight: 700, color: c }}>{pct}%</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
          {pct >= 80 ? '🌟 XP tersimpan!' : 'Coba lagi untuk XP lebih tinggi'}
        </div>
      </div>
      <button onClick={onRetry} style={{
        background: c, border: 'none', color: '#fff', borderRadius: 10,
        padding: '12px 28px', cursor: 'pointer', fontSize: 14, fontWeight: 500,
        fontFamily: '"DM Sans", sans-serif',
      }}>
        Coba Lagi 🔄
      </button>
    </div>
  )
}

// ── Helper UI ────────────────────────────────────────────────────────────────
function InfoBox({ color, text }) {
  return (
    <div style={{
      background: color + '12', border: `1px solid ${color}28`,
      borderRadius: 10, padding: '11px 14px', marginBottom: 20,
      fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
    }}>
      ℹ️ {text}
    </div>
  )
}

function TipBox({ color, title, text }) {
  return (
    <div style={{
      marginTop: 24, background: color + '12', border: `1px solid ${color}28`,
      borderRadius: 10, padding: '14px 16px',
      fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7,
    }}>
      <strong style={{ color }}>{title}:</strong> {text}
    </div>
  )
}
