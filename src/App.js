import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';

const customers = [{
  'rank' : 1,
  'name' : '홍길동',
  'work1' : '개념원리',
  'work2' : '고쟁이',
  'work3' : 'TEST'
},
{
  'rank' : 2,
  'name' : '한성희',
  'work1' : '개념원리',
  'work2' : '고쟁이',
  'work3' : 'TEST'
},
{
  'rank' : 3,
  'name' : '이순신',
  'work1' : '개념원리',
  'work2' : '고쟁이',
  'work3' : 'TEST'
}
]

class App extends Component {
  render() 
  {
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
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
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
            </tr>
          </thead>
          <tbody>
            {customers.map(c => { return ( <Customer key={c.name} rank={c.rank} name={c.name} work1={c.work1} work2={c.work2} work3={c.work3} />)})}
          </tbody>
        </Table>
        </div>
      </main>
    );
  }
}
export default App;
