// import React, {useState} from 'react';
// import {Popover, PopoverHeader, PopoverBody,Form, FormGroup, Label, Input, Button, ModalHeader, ModalBody} from 'reactstrap'

// const OfficeEdit = (props) => {
//     const [editName, setEditName] = useState(props.officeToUpdate.name);
//     const [editType, setEditType] = useState(props.officeToUpdate.type);
//     const [editFreeWifi, setEditFreeWifi] = useState(props.officeToUpdate.freeWifi);
//     const [editFreeRestroom, setEditFreeRestroom] = useState(props.officeToUpdate.freeRestroom);
//     const [editComments, setEditComments] = useState(props.officeToUpdate.comments);
//     const [editRating, setEditRating] = useState(props.officeToUpdate.rating);

//     const officeUpdate = (event, office) => {
//         event.preventDefault();
//         fetch(`http://localhost:3000/office/${props.officeToUpdate.id}`, {
//             method:'PUT',
//             body: JSON.stringify({office: {name: editName, type: editType, freeWifi: editFreeWifi, freeRestroom: editFreeRestroom, comments: editComments, rating: editRating }}),

//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         }).then((res) => {
//             props.fetchOffices();
//             props.updateOff();
//         })
//     }

//     return(
//         <Popover isOpen={true}>
//             <PopoverHeader>Edit a Past Office</PopoverHeader>

//         </Popover>
//     )

//     export default OfficeEdit;