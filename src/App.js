import { useState, useEffect } from 'react'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import './styles/App.css'

function App() {
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault()
        setIsAnimating(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🐱 춤추는 고양이</h1>
        <p>고양이의 신나는 춤을 즐겨보세요!</p>
      </header>

      <main className="app-main">
        <DancingCat isAnimating={isAnimating} />
        <AnimationControls isAnimating={isAnimating} onToggle={toggleAnimation} />
      </main>

      <footer className="app-footer">
        <p>© 2024 Dancing Cat Animation</p>
      </footer>
    </div>
  )
}

export default App
