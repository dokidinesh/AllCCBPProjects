import './App.css'
import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import SavedPassword from './components/SavedPassword'

class App extends Component {
  state = {
    passwordsList: [],
    inputPassword: '',
    inputUsername: '',
    inputWebsite: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({inputUsername: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({inputWebsite: event.target.value})
  }

  onChangeSearchInput = event => {
    const searchInputValue = event.target.value

    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachPassword =>
          eachPassword.password.toLowerCase().includes(searchInputValue) ===
          true,
      ),
    }))
  }

  onChangeShowPassword = event => {
    console.log(event.target.checked)
    if (event.target.checked === true) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  onDeletePassword = passwordId => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachPassword => eachPassword.id !== passwordId,
      ),
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {inputPassword, inputUsername, inputWebsite} = this.state
    const newRecord = {
      id: uuidV4(),
      username: inputUsername,
      password: inputPassword,
      website: inputWebsite,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newRecord],
      inputPassword: '',
      inputUsername: '',
      inputWebsite: '',
    }))
  }

  render() {
    const {
      passwordsList,
      showPassword,
      inputPassword,
      inputUsername,
      inputWebsite,
    } = this.state
    const passwordCount = passwordsList.length
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="website-logo"
        />
        <div className="form-inputs-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1>Add New Password</h1>
            <div className="icon-input-container">
              <div className="icon-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon-image"
                />
              </div>

              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={inputWebsite}
              />
            </div>
            <div className="icon-input-container">
              <div className="icon-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon-image"
                />
              </div>

              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={inputUsername}
              />
            </div>

            <div className="icon-input-container">
              <div className="icon-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon-image"
                />
              </div>

              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={inputPassword}
              />
            </div>

            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="passwords-display-container">
          <div className="title-search-container">
            <h1>Your Passwords</h1>
            <p>{passwordCount}</p>

            <div className="icon-input-container">
              <div className="icon-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="icon-image"
                />
              </div>

              <input
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="passwords-container">
            <div>
              <input
                type="checkbox"
                id="showPassword"
                onChange={this.onChangeShowPassword}
              />
              <label htmlFor="showPassword">Show Passwords</label>
            </div>
            {passwordsList.length > 0 ? (
              <ul>
                {passwordsList.map(eachPassword => (
                  <SavedPassword
                    key={eachPassword.id}
                    passwordDetails={eachPassword}
                    showPassword={showPassword}
                    onDeletePassword={this.onDeletePassword}
                  />
                ))}
              </ul>
            ) : (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="password-manager-image"
                />
                <p>No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
