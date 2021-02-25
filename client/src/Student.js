import react, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Form, FormControl, Breadcrumb, Table} from 'react-bootstrap';
import Information from './components/Information';

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
    render() {
          const filteredComponents = (data) => {
            return data.map(c => {
                return ( <Information stateRefresh={this.stateRefresh} rank={c.rank} name={c.name} task={c.task} volume={c.volume} isChecked={c.isChecked}/>)
            });
        }
      return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item active>{this.props.location.state.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>확인</th>
                            <th>숙제</th>
                            <th>범위</th>
                            <th></th>
                        </tr>
                    </thead>
                <tbody>
                    {this.state.customers ? this.state.customers.map(c => {
                        if(c.name == this.props.location.state.name) {
                return ( <Information stateRefresh={this.stateRefresh} name={c.name} task={c.task} volume={c.volume} isChecked={c.isChecked}/>)}
            }) : ""}
                </tbody>
                </Table>
            </div>
        </div>
    );
  }
}

export default Student;