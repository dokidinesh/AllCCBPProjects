import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './App.css'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'

// This is the list (static data) used in the application. You can move it to any component if needed.

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

// Replace your code here
class App extends Component {
  state = {
    projectsList: [],
    apiStatus: apiStatusConstants.initial,
    activeCategory: 'ALL',
  }

  componentDidMount() {
    this.getProjectsList()
  }

  getProjectsList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activeCategory} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${activeCategory}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.projects.map(eachProject => ({
        name: eachProject.name,
        imageUrl: eachProject.image_url,
        id: eachProject.id,
      }))
      this.setState({
        projectsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeCategory = event => {
    this.setState({activeCategory: event.target.value}, this.getProjectsList)
  }

  onClickRetry = () => {
    this.getProjectsList()
  }

  renderFailureView = () => (
    <div>
      <Header />
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {projectsList} = this.state
    return (
      <div>
        <Header />
        <select onChange={this.onChangeCategory}>
          {categoriesList.map(eachCategory => (
            <option value={eachCategory.id} key={eachCategory.id}>
              {eachCategory.displayText}
            </option>
          ))}
        </select>
        <ul>
          {projectsList.map(eachProject => (
            <ProjectCard key={eachProject.id} projectDetails={eachProject} />
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
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default App
