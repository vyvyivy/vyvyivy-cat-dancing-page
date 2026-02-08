import '../styles/AnimationControls.css'

function AnimationControls({ isAnimating, onToggle }) {
  return (
    <div className="controls-container">
      <button
        className={`control-button ${isAnimating ? 'active' : ''}`}
        onClick={onToggle}
        aria-label={isAnimating ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isAnimating ? (
          <>
            <span className="icon">⏸️</span>
            <span>춤 정지</span>
          </>
        ) : (
          <>
            <span className="icon">▶️</span>
            <span>춤 시작</span>
          </>
        )}
      </button>

      <div className="control-info">
        <p>스페이스바로도 조작할 수 있습니다!</p>
      </div>
    </div>
  )
}

export default AnimationControls
