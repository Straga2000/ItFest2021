import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: "firstname",
        lastname: "lastname",
        age: "age",
        email: "email",
        password: "password",
        nationality: "nationality",
      },
    };
  }

  onChange(event) {
    user[event.target.name] = event.target.value;
    this.setState(user);
  }
  handleButtonClicked() {
    console.log(this.state.user);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstname"
            value={this.state.user.firstname}
            onClick={this.onChange.bind(this)}
          />
          <input
            type="text"
            name="lastname"
            value={this.state.user.lastname}
            onClick={this.onChange.bind(this)}
          />
          <input
            type="text"
            name="age"
            value={this.state.user.age}
            onClick={this.onChange.bind(this)}
          />
          <input
            type="email"
            name="email"
            value={this.state.user.email}
            onClick={this.onChange.bind(this)}
          />
          <input
            type="password"
            name="password"
            value={this.state.user.password}
            onClick={this.onChange.bind(this)}
          />
          <input
            type="text"
            name="nationality"
            value={this.state.user.nationality}
            onClick={this.onChange.bind(this)}
          />
          <button onClick={this.handleButtonClicked.bind(user)} type="submit">
            Submit
          </button>
        </form>
        );
        <Link to="/profile" className="btn btn-primary m-2 w-75">
          Submit
        </Link>
      </div>
    );
  }
}
export default Register;
