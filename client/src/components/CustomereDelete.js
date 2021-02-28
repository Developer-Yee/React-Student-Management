import React from 'react';

class CustomerDelete extends React.Component {

    deleteCustomer(name) {
        const url = 'api/customers/' + name;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td><button onClick={(e) => {this.deleteCustomer(this.props.name)}}>삭제</button></td>
            </tr>
        )
    }
}

export default CustomerDelete;