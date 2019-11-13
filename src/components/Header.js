import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Button,NavLink, Jumbotron} from "reactstrap";
import './Header.css';
import Footer from './Footer'
import OfficeIndex from './offices/OfficeIndex'
import Auth from './auth/Auth'
// import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';


const Header = (props) => {
    // const [sessionToken, setSessionToken] = useState('')
    const [isLoggedIn, setIsLoggedIn]= useState(false)
    // const toggle = () => {
    //     return {
    //         //write a return here for isLoggedIn
    //     }
    //     let newIsLoggedIn = !isLoggedIn;
    //     setIsLoggedIn(newIsLoggedIn);
     
    const protectionOn = () => {
        return(props.sessionToken === localStorage.getItem('token') ? <OfficeIndex token = {props.sessionToken} setSessionToken={props.setSessionToken}/> : <Auth updateToken={props.updateToken}/>)
    }

    return (
        <div>
            <Navbar className = "header">
                <h1 className="name">Travel N Code</h1>
                <Button id="btn" onClick = {props.clickLogout}>Logout</Button>
                {/* <NavbarToggler onClick={toggle}/> */}
                <p id="slogan">"Find your perfect office-- no matter where you are."</p>  
                {/* <ul>
                    <li><Link to="/Mission">Mission</Link></li>
                    </ul>  */}
            </Navbar>
            {/* <Auth updateToken={props.updateToken}
                onClick={()=>{protectionOn()}} /> */}
              {protectionOn()}  
            <Footer />
        </div>
        
    );

};

export default Header;