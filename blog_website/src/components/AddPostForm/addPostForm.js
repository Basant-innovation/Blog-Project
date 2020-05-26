import React, { useState, useRef } from "react";
import { FormGroup, Form, Overlay, Tooltip, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import { addPost } from "./../../redux/actions/posts";

const AddPostForm = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [post, setPost] = useState({
    title: "",
    content: "",
    imgUrl: "",
    tags: "",
  });

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    console.log(post);
    const res = await props.addPost(post);

    // props.history.replace("/Profile");
  };

  const onHandleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <Form onSubmit={onHandleSubmit} className="addForm">
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
          <Form.Control
            name="content"
            as="textarea"
            rows="3"
            onChange={onHandleChange}
          />
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

export default connect(null, { addPost })(AddPostForm);
