import React, { useState, useRef } from "react";
import { FormGroup, Form, Overlay, Tooltip, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import { addPost } from "../../redux/actions/posts";

const PostForm = (props) => {
  const [show, setShow] = useState(false);
  const [tags, setTags] = useState([]);
  const addTags = (e) => {
    if (e.key === "Enter" && e.target.value !== "" && e.preventDefault()) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  const target = useRef(null);
  const [post, setPost] = useState({
    title: "",
    content: "",
    imgUrl: "",
    tags: [],
  });

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    post.tags = tags;
    console.log(post);

    const res = await props.addPost(post);
    props.handleClose();
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
            {tags.map((tag, index) => (
              <li key={index}>
                {tag}
                <i onClick={() => removeTags(index)}>
                  <FontAwesomeIcon icon="times" color="white" />
                </i>
              </li>
            ))}
          </ul>
          <Form.Control
            name="tags"
            type="text"
            placeholder="press enter to add tags"
            // onKeyUp={(e) => addTags(e)}
          ></Form.Control>
        </FormGroup>
        {/* //props.match.params === "addpost" */}
        {true ? (
          <Button variant="primary" type="submit">
            Add Post
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Edit Post
          </Button>
        )}
      </Form>
    </React.Fragment>
  );
};

export default connect(null, { addPost })(PostForm);
