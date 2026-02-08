import catSvg from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

function DancingCat({ isAnimating }) {

  return (
    <div className={`dancing-cat-container ${isAnimating ? 'active' : ''}`}>
      <div className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>
      <div className={`dance-indicator ${isAnimating ? 'active' : ''}`}>
        {isAnimating ? '💃🎵 춤을 추고 있어요!' : '👋 버튼을 클릭해서 춤을 춰보세요!'}
      </div>
    </div>
  )
}

export default DancingCat
