import React, { useState } from "react";
import { connect } from "react-redux";
import Post from "./../Post/post";
import HeaderNavbar from "./../HeaderNavbar/index";

import {
  Form,
  Button,
  Container,
  Col,
  Image,
  Card,
  ListGroup,
  CardDeck,
} from "react-bootstrap";
import "./style.css";

const Profile = ({ posts }) => {
  return (
    <React.Fragment>
      <HeaderNavbar />
      <Col xs={6} md={4}>
        <div class="profilePic">
          <Image src="profile.jpg" rounded />
        </div>
        <div class="profileInfo">
          <h3>Ahmed Ali</h3>
          <h6>Junior Journalist</h6>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>19 Blogs</ListGroup.Item>
              <ListGroup.Item>180 Followers</ListGroup.Item>
              <ListGroup.Item>230 Following</ListGroup.Item>
            </ListGroup>
          </Card>
          <Button>Follow</Button>
        </div>
      </Col>

      <Container>
        <CardDeck>
          {posts
            .filter((post) => post.author == "Ahmed")
            .map((post) => (
              <Post key={post.id} {...post} />
            ))}
        </CardDeck>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state,
});
export default connect(mapStateToProps)(Profile);
