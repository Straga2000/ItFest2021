import React from "react";
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityLookUp from './CityLookUp.jsx';
import  {Link} from 'react-router-dom';

class Register extends React.Component{
render(){
    return(<div>
  <Form style={{width:"30%",marginTop:"200px",marginLeft:"650px"}}>
<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter first name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter last name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  
 </Form>

 <Link to="/profile" className="btn btn-primary m-2 w-75">Submit</Link>
          
</div>

    )}
}
export default Register;