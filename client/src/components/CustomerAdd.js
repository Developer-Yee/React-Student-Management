import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component {
    constructor(pros) {
        super(pros);
        this.state = {
            name: "",
            grade: "",
            rank: ""
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                // console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            name: '',
            grade: '',
            rank: ''
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        // const formData = new FormData();
        // formData.append('name', this.state.name);
        // formData.append('grade', this.state.grade);
        // formData.append('rank', this.state.rank);
        return post(url, {name : this.state.name, grade : this.state.grade, rank : this.state.rank}) .then(function (response) { console.log(response); }) .catch(error => { console.log('error : ',error.response) });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                    이름: <input type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /><br/>
                    학년: <input type="text" name="grade" value={this.state.grade} onChange={this.handleValueChange} /><br/>
                    반: <input type="text" name="rank" value={this.state.rank} onChange={this.handleValueChange} /><br/>
                    <button type="submit">추가하기</button>
            </form>        
        )
    }
}

export default CustomerAdd;