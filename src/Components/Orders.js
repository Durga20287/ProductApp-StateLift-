import React, { Component } from 'react'
import OrdersInfo from './OrdersInfo'
import AddressInfo from './AddressInfo'
import Summary from './Summary'

export class Orders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ProductName:" ",
            Quentity: " ",
            Address:" "
        }
       
    }
    OnQuentityHandler=(val)=>{
        this.setState({Quentity:val})
    }
    OnProductHandler=(val)=>{
        this.setState({ProductName:val})
    }
    
    OnAddressHandler=(val)=>{
        this.setState({Address:val})
    }
    Getdata=()=>{
        console.log(this.state.Quentity +" "+this.state.ProductName+" "+this.state.Address)
    }

    render() {
        return (
            <div>
                <h1>Welcome to products order screen...</h1>
                <hr />
                <OrdersInfo Quentity={this.state.Quentity} 
                            ontitynQuechange={this.OnQuentityHandler}
                            ProductName={this.state.ProductName}
                            onProductChange={this.OnProductHandler}
                            />
                <button onClick={this.Getdata}> submit</button>
                <hr />
                <AddressInfo Address={this.state.Address}
                            onAddressChange={this.OnAddressHandler} />
                <hr />
                <Summary ProductName={this.state.ProductName}
                         Quentity={this.state.Quentity}
                         Address={this.state.Address} />
                <hr />
            </div>
        )
    }
}

export default Orders
