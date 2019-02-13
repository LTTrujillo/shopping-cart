import React, { Component } from 'react'
class AddItem extends Component {

   
render() {

    return (
        <div className = "container">
        <p>Total Price: ${this.props.total}</p>
        <form onSubmit = {this.props.addItem}> 
            <div className="form-group">
                <div>
                    <label>Quantity:</label>
                    <br></br>
                    <input onChange ={this.props.addQuantity}></input>
                </div>   
                <label htmlFor="sel1">Products:</label>
                <select className="form-control" id="sel1" onChange={this.props.addName}>
                    {this.props.products.map(
                        product => <option key={product.id} value={product.name}>{product.name}</option>)}
                </select>
                <br></br>
                <input className="btn btn-primary" type="submit" value="Submit" onClick={this.props.addItem}></input>  
            </div>
        </form>
        </div>
    ) 
  }
}
export default AddItem