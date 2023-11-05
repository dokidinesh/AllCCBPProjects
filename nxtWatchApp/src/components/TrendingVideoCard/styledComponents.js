import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: Roboto;
`

export const ThumbnailImage = styled.img`
  height: 200px;
  width: 350px;
`
export const PublishedViewCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`

export const VideoDetailsContainer = styled.div`
  padding-left: 20px;
  width: 40%;
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
`

export const VideoHeading = styled.p``
