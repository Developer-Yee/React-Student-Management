import React from 'react';

class Customer extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.rank}</td>
                <td>{this.props.name}</td>
                <td>{this.props.task}</td>
                <td>{this.props.volume}</td>
                <td>{this.props.check}</td>
            </tr>
        )
    }
}

class CustomerProfile extends React.Component {
    render(){
        return(
            <div>
                <td>{this.props.rank})</td>
                <td>{this.props.name}</td>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render(){
        return(
            <div>
                <tr>{this.props.work1}</tr>
                <tr>{this.props.work2}</tr>
                <tr>{this.props.work3}</tr>
            </div> 
        )
    }
}

export default Customer;