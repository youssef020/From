import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
    <Form>
    <div className="title">
    <Form.Label><b> Sign Up ! </b></Form.Label>
    </div>

    <div className="spinner">
    <Spinner animation="grow" variant="warning" />
    </div>
    <Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>


    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter Password" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>

    <Form.Text className="text-muted">
    Your password has to be at least 6 characters long.
    </Form.Text>

    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember me" />
    </Form.Group>


    <div className="submit">
    <Button variant="warning"> <b>Submit</b></Button>{' '}
    </div>



    </Form>

    </div>
  );
}

export default App;
