import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  width: 33%;
  font-family: Roboto;
  font-size: 13px;
`

export const VideoImageDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ThumbnailImage = styled.img`
  width: 300px;
  height: 180px;
`

export const ChannelProfileImage = styled.img`
  width: 50px;
  height: 50px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  padding: 20px;
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const ViewCountPublishedContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CustomParagraph = styled.p`
  margin-top: 0px;
  margin-left: 5px;
`
