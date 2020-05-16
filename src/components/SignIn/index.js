import React, { useState, Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
function SignIn() {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}
export default SignIn;
