import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editPost, deletePost } from "../../redux/actions/posts";
import PostForm from "./../PostForm/postForm";

import {
  Navbar,
  Nav,
  Container,
  Card,
  Button,
  CardGroup,
  CardDeck,
  Image,
  Modal,
} from "react-bootstrap";

const Post = ({ posts, deletePost, editPost }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div className="overlay">
          <PostForm handleClose={handleClose} />
        </div>
      </Modal>

      <Card style={{ width: "18rem" }}>
        <div className="imagec">
          <Card.Img variant="top" src={posts.img} />
        </div>
        <Card.Body>
          <Card.Title>{posts.title}</Card.Title>
          <Card.Text>{posts.content}</Card.Text>
          <div className="author">
            <div className="ProfileThumbnail">
              <Image src={posts.authorimg} rounded />
            </div>
            <div>
              <Link className="authorName" to={`/profile/${posts.author?._id}`}>
                {posts.author?.username}
              </Link>
              <p className="blogDate">{posts.publish_date}</p>
            </div>
          </div>
          <Button variant="light">Read More</Button>
        </Card.Body>
        {/* () => deletePost(id) */}
        <span onClick={() => deletePost(posts._id)}>delete</span>
        <span onClick={handleShow}>edit</span>

        {/* editPost(posts._id)} */}
      </Card>
    </React.Fragment>
  );
};
export default connect(null, { deletePost, editPost })(Post);
