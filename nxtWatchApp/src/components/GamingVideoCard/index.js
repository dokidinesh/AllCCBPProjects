import {Link} from 'react-router-dom'
import {
  VideoCardContainer,
  VideoDetailsContainer,
  ThumbNailImage,
} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext'

const TrendingVideoCard = props => {
  const {videoItem} = props
  const {
    id,
    channelName,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoItem

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <VideoCardContainer>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer isLightTheme={isLightTheme}>
                <div>
                  <p>{title}</p>
                  <p>{channelName}</p>
                  <div>
                    <p>{viewCount}</p>
                    <p>{publishedAt}</p>
                  </div>
                </div>
              </VideoDetailsContainer>
            </VideoCardContainer>
          </Link>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default TrendingVideoCard
