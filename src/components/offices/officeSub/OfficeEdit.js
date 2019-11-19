import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Button,Input} from 'reactstrap'
import APIURL from '../../../helpers/environment';
import './OfficeEdit.css';

const OfficeEdit = (props) => {

    const [editName, setEditName] = useState(props.officeToUpdate.name);
    const [editType, setEditType] = useState(props.officeToUpdate.type);
    const [editFreeWifi, setEditFreeWifi] = useState(props.officeToUpdate.freeWifi);
    const [editFreeRestroom, setEditFreeRestroom] = useState(props.officeToUpdate.freeRestroom);
    const [editComments, setEditComments] = useState(props.officeToUpdate.comments);
    const [editRating, setEditRating] = useState(props.officeToUpdate.rating);

    const officeUpdate = (event, office) => {
        console.log('props', props)
        console.log('officeUpdate');
        // console.log('props.officeToUpdate.id', props.officeToUpdate.id)
        event.preventDefault();
        fetch(`${APIURL}/office/${props.officeToUpdate.id}`, {
            method:'PUT',
            body: JSON.stringify({office: {name: editName, type: editType, freeWifi: editFreeWifi, freeRestroom: editFreeRestroom, comments: editComments, rating: editRating}}),

            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            console.log('update response!');
            props.fetchOffices();
            props.updateOff();
        })
    }

    return(
        <Button size="sm" id="updateButton" onClick={() => {props.updateOn();props.editUpdateOffice(props.office)}}>Update
        <Modal id = "updateModal"isOpen={props.updateOffice}>
            
            <ModalHeader id="editModalTitle">Edit the {props.officeToUpdate.name} Office 
            <Button id="modalButton" onClick={ () => {props.updateOff()}} close /> </ModalHeader>

                <ModalBody id="updateBody">
                    <Form onSubmit = {officeUpdate} body={props.office.body}>
                        <FormGroup>
                            <Label className="editLabel" htmlFor="name">Edit name:</Label>
                            <Input id="editInput" name="name" value={editName} onChange={(e)=> setEditName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="editLabel"  htmlFor="type">Edit type:</Label>
                            <Input id="editInput"  type="select" name="type" value={editType} onChange={(e)=> setEditType(e.target.value)}>
                            <option value="DEFAULT">Choose the type of office</option>
                            <option value="Cafe">Cafe</option>
                            <option value="Library">Library</option>
                            <option value="Coworking Space">Coworking Space</option>
                            <option value="Hotel/Hostel">Hotel/Hostel</option>
                            <option value="Other">Other - please define in comment section.</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label className="editLabel" htmlFor="Free Wifi">Edit Wifi:</Label>
                            <Input id="editInput"  name="Free Wifi" value={editFreeWifi} onChange={(e)=> setEditFreeWifi(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="editLabel" htmlFor="Free Restroom">Edit Free Restroom:</Label>
                            <Input id="editInput"  name="Free Restroom" value={editFreeRestroom} onChange={(e)=> setEditFreeRestroom(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label  className="editLabel" htmlFor="Comments">Edit Comments:</Label>
                            <Input id="editInput"  name="Comments" value={editComments} onChange={(e)=> setEditComments(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="editLabel" htmlFor="Rating">Edit Rating:</Label>
                            <Input id="editInput"  name="Rating" value={editRating} onChange={(e)=> setEditRating(e.target.value)}/>
                        </FormGroup>
                        <Button id="updateButton" type="submit">Update My Office</Button>
                    </Form>
                </ModalBody>
        </Modal>
    </Button>
    )
}

 export default OfficeEdit;