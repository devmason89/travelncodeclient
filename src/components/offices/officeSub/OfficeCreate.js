import React, {useState} from 'react';
import {
  Card, CardText, CardBody,
   Button, Carousel,
   Container,
   Label, Input
} from 'reactstrap';

const OfficeCreate = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [freeWifi, setFreeWifi] = useState('')
    const [freeRestroom, setFreeRestroom] = useState('')
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(e);
        fetch('http://localhost:3000/office', {
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
        })
    }

return (
    <Container>
        <h1> Create a New Office </h1>
        <Carousel onClick={(e) => handleSubmit(e)}>
            <Card>
                <CardBody>
                    <CardText>
                        <Label htmlFor="name"/>
                        <Input name="name" value={name} onChange={(e)=> setName(e.target.value)}>
                        </Input>

                        <Label htmlFor="type"/>
                        <Input name="type" value={type} onChange={(e)=> setType(e.target.value)}>
                            <option value="Cafe">Cafe</option>
                            <option value="Library">Library</option>
                            <option value="Coworking Space">Coworking Space</option>
                            <option value="Hotel/Hostel">Hotel/Hostel</option>
                            <option value="Other">Other - please define in comment section.</option>
                            </Input>

                            <Label htmlFor="freeWifi"/>
                            <Input name="freeWifi" value={freeWifi} onChange={(e)=> setFreeWifi(e.target.value)}>
                            </Input>

                            <Label htmlFor="freeRestroom"/>
                            <Input name="freeRestroom" value={freeRestroom} onChange={(e)=> setFreeRestroom(e.target.value)}>
                            </Input>

                            <Label htmlFor="comments"/>
                            <Input name="comments" value={comments} onChange={(e)=> setComments(e.target.value)}>
                            </Input>

                            <Label htmlFor="rating"/>
                            <Input name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}>
                            </Input>
                            <Button type="submit">Create Office.</Button>
                     </CardText>
                </CardBody>
            </Card>
        </Carousel>
    </Container>

)
}

export default OfficeCreate;