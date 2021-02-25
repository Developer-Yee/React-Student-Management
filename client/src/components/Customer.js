import React from 'react';
import CustomerDelete from './CustomereDelete';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { text } from 'body-parser';

class Customer extends React.Component {
    render() {
        var highlight = {
            backgroundColor: ""
        }
        if(this.props.isChecked == 1) {
            var highlight = {
                // backgroundColor: "#1DDB16" //Green Color
                backgroundColor: "yellow"
            }
        }
        else {
            var highlight = {
                backgroundColor: ""
            }
        }
        var name = this.props.name;
        return(
            <tr>
                <td>{this.props.rank}</td>
                <td><Link to={{pathname: `/student/`, state: {name : this.props.name}}} style={{ color: '#000000' }} >{this.props.name}</Link></td>
                <td></td>
                <td><span style={highlight}>{this.props.task}</span></td>
                <td><span style={highlight}>{this.props.volume}</span></td>
                {/* <td><CustomerDelete stateRefresh={this.props.stateRefresh} name = {this.props.name}/></td> */}
            </tr>
        )
    }
}

export default Customer;