import React, {useState} from 'react';
import {
  Card, CardText, CardDeck, CardTitle, 
  Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import styled from 'styled-components';
import Plus from '../../assets/plus.png';
import OfficeEdit from '../officeSub/OfficeEdit'
import OfficeCreate from '../officeSub/OfficeCreate'
import APIURL from '../../../helpers/environment';
import OfficeDelete from './OfficeDelete';
import './OfficeCard.css';


// const Resize = styled.img`
//     width: auto;
//     height: auto;
//     display: block;
//     margin: 0 20px 0 auto;
// `      

const OfficeCard = (props) => {
    const [isCreateShown, setCreateShown] = useState(false);
    // const [popoverOpen, setPopoverOpen] = useState(false);

    // const deleteToggleOn = () => {
    //     popoverOpen(true)
    // }

    // const deleteToggleOff = () => {
    //     popoverOpen(false)
    // }

    // const handleDelete = () => {
    //     return(
    //         <OfficeDelete office={office} fetchOffices={props.fetchOffices} token={props.token} />
    //     )
    // }


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

    //  const deletePopover = (office) => {
    //      return(
    //         <div>
    //     <Popover placement="bottom" isOpen={popoverOpen} target="deletePopover" toggle={deleteToggle}>
    //     <PopoverHeader>Confirm Deletion</PopoverHeader>
    //     <PopoverBody>Are you sure you want to delete this office?</PopoverBody>
    //   </Popover>
    // </div>
    //     )
    //  }

     const officeMapper = () => {
         if(props.offices != (''))
        {
         return props.offices.map((office, index) => {
             return(
                 <Card key={index} id="cardMapper">
                     <CardTitle id="cardTitle">
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
                    clickLogout= {props.clickLogout}
                   />
                   <div className="db">
                        <Button id="deleteButton" block size= "sm" onClick={() => {deleteOffice(office)}}>Delete</Button>
                        </div>
                 {/* {<Button id="deleteB" onClick= {()=>{ <OfficeDelete office={office} fetchOffices={props.fetchOffices} token={props.token}>Delete 
                 </Button>} */}
                 {/* <Button>
                 {popoverOpen ? 
                 <OfficeDelete office={office} fetchOffices={props.fetchOffices} token={props.token}/> : <> </> }
                 </Button> */}
                  </Card>
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
            {/* <div className="plusBundle">
            <img id="plus" src={Plus}  onClick={handleCreate} /> */}
            <div id="plusBundle">
            <img id="plus" src={Plus}  onClick={handleCreate} />
            <h6 id="createId">Create Office </h6>
        {isCreateShown && <OfficeCreate fetchOffices ={props.fetchOffices} closeCreate={closeCreate} token={props.token}/>}
        </div>
        <h1 id="pastOffices">My Past Offices </h1>
        <div id="allCards">
            <CardDeck id="groupCards"> 
                <Card id="myCard">
                    {/* <h1 id="pastOffices">MY PAST OFFICES
                            <img src={Plus}  onClick={handleCreate} />
                            {isCreateShown && <OfficeCreate fetchOffices ={props.fetchOffices} closeCreate={closeCreate} token={props.token}/>}
                    </h1> */}
                    {officeMapper(props)} 
                </Card>
            </CardDeck>
        </div>
        </div>
    )
}


export default OfficeCard;