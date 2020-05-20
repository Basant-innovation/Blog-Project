import React, { useState } from "react";
import { connect } from "react-redux";
import Post from "./../Post/post";
import HeaderNavbar from "./../HeaderNavbar/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Form,
  Button,
  Container,
  Col,
  Image,
  Card,
  ListGroup,
  CardGroup,
} from "react-bootstrap";
import "./profile.css";

const Profile = ({ posts }) => {
  return (
    <React.Fragment>
      <HeaderNavbar />

      <div className="profileCover">
        <Image src="1.jpg" />
      </div>
      <section className="profileSection">
        <div className="profilePic">
          <Image className="InnerPic" src="profile.jpg" rounded />
        </div>
        <div class="profileInfo">
          <div class="authorInfo">
            <p>Ahmed Ali</p>
            <p>Junior Journalist</p>

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
          <Link to="/addPostForm">
            <Button className="actionBtn">Add Post</Button>
          </Link>
        )}
      </section>

      <Container>
        <CardGroup>
          {posts
            .filter((post) => post.author == "Ahmed")
            .map((post) => (
              <Post key={post.id} {...post} />
            ))}
        </CardGroup>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state,
});
export default connect(mapStateToProps)(Profile);
