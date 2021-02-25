import React from 'react';
import CustomerDelete from './CustomereDelete';
import { text } from 'body-parser';
import {Checkbox} from 'react-bootstrap';

class Information extends React.Component {
    render() {
        return(
            <div>
                <tr>
                    <td><input type="checkbox" checked/></td>
                    <td>{this.props.task}</td>
                    <td>{this.props.volume}</td>
                    {/* <td><CustomerDelete stateRefresh={this.props.stateRefresh} name = {this.props.name}/></td> */}
                    <td></td>
                </tr>
            </div>
        )
    }
}

export default Information;