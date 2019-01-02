import React, { Component } from 'react'
import CartItem from './cart-item.js'

class CartItems extends Component {
    
    render() {
      
      const cartItems = this.props.cartItemsList.map((cartItem,idx) => {
          return (
              <CartItem 
                key={idx}
                product={cartItem.product} 
                quantity={cartItem.quantity} />
          )
      });
      return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
        </div>
          {cartItems}
        </div>
      </div>
      )
    }
  }
export default CartItems