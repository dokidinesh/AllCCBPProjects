import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'
import RegisterContext from '../../context/RegisterContext'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic} = value

      if (name === '' && topic === '') {
        return (
          <div>
            <Header />
            <div className="home-page-container">
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button type="button" className="register-button">
                  Register
                </button>
              </Link>

              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          </div>
        )
      }
      return (
        <div>
          <Header />
          <div className="home-page-container">
            <h1>Hello {name}</h1>
            <p>Welcome to the {topic}</p>
            <button type="button" className="register-button">
              Register
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
