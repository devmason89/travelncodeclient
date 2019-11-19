import './App.css';
import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import { Navbar, Button} from "reactstrap";
import OfficeIndex from './components/offices/OfficeIndex'
import Auth from './components/auth/Auth';
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css'


const App = () => {

    const [sessionToken, setSessionToken] = useState('')

    useEffect(() => {
        if(localStorage.getItem('token')){
            setSessionToken(localStorage.getItem('token'))
        }
    }, [])  //if chrome has saved a sessionToken, we pass it into an empty array

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(newToken)
    } //updating our session with a new token by grabbing it from our local storage. 

    const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
    }  //resets my session and clears my token

    const protectionOn = () => {
    return(sessionToken === localStorage.getItem('token') ? <Main token = {sessionToken} clickLogout= {clearToken} setSessionToken={setSessionToken} updateToken= {updateToken}/> : <Auth updateToken={updateToken} clickLogout= {clearToken} />
    )
}

  return (
       <div
            className = "header">
                <h1 className="name">Travel N Code</h1>
                <div className="topline">
                <Button id="logoutButton"  onClick = {clearToken}>Logout</Button>
                <p id="slogan">"Find your perfect office-- no matter where you are."</p> 
                </div>
      {protectionOn()} 
      <Footer />
    </div> 
   
  );
}


export default App;
