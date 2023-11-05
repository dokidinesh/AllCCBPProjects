import Header from '../Header'
import SideNavBar from '../SideNavbar'
import SavedVideosContext from '../../context/SavedVideosContext'
import VideoCard from '../VideoCard'

import {
  AppContainer,
  HomePageContainer,
  BodyContainer,
  BannerSearchResultsContainer,
} from './styledComponents'

const SavedVideos = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {isLightTheme, savedVideosList, changeTheme} = value

      return (
        <AppContainer isLightTheme={isLightTheme}>
          <HomePageContainer
            isLightTheme={isLightTheme}
            data-testid="savedVideos"
          >
            <Header isLightTheme={isLightTheme} onChangeTheme={changeTheme} />
            <BodyContainer>
              <SideNavBar />
              {savedVideosList.length > 0 ? (
                <BannerSearchResultsContainer>
                  <h1>Saved Videos</h1>
                  <ul>
                    {savedVideosList.map(eachVideo => (
                      <VideoCard videoItem={eachVideo} key={eachVideo.id} />
                    ))}
                  </ul>
                </BannerSearchResultsContainer>
              ) : (
                <BannerSearchResultsContainer>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                    className="not-found-image"
                  />
                  <h1 className="not-found-heading">No saved videos found</h1>
                  <p>You can save your videos while watching them</p>
                </BannerSearchResultsContainer>
              )}
            </BodyContainer>
          </HomePageContainer>
        </AppContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default SavedVideos
