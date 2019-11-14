import React, {useState, useEffect} from 'react';
import OfficeCreate from './officeSub/OfficeCreate'
import OfficeCard from './officeSub/OfficeCard'
import OfficeEdit from './officeSub/OfficeEdit'
import Auth from '../auth/Auth'
import Header from '../Header'
import Footer from '../Footer'
import APIURL from '../../helpers/environment';


const OfficeIndex = (props) => {
    // console.log(`Props from Office Index==> ${props}`)

    const [offices, setOffices] = useState([]);
    const [updateOffice, setUpdateOffice] = useState(false);
    const [officeToUpdate, setOfficeToUpdate]= useState({})

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
        <OfficeCard offices = {offices}  fetchOffices= {fetchOffices} token={props.token} officeToUpdate={officeToUpdate} editUpdateOffice={editUpdateOffice} updateOn={updateOn} updateOff={updateOff} updateOffice={updateOffice} setUpdateOffice={setUpdateOffice}
        clickLogout ={props.clearToken} />
        <Footer />
        </React.Fragment>
    )
}

export default OfficeIndex;