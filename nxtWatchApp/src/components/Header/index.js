import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import SavedVideosContext from '../../context/SavedVideosContext'
import 'reactjs-popup/dist/index.css'

import {
  HeaderContainer,
  ThemeLogoutContainer,
  LogoutButton,
  LogoImage,
  ProfileImage,
} from './styledComponents'

const Header = props => (
  <SavedVideosContext.Consumer>
    {value => {
      const {changeTheme, isLightTheme} = value

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      const onClickThemeButton = () => {
        changeTheme()
      }

      const logoUrl = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      return (
        <HeaderContainer isLightTheme={isLightTheme}>
          <div>
            <Link to="/">
              <LogoImage src={logoUrl} alt="website logo" />
            </Link>
          </div>

          <ThemeLogoutContainer>
            <button
              type="button"
              data-testid="theme"
              onClick={onClickThemeButton}
            >
              change theme
            </button>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <div className="popup-container">
              <Popup modal trigger={<LogoutButton>Logout</LogoutButton>}>
                {close => (
                  <>
                    <div>
                      <p>Are you sure, you want to logout?</p>
                    </div>
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </button>
                  </>
                )}
              </Popup>
            </div>
          </ThemeLogoutContainer>
        </HeaderContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)
export default withRouter(Header)
