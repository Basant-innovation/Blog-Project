import React, { useState } from "react";

import { Form, Button, Container } from "react-bootstrap";
import "./style.css";

import Joi from "joi-browser";
import { signInUser } from "./../../redux/actions/users";
import { getMyPost } from "./../../redux/actions/posts";
import { connect } from "react-redux";
import { SetLocalStorage } from "./../../utilties/localStorage";

const SignIn = (props) => {
  const [err, setErr] = useState({});

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const schema = {
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,30}$/)
      .required(),
    email: Joi.string().email().required(),
  };

  const validateInput = (property, name) => {
    //Sub Schema
    const inputSchema = { [name]: schema[name] };
    //validate using Joi
    const { error } = Joi.validate(property, inputSchema);
    if (error === null) return null;
    return error.details[0];
  };

  const onHandleChange = (event) => {
    const allerr = { ...err };
    const error = validateInput(
      { [event.target.name]: event.target.value },
      event.target.name
    );
    if (error === null) {
      delete allerr[event.target.name];
    } else {
      allerr[event.target.name] = error.message;
    }
    setErr(allerr);
    setUser({ ...user, [event.target.name]: event.target.value });
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    Joi.validate(user, schema, async function (err, value) {
      if (err !== null) {
      } else {
        const userResult = await props.signInUser(user);
        if (userResult?.token) {
          SetLocalStorage(userResult.token);
          props.history.replace("/Profile");
        }
      }
    });
  };

  return (
    <React.Fragment>
      <header>
        <video autoplay="autoplay" loop="loop" id="backgroundVideo">
          <source src="background_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
              {err.email && (
                <div className="alert alert-danger">{err.email}</div>
              )}
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
            {err.email && (
              <div className="alert alert-danger">
                Email or Password are incorrect
              </div>
            )}
            <Button type="submit">Sign in</Button>
          </Form>
        </Container>
      </header>
    </React.Fragment>
  );
};
export default connect(null, { signInUser, getMyPost })(SignIn);
