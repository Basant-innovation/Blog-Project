import React, { useState, useRef } from "react";
import { Redirect, Route } from "react-router";
import { Form, Button, Container } from "react-bootstrap";
import "./style.css";

import Joi from "joi-browser";
import { signInUser } from "./../../redux/actions/users";
import { getMyPost } from "./../../redux/actions/posts";
import { connect } from "react-redux";
import {
  SetLocalStorage,
  SetLocalStorageUser,
} from "./../../utilties/localStorage";

const SignIn = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const schema = Joi.object().keys({
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,30}$/)
      .required(),
    email: Joi.string().email().required(),
  });

  const onHandleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    Joi.validate(user, schema, async function (err, value) {
      if (err !== null) {
        setShow(true);
      } else {
        setShow(false);
        const userResult = await props.signInUser(user);
        console.log(userResult?.token);
        if (userResult?.token) {
          SetLocalStorage(userResult.token);
          props.history.replace("/Profile");
        }
      }
      console.log("err", err);
      console.log("value", value);
    });
  };

  return (
    <React.Fragment>
      <header>
        <Container className="mr-auto form">
          <div className="pageTitle">
            Welcome To <p>Bloture</p>
          </div>
          <Form className="formbox" onSubmit={onHandleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
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

            <Button type="submit">Sign in</Button>
          </Form>
        </Container>

        <video autoplay="autoplay" loop="loop" id="backgroundVideo">
          <source src="background_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </React.Fragment>
  );
};
export default connect(null, { signInUser, getMyPost })(SignIn);
