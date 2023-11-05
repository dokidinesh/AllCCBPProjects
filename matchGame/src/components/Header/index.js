import './index.css'

const Header = props => {
  const {score, time} = props
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo-image"
      />
      <ul className="score-time-container">
        <li>
          <p>Score: {score}</p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{time} Sec</p>
        </li>
      </ul>
    </div>
  )
}
export default Header
