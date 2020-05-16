import React, { useState, Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
function SignUp() {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Ex: Ahmed Ali" />
          </Form.Group>
          <Form.Group controlId="formBasicTile">
            <Form.Label>Your Title</Form.Label>
            <Form.Control type="text" placeholder="Ex: Senior Journalist" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Ex: AhmedAli@mail.com" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to the Terms and Conditions"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}
export default SignUp;
