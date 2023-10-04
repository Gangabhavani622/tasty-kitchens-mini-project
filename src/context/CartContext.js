import React from 'react'

const CartContext = React.createContext({
  cartItems: [],
  activePage: 'Home',
})
localStorage.setItem('cartItems', CartContext.cartItems)

export default CartContext
