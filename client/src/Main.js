import React, { Component } from 'react';
import CustomerAdd from './components/CustomerAdd';
import Customer from './components/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Form, FormControl, Breadcrumb, Table} from 'react-bootstrap';

class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
        customers: '',
        completed: 0,
        searchKeyword: ''
      }
    }
  
    stateRefresh = () => {
      this.setState({
        customers: '',
        completed: 0,
        searchKeyword: ''
      });
      this.callApi()
        .then(res => this.setState({customers: res}))
        .catch(err => console.log(err));
    }
  
    componentDidMount() {
      this.callApi()
        .then(res => this.setState({customers: res}))
        .catch(err => console.log(err));
    }
  
    callApi = async () => {
      const response = await fetch('/api/customers');
      const body = await response.json();
      return body;
    }
  
    handleValueChange = (e) => {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }
  
    render() {
      const filteredComponents = (data, grade) => {
        data = data.filter((c) => {
          return c.name.indexOf(this.state.searchKeyword) > -1;
        });
        return data.map(c => {
            if(c.grade == grade)
                return ( <Customer stateRefresh={this.stateRefresh} rank={c.rank} name={c.name} task={c.task} volume={c.volume} isChecked={c.isChecked}/>)
        });
      }
      return(
        <div>
          <Navbar>
            <Form class="col text-center">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" name="searchKeyword" value={this.state.searchKeyword} onChange={this.handleValueChange}/>
            </Form>
          </Navbar>
          <Breadcrumb>
            <Breadcrumb.Item active>고등학교 1학년</Breadcrumb.Item>
          </Breadcrumb>
          <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>반</th>
                <th>이름</th>
                <th></th>
                <th>과제</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers ? filteredComponents(this.state.customers, '고1') : ""}
            </tbody>
          </Table>
          <Breadcrumb>
            <Breadcrumb.Item active>고등학교 2학년</Breadcrumb.Item>
          </Breadcrumb>
          <Table responsive="sm">
            <thead>
              <tr>
              <th>반</th>
                <th>이름</th>
                <th></th>
                <th>과제</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {this.state.customers ? filteredComponents(this.state.customers, '고2') : ""}
            </tbody>
          </Table>
          <Breadcrumb>
            <Breadcrumb.Item active>고등학교 3학년</Breadcrumb.Item>
          </Breadcrumb>
          <Table responsive="sm">
            <thead>
              <tr>
              <th>반</th>
                <th>이름</th>
                <th></th>
                <th>과제</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {this.state.customers ? filteredComponents(this.state.customers, '고3') : ""}
            </tbody>
          </Table>
          </div>
        </div>
      );
    }
  }

export default Main;