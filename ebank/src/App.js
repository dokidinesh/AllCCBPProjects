import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import NotFound from './NotFound'
import Login from './Login'
import Home from './Home'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ebank/login" component={Login} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
