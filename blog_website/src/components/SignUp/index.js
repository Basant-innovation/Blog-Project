import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Joi from "joi-browser";

import { signUpUser } from "./../../redux/actions/users";

import { connect } from "react-redux";

const SignUp = (props) => {
  const [err, setErr] = useState({});
  const [user, setUser] = useState({
    username: "",
    title: "",
    email: "",
    password: "",
  });
  // Joi.object().keys
  const schema = {
    username: Joi.string().min(3).max(30).required(),
    title: Joi.string().required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{8,30}$/)
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
    //const user = { ...user };
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
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    Joi.validate(user, schema, function (err, value) {
      if (err !== null) {
        setErr(err);
      } else {
        props.signUpUser(user);
        props.history.replace("/Signin");
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
          <div className="pageTitle">SIGN UP</div>
          <Form className="formbox" onSubmit={onHandleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Ex: Ahmed Ali"
                onChange={onHandleChange}
              />
              {err.username && (
                <div className="alert alert-danger">{err.username}</div>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicTile">
              <Form.Label>Your Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Ex: Senior Journalist"
                onChange={onHandleChange}
              />
              {err.title && (
                <div className="alert alert-danger">{err.title}</div>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Ex: AhmedAli@mail.com"
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
              {err.password && (
                <div className="alert alert-danger">{err.password}</div>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </Container>
      </header>
    </React.Fragment>
  );
};
export default connect(null, { signUpUser })(SignUp);
