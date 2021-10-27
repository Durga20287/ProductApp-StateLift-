import React, { Component } from 'react'

export class OrdersInfo extends Component {


    render() {
        return (
            <div>
                <h2>Order information</h2>
                <label>ProductName : </label>
                <select value={this.props.ProductName}
                onChange={(e) => this.props.onProductChange(e.target.value)} >

                    <option >--select-</option>
                    <option>Laptop</option>
                    <option>Mobile</option>
                    <option>Desktop</option>
                    <option>Washing Mechine</option>
                    <option>Air Conditionar</option>
                    <option>Refregirator</option>
                </select>
                <br /> <br />

                <label>Enter Quentity : </label>
                <input type="text" value={this.props.Quentity} 
                onChange={(e) => this.props.ontitynQuechange(e.target.value)} />
                <br />


            </div>
        )
    }
}

export default OrdersInfo
