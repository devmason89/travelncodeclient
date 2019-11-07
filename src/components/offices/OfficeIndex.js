import React, {useState, useEffect} from 'react';
import {Container, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,Button,Row, Col} from 'reactstrap'
import OfficeCreate from './OfficeCreate'
import OfficeCard from './OfficeCard'
import OfficeEdit from './OfficeEdit'
import Auth from '../auth/Auth'


const OfficeIndex = (props) => {
    // const [sessionToken, setSessionToken] = useState('')

    const [offices, setOffices] = useState([])
    const [updateOffice, setUpdateOffice] = useState(false);
    const [officeToUpdate, setOfficeToUpdate]= useState({})

    const fetchOffices = () => {
        fetch('http://localhost:3000/office', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json())
        .then((officeData) => {
            setOffices(officeData)
            console.log(officeData)
        })
    }

    useEffect(()=> {
        fetchOffices()
    }, [])

    // useEffect(() => {
    //     if(localStorage.getItem('token')){
    //         setSessionToken(localStorage.getItem('token'))
    //     }
    // }, [])


    return(
        <React.Fragment>
            <Card>
            <h1> THIS WILL DISPLAY A USER'S OFFICES. </h1>
                <CardTitle>
                    
                </CardTitle>

            </Card>
            
        
        {/* <OfficeCard clickLogout ={props.clearToken} /> */}
        {/* <Button onClick={props.clickLogout}>Logout</Button> */}
        </React.Fragment>

    )
}

export default OfficeIndex;