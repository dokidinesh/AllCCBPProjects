import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#181818' : '#ffffff')};
`

export const HomePageContainer = styled.div`
  width: 80%;
  margin: auto;
  background-color: ${props => (props.isLightTheme ? '#ffffff' : '#181818')};
`

export const BodyContainer = styled.div`
  display: flex;
`

export const BannerSearchResultsContainer = styled.div`
  flex-direction: column;
  width: 80%;
  height: 90vh;
  overflow-y: auto;
`
