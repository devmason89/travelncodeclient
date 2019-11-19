import React, {useState, useEffect} from 'react';
import OfficeCard from './officeSub/OfficeCard'
import Footer from '../Footer'
import APIURL from '../../helpers/environment';


const OfficeIndex = (props) => {

    const [offices, setOffices] = useState([]);
    const [updateOffice, setUpdateOffice] = useState(false);
    const [officeToUpdate, setOfficeToUpdate]= useState({})
    console.log(offices)
    console.log(props)

    const fetchOffices = () => {
        fetch(`${APIURL}/office/getall`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => {
            // console.log(`TOKEN IN OFFICE INDEX ${props.token}`)
            return res.json()})
        .then((officeData) => {
            setOffices(officeData)
            console.log(officeData)
        })
    }

    useEffect(()=> {
        fetchOffices()
    }, [])

    const editUpdateOffice = (office) =>{
        setOfficeToUpdate(office);
        console.log(office)
    }                               

    const updateOn=() => {
        setUpdateOffice(true);
    }

    const updateOff=() => {
        setUpdateOffice(false)
    }

    return(
        <React.Fragment>
        <OfficeCard offices = {offices}  fetchOffices= {fetchOffices} token={props.token} officeToUpdate={officeToUpdate} editUpdateOffice={editUpdateOffice} updateOn={updateOn} updateOff={updateOff} updateOffice={updateOffice} setUpdateOffice={setUpdateOffice} updateToken={props.updateToken}
        clickLogout ={props.clickLogout} />
        </React.Fragment>
    )
}

export default OfficeIndex;