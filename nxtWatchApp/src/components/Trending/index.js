import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import TrendingVideoCard from '../TrendingVideoCard'
import Header from '../Header'
import SideNavBar from '../SideNavbar'
import {
  AppContainer,
  HomePageContainer,
  BodyContainer,
  BannerSearchResultsContainer,
  CustomHeading,
} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    isLightTheme: true,
  }

  componentDidMount() {
    this.getVideosList()
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isLightTheme: !prevState.isLightTheme}))
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const JWTToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JWTToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedVideosList = data.videos.map(eachVideo => ({
        channelName: eachVideo.channel.name,
        channelProfileImageUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: updatedVideosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideosList()
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isLightTheme, changeTheme} = value
          return (
            <AppContainer isLightTheme={isLightTheme}>
              <HomePageContainer
                isLightTheme={isLightTheme}
                data-testid="trending"
              >
                <Header
                  isLightTheme={isLightTheme}
                  onChangeTheme={changeTheme}
                />
                <BodyContainer>
                  <SideNavBar />
                  <BannerSearchResultsContainer>
                    <div>
                      <CustomHeading isLightTheme={isLightTheme}>
                        Trending
                      </CustomHeading>
                      <ul>
                        {videosList.map(eachVideo => (
                          <TrendingVideoCard
                            key={eachVideo.id}
                            videoItem={eachVideo}
                          />
                        ))}
                      </ul>
                    </div>
                  </BannerSearchResultsContainer>
                </BodyContainer>
              </HomePageContainer>
            </AppContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isLightTheme, changeTheme} = value

        return (
          <AppContainer>
            <HomePageContainer isLightTheme={isLightTheme}>
              <Header changeTheme={changeTheme} isLightTheme={isLightTheme} />
              <BodyContainer>
                <SideNavBar />
                <BannerSearchResultsContainer>
                  <div>
                    <div className="loader-container" data-testid="loader">
                      <Loader
                        type="ThreeDots"
                        color="#ffffff"
                        height="50"
                        width="50"
                      />
                    </div>
                  </div>
                </BannerSearchResultsContainer>
              </BodyContainer>
            </HomePageContainer>
          </AppContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  renderFailureView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isLightTheme, changeTheme} = value
        const failureImgUrl = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <AppContainer isLightTheme={isLightTheme}>
            <HomePageContainer isLightTheme={isLightTheme}>
              <Header isLightTheme={isLightTheme} changeTheme={changeTheme} />
              <BodyContainer>
                <SideNavBar />
                <BannerSearchResultsContainer>
                  <div>
                    <div>
                      <img src={failureImgUrl} alt="failure view" />
                      <h1>Oops! Something Went Wrong</h1>
                      <p>
                        We are having some trouble to complete your request.
                      </p>
                      <p>Please try again</p>
                      <button type="button" onClick={this.onClickRetry}>
                        Retry
                      </button>
                    </div>
                  </div>
                </BannerSearchResultsContainer>
              </BodyContainer>
            </HomePageContainer>
          </AppContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default Trending
