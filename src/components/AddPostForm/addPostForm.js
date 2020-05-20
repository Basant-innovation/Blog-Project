import React, { useState, useRef } from "react";
import { FormGroup, Form, Overlay, Tooltip, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddPostForm = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [user, setUser] = useState({
    username: "",
    title: "",
    email: "",
    password: "",
  });

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log("err");
  };

  const onHandleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <Form onSubmit={onHandleSubmit}>
        <Form.Group ref={target} controlId="formBasicName">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Ex: Forest"
            onChange={onHandleChange}
          />
          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
              <Tooltip id="username" {...props}>
                username
              </Tooltip>
            )}
          </Overlay>
        </Form.Group>
        <Form.File.Label>Upload Image</Form.File.Label>
        <Form.File id="custom-file" label="Custom file input" custom />

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>blog Content</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <FormGroup>
          <ul>
            <li>
              {" "}
              tag{" "}
              <button>
                <FontAwesomeIcon icon="times" color="white" />
              </button>
            </li>
          </ul>
        </FormGroup>
        <Button variant="primary" type="submit">
          Add Post
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default AddPostForm;
