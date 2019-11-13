import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Button,Input} from 'reactstrap'

const OfficeEdit = (props) => {
    // console.log(props)

    // const req = {
    //     props.office.params
    // }

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
        fetch(`http://localhost:3000/office/${props.officeToUpdate.id}`, {
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
        <Button onClick={() => {props.updateOn();props.editUpdateOffice(props.office)}}>Update
        <Modal isOpen={props.updateOffice}>
            <ModalHeader>Edit a Past Office</ModalHeader>
                <ModalBody>
                    <Form onSubmit = {officeUpdate} body={props.office.body}>
                        <FormGroup>
                            <Label htmlFor="name">Edit name:</Label>
                            <Input name="name" value={editName} onChange={(e)=> setEditName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="type">Edit type:</Label>
                            <Input name="name" value={editType} onChange={(e)=> setEditType(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="Free Wifi">Edit Wifi:</Label>
                            <Input name="Free Wifi" value={editFreeWifi} onChange={(e)=> setEditFreeWifi(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="Free Restroom">Edit Free Restroom:</Label>
                            <Input name="Free Restroom" value={editFreeRestroom} onChange={(e)=> setEditFreeRestroom(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="Comments">Edit Comments:</Label>
                            <Input name="Comments" value={editComments} onChange={(e)=> setEditComments(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="Rating">Edit Rating:</Label>
                            <Input name="Rating" value={editRating} onChange={(e)=> setEditRating(e.target.value)}/>
                        </FormGroup>
                        <Button type="submit">Update my office.</Button>
                    </Form>
                </ModalBody>
        </Modal>
    </Button>
    )
}

 export default OfficeEdit;