import React from 'react';
import CustomerDelete from './CustomereDelete';
import { text } from 'body-parser';
import {Checkbox} from 'react-bootstrap';

class Information extends React.Component {
    render() {
        return(
            
                <tr>
                    <td><input type="checkbox" /></td>
                    <td></td>
                    <td>{this.props.task}</td>
                    <td>{this.props.volume}</td>
                    <td></td>
                </tr>
        )
    }
}

export default Information;