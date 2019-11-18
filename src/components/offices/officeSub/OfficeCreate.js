import React, {useState} from 'react';
import {
  Card, CardText, CardTitle, CardBody,
   Button, 
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
            <Card id="createColor">
                <CardTitle>
                <h1 id="createHeader"> Create a New Office </h1>
                <Button onClick={ () => {props.closeCreate()}} close />
                </CardTitle>
                <CardBody>
                    <CardText>
                        <Label className="createLabels" htmlFor="name"> Name </Label>
                        <Input name="name" value={name} onChange={(e)=> setName(e.target.value)}>
                        </Input>

                        <Label className="createLabels"  htmlFor="type"> Type of Establishment </Label>
                        <Input type="select" name="type" value={type} onChange={(e)=> setType(e.target.value)}>
                            <option value="Cafe">Cafe</option>
                            <option value="Library">Library</option>
                            <option value="Coworking Space">Coworking Space</option>
                            <option value="Hotel/Hostel">Hotel/Hostel</option>
                            <option value="Other">Other - please define in comment section.</option>
                            </Input>

                            <Label className="createLabels" htmlFor="freeWifi"> Free Wifi (True or False) </Label>
                            <Input name="freeWifi" value={freeWifi} onChange={(e)=> setFreeWifi(e.target.value)}>
                            </Input>

                            <Label className="createLabels" htmlFor="freeRestroom"> Free Restroom (True or False)</Label>
                            <Input name="freeRestroom" value={freeRestroom} onChange={(e)=> setFreeRestroom(e.target.value)}>
                            </Input>

                            <Label className="createLabels" htmlFor="comments"> Comments </Label>
                            <Input name="comments" value={comments} onChange={(e)=> setComments(e.target.value)}>
                            </Input>

                            <Label className="createLabels" htmlFor="rating"> Rating (1 is Poor, 5 is Great)</Label>
                            <Input name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}>
                            </Input>
                            <Button type="submit" id="createBtn" onClick={(e) => handleSubmit(e)}>Create Office</Button>
                     </CardText>
                </CardBody>
            </Card>
)
}

export default OfficeCreate;





