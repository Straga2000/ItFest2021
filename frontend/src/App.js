import './App.css';
import React from 'react';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Home from "./Home.jsx";import Profile from "./Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

constructor(props) {
  super(props);
  this.state = {
    data: {'yas': 'horrible'},
    completed: false,
  };

  render() {
    let {data, completed} = this.state;
    console.log(data, completed);
    return(
        <div>
          {completed === true ? data['yas'] : 'se intampla ceva oribil'}
        </div>
    )
  }

  fetchResponse(){
    console.log('Fetch');
    fetch('http://localhost:8000/random/', {
      method: 'GET',
    }).then(response => response.json())
        .then(data => {
          // this.props.data = data;
          // this.props.completed = true;
          this.setState({data:data, completed:true});
          console.log(this.state)
        })
  }

  render(){
return <div>  <Router>
<Switch>
      <Route  path="/home" component={Home}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/register" component={Register}/>  
      <Route  path="/profile" component={Profile}/>
</Switch>
</Router>


</div>}}

export default App;
