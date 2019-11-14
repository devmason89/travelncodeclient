import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Switch} from 'react-router-dom'; 
import OfficeIndex from './offices/OfficeIndex';
import Auth from './auth/Auth';
import MainOffice from './MainOffice'

const Main = () => {
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


    return (
       <div>
                <Router>   
                <Header className="navHeader" clickLogout ={clearToken} updateToken={updateToken} sessionToken={sessionToken} setSessionToken={setSessionToken}/>
                </Router>
                <Footer />
       </div>         
    )
}

export default Main;