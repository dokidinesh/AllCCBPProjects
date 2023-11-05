import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseCard from '../CourseCard'

import './index.css'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAl',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {coursesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCoursesList()
  }

  onClickRetry = () => {
    this.getCoursesList()
  }

  getCoursesList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.courses.map(eachCourse => ({
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
        id: eachCourse.id,
      }))
      this.setState({
        coursesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderSuccessView() {
    const {coursesList} = this.state
    return (
      <div className="app-container">
        <Header />
        <h1>Courses</h1>
        <ul className="courses-container">
          {coursesList.map(eachCourse => (
            <CourseCard key={eachCourse.id} courseDetails={eachCourse} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }
}

export default Home
