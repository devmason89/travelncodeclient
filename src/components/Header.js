import React from 'react';
import './Header.css';
import Mission from './Mission';
import Main from './Main';
import OfficeIndex from './offices/OfficeIndex'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';


const Header = (props) => {

    return (
        
        <div className="header">
                <div className="routing">
                    <div className = "routing-list-styling">
                        <Link to="/">Office Index </Link>
                        &nbsp;
                        &nbsp;
                        <Link to="/mission">Mission</Link>
                    </div>
                </div>

             <Switch>
                 <Route exact path ="/"><OfficeIndex clickLogout ={props.clickLogout} updateToken={props.updateToken} token={props.token} setSessionToken={props.setSessionToken} /></Route>
                 <Route exact path ="/mission"><Mission clickLogout ={props.clickLogout} /></Route>
            </Switch>  

        </div>
     )

};

export default Header;  