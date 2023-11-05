import Header from '../Header'
import SideNavBar from '../SideNavbar'
import './index.css'

const NotFound = () => (
  <div className="app-container">
    <div className="home-page-container">
      <Header />
      <div className="body-container">
        <SideNavBar />
        <div className="not-found-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="not found"
            className="not-found-image"
          />
          <h1 className="not-found-heading">Page Not Found</h1>
          <p>we are sorry, the page you requested could not be found.</p>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound
