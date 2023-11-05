import './index.css'

const Country = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitButton = () => {
    onClickVisit(id)
  }

  const buttonText = isVisited ? (
    <p className="visited-text">Visited</p>
  ) : (
    <button type="button" className="visit-button" onClick={onClickVisitButton}>
      Visit
    </button>
  )
  return (
    <li className="country-container">
      <p className="each-country-title">{name}</p>
      {buttonText}
    </li>
  )
}

export default Country
