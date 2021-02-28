import React from 'react';
import {post} from 'axios';
import stateRefresh from './Main';
import {Card, InputGroup, FormControl, Navbar, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerDelete from './components/CustomereDelete';
import './Management.css';

class Management extends React.Component {

    constructor(pros) {
        super(pros);
        this.state = {
            name: "",
            grade: "",
            rank: "",
            task: "",
            volume: "",
            customers: "",
            display1: "none",
            display2: "none",
            display3: "none",
            completed: 0,
            searchKeyword: "",
            option: "",
            content: ''
        }
    }

    stateRefresh = () => {
        this.setState({
          customers: '',
          completed: 0,
          searchKeyword: '',
          content: ''
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
        const response = await fetch('/api/customersDelete');
        const body = await response.json();
        return body;
      }
    
      handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
      }

    handleFormSubmit = (e) => {
        e.preventDefault()
        if(this.state.option == 'addgroubtask'){
            let _grade = "";
            let _rank = "";
            let _task = "";
            let _volume = "";
            _grade = this.state.grade;
            _rank = this.state.rank;
            _task = this.state.task;
            _volume = this.state.volume;
            this.addGroubTask()
                .then((response) => {
                    let yee = response.data;
                    for(let key in yee) {
                    post('/api/addGroubtasks', {name: yee[key].name, grade : _grade, rank : _rank, task : _task, volume : _volume});
                    // console.log(yee[key].name);
                    }
                    new stateRefresh();
                })
            }
        if(this.state.option == 'addcustomer'){
            this.addCustomer()
                .then((response) => {
                    new stateRefresh();
                })
            }
        this.setState({
            name: '',
            grade: '',
            rank: '',
            volume: '',
            task: '',
            option: ''
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addGroubTask = async () => {
        const url = '/api/customersInformation'
        return post(url, {grade : this.state.grade, rank : this.state.rank})
    }

    groubtaskChange = () => {
        this.state.option = 'addgroubtask';
    }

    customerChange = () => {
        this.state.option = 'addcustomer';
    }

    addCustomer = () => {
        const url = '/api/customers';
        // const formData = new FormData();
        // formData.append('name', this.state.name);
        // formData.append('grade', this.state.grade);
        // formData.append('rank', this.state.rank);
        return post(url, {name : this.state.name, grade : this.state.grade, rank : this.state.rank}) .then(function (response) { console.log(response); }) .catch(error => { console.log('error : ',error.response) });
    }

    show1 = () => {
        let element = document.getElementById("que-1-toggle");
        if(this.state.display1 === "none"){
            this.setState({display1: "block"});
            element.innerHTML = "-";

        }else{
            this.setState({display1: "none"});
            element.innerHTML = "+";
        }
    }

    show2 = () => {
        let element = document.getElementById("que-2-toggle");
        if(this.state.display2 === "none"){
            this.setState({display2: "block"});
            element.innerHTML = "-";

        }else{
            this.setState({display2: "none"});
            element.innerHTML = "+";
        }
    }

    show3 = () => {
        let element = document.getElementById("que-3-toggle");
        if(this.state.display3 === "none"){
            this.setState({display3: "block"});
            element.innerHTML = "-";

        }else{
            this.setState({display3: "none"});
            element.innerHTML = "+";
        }
    }

    render() {
        const filteredComponents = (data) => {
            data = data.filter((c) => {
              return c.name.indexOf(this.state.searchKeyword) > -1;
            });
            return data.map(c => {
                    return ( <CustomerDelete stateRefresh={this.stateRefresh} name={c.name}/>)
            });
          }
        return (
            <div>
                <div class="faq-content">
                    <button class="question" id="que-1" onClick={this.show1}>
                        <span id="que-1-toggle">+</span><span>숙제주기</span>
                    </button>
                </div>
                <div class="answer" id="ans-1" style={{display: this.state.display1}}>
                    <form onSubmit={this.handleFormSubmit}>
                    <div class="add_student">
                        <center>
                        <span class="gr_2">
                            <span class="gr_1">
                            <span class="gr">학년:</span>
                            <select name='grade' value={this.state.grade} onChange={this.handleValueChange}>
                                <option value="">선택</option>
                                <option>고1</option>
                                <option>고2</option>
                                <option>고3</option>
                                <option>중1</option>
                                <option>중2</option>
                                <option>중3</option>
                            </select>
                            </span>
                            <span class="gr">반:</span>
                            <select name='rank' value={this.state.rank} onChange={this.handleValueChange}>
                            <option value="">선택</option>
                            <option value='1'>1반</option>
                            <option value='2'>2반</option>
                            <option value='3'>3반</option>
                            <option value='4'>4반</option>
                            </select>
                        </span>
                        </center>
                        <span class="p_1"></span>
                        <div class="student_name">-과제</div>
                        <center>
                        <input
                            class="name_1"
                            type="text"
                            name="task"
                            placeholder="과제를 입력하세요! :D"
                            value={this.state.task} onChange={this.handleValueChange}
                        />

                        <br />
                        <br />
                        </center>
                        <div class="student_name">-범위</div>
                        <center>
                        <input
                            class="name_1"
                            type="text"
                            name="volume"
                            placeholder="범위를 입력하세요! :D"
                            value={this.state.volume} onChange={this.handleValueChange}
                        />
                        </center>

                        <br />
                        <center>
                        <input class="post" type="submit" value="숙제주기" onClick={this.groubtaskChange}/>
                        </center>
                    </div>
                    </form>
                </div>

                <div class="faq-content">
                    <button class="question" id="que-2" onClick={this.show2}>
                    <span id="que-2-toggle">+</span><span>학생추가</span>
                    </button>
                    <div class="answer" id="ans-2" style={{display: this.state.display2}}>
                        <form onSubmit={this.handleFormSubmit}>
                            <div class="add_student">
                            <center>
                                <span class="gr_2">
                                <span class="gr_1">
                                    <span class="gr">학년:</span>
                                    <select name='grade' value={this.state.grade} onChange={this.handleValueChange}>
                                        <option>학년</option>
                                        <option value="">선택</option>
                                        <option value='고1'>고1</option>
                                        <option value='고2'>고2</option>
                                        <option value='고3'>고3</option>
                                        <option value='중1'>중1</option>
                                        <option value='중1'>중1</option>
                                        <option value='중1'>중1</option>
                                    </select>
                                    </span>
                                <span class="gr">반:</span>
                                    <select name='rank' value={this.state.rank} onChange={this.handleValueChange}>
                                        <option>학년</option>
                                        <option value="">선택</option>
                                        <option value='1'>1반</option>
                                        <option value='2'>2반</option>
                                        <option value='3'>3반</option>
                                        <option value='4'>4반</option>
                                    </select>
                                </span>
                            </center>
                            <span class="p_1"></span>
                            <div class="student_name">-학생이름</div>
                            <center>
                                <input class="name_1" type="text" name="name" placeholder="이름을 입력하세요! :D" value={this.state.name} onChange={this.handleValueChange} />
                                <br />
                                <button class="post" type="submit" onClick={this.customerChange}>추가하기</button>
                            </center>
                            </div>
                        </form>
                    </div>
                </div>


            <div class="faq-content">
                <button class="question" id="que-3" onClick={this.show3}>
                <span id="que-3-toggle">+</span><span>학생삭제</span>
                </button>
                <div class="answer" id="ans-3" style={{display: this.state.display3}}>
                <Navbar>
                    <Form class="col text-center">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" name="searchKeyword" value={this.state.searchKeyword} onChange={this.handleValueChange}/>
                    </Form>
                </Navbar>
                <table class="table_1">
                    <tr>
                        {this.state.customers ? filteredComponents(this.state.customers) : ""}
                    </tr>
                </table>
                </div>
            </div>
        </div>
        )
    }
}

export default Management;