import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editPost, deletePost } from "../../redux/actions/posts";
import PostForm from "../PostForm/postForm";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./post.css";

import { Card, Button, Image, Modal } from "react-bootstrap";

const Post = ({ post, currentUser, deletePost, className }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <div className="overlay">
          <PostForm handleClose={handleClose} id={post._id} />
        </div>
      </Modal>

      <Card style={{ width: "18rem" }}>
        <div
          // "imagec"
          className={className}
          style={{ background: `url(${post.imgUrl})center/cover no-repeat` }}
        >
          {/* <Card.Img variant="top" src={post.imgUrl} /> */}
        </div>
        <Card.Body>
          <div className="d-flex actions">
            <Card.Title>{post.title}</Card.Title>
            {currentUser._id === post.author._id && (
              <div>
                <span className="crudBtn" onClick={handleShow}>
                  <FontAwesomeIcon icon="edit" color="#1c5648" />
                </span>
                <span className="crudBtn" onClick={() => deletePost(post._id)}>
                  <FontAwesomeIcon icon="trash" color="#1c5648" />
                </span>
              </div>
            )}
          </div>
          <Card.Text className="content">{post.content}</Card.Text>
          <Card.Text>
            {post.tags.map((tag, index) => (
              <span key={index}> {tag}</span>
            ))}
          </Card.Text>
          <div class="card-buttom">
            <div className="author">
              <div
                className="ProfileThumbnail"
                style={{
                  backgroundImage: `url(/profile.jpg)`,
                  borderRadius: "10px",
                }}
              >
                {/* <Image src="/profile.jpg" rounded /> */}
              </div>
              <div class="authorcontent">
                <Link
                  className="authorName"
                  to={`/profile/${post.author?._id}`}
                >
                  {post.author?.username}
                </Link>
                <p className="blogDate">
                  {moment(post.publish_date).format("MMM DD, YYYY")}
                </p>
              </div>
            </div>
            <Button variant="light">Read More</Button>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users.currentUser,
});
export default connect(mapStateToProps, { deletePost, editPost })(Post);
