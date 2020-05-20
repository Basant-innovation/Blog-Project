import React, { useState, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Joi from "joi-browser";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    title: Joi.string().required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,30}$/)
      .required(),
    email: Joi.string().email().required(),
  });

  const onHandleSubmit = (event) => {
    event.preventDefault();
    Joi.validate(user, schema, function (err, value) {
      if (err !== null) {
        setShow(true);
        //event.username.text = "how are you today";
      } else {
        setShow(false);
      }
      console.log("err", err);
      console.log("value", value);
    });
  };

  return (
    <React.Fragment>
      <Container>
        <Form onSubmit={onHandleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};
export default SignIn;
