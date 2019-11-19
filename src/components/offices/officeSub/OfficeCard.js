import React, {useState} from 'react';
import {
  Card, CardText, CardDeck, CardTitle, Modal, ModalBody, ModalHeader,
  Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import styled from 'styled-components';
import Plus from '../../assets/plus.png';
import OfficeEdit from '../officeSub/OfficeEdit'
import OfficeCreate from '../officeSub/OfficeCreate'
import APIURL from '../../../helpers/environment';
import OfficeDelete from './OfficeDelete';
import './OfficeCard.css';

const OfficeCard = (props) => {
    const [isCreateShown, setCreateShown] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);


    const toggle= index => {
        setPopoverOpen(!popoverOpen);
    }

   const handleCreate = (e) => {
        e.preventDefault();
        setCreateShown(true)  //changing state here
    }

    const closeCreate = () =>{
        setCreateShown(false)
    }

    console.log(props)

     const officeMapper = () => {
         if(props.offices != (''))
        {
         return props.offices.map((office, index) => {
             console.log(office)
             return(
                 <div id="mainCard">
                 <Card key={index} id="cardMapper">
                     <CardTitle id="cardTitle">
                         {office.name}
                     </CardTitle>
                     <CardText className="cardTextMapper"> Type:&nbsp;
                         {office.type}
                     </CardText>
                     <CardText className="cardTextMapper">Free Wifi: &nbsp; {String(office.freeWifi)[0].toUpperCase()+ String(office.freeWifi).slice(1)} </CardText>
                    <CardText className="cardTextMapper" >Free Restroom: &nbsp; {String(office.freeRestroom)[0].toUpperCase()+String(office.freeRestroom).slice(1)}</CardText>
                    <CardText className="cardTextMapper">Comments: &nbsp; {office.comments}</CardText>
                    <CardText className="cardTextMapper">Rating:&nbsp; {office.rating}</CardText>
    
                    <div id="buttonRow">
                    <OfficeEdit office={office} officeToUpdate={props.officeToUpdate} updateOff={props.updateOff} updateOn={props.updateOn} token={props.token} fetchOffices={props.fetchOffices} updateOffice={props.updateOffice} setUpdateOffice={props.setUpdateOffice} editUpdateOffice={props.editUpdateOffice}
                    clickLogout= {props.clickLogout}
                   />
        
                    <OfficeDelete popoverOpen={popoverOpen} token={props.token} fetchOffices={props.fetchOffices} office={office} toggle={toggle} index={index}/>
                 
                </div>
                 
          </Card>
        </div>
             )
         })
     } else { 
         return(
             <p id="noOffices">No Offices Created.</p>   
         )
     }
    }

    return (
        <div>
            <div id="plusBundle">
            <img id="plus" src={Plus}  onClick={handleCreate} />
            <h6 id="createId">Create Office </h6>
        {isCreateShown && <OfficeCreate fetchOffices ={props.fetchOffices} closeCreate={closeCreate} token={props.token}/>}
        </div>
        <h1 id="pastOffices">My Past Offices </h1>
        <div id="allCards">
            <CardDeck id="groupCards"> 
                <Card id="myCard">
                    {officeMapper(props)} 
                </Card>
            </CardDeck>
        </div>
        </div>
    )
}


export default OfficeCard;