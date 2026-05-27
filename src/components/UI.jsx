// components/UI.jsx — shared components

// ── ProgressBar ──────────────────────────────────────────────────────────────
export function ProgressBar({ value, max, color, height = 4 }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div style={{ width: '100%', height, background: 'rgba(255,255,255,0.08)', borderRadius: height }}>
      <div style={{
        width: `${pct}%`, height: '100%', background: color,
        borderRadius: height, transition: 'width 0.5s ease',
      }} />
    </div>
  )
}

// ── FlipCard (hiragana / katakana) ───────────────────────────────────────────
export function FlipCard({ char, romaji, color, size = 'md' }) {
  const [flipped, setFlipped] = useState(false)
  const dim = size === 'lg' ? { w: 100, h: 116, fs: 38, bfs: 16 }
            : size === 'sm' ? { w: 60,  h: 70,  fs: 22, bfs: 11 }
            :                 { w: 76,  h: 88,  fs: 30, bfs: 13 }
  return (
    <div onClick={() => setFlipped(f => !f)} title={romaji}
      style={{ width: dim.w, height: dim.h, cursor: 'pointer', perspective: 600, flexShrink: 0 }}>
      <div style={{
        width: '100%', height: '100%', position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.35s ease',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>
        {/* Front */}
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: dim.fs, fontFamily: '"Noto Serif JP", serif', color: '#f0ece4',
          userSelect: 'none',
        }}>
          {char}
        </div>
        {/* Back */}
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          background: color + '28', border: `1px solid ${color}55`,
          borderRadius: 12, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 3,
          transform: 'rotateY(180deg)', userSelect: 'none',
        }}>
          <span style={{ fontSize: dim.bfs, fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>{romaji}</span>
          <span style={{ fontSize: 9, color: color, opacity: 0.8 }}>◀ klik balik</span>
        </div>
      </div>
    </div>
  )
}

// ── KanjiCard ────────────────────────────────────────────────────────────────
export function KanjiCard({ kanji }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div onClick={() => setFlipped(f => !f)}
      style={{ width: 96, height: 112, cursor: 'pointer', perspective: 600 }}>
      <div style={{
        width: '100%', height: '100%', position: 'relative',
        transformStyle: 'preserve-3d', transition: 'transform 0.35s ease',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 12, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 4, userSelect: 'none',
        }}>
          <span style={{ fontSize: 36, fontFamily: '"Noto Serif JP", serif', color: '#f0ece4' }}>{kanji.k}</span>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>klik</span>
        </div>
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          background: 'rgba(131,56,236,0.22)', border: '1px solid rgba(131,56,236,0.45)',
          borderRadius: 12, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 4,
          transform: 'rotateY(180deg)', padding: 8, userSelect: 'none',
        }}>
          <span style={{ fontSize: 36, fontFamily: '"Noto Serif JP", serif', color: '#f0ece4', lineHeight: 1 }}>{kanji.k}</span>
          <span style={{ fontSize: 11, color: '#c4b5fd', fontWeight: 600, textAlign: 'center' }}>{kanji.m}</span>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)' }}>音: {kanji.on}</span>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)' }}>訓: {kanji.kun}</span>
        </div>
      </div>
    </div>
  )
}

// ── VocabCard ────────────────────────────────────────────────────────────────
export function VocabCard({ item, color, onSpeak }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 10, padding: '12px 14px', cursor: 'pointer', transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = color + '44'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span
          onClick={() => setOpen(o => !o)}
          style={{ fontSize: 22, fontFamily: '"Noto Serif JP", serif', color: '#f0ece4', lineHeight: 1.3, flex: 1 }}
        >
          {item.jp}
        </span>
        <button
          onClick={() => onSpeak(item.jp)}
          style={{
            background: 'transparent', border: 'none', color: color,
            cursor: 'pointer', fontSize: 16, padding: '0 0 0 8px', flexShrink: 0,
          }}
          title="Dengarkan pengucapan"
        >🔊</button>
      </div>
      <div onClick={() => setOpen(o => !o)} style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>
        {item.romaji}
      </div>
      {open && (
        <div style={{
          marginTop: 8, paddingTop: 8, borderTop: `1px solid ${color}33`,
          fontSize: 13, color: '#f0ece4', fontWeight: 500,
        }}>
          {item.meaning}
        </div>
      )}
    </div>
  )
}

// ── Btn ──────────────────────────────────────────────────────────────────────
export function Btn({ children, onClick, variant = 'primary', color, style: s = {} }) {
  const base = {
    border: 'none', borderRadius: 10, padding: '10px 22px',
    cursor: 'pointer', fontSize: 13, fontWeight: 500,
    fontFamily: '"DM Sans", sans-serif', transition: 'all 0.15s',
    ...s,
  }
  if (variant === 'primary')   return <button onClick={onClick} style={{ ...base, background: color || '#e63946', color: '#fff' }}>{children}</button>
  if (variant === 'ghost')     return <button onClick={onClick} style={{ ...base, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#f0ece4' }}>{children}</button>
  if (variant === 'tab-on')    return <button onClick={onClick} style={{ ...base, background: color, color: '#fff', borderRadius: 8, padding: '8px 18px' }}>{children}</button>
  if (variant === 'tab-off')   return <button onClick={onClick} style={{ ...base, background: 'transparent', color: 'rgba(255,255,255,0.45)', borderRadius: 8, padding: '8px 18px' }}>{children}</button>
}

// need useState
import { useState } from 'react'
