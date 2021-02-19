import './App.css';
import React, { Component } from 'react';
import CustomerAdd from './components/CustomerAdd';
import Customer from './components/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';

class App extends Component {

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

  render() 
  {
    const filteredComponents = (data) => {
      data = data.filter((c) => {
        return c.name.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map(c => {
        return ( <Customer stateRefresh={this.stateRefresh} rank={c.rank} name={c.name} task={c.task} volume={c.volume} check={c.check} />)
      });
    }
    const { classes } = this.props;
    return (
      <main>
        <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">이강체크표</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#main">메인</Nav.Link>
            <Nav.Link href="#student">학생</Nav.Link>
            <Nav.Link href="#management">관리</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" name="searchKeyword" value={this.state.searchKeyword} onChange={this.handleValueChange}/>
          </Form>
        </Navbar>
        <Breadcrumb>
          <Breadcrumb.Item active>고등학교 1학년</Breadcrumb.Item>
        </Breadcrumb>
        </div>
        <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>반</th>
              <th>이름</th>
              <th></th>
              <th>과제</th>
              <th></th>
              <th>설정</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers ? filteredComponents(this.state.customers) : ""}
          </tbody>
        </Table>
        </div>
        <div>
          <CustomerAdd stateRefresh={this.stateRefresh}/>
        </div>
      </main>
    );
  }
}
export default App;
