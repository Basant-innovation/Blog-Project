import React, { useState, useRef } from "react";
import { Form, Button, Container, Overlay, Tooltip } from "react-bootstrap";
import Joi from "joi-browser";
import { createPopper } from "@popperjs/core";

import { signUpUser, signInUser } from "./../../redux/actions/users";
import { SetLocalStorage } from "./../../utilties/localStorage";
import { connect } from "react-redux";

const SignUp = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [user, setUser] = useState({
    username: "",
    title: "",
    email: "",
    password: "",
  });

  const schema = Joi.object().keys({
    username: Joi.string().min(3).max(30).required(),
    title: Joi.string().required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{8,30}$/)
      .required(),
    email: Joi.string().email().required(),
  });

  const onHandleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    Joi.validate(user, schema, function (err, value) {
      if (err !== null) {
        //showing tooltip of errors
        setShow(true);
      } else {
        setShow(false);
        console.log("before user signed up");
        props.signUpUser(user);
        console.log("after user signed up");
        //try to catch errors before redirecting or make sure that the user have registered
        // const token = SignInUser(user.email, user.password);
        // SetLocalStorage(token);
        // props.history.replace("/Profile");
      }
      console.log("err", err);
      console.log("value", value);
    });
  };

  // const validateHandler = (event) => {
  //   Joi.validate(
  //     //{ ...user, [event.target.name]: event.target.value },
  //     { [event.target.name]: event.target.value },
  //     schema,
  //     function (err, value) {
  //       user.concat(value);
  //       console.log("err", err);
  //       console.log("value", value);
  //     }
  //   );
  // };

  return (
    <React.Fragment>
      <Container>
        <Form onSubmit={onHandleSubmit}>
          <Form.Group ref={target} controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Ex: Ahmed Ali"
              onChange={onHandleChange}
            />
            {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
            <Overlay target={target.current} show={show} placement="bottom">
              {(props) => (
                <Tooltip id="username" {...props}>
                  username
                </Tooltip>
              )}
            </Overlay>
          </Form.Group>

          <Form.Group controlId="formBasicTile">
            <Form.Label>Your Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Ex: Senior Journalist"
              onChange={onHandleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Ex: AhmedAli@mail.com"
              onChange={onHandleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={onHandleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};
export default connect(null, { signUpUser })(SignUp);
