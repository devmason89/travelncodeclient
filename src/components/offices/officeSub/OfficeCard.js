import React, {useState} from 'react';
import {
  Card, CardText, CardDeck, CardTitle, 
  Button} from 'reactstrap';
import styled from 'styled-components';
import Plus from '../../assets/plus.png';
import OfficeEdit from '../officeSub/OfficeEdit'
import OfficeCreate from '../officeSub/OfficeCreate'
import APIURL from '../../../helpers/environment';


// const Resize = styled.img`
//     width: auto;
//     height: auto;
//     display: block;
//     margin: 0 20px 0 auto;
// `      

const OfficeCard = (props) => {
    const [isCreateShown, setCreateShown] = useState(false);

   const handleCreate = (e) => {
        e.preventDefault();
        setCreateShown(true)  //changing state here
    }

    const closeCreate = () =>{
        setCreateShown(false)
    }

    console.log(props)

     const deleteOffice =(office)=> {
         fetch(`${APIURL}/office/${office.id}`, 
         {
             method: 'DELETE',
             headers: new Headers ({
                 'Content-Type': 'application/json',
                 'Authorization': props.token
             })
         })
         .then(() => props.fetchOffices())
     }

     const officeMapper = () => {
         if(props.offices != (''))
        {
         return props.offices.map((office, index) => {
             return(
                 <Card key={index} id="cardMapper">
                     <CardTitle>
                         {office.name}
                     </CardTitle>
                     <CardText> Type:&nbsp;
                         {office.type}
                     </CardText>
                     <CardText>Free Wifi: &nbsp; {String(office.freeWifi)[0].toUpperCase()+ String(office.freeWifi).slice(1)} </CardText>
                    <CardText>Free Restroom: &nbsp; {String(office.freeRestroom)[0].toUpperCase()+String(office.freeRestroom).slice(1)}</CardText>
                    <CardText>Comments: &nbsp; {office.comments}</CardText>
                    <CardText>Rating:&nbsp; {office.rating}</CardText>
                    <OfficeEdit office={office} officeToUpdate={props.officeToUpdate} updateOff={props.updateOff} updateOn={props.updateOn} token={props.token} fetchOffices={props.fetchOffices} updateOffice={props.updateOffice} setUpdateOffice={props.setUpdateOffice} editUpdateOffice={props.editUpdateOffice}
                   />
                        <Button onClick={() => {deleteOffice(office)}}>Delete</Button>
                 </Card>
             )
         })
     } else { 
         return(
             <p>No Offices Created.</p>   
         )
     }
    }

    return (
        <div id="allCards">
            <CardDeck id="groupCards"> 
                <Card id="myCard">
                    <CardTitle>MY PAST OFFICES
                            <img src={Plus}  onClick={handleCreate} />
                            {isCreateShown && <OfficeCreate fetchOffices ={props.fetchOffices} closeCreate={closeCreate} token={props.token}/>}
                            {/* <OfficeCreate fetchOffices={props.fetchOffices}/> */}
                    </CardTitle>
                    {officeMapper(props)} 
                </Card>
            </CardDeck>
        </div>
    )
}


export default OfficeCard;