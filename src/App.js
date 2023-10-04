import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import DetailedRestaurantPage from './components/DetailedRestaurantPage'
import LoginPage from './components/LoginPage'
// import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {cartItems: []}

  componentDidMount() {
    const cartItemsJSON = localStorage.getItem('cart_items')
    if (cartItemsJSON) {
      const cartItems = JSON.parse(cartItemsJSON)
      this.setState({cartItems})
    }
  }

  addCartItem = newItem => {
    const {cartItems} = this.state
    if (cartItems.length === 0) {
      const updatedItems = [...cartItems, newItem]
      this.setState({cartItems: updatedItems})
      localStorage.setItem('cart_items', JSON.stringify(updatedItems))
    }
    // } else {

    // }
  }

  render() {
    const {cartItems} = this.state
    console.log(cartItems)
    // localStorage.setItem('cart_items', [])

    // localStorage.setItem('cart_items', cartItems)
    console.log(localStorage.getItem('cartItems'))
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/restaurant/:id"
            component={DetailedRestaurantPage}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
