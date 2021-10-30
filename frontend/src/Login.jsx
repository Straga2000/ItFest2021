import React from "react";
import  {Link} from 'react-router-dom';

class Login extends React.Component{
render(){

    return(
        <div style={{marginLeft:'43%',marginTop:'20%'}}>
            <input type="text" placeholder="username"></input><br/>
            <input style={{marginTop:'10px'}} type="text" placeholder="password"></input><br/>
            <Link to="/profile" className="btn btn-primary m-2 w-40">Login</Link>

        </div>
    )
}}
export default Login;