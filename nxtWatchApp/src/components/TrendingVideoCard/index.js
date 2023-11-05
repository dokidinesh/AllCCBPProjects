import {Link} from 'react-router-dom'
import {
  VideoCardContainer,
  VideoDetailsContainer,
  ThumbnailImage,
  PublishedViewCountContainer,
  VideoHeading,
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
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer isLightTheme={isLightTheme}>
                <VideoHeading>{title}</VideoHeading>
                <p>{channelName}</p>
                <PublishedViewCountContainer>
                  <p>{viewCount}</p>
                  <p>{publishedAt}</p>
                </PublishedViewCountContainer>
              </VideoDetailsContainer>
            </VideoCardContainer>
          </Link>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default TrendingVideoCard
