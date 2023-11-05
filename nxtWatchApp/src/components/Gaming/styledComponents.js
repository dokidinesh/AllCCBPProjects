import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
`

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 80%;
  margin: auto;
  background-color: ${props => (props.isLightTheme ? '#ffffff' : '#0f0f0f')};
`

export const BodyContainer = styled.div`
  display: flex;
`

export const BannerSearchResultsContainer = styled.div`
  flex-direction: column;
  width: 80%;
`

export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 75vh;
  overflow-y: auto;
`

export const CustomHeading = styled.h1`
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
`
