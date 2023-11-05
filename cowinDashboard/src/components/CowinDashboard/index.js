// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    last7DaysVaccinationData: [],
    vaccinationByAgeData: [],
    vaccinationByGenderData: [],
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)
    if (response.ok === true) {
      const vaccinationData = await response.json()
      const last7DaysVaccinationData = vaccinationData.last_7_days_vaccination.map(
        eachObject => ({
          dose1: eachObject.dose_1,
          dose2: eachObject.dose_2,
          vaccineDate: eachObject.vaccine_date,
        }),
      )
      const vaccinationByAgeData = vaccinationData.vaccination_by_age
      const vaccinationByGenderData = vaccinationData.vaccination_by_gender
      this.setState({
        vaccinationByAgeData,
        vaccinationByGenderData,
        last7DaysVaccinationData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {
      last7DaysVaccinationData,
      vaccinationByAgeData,
      vaccinationByGenderData,
    } = this.state

    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo-image"
          />
          <h1>Co-WIN</h1>
        </div>
        <h1 className="dashboard-title">CoWIN Vaccination in India</h1>
        <VaccinationCoverage data={last7DaysVaccinationData} />
        <VaccinationByGender data={vaccinationByGenderData} />
        <VaccinationByAge data={vaccinationByAgeData} />
      </div>
    )
  }

  renderFailureView = () => (
    <div className="app-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
          className="logo-image"
        />
        <h1>Co-WIN</h1>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="dashboard-title">Something went wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default CowinDashboard
