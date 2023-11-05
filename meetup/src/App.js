import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Register from './components/Register'
import RegisterContext from './context/RegisterContext'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {name: '', topic: ''}

  onChangeInput = object => {
    this.setState({
      name: object.name,
      topic: object.topic,
    })
  }

  render() {
    const {name, topic} = this.state
    return (
      <RegisterContext.Provider
        value={{name, topic, onChangeInput: this.onChangeInput}}
      >
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
