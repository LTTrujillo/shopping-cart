import React, { Component } from 'react'
import CartHeader from './components/cart-header.js'
import CartItems from './components/cart-items.js'
import AddItem from './components/add-item.js'
import CartFooter from './components/cart-footer.js'


class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        products : [
          { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
          { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
          { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
          { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
          { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
          { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
          { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
          { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
          { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
        ],
        cartList: [],
        name: "" ,
        id: 0,
        quantity: 0,
        price: 0,
        total: 0
      }
      
  }

  addQuantity = (e) => this.setState({quantity: e.target.value})


  addName = (e) => {
    e.preventDefault()
    this.setState({
      name: e.target.value
      })
      let selectedItem = this.state.products.filter(item => item.name === e.target.value)
        this.setState({
          price: selectedItem[0].priceInCents/100,
          id : selectedItem[0].id
        })
    }





  addItem = (e) => {
    e.preventDefault()
    let newItem = {
      product: { 
        id: this.state.id,
        name: this.state.name,
        price: this.state.price * this.state.quantity
      }, 
      quantity: this.state.quantity
    }
    this.setState({
      cartList: [newItem, ...this.state.cartList]
    })
}





  render() {
 
 
    return (
      <div>
        <CartHeader />
        <CartItems cartItemsList={this.state.cartList} />
        <AddItem 
          products={this.state.products} 
          addQuantity={this.addQuantity} 
          total={this.state.total}
          addName={this.addName}  
          addItem={this.addItem} />
        <CartFooter copyright={'© 2018'} />     
      </div>
    ) 
  }
}

export default App;
