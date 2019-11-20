import React, {useState} from 'react';
import {
  Card, CardText, CardTitle, CardBody,
   Button, Modal, ModalHeader, ModalBody,
   Label, Input
} from 'reactstrap';
import APIURL from '../../../helpers/environment';
import './OfficeCreate.css'

const OfficeCreate = (props) => {


    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [freeWifi, setFreeWifi] = useState('')
    const [freeRestroom, setFreeRestroom] = useState('')
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(e);
        fetch(`${APIURL}/office`, {
            method: 'POST',
            body: JSON.stringify({office: {name: name, type: type, freeWifi: freeWifi, freeRestroom: freeRestroom, comments: comments, rating: rating}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then ((res) => res.json())
        .then((officeData) => {
            console.log(officeData)
            setName('');
            setType('');
            setFreeWifi('');
            setFreeRestroom('');
            setComments('');
            setRating('');
            props.fetchOffices();
            props.closeCreate();
        })
    }

return (
            <Modal isOpen="true" id="createColor">
                
                <ModalHeader id="createHeader">
                <h3 id="modalCreate"> Create a New Office  <Button id="closeCreateButton" onClick={ () => {props.closeCreate()}} close /></h3> 
              
                </ModalHeader>
                <ModalBody id="createCardBody">
                    <CardText>
                        <Label id="createLabels" htmlFor="name"> Name </Label>
                        <Input id="createInput" name="name" value={name} onChange={(e)=> setName(e.target.value)}>
                        </Input>

                        <Label id="createLabels"  htmlFor="type"> Type of Establishment </Label>
                        <Input id="createInput" type="select" name="type" value={type} onChange={(e)=> setType(e.target.value)}>
                            <option value="DEFAULT">Choose the type of office</option>
                            <option value="Cafe">Cafe</option>
                            <option value="Library">Library</option>
                            <option value="Coworking Space">Coworking Space</option>
                            <option value="Hotel/Hostel">Hotel/Hostel</option>
                            <option value="Other">Other - please define in comment section.</option>
                            </Input>

                            <Label id="createLabels" htmlFor="freeWifi"> Free Wifi (True or False) </Label>
                            <Input id="createInput" name="freeWifi" value={freeWifi} onChange={(e)=> setFreeWifi(e.target.value)}>
                            </Input>

                            <Label id="createLabels" htmlFor="freeRestroom"> Free Restroom (True or False)</Label>
                            <Input id="createInput" name="freeRestroom" value={freeRestroom} onChange={(e)=> setFreeRestroom(e.target.value)}>
                            </Input>

                            <Label id="createLabels" htmlFor="comments"> Comments </Label>
                            <Input id="createInput" name="comments" value={comments} onChange={(e)=> setComments(e.target.value)}>
                            </Input>

                            <Label id="createLabels" htmlFor="rating"> Rating (1 is Poor, 5 is Great)</Label>
                            <Input id="createInput" type="select" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}>
                            <option value="DEFAULT">Choose a rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </Input>
                            <Button type="submit" id="createBtn" onClick={(e) => handleSubmit(e)}>Create Office</Button>
                     </CardText>
                </ModalBody>
            </Modal>
)
}

export default OfficeCreate;





