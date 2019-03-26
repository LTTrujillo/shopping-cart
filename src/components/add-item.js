import React, { Component } from 'react'
class AddItem extends Component {

render() {
    return (
      <div>
        
        <div className = "container">
        <p>Grand Total: ${this.props.finalTotal}</p>
          <form onSubmit = {this.props.addItem}> 
              <div className="form-group">
                  <div>
                      <label>Quantity:</label>
                      <br></br>
                      <input onChange ={this.props.addQuantity}></input>
                  </div>   
                  <label htmlFor="sel1">Products:</label>
                  <select className="form-control" id="sel1" onChange={this.props.addName}>
                      <option>Please select a product</option>
                      {this.props.products.map(
                          product => <option key={product.id} value={product.name}>{product.name}</option>)}
                  </select>
                  <br></br>
                  <input className="btn btn-primary" type="submit"  value="Submit" onClick={this.props.addItem}></input>  
              </div>
          </form>
        </div>
      </div>
    ) 
  }
}
export default AddItem