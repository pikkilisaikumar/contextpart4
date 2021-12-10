import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  totalItemDelete: () => {},
})

export default CartContext
