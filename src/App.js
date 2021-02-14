import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer'

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '20020204',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '한성희',
  'birthday' : '20020203',
  'gender' : '남자',
  'job' : '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '이순신',
  'birthday' : '20010205',
  'gender' : '남자',
  'job' : '해적'
}
]

class App extends Component {
  render() 
  {
    return (
      <div>
        {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
      </div>
    );
  }
}
export default App;
