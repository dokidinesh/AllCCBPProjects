import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const HomePageContainer = styled.div`
  height: 100vh;
  margin: auto;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
  overflow-y: auto;
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 80%;
`

export const BodyContainer = styled.div`
  display: flex;
`

export const BannerSearchResultsContainer = styled.div`
  flex-direction: column;
`

export const VideoViewsButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ViewCountPublishedContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
`

export const SaveLikeButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
`

export const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
`

export const VideoDetailsContainer = styled.div`
  padding: 10px;
`

export const VideoDisplayContainer = styled.div`
  width: 70%;
`
