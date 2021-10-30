import React from "react";
import  {Link} from 'react-router-dom';

class Login extends React.Component{
render(){

    return(
        <div>
            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
            <Link to="/profile" className="btn btn-primary m-2 w-75">Login</Link>

        </div>
    )
}}
export default Login;