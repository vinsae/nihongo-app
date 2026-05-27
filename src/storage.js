// storage.js — wrapper localStorage yang safe (tidak crash saat private mode/error)

const KEY = 'nihongo_progress_v1'

export function loadProgress() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultProgress()
    return JSON.parse(raw)
  } catch {
    return defaultProgress()
  }
}

export function saveProgress(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    // silent fail (private mode, storage full, dll)
  }
}

export function defaultProgress() {
  return {
    completedModules: [],
    quizScores: {},
    totalXP: 0,
    streak: 0,
    lastStudyDate: null,
  }
}

export function updateStreak(progress) {
  const today = new Date().toDateString()
  const last = progress.lastStudyDate
  if (last === today) return progress

  const yesterday = new Date(Date.now() - 86400000).toDateString()
  const newStreak = last === yesterday ? (progress.streak || 0) + 1 : 1

  return { ...progress, streak: newStreak, lastStudyDate: today }
}
