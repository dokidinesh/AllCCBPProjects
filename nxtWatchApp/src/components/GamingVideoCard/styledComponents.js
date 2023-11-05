import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-family: Roboto;
`

export const VideoDetailsContainer = styled.div`
  padding-left: 20px;
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
`

export const ThumbNailImage = styled.img`
  height: 300px;
  width: 200px;
`
