import Header from '../Header'
import VideoItemsList from '../VideoItemsList'
import SideNavBar from '../SideNavbar'
import VideosBanner from '../VideosBanner'
import SavedVideoContext from '../../context/SavedVideosContext'
import {
  AppContainer,
  HomePageContainer,
  BodyContainer,
  BannerSearchResultsContainer,
} from './styledComponents'

const Home = () => (
  <SavedVideoContext.Consumer>
    {value => {
      const {isLightTheme} = value

      return (
        <AppContainer isLightTheme={isLightTheme}>
          <HomePageContainer data-testid="home" isLightTheme={isLightTheme}>
            <Header />
            <BodyContainer>
              <SideNavBar />
              <BannerSearchResultsContainer>
                <VideosBanner />
                <VideoItemsList />
              </BannerSearchResultsContainer>
            </BodyContainer>
          </HomePageContainer>
        </AppContainer>
      )
    }}
  </SavedVideoContext.Consumer>
)

export default Home
