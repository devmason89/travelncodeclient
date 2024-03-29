import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; //1
import './Signup.css';
import APIURL from '../../helpers/environment';

const Signup= (props) => {
    const[username, setUsername] = useState('');  //2 created state variables which will be fed info from our input fields
    const [password, setPassword] = useState('')

    

    const handleSubmit = (event) => {
        event.preventDefault();               //prevents from refreshing page when we submit the form
        fetch(`${APIURL}/signup`, {   //1 sending fetch request to the endpoint determined in our server. 
        method: 'POST',  //2
        body: JSON.stringify({user: {username:username, password: password}}),  //3 works with req.body.user.username
        headers: new Headers ({
            'Content-Type': 'application/json'  //4
        })
    }).then(
        (response) => response.json()       //5 turn the response into json when it resolves
    ).then((data) => {
        props.updateToken(data.sessionToken)         //taking the data from the server and calling our updateToken fx
    })
    }

    return (
        <div className="body">
            <h3 className="title">Sign Up</h3>
            <Form onSubmit= {handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input id="creds" onChange={(e)=> setUsername(e.target.value)} type = "email" name="traveller" value={username}/>  
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input class="creds" onChange={(e)=> setPassword(e.target.value)} type="password" minlength="5" name="password" value={password}/>
                    <Button id="signupButton" type="submit">Signup</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Signup;