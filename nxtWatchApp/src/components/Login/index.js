import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  LoginPageContainer,
  CustomInput,
  CustomLabel,
  LoginButton,
  InputContainer,
  LogoImage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangeShowPassword = event => {
    const isChecked = event.target.checked
    this.setState({showPassword: isChecked})
  }

  onSubmitSuccess = JWTToken => {
    const {history} = this.props
    Cookies.set('jwt_token', JWTToken, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg, showPassword} = this.state
    console.log(showPassword)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const logoUrl = isLightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <LoginPageContainer isLightTheme={isLightTheme}>
              <LogoImage src={logoUrl} alt="website logo" />
              <form
                className="form-container"
                id="loginForm"
                onSubmit={this.onSubmitLoginForm}
              >
                <InputContainer>
                  <CustomLabel htmlFor="userName">USERNAME</CustomLabel>
                  <br />
                  <CustomInput
                    type="text"
                    id="userName"
                    placeholder="Username"
                    onChange={this.onChangeUsernameInput}
                  />
                </InputContainer>
                <InputContainer>
                  <CustomLabel htmlFor="password">PASSWORD</CustomLabel>
                  <br />
                  <CustomInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    onChange={this.onChangePasswordInput}
                  />
                </InputContainer>
                <InputContainer>
                  <CustomInput
                    type="checkbox"
                    id="checkBox"
                    onChange={this.onChangeShowPassword}
                  />
                  <CustomLabel htmlFor="checkBox">Show Password</CustomLabel>
                </InputContainer>
                <LoginButton type="submit" className="login-button">
                  Login
                </LoginButton>
                {showSubmitError && <p>{errorMsg}</p>}
              </form>
            </LoginPageContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Login
