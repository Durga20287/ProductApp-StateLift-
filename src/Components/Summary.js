import React, { Component } from 'react'

export class Summary extends Component {
    render() {
        return (
            <div>
                <h2>Order Summary</h2>
                <label>Product Name : </label>
                <span>{this.props.ProductName}</span>
                <br/><br/>
                <label>Product Quentity : </label>
                <span>{this.props.Quentity}</span>
                <br/><br/>
                <label>Address : </label>
                <span>{this.props.Address}</span>
                <br/><br/>
                <button>Place order</button>
                
            </div>
        )
    }
}

export default Summary
