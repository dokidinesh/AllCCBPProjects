import './App.css'
import {Component} from 'react'
import GreetingCard from './components/GreetingCard'
import Header from './components/Header'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: 'english',
    allCardsList: languageGreetingsList,
  }

  onClickLanguageButton = value => {
    this.setState({
      searchInput: value,
      allCardsList: languageGreetingsList,
    })
  }

  render() {
    const {searchInput, allCardsList} = this.state

    const searchResults = allCardsList.filter(
      eachCard => eachCard.imageAltText === searchInput,
    )

    return (
      <div className="app-container">
        <h1>Multilingual Greetings</h1>
        <div className="button-container">
          {languageGreetingsList.map(eachCard => (
            <Header
              key={eachCard.id}
              buttonText={eachCard.buttonText}
              imageAltText={eachCard.imageAltText}
              isActive={searchInput === eachCard.imageAltText}
              onClickLanguageButton={this.onClickLanguageButton}
            />
          ))}
        </div>
        <ul>
          {searchResults.map(eachCard => (
            <GreetingCard
              key={eachCard.id}
              imageUrl={eachCard.imageUrl}
              imageAltText={eachCard.imageAltText}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
