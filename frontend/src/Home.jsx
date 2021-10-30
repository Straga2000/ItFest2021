import React from "react";
import  {Link} from 'react-router-dom';
class Home extends React.Component{

    
render(){ 
    return(

<div style={{backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'}}>
                
    <br />
    <Link to="/login" className="btn btn-primary m-2 w-75">Login</Link>
            <br />
    <Link to="/register" className="btn btn-primary m-2 w-75">Register</Link>
            <br />
           
        </div>
    )}
}
export default Home;