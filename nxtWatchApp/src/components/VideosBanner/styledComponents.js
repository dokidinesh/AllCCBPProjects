import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 40vh;
  width: 100%;
  font-family: Roboto;
  display: ${props => (props.displayClass ? 'none' : 'flex')};
  justify-content: space-between;
  padding: 20px;
`

export const BannerLogo = styled.img`
  height: 50px;
  width: 200px;
`

export const BannerButton = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  border: 1px solid #231f20;
`

export const CloseButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const ButtonContainer = styled.div`
  padding: 1px;
`
