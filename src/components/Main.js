import React, {useState, useEffect} from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import OfficeIndex from './offices/OfficeIndex';
import Auth from './auth/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

    const protectionOn = () => {
    return(sessionToken === localStorage.getItem('token') ? <OfficeIndex token = {sessionToken}/> : <Auth updateToken={updateToken}/>)
}

    return (
        <div>
                <Header clickLogout ={clearToken} updateToken={updateToken} />
                <Footer />
                 {protectionOn() }
                
        </div>
    )
}

export default Main;