import React from 'react';

class CustomerDelete extends React.Component {

    deleteCustomer(name) {
        const url = 'api/customers/' + name;
        fetch(url, {
            method: 'DELETE'
        });
        alert(name);
        // this.props.stateRefersh();
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.name)}}>삭제</button>
        )
    }
}

export default CustomerDelete;