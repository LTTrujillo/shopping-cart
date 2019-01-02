import React, { Component } from 'react'
class AddItem extends Component {

   
render() {
    const productItems = this.props.productItemOptions.map((productItems, idx) => {
        return (
            <option key = {idx}>{productItems.name}</option>
        )       
    });
    return (
        <div className = "container">
            <div className="form-group">
                <div>
                    <label>Quantity:</label>
                    <br></br>
                    <input></input>
                </div>   
                <label htmlFor="sel1">Products:</label>
                <select className="form-control" id="sel1">
                    <option  disabled>Pick a  Product</option>
                    {productItems}
                </select>
                <br></br>
                <input className="btn btn-primary" type="submit" value="Submit"></input>  
            </div>
        </div> 
    )
  }
}
export default AddItem