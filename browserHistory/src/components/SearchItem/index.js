import './index.css'

const SearchItem = props => {
  const {time, logoUrl, title, domainUrl, deleteItem, uniqueNo} = props
  const onDelete = () => {
    deleteItem(uniqueNo)
  }
  return (
    <div>
      <li className="search-item">
        <p className="search-item-time">{time}</p>
        <img src={logoUrl} alt="domain logo" className="search-item-logo" />
        <div className="domain-container">
          <p className="search-item-title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>

        <button
          data-testid="delete"
          type="button"
          className="search-delete-button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    </div>
  )
}

export default SearchItem
