import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import DetailedRestaurantPage from './components/DetailedRestaurantPage'

import './App.css'

import LoginPage from './components/LoginPage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={Home} />
      <Route exact path="/restaurant/:id" component={DetailedRestaurantPage} />
    </Switch>
  </BrowserRouter>
)

export default App
