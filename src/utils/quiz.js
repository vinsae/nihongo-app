// utils/quiz.js
import {
  HIRAGANA_BASE, HIRAGANA_DAKUTEN, HIRAGANA_COMBO,
  KATAKANA_BASE, KATAKANA_DAKUTEN, KATAKANA_COMBO,
  VOCAB, KANJI_N5,
} from '../data.js'

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickOthers(pool, exclude, key, n) {
  const others = pool.filter(x => x !== exclude && x[key] !== exclude[key])
  return shuffle(others).slice(0, n).map(x => x[key])
}

export function buildQuiz(moduleId, count = 10) {
  if (moduleId === 'hiragana') {
    const pool = [...HIRAGANA_BASE, ...HIRAGANA_DAKUTEN, ...HIRAGANA_COMBO]
    return shuffle(pool).slice(0, count).map(h => ({
      q: h.char,
      label: 'Apa bunyi huruf hiragana ini?',
      answer: h.romaji,
      choices: shuffle([h.romaji, ...pickOthers(pool, h, 'romaji', 3)]),
    }))
  }
  if (moduleId === 'katakana') {
    const pool = [...KATAKANA_BASE, ...KATAKANA_DAKUTEN, ...KATAKANA_COMBO]
    return shuffle(pool).slice(0, count).map(k => ({
      q: k.char,
      label: 'Apa bunyi huruf katakana ini?',
      answer: k.romaji,
      choices: shuffle([k.romaji, ...pickOthers(pool, k, 'romaji', 3)]),
    }))
  }
  if (moduleId === 'kanji') {
    return shuffle(KANJI_N5).slice(0, count).map(k => ({
      q: k.k,
      label: 'Apa arti kanji ini?',
      answer: k.m,
      choices: shuffle([k.m, ...pickOthers(KANJI_N5, k, 'm', 3)]),
    }))
  }
  if (moduleId === 'vocabulary') {
    const all = Object.values(VOCAB).flat()
    return shuffle(all).slice(0, count).map(v => ({
      q: v.jp,
      label: 'Apa artinya?',
      answer: v.meaning,
      choices: shuffle([v.meaning, ...pickOthers(all, v, 'meaning', 3)]),
    }))
  }
  return []
}
