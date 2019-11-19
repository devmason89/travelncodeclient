import React from 'react';
import Header from './Header';
import {BrowserRouter as Router} from 'react-router-dom'; 

const Main = (props) => {
    return (
       <div className="main">
                <Router>   

                <Header className="navHeader" clickLogout ={props.clickLogout} updateToken={props.updateToken} token={props.token} setSessionToken={props.setSessionToken}/>
        
                </Router>
              
       </div>         
    )
}

export default Main;