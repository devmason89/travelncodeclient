import React, {useState, useEffect} from 'react';
import Header from './Header';
import { Navbar, Button} from "reactstrap";
import Footer from './Footer';
import Auth from './auth/Auth';
import MainOffice from './MainOffice'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import OfficeIndex from './offices/OfficeIndex';

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