import styled from 'styled-components'

export const SideNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 20%;
  font-family: Roboto;
  background-color: ${props => (props.isLightTheme ? '' : '#212121')};
  padding-left: 20px;
`

export const SideNavbarTabsContainer = styled.ul`
  height: 55vh;
  list-style-type: none;
  padding-left: 0px;
`

export const ContactUsContainer = styled.div`
  height: 30vh;
`

export const CustomListItem = styled.li`
  color: ${props => (props.isLightTheme ? '#424242' : '#e2e8f0')};
  padding: 10px;
`

export const ContactUsHeading = styled.p`
  color: ${props => (props.isLightTheme ? '#424242' : '#e2e8f0')};
`

export const ContactUsDescription = styled.p`
  color: ${props => (props.isLightTheme ? '#424242' : '#e2e8f0')};
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`

export const CustomImage = styled.img`
  height: 50px;
  width: 50px;
`
