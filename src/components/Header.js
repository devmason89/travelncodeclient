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
     
    // const protectionOn = () => {
    //     return(props.sessionToken === localStorage.getItem('token') ? <OfficeIndex token = {props.sessionToken} clickLogout ={props.clearToken} setSessionToken={props.setSessionToken}/> : <Auth updateToken={props.updateToken}/>
    //     )
    // }

    // const protectionOn = () => {
    //     return(props.sessionToken === localStorage.getItem('token') ? <MainOffice token = {props.sessionToken} setSessionToken={props.setSessionToken}/> : <Auth updateToken={props.updateToken}/>
    //     )
    // }

    return (
        <div className="header">
            {/* <Navbar> */}
                {/* // className = "header">
                //  <h1 className="name">Travel N Code</h1>
                // <Button id="btn"  onClick = {props.clickLogout}>Logout</Button>
                // <p id="slogan">"Find your perfect office-- no matter where you are."</p>   */}
           
                <div className="routing">
                    <div className = "routing-list-styling">
                        {/* <ul className = "routing-list list-unstyled"> */}
                        <Link to="/officeindex">Office Index </Link>
                        &nbsp;
                        &nbsp;
                        <Link to="/mission">Mission</Link>
                        {/* </ul> */}
                    </div>
                </div>
            {/* </Navbar>  */}

             <Switch>
                 <Route exact path ="/officeindex"><OfficeIndex clickLogout ={props.clickLogout} updateToken={props.updateToken} token={props.token} setSessionToken={props.setSessionToken} /></Route>
                 <Route exact path ="/mission"><Mission clickLogout ={props.clickLogout} /></Route>
            </Switch> 
              {/* {protectionOn()}   */}
            <Footer/>  
        
        </div>
     )

};

export default Header;  