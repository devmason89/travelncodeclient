// import React, {useState} from 'react';
// import {
//   Card, CardText, CardDeck, CardTitle, 
//   Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
//   import APIURL from '../../../helpers/environment';


//   const OfficeDelete = (props) => {
//     // const [popoverOpen, setPopoverOpen] = useState(false);
//     const [isDeleteConfirmed, setConfirmedDelete]= useState(false)

//     const closeDeletePopover = (office) => {
//         setConfirmedDelete(false)
//     }

//     // const deleteToggle = (office) => popoverOpen

//     const deleteOffice =(office)=> {
//         console.log(office)
//         fetch(`${APIURL}/office/${office.id}`, 
//         {
//             method: 'DELETE',
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         })
//         .then(() => props.fetchOffices())
//     }
    
//     return (
//         // <Button id="deleteB" size="sm" block onClick={(e)=>{deleteToggle(e)}}>Delete
//         <Popover placement="bottom" isOpen={props.popoverOpen} target="deleteB">
//         <PopoverHeader>Confirm Deletion of {props.office.id}</PopoverHeader>
//         <PopoverBody>Are you sure you want to delete the "{props.office.name}" office?
//             <Button id="deleteB" size="sm" block onClick={() => {deleteOffice(props.office)}}>Yes</Button>
//             <Button id="deleteB" size="sm" block onClick={()=>{closeDeletePopover()}}>No</Button>
//         </PopoverBody>
//       </Popover>
//     // </Button>
//        )
//   }

//   export default OfficeDelete;


  //told me to make a ternary like updateOn in the workoutlog
  //updateOn was called in a button
