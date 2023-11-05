import {Component} from 'react'
import './index.css'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

class Register extends Component {
  topicsList = [
    {
      id: 'ARTS_AND_CULTURE',
      displayText: 'Arts and Culture',
    },
    {
      id: 'CAREER_AND_BUSINESS',
      displayText: 'Career and Business',
    },
    {
      id: 'EDUCATION_AND_LEARNING',
      displayText: 'Education and Learning',
    },
    {
      id: 'FASHION_AND_BEAUTY',
      displayText: 'Fashion and Learning',
    },
    {
      id: 'GAMES',
      displayText: 'Games',
    },
  ]

  render = () => {
    const {history} = this.props
    return (
      <RegisterContext.Consumer>
        {value => {
          const {onChangeInput} = value
          let name = ''
          let topic = ''
          const onChangeNameInput = event => {
            name = event.target.value
          }

          const onChangeTopic = event => {
            topic = event.target.value
          }

          let nameError

          const onClickRegisterButton = () => {
            if (name !== '') {
              onChangeInput({name, topic})
              history.replace('/')
            } else {
              nameError = true
            }
          }

          return (
            <div>
              <Header />
              <div className="login-page-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <form onSubmit={onClickRegisterButton}>
                  <h1>Let us join</h1>
                  <div>
                    <label htmlFor="nameInput">NAME</label>
                    <br />
                    <input id="nameInput" onChange={onChangeNameInput} />
                  </div>
                  <div>
                    <label htmlFor="selectTopic">TOPICS</label>
                    <br />
                    <select id="selectTopic" onChange={onChangeTopic}>
                      {this.topicsList.map(eachTopic => (
                        <option key={eachTopic.id} value={eachTopic.id}>
                          {eachTopic.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="register-button">
                    Register Now
                  </button>
                  {nameError ? <p>Please enter your name</p> : null}
                </form>
              </div>
            </div>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
