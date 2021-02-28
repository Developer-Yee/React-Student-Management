import react, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Form, FormControl, Breadcrumb, Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Information from './components/Information';
import {StyleSheet} from 'react';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
          customers: ''
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
    
    isChecked = () => {
        if(!(document.getElementById('switch').checked))
            console.log("yee");
    } 
    render() {
        const plus = {
            alignItems:'centor',
        
          }
      return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item active>{this.props.location.state.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>확인</th>
                            <th></th>
                            <th>숙제</th>
                            <th>범위</th>
                            <th></th>
                        </tr>
                    </thead>
                <tbody>
                    {this.state.customers ? this.state.customers.map(c => {
                        if(c.name == this.props.location.state.name) {
                            return (<Information stateRefresh={this.stateRefresh} name={c.name} task={c.task} volume={c.volume} isChecked={c.isChecked}/>)}}) : ""
                    }
                </tbody>
                </Table>
                <Breadcrumb>
                    <Breadcrumb.Item><span style={plus}><FontAwesomeIcon icon={ faPlus } size="1x"/></span></Breadcrumb.Item>
                </Breadcrumb>

                <Table class="table">
                {/* <form action="time_setting.php" method="post"> */}
                <thead>
                    <tr>
                    <th>확인</th>
                    <th>요일</th>
                    <th>시간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <span class="input-group-addon">
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="switch1"
                        />
                        </Form>
                        </span>
                    </td>
                    <td>월</td>
                    <td>
                        <input type="time" name="day_1" placeholder="월요일 시간" />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span class="input-group-addon">
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="switch2"
                        />
                        </Form>
                        </span>
                    </td>
                    <td>화</td>
                    <td>
                        <input type="time" name="day_2" placeholder="화요일 시간" />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span class="input-group-addon">
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="switch3"
                        />
                        </Form>
                        </span>
                    </td>
                    <td>수</td>
                    <td>
                        <input type="time" name="day_3" placeholder="수요일 시간" />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span class="input-group-addon">
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="switch4"
                        />
                        </Form>
                        </span>
                    </td>
                    <td>목</td>
                    <td>
                        <input type="time" name="day_4" placeholder="목요일 시간" />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span class="input-group-addon">
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="switch5"
                        />
                        </Form>
                        </span>
                    </td>
                    <td>금</td>
                    <td>
                        <input type="time" name="day_5" placeholder="금요일 시간" />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span class="input-group-addon">
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="switch6"
                        />
                        </Form>
                        </span>
                    </td>
                    <td>토</td>
                    <td>
                        <input type="time" name="day_6" placeholder="토요일 시간" />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span class="input-group-addon">
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="switch7"
                        />
                        </Form>
                        </span>
                    </td>
                    <td>일</td>
                    <td>
                        <input type="time" name="day_7" placeholder="일요일 시간" />
                    </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    );
  }
}

export default Student;