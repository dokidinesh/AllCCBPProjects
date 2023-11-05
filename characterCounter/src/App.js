import './App.css'
import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
// Replace your code here

class App extends Component {
  state = {
    charactersEntered: '',
    keywordsList: [],
  }

  onChangeInput = event => {
    this.setState({
      charactersEntered: event.target.value,
    })
  }

  onClickAddButton = () => {
    const {charactersEntered} = this.state
    this.setState(prevState => ({
      keywordsList: [
        ...prevState.keywordsList,
        {
          id: uuidV4(),
          keyword: charactersEntered,
          count: charactersEntered.length,
        },
      ],
      charactersEntered: '',
    }))
  }

  render() {
    const {charactersEntered, keywordsList} = this.state
    return (
      <div className="app-container">
        <div className="count-display-container">
          <h1 className="count-display-title">
            Count the characters like a Boss...
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="count-display-image"
            />
          </div>
          <div>
            <ul>
              {keywordsList.map(eachObject => (
                <li key={eachObject.id}>
                  <p>
                    {eachObject.keyword}: {eachObject.count}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="character-input-container col-md-12">
          <h1 className="character-input-title">Character Counter</h1>
          <form className="input-container row">
            <input
              className="input-element"
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
              value={charactersEntered}
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onClickAddButton}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
