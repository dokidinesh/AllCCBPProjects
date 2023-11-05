import './App.css'
import {Component} from 'react'

// Replace your code here
class App extends Component {
  state = {
    userInput: '',
    isClicked: false,
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickButton = () => {
    const {isClicked} = this.state
    this.setState({isClicked: !isClicked})
  }

  render() {
    const {isClicked, userInput} = this.state
    return (
      <div className="app-container">
        <div className="input-container">
          <h1>Editable Text Input</h1>
          <div className="text-container">
            {!isClicked && (
              <div>
                <input
                  type="text"
                  onChange={this.onChangeInput}
                  value={userInput}
                />
                <button type="button" onClick={this.onClickButton}>
                  Save
                </button>
              </div>
            )}
            {isClicked && (
              <div>
                <p>{userInput}</p>
                <button type="button" onClick={this.onClickButton}>
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
