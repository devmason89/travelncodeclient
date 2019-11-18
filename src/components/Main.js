import React, {useState, useEffect} from 'react';
import Header from './Header';
import { Navbar, Button} from "reactstrap";
import Footer from './Footer';
import Auth from './auth/Auth';
import MainOffice from './MainOffice'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import OfficeIndex from './offices/OfficeIndex';

const Main = (props) => {
    // const [sessionToken, setSessionToken] = useState('')

    // useEffect(() => {
    //     if(localStorage.getItem('token')){
    //         setSessionToken(localStorage.getItem('token'))
    //     }
    // }, [])  //if chrome has saved a sessionToken, we pass it into an empty array

    // const updateToken = (newToken) => {
    //     localStorage.setItem('token', newToken);
    //     setSessionToken(newToken);
    //     console.log(newToken)
    // } //updating our session with a new token by grabbing it from our local storage. 

    // const clearToken = () => {
    //     localStorage.clear();
    //     setSessionToken('');
    // }  //resets my session and clears my token

    // const protectionOn = () => {
    //     return(props.sessionToken === localStorage.getItem('token') ? <OfficeIndex token = {props.sessionToken} clickLogout ={props.clearToken} setSessionToken={props.setSessionToken}/> : <Auth updateToken={props.updateToken}/>
    //     )
    // }

    return (
       <div className="main">
            {/* <Navbar className = "header">
                <h1 className="name">Travel N Code</h1>
                <Button id="btn"  onClick = {props.clearToken}>Logout</Button>
                <p id="slogan">"Find your perfect office-- no matter where you are."</p>   */}
           
                {/* <div className="routing">
                    <div className = "routing-list-styling">
                        <ul className = "routing-list list-unstyled">
                        <li><Link to="/mainoffice">Main Office</Link></li>
                        <li><Link to="/auth">Auth</Link></li>
                        </ul>
                    </div> */}
                {/* </div> */}
            {/* </Navbar> */}
                <Router>   
                {/* <Header className="navHeader" clickLogout ={clearToken} updateToken={updateToken} sessionToken={sessionToken} setSessionToken={setSessionToken}/> */}
                <Header className="navHeader" clickLogout ={props.clickLogout} updateToken={props.updateToken} token={props.token} setSessionToken={props.setSessionToken}/>
            {/* <Switch>
                 <Route exact path ="/mainoffice"><MainOffice /></Route>
                 <Route exact path ="/auth"><Auth /></Route>
            </Switch>  */}
                </Router>
                {/* {protectionOn()}  */}
                <Footer />
       </div>         
    )
}

export default Main;