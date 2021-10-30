import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {

  componentWillMount() {
    this.fetchResponse()
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {'yas': 'horrible'},
      completed: false,
    };

    this.fetchResponse = this.fetchResponse.bind(this)
  };

  render() {
    let {data, completed} = this.state;
    return(
        <div>
          {completed === true ? data['yas'] : 'se intampla ceva oribil'}
        </div>
    )
  }

  fetchResponse(){
    console.log('Fetch');
    fetch('http://127.0.0.1:8000/random/', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://127.0.0.1:8000/'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then(response => response.json())
        .then(data => {
          this.setState({data:data, completed:true});
          console.log(data)
        })
  }

}

export default App;
