import React, { Component } from 'react';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const students = [
  {id: '12', nickname: 'John Doe', score: 23},
  {id: '18', nickname: 'Jenny Jason', score: 27},
  {id: '20', nickname: 'Tim Brown', score: 22},
  {id: '21', nickname: 'kikik moji', score: 22},
  {id: '32', nickname: 'Ponanuta gumana', score: 12},
  {id: '56', nickname: 'jim jj', score: 22},
]

const Home = () => (<div>Home
  <li><Link to="/students">list of students</Link></li>
</div>)
const Students = () => (
  <div>
    {
      _.map(students, s => <StudentLink {...s} key={s.id}/>)
    }
    <Route path="/students/:id" component={StudentContainer}/>
    
  </div>
)
const StudentContainer = ({match}) => {
  let s = _.find(students, ['id', match.params.id])
  return (
    <StudentLine {...s} key={s.id}/>
  )
}
const StudentLink = ({id, nickname}) => (
  <div><Link to={`/students/${id}`}>{nickname}</Link></div>
)
const StudentLine = ({id, nickname, score}) => (
  <div>{id} {nickname} = {score}</div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <h1>Result of test</h1>
          <Route exact path="/" component={Home}/>
          <Route path="/students" component={Students}/> 
        </div>
               
      </Router>
    );
  }
}

export default App;
