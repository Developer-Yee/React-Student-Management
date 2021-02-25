import React, { Component } from 'react';
import Main from './Main';
import Student from './Student';
import Management from './Management';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Nav, Navbar, Form, FormControl, Breadcrumb, Table} from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class App extends Component {

  render() 
  {
    return (
        <BrowserRouter>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>이강체크표</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/main">메인</Nav.Link>
              {/* <Nav.Link href="/student">학생</Nav.Link> */}
              <Nav.Link href="/management">관리</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path='/' component={Main} /> 
            <Route path='/main' component={Main} /> 
            <Route path='/student' component={Student} /> 
            <Route path='/management' component={Management} /> 
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;