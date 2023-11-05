import {Component} from 'react'
// import Popup from 'reactjs-popup'
import {
  BannerContainer,
  BannerLogo,
  BannerButton,
  CloseButton,
  ButtonContainer,
} from './styledComponents'
// import './index.css'

class VideosBanner extends Component {
  state = {isClosed: false}

  onClickCloseButton = () => {
    this.setState(prevState => ({isClosed: !prevState.isClosed}))
  }

  render() {
    const {isClosed} = this.state

    const displayClass = isClosed
    return (
      <BannerContainer displayClass={displayClass} data-testid="banner">
        <div>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />

          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </div>
        <ButtonContainer>
          <CloseButton
            type="button"
            onClick={this.onClickCloseButton}
            data-testid="close"
          >
            x
          </CloseButton>
        </ButtonContainer>
      </BannerContainer>
    )
  }
}
export default VideosBanner
