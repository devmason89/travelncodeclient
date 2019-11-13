import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Button,NavLink, Jumbotron} from "reactstrap";
import './Header.css';
import Footer from './Footer'
import OfficeIndex from './offices/OfficeIndex'
import Auth from './auth/Auth'
import Mission from './Mission'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';


const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn]= useState(false)
     
    const protectionOn = () => {
        return(props.sessionToken === localStorage.getItem('token') ? <OfficeIndex token = {props.sessionToken} setSessionToken={props.setSessionToken}/> : <Auth updateToken={props.updateToken}/>
        )
    }

    return (
        <div>
          
            <Navbar className = "header">
                <h1 className="name">Travel N Code</h1>
                <Button id="btn" onClick = {props.clickLogout}>Logout</Button>
                <p id="slogan">"Find your perfect office-- no matter where you are."</p>  
           
            <div className="sidebar">
                    <div className = "sidebar-list-styling">
                        <ul className = "sidebar-list list-unstyled">
                            <Link to="/mission">
                                <li>Mission</li></Link>
                        </ul>
                    </div>

                <div className="sidebar-route">
                    <Switch>
                        <Route exact path="/mission" exact component={Mission}/>
                    </Switch>
                </div>
            </div>

            </Navbar>
        
              {protectionOn()}  
            <Footer/>
        </div>
            
        )
};

export default Header;