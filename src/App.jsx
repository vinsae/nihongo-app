// App.jsx — root component
import { useState, useEffect, useCallback } from 'react'
import { loadProgress, saveProgress, updateStreak } from './storage.js'
import HomePage   from './components/HomePage.jsx'
import ModulePage from './components/ModulePage.jsx'

export default function App() {
  const [page,       setPage]       = useState('home')   // 'home' | 'module'
  const [currentMod, setCurrentMod] = useState(null)
  const [progress,   setProgress]   = useState(() => loadProgress())

  // Update streak on mount (once per day)
  useEffect(() => {
    const updated = updateStreak(progress)
    if (updated.streak !== progress.streak || updated.lastStudyDate !== progress.lastStudyDate) {
      setProgress(updated)
      saveProgress(updated)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const openModule = useCallback((mod) => {
    setCurrentMod(mod)
    setPage('module')
  }, [])

  const goHome = useCallback(() => setPage('home'), [])

  const handleSaveProgress = useCallback((modId, score, xpEarned) => {
    setProgress(prev => {
      const next = {
        ...prev,
        completedModules: [...new Set([...prev.completedModules, modId])],
        quizScores: {
          ...prev.quizScores,
          [modId]: Math.max(prev.quizScores?.[modId] || 0, score),
        },
        totalXP: (prev.totalXP || 0) + xpEarned,
      }
      saveProgress(next)
      return next
    })
  }, [])

  if (page === 'home') {
    return (
      <HomePage
        progress={progress}
        onOpen={openModule}
      />
    )
  }

  if (page === 'module' && currentMod) {
    return (
      <ModulePage
        mod={currentMod}
        progress={progress}
        onBack={goHome}
        onSaveProgress={handleSaveProgress}
      />
    )
  }

  return null
}
