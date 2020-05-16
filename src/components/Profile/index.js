import React, { useState, Component } from "react";
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

import HeaderNavbar from "./../HeaderNavbar/index";
function Profile() {
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
          <Card style={{ width: "18rem" }}>
            <div className="imagec">
              <Card.Img variant="top" src="1.jpg" />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <div class="imagec">
              <Card.Img variant="top" src="2.jpg" />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <div class="imagec">
              <Card.Img variant="top" src="3.jpg" />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </React.Fragment>
  );
}
export default Profile;
