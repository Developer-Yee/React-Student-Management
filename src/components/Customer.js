import React from 'react';

class Customer extends React.Component {
    render() {
        return(
            <tr>
                {/* <CustomerProfile rank={this.props.rank} name={this.props.name}/>
                <CustomerInfo work1={this.props.work1} work2={this.props.work2} work3={this.props.work3}/> */}
                <td>{this.props.rank}</td>
                <td>{this.props.name}</td>
                <td>{this.props.work1}</td>
                <td>{this.props.work2}</td>
                <td>{this.props.work3}</td>
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