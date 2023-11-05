import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 80%;
  margin: auto;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
  overflow-y: auto;
`

export const BodyContainer = styled.div`
  display: flex;
`

export const BannerSearchResultsContainer = styled.div`
  flex-direction: column;
  width: 80%;
`
