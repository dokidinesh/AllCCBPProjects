import './index.css'

const CountryCard = props => {
  const {countryDetails, onClickRemove} = props
  const {id, imageUrl, name} = countryDetails

  const onClickRemoveButton = () => {
    onClickRemove(id)
  }

  return (
    <li className="visited-country-container">
      <img className="country-image" src={imageUrl} alt="thumbnail" />
      <div className="visited-country-text-container">
        <p>{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={onClickRemoveButton}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryCard
