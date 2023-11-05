import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDisplay from './components/VideoDisplay'
import SavedVideoContext from './context/SavedVideosContext'

// Replace your code here
class App extends Component {
  state = {
    savedVideosList: [],
    isLightTheme: true,
  }

  addVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  render() {
    const {savedVideosList, isLightTheme} = this.state
    return (
      <SavedVideoContext.Provider
        value={{
          savedVideosList,
          addVideo: this.addVideo,
          changeTheme: this.changeTheme,
          isLightTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDisplay} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SavedVideoContext.Provider>
    )
  }
}

export default App
