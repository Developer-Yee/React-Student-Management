import React from 'react';
import CustomerDelete from './CustomereDelete';

class Customer extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.rank}</td>
                <td>{this.props.name}</td>
                <td>{this.props.task}</td>
                <td>{this.props.volume}</td>
                <td>{this.props.check}</td>
                <td><CustomerDelete stateRefresh={this.props.stateRefresh} name = {this.props.name}/></td>
            </tr>
        )
    }
}

export default Customer;