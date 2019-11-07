import React, {useState} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Carousel,
  CarouselItem, Container,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const OfficeCard = (props) => {

     const deleteOffice =(office)=> {
         fetch(`http://localhost:3000/office/${office.id}`, {
             method: 'DELETE',
             headers: new Headers ({
                 'Content-Type': 'application/json',
                 'Authorization': props.token
             })
         })
         .then(() => props.fetchOffices)
     }



    const [username, setUsername]=useState('')





    return (
        <Container>
            <h1> {props.username} 's Office around the world!</h1>
            <Carousel>
                <Card>
                    <CardBody>
                        <CardText>
                    <Button onClick={props.clickLogout}>Logout</Button>
                        </CardText>
                    </CardBody>
                </Card>
            </Carousel>
        </Container>

    )
}

export default OfficeCard;