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
      data: this.props.data,
      completed: this.props.completed,
    };

    this.fetchResponse = this.fetchResponse.bind(this)
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

}

export default App;
