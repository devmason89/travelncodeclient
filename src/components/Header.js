import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Button,NavLink, Jumbotron} from "reactstrap";
import './Header.css';
import Footer from './Footer'
import Auth from './auth/Auth'

const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn]= useState(false)
    const toggle = () => {
        let newIsLoggedIn = !isLoggedIn;
        setIsLoggedIn(newIsLoggedIn);
    } 

    return (
        <div>
            <Navbar className = "header">
                <h1 className="name">Travel N Code</h1>
                <Button id="btn" onClick = {props.clickLogout}>Logout</Button>
                <NavbarToggler onClick={toggle}/>
                <Collapse isLoggedIn={isLoggedIn} navbar>
                <Nav className= "navbar fixed-top" navbar>
                </Nav>
                </Collapse>
                <p id="slogan">"Find your perfect office-- no matter where you are."</p>   
            </Navbar>
            <Auth updateToken={props.updateToken} />
            <Footer />
        </div>
        
    );

};

export default Header;