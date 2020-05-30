import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import HeaderNavbar from "./../HeaderNavbar/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMyPost } from "../../redux/actions/posts";
import { getUserById, toggleFollowUser } from "../../redux/actions/users";

import {
  Button,
  Container,
  Image,
  Card,
  ListGroup,
  CardDeck,
  Modal,
} from "react-bootstrap";
import "./profile.css";
import PostForm from "../PostForm/postForm";
import Post from "./../Post/post";

const Profile = ({
  posts,
  currentUser,
  user,
  getMyPost,
  getUserById,
  toggleFollowUser,
  match,
}) => {
  useEffect(() => {
    const userId = match.params.id || currentUser._id;
    if (userId) {
      getUserById(userId);
      getMyPost(userId);
    }
  }, [match.params.id, currentUser._id]);

  console.log(
    "following user " +
      currentUser.following +
      "currentuser id: " +
      currentUser.username
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleFollow = (follow) => {
    toggleFollowUser(user._id, follow);
  };

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <div className="overlay">
          <PostForm handleClose={handleClose} />
        </div>
      </Modal>

      <HeaderNavbar />

      <div className="profileCover">
        <Image src="/1.jpg" />
      </div>
      <Container>
        <div className="profileSection">
          <div className="d-flex">
            <div
              className="profilePic"
              style={{
                background: `url("/profile.jpg")center/cover no-repeat`,
              }}
            >
              {/* <Image className="InnerPic" src="/profile.jpg" rounded /> */}
            </div>
            <div className="profileInfo">
              <div className="authorInfo">
                <h5>{user.username}</h5>
                <p>{user.title}</p>

                {/* <Card className="infoNo" style={{ width: "18rem" }}> */}
                <ListGroup variant="flush" className="listInfo">
                  <ListGroup.Item>
                    <h5>{posts.length}</h5> Posts
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5>{user.followers?.length}</h5> followers
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5>{user.following?.length}</h5> following
                  </ListGroup.Item>
                </ListGroup>
                {/* </Card> */}
              </div>
            </div>
          </div>
          <div>
            {currentUser._id !== user._id ? (
              <div>
                {!currentUser?.following?.includes(user?._id) ? (
                  <Button
                    className="actionBtn"
                    onClick={() => toggleFollow(true)}
                  >
                    Follow
                  </Button>
                ) : (
                  <Button
                    className="actionBtn"
                    onClick={() => toggleFollow(false)}
                  >
                    UnFollow
                  </Button>
                )}
              </div>
            ) : (
              <Button className="actionBtn" onClick={handleShow}>
                Add Post
              </Button>
            )}
          </div>
        </div>
      </Container>
      <Container>
        <CardDeck className="cardsPosts">
          {posts.map((post) => (
            <Post key={post._id} post={post} className={"pofCard"} />
          ))}
        </CardDeck>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  currentUser: state.users.currentUser,
  user: state.users.user,
});
export default connect(mapStateToProps, {
  getMyPost,
  getUserById,
  toggleFollowUser,
})(Profile);
