const SavedPassword = props => {
  const {passwordDetails, showPassword, onDeletePassword} = props
  const {id, username, password, website} = passwordDetails

  const onClickDeleteButton = () => {
    onDeletePassword(id)
  }
  return (
    <li>
      <p>{website}</p>
      <p>{username}</p>
      {showPassword ? (
        password
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      )}

      <button type="button" data-testid="delete" onClick={onClickDeleteButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SavedPassword
