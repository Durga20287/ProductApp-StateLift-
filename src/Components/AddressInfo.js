import React, { Component } from 'react'

export class AddressInfo extends Component {
    render() {
        return (
            <div>
                <h2>Address information</h2>
                <label>Address : </label>
                <textarea value={this.props.Address}
                 onChange={(e)=> this.props.onAddressChange(e.target.value)}></textarea>
                
            </div>
        )
    }
}

export default AddressInfo
