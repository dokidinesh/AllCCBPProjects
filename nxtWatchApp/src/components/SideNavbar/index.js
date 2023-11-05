import {Link} from 'react-router-dom'
import {
  SideNavbarContainer,
  SideNavbarTabsContainer,
  ContactUsContainer,
  CustomListItem,
  ContactUsDescription,
  ContactUsHeading,
  SocialMediaContainer,
  CustomImage,
} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext'

const SideNavBar = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {isLightTheme} = value

      return (
        <SideNavbarContainer isLightTheme={isLightTheme}>
          <SideNavbarTabsContainer>
            <Link to="/" style={{textDecoration: 'none'}}>
              <CustomListItem isLightTheme={isLightTheme}>Home</CustomListItem>
            </Link>
            <Link to="/trending" style={{textDecoration: 'none'}}>
              <CustomListItem isLightTheme={isLightTheme}>
                Trending Videos
              </CustomListItem>
            </Link>
            <Link to="/gaming" style={{textDecoration: 'none'}}>
              <CustomListItem isLightTheme={isLightTheme}>
                Gaming
              </CustomListItem>
            </Link>
            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <CustomListItem isLightTheme={isLightTheme}>
                Saved Videos
              </CustomListItem>
            </Link>
          </SideNavbarTabsContainer>

          <ContactUsContainer>
            <ContactUsHeading isLightTheme={isLightTheme}>
              CONTACT US
            </ContactUsHeading>
            <SocialMediaContainer>
              <CustomImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <CustomImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <CustomImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>

            <ContactUsDescription isLightTheme={isLightTheme}>
              Enjoy! now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </SideNavbarContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default SideNavBar
