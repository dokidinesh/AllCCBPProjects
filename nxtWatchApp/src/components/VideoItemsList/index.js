import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import VideoCard from '../VideoCard'

import {
  VideosContainer,
  VideosSearchContainer,
  SearchInput,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemsList extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    searchValue: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState(
      {searchValue: searchInput, searchInput: ''},
      this.getVideosList,
    )
  }

  getVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {searchValue} = this.state
    const JWTToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {videosList, searchInput} = this.state
    const {isLightTheme} = this.props
    return (
      <VideosSearchContainer>
        <SearchInput
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
          placeholder="Search"
        />
        <button
          type="button"
          data-testid="searchButton"
          onClick={this.onClickSearchButton}
        >
          search icon
        </button>
        {videosList.length > 0 ? (
          <VideosContainer isLightTheme={isLightTheme}>
            {videosList.map(eachVideo => (
              <VideoCard key={eachVideo.id} videoItem={eachVideo} />
            ))}
          </VideosContainer>
        ) : (
          <VideosContainer>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <h1>No Search results found</h1>
            <p>Try different key words or remove search filter</p>
            <button type="button" onClick={this.onClickRetry}>
              Retry
            </button>
          </VideosContainer>
        )}
      </VideosSearchContainer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getVideosList()
  }

  renderFailureView = () => {
    const {isLightTheme} = this.props

    const failureViewImageUrl = isLightTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <div>
        <img src={failureViewImageUrl} alt="failure view" />
        <h1>Oops! Something Went Wrong</h1>
        <p>We are having some trouble to complete your request.</p>
        <p>Please try again</p>
        <button type="button" onClick={this.onClickRetry}>
          Retry
        </button>
      </div>
    )
  }

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

export default VideoItemsList
