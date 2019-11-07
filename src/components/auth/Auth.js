import React from 'react';
import {Container, Row, Col} from 'reactstrap'; //1 importing all of boostrap tools to use its grid system
import Login from './Login'
import Signup from './Signup'
import './Auth.css';

const Auth= (props) => {   //2 creating functional component. will pull in props to be passed down
    return(
        <Container className="auth-container">
            <Row>
                <Col md="3">
                    <Signup updateToken= {props.updateToken} />
                </Col>
                <Col md="3" className= "login-col">
                    <Login updateToken = {props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;

//created a prop called updateToken. allows us to pass token to signup and login functions. 