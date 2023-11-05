import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import SideNavBar from '../SideNavbar'
import Header from '../Header'
import SavedVideoContext from '../../context/SavedVideosContext'
import {
  AppContainer,
  HomePageContainer,
  BodyContainer,
  BannerSearchResultsContainer,
  VideoViewsButtonsContainer,
  SaveLikeButtonsContainer,
  ViewCountPublishedContainer,
  ChannelImage,
  ChannelDetailsContainer,
  VideoDetailsContainer,
  VideoDisplayContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDisplay extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const JWTToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JWTToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const videoData = await response.json()
      const updatedVideoDetails = {
        channelName: videoData.video_details.channel.name,
        channelImageUrl: videoData.video_details.channel.profile_image_url,
        channelSubscribers: videoData.video_details.channel.subscriber_count,
        videoDescription: videoData.video_details.description,
        publishedAt: videoData.video_details.published_at,
        thumbnailUrl: videoData.video_details.thumbnail_url,
        title: videoData.video_details.title,
        videoUrl: videoData.video_details.video_url,
        viewCount: videoData.video_details.view_count,
      }
      this.setState({
        videoDetails: updatedVideoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => (
    <SavedVideoContext.Consumer>
      {value => {
        const {addVideo, isLightTheme, changeTheme} = value
        const {videoDetails} = this.state
        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          channelName,
          channelImageUrl,
          channelSubscribers,
          videoDescription,
        } = videoDetails
        const onClickSaveButton = () => {
          addVideo(videoDetails)
        }

        return (
          <AppContainer>
            <HomePageContainer
              data-testid="videoItemDetails"
              isLightTheme={isLightTheme}
            >
              <Header isLightTheme={isLightTheme} changeTheme={changeTheme} />
              <BodyContainer>
                <SideNavBar />
                <VideoDisplayContainer>
                  <ReactPlayer
                    url={videoUrl}
                    width={980}
                    height={500}
                    controls
                  />
                  <VideoDetailsContainer>
                    <p>{title}</p>
                    <VideoViewsButtonsContainer>
                      <ViewCountPublishedContainer>
                        <p>{viewCount} views</p>
                        <p>{publishedAt}</p>
                      </ViewCountPublishedContainer>
                      <SaveLikeButtonsContainer>
                        <button type="button">Like</button>
                        <button type="button">Dislike</button>
                        <button type="button" onClick={onClickSaveButton}>
                          Save
                        </button>
                      </SaveLikeButtonsContainer>
                    </VideoViewsButtonsContainer>

                    <ChannelDetailsContainer>
                      <ChannelImage src={channelImageUrl} alt="channel logo" />
                      <div>
                        <p>{channelName}</p>
                        <p>{channelSubscribers} subscribers</p>
                        <p>{videoDescription}</p>
                      </div>
                    </ChannelDetailsContainer>
                  </VideoDetailsContainer>
                </VideoDisplayContainer>
              </BodyContainer>
            </HomePageContainer>
          </AppContainer>
        )
      }}
    </SavedVideoContext.Consumer>
  )

  onClickRetry = () => {
    this.getVideoDetails()
  }

  renderLoadingView = () => (
    <SavedVideoContext.Consumer>
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
                    <input type="search" />
                    <button type="button">search icon</button>
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
    </SavedVideoContext.Consumer>
  )

  renderFailureView = () => (
    <SavedVideoContext.Consumer>
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
                    <input type="search" />
                    <button type="button">search icon</button>
                    <div>
                      <img src={failureImgUrl} alt="failure view" />
                      <h1>Oops! Something Went Wrong</h1>
                      <p>
                        We are having some trouble to complete your request.
                        Please try again.
                      </p>

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
    </SavedVideoContext.Consumer>
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

export default VideoDisplay
