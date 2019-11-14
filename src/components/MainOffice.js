import React from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Mission from './Mission'
import OfficeIndex from './offices/OfficeIndex';

const MainOffices = () => {
    return(

<div className="mainRouting">
            <Switch>
                <Route exact path="/mission"><Mission /></Route>   
                <Route exact path="/officeindex"><OfficeIndex /></Route>
            </Switch>
</div>
)
}

export default MainOffices;