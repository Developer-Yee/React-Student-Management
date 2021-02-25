import React from 'react';
import {post} from 'axios';
import stateRefresh from './Main';
import {Card, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Management.css';

class Management extends React.Component {

    constructor(pros) {
        super(pros);
        this.state = {
            name: "",
            grade: "",
            rank: "",
            display1: "none",
            display2: "none",
            display3: "none"
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                new stateRefresh();
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

        <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />

        return (
            <div>
                <div class="faq-content">
                    <button class="question" id="que-1" onClick={this.show1}>
                        <span id="que-1-toggle">+</span><span>숙제주기</span>
                    </button>
                </div>
                <div class="answer" id="ans-1" style={{display: this.state.display1}}>
                    <form method="post">
                    <div class="add_student">
                        <center>
                        <span class="gr_2">
                            <span class="gr_1">
                            <span class="gr">학년:</span>
                            <select>
                                <option>고1</option>
                                <option>고2</option>
                                <option>고3</option>
                                <option>중1</option>
                                <option>중2</option>
                                <option>중3</option>
                            </select>
                            </span>
                            <span class="gr">반:</span>
                            <select>
                            <option>1반</option>
                            <option>2반</option>
                            <option>3반</option>
                            <option>4반</option>
                            </select>
                        </span>
                        </center>
                        <span class="p_1"></span>
                        <div class="student_name">-과제</div>
                        <center>
                        <input
                            class="name_1"
                            type="text"
                            name="text"
                            placeholder="과제를 입력하세요! :D"
                        />

                        <br />
                        <br />
                        </center>
                        <div class="student_name">-범위</div>
                        <center>
                        <input
                            class="name_1"
                            type="text_1"
                            name="text"
                            placeholder="범위를 입력하세요! :D"
                        />
                        </center>

                        <br />
                        <center>
                        <input class="post" type="submit" value="숙제주기" />
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
                                        <option value='1'>1반</option>
                                        <option value='2'>2반</option>
                                        <option value='3'>3반</option>
                                    </select>
                                </span>
                            </center>
                            <span class="p_1"></span>
                            <div class="student_name">-학생이름</div>
                            <center>
                                <input class="name_1" type="text" name="name" placeholder="이름을 입력하세요! :D" value={this.state.name} onChange={this.handleValueChange} />
                                <br />
                                <button class="post" type="submit">추가하기</button>
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
                <table class="table_1">
                    <tr>
                    <td class="na">학생이름</td>
                    <td>
                        <button class="bt"><i class="fas fa-trash-alt"></i></button>
                    </td>
                    </tr>
                    <tr>
                    <td class="na">학생이름</td>
                    <td>
                        <button class="bt"><i class="fas fa-trash-alt"></i></button>
                    </td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
        )
    }
}

export default Management;