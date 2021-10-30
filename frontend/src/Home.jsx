import React from "react";
import  {Link} from 'react-router-dom';
class Home extends React.Component{

 
      
    
    dict = {
     
      firstname: 'firstname',
      lastname: 'lastname',
      age:'age',
      email: 'email',
      password: 'password',
      nationality:'nationality'};
    
render(){ 
    return(

<div style={{backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'}}>
                
    <br />
    <Link to="/login" className="btn btn-primary m-3 w-40">Login</Link>
            <br />
    <Link to="/register" className="btn btn-primary m-3 w-40">Register</Link>
            <br />
           
        </div>
    )}
}
export default Home;