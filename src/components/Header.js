import React, {useState} from 'react';
import { Navbar, Button} from "reactstrap";
import './Header.css';
import Footer from './Footer'
import Auth from './auth/Auth'
import MainOffice from './MainOffice'
import Mission from './Mission';
import OfficeIndex from './offices/OfficeIndex'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';


const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    return (
        <div className="header">
                <div className="routing">
                    <div className = "routing-list-styling">
                        <Link to="/officeindex">Office Index </Link>
                        &nbsp;
                        &nbsp;
                        <Link to="/mission">Mission</Link>
                    </div>
                </div>

             <Switch>
                 <Route exact path ="/officeindex"><OfficeIndex clickLogout ={props.clickLogout} updateToken={props.updateToken} token={props.token} setSessionToken={props.setSessionToken} /></Route>
                 <Route exact path ="/mission"><Mission clickLogout ={props.clickLogout} /></Route>
            </Switch> 
            <Footer/>  

        </div>
     )

};

export default Header;  