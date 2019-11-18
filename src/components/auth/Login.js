import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; //1
import APIURL from '../../helpers/environment';
import './Login.css';
//double check this file pathway is right

const Login= (props) => {
    const[username, setUsername] = useState('');  //2 created state variables which will be fed info from our input fields
    const [password, setPassword] = useState('')


    // const passwordCheck = () => {
    //     if(password.length < 5) {
    //     alert("Your password must be 5 or more characters")
    // }}
    //how do I use 2 functions in one button?

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/login`, {
            method: 'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    };

    return (
        <div>
            <h3>Login</h3>
            <Form onSubmit= {handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input id="creds" onChange= {(e) => setUsername(e.target.value)} name="username" value={username}/>  
                </FormGroup>
                <FormGroup id="formCenter">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                    <Button id="loginButton" type="submit" >Login</Button>
            </Form>
        </div>
    )
}

export default Login;