import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Post from "./../Post/post";
import HeaderNavbar from "./../HeaderNavbar/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import {} from "../../redux/actions/users";
import { getMyPost } from "../../redux/actions/posts";
import { getUserById } from "../../redux/actions/users";

import {
  Form,
  Button,
  Container,
  Col,
  Image,
  Card,
  ListGroup,
  CardGroup,
  CardColumns,
  CardDeck,
  Modal,
} from "react-bootstrap";
import "./profile.css";
import { GetLocalStorageUser } from "./../../utilties/localStorage";
import AddPostForm from "./../AddPostForm/addPostForm";

const Profile = ({ posts, user, getMyPost, getUserById }) => {
  useEffect(() => {
    getMyPost();
  }, []);

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
          <AddPostForm />
        </div>
      </Modal>

      <HeaderNavbar />

      <div className="profileCover">
        <Image src="1.jpg" />
      </div>
      <section className="profileSection">
        <div className="profilePic">
          <Image className="InnerPic" src="profile.jpg" rounded />
        </div>
        <div className="profileInfo">
          <div className="authorInfo">
            <p>{user.username}</p>
            <p>{user.title}</p>

            <Card className="infoNo" style={{ width: "18rem" }}>
              <ListGroup variant="flush" className="listInfo">
                <ListGroup.Item>19 Posts</ListGroup.Item>
                <ListGroup.Item>180 Followers</ListGroup.Item>
                <ListGroup.Item>230 Following</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>
        {!true ? (
          <Button className="actionBtn">Follow</Button>
        ) : (
          <Button className="actionBtn" onClick={handleShow}>
            Add Post
          </Button>
        )}
      </section>

      <Container>
        <CardDeck className="">
          {posts.map((post) => (
            <Post key={post.id} posts={post} />
          ))}
        </CardDeck>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  user: state.users.currentUser,
});
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   signIn : dispatch(sin)
// })
export default connect(mapStateToProps, { getMyPost, getUserById })(Profile);
