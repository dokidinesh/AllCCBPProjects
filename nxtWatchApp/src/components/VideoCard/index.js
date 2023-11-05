import {Link} from 'react-router-dom'
import {
  VideoCardContainer,
  ThumbnailImage,
  ChannelProfileImage,
  VideoDetailsContainer,
  ViewCountPublishedContainer,
  CustomParagraph,
} from './StyledComponents'

import SavedVideosContext from '../../context/SavedVideosContext'

const VideoCard = props => {
  const {videoItem} = props
  const {
    id,
    channelName,
    channelProfileImageUrl,
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
          <VideoCardContainer>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <ThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-image"
              />

              <VideoDetailsContainer isLightTheme={isLightTheme}>
                <ChannelProfileImage
                  src={channelProfileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <CustomParagraph>{title}</CustomParagraph>
                  <CustomParagraph>{channelName}</CustomParagraph>
                  <ViewCountPublishedContainer>
                    <CustomParagraph>{viewCount}</CustomParagraph>
                    <CustomParagraph>{publishedAt}</CustomParagraph>
                  </ViewCountPublishedContainer>
                </div>
              </VideoDetailsContainer>
            </Link>
          </VideoCardContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default VideoCard
