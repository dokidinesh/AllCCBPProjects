import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 70px;
  height: 10vh;
  font-family: Roboto;
  background-color: ${props => (props.isLightTheme ? '' : '#212121')};
`

export const ThemeLogoutContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LogoImage = styled.img`
  height: 30px;
  width: 150px;
  margin-bottom: 0px;
`

export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 20px;
`

export const LogoutButton = styled.button`
  padding: 10px 20px;
  margin-left: 20px;
  cursor: pointer;
  border: solid 2px #3b82f6;
  border-radius: 5px;
  font-weight: bold;
  color: #3b82f6;
  background-color: transparent;
  font-size: 15px;
`
