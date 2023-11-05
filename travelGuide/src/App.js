import './App.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PackageCard from './components/PackageCard'

// Replace your code here
class App extends Component {
  state = {packagesList: [], isLoading: false}

  componentDidMount() {
    this.getPackagesList()
  }

  getPackagesList = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.packages.map(eachPackage => ({
        name: eachPackage.name,
        id: eachPackage.id,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))
      this.setState({packagesList: updatedData, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderSuccessView = () => {
    const {packagesList} = this.state

    return (
      <div>
        <h1>Travel Guide</h1>
        <ul>
          {packagesList.map(eachPackage => (
            <PackageCard key={eachPackage.id} packageDetails={eachPackage} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>{isLoading ? this.renderLoadingView() : this.renderSuccessView()}</>
    )
  }
}

export default App
