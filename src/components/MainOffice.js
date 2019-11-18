import React, {useState, useEffect} from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Mission from './Mission'
import Header from './Header';
import OfficeIndex from './offices/OfficeIndex';


const MainOffices = () => { 
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
    return(
        <div className="placeholderText">

             <Header className="navHeader" clickLogout ={clearToken} updateToken={updateToken} sessionToken={sessionToken} setSessionToken={setSessionToken}/>

             <h1>"This is your main office page!"</h1>
        

{/* <div className="mainRouting">
            <Switch>
                <Route exact path="/mission"><Mission /></Route>   
                <Route exact path="/officeindex"><OfficeIndex /></Route>
            </Switch> */}
</div>
)
}

export default MainOffices;