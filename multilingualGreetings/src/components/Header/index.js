import './index.css'

const Header = props => {
  const {buttonText, isActive, onClickLanguageButton, imageAltText} = props
  const activeClass = isActive
    ? 'language-button active'
    : 'language-button inactive'

  const onClickLanguage = event => {
    onClickLanguageButton(event.target.value)
  }

  return (
    <button
      type="button"
      className={activeClass}
      value={imageAltText}
      onClick={onClickLanguage}
    >
      {buttonText}
    </button>
  )
}

export default Header
