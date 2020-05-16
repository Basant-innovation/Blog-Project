import React, { Component } from "react";
import HeaderNavbar from "../HeaderNavbar/index";
import {
  Navbar,
  Nav,
  Container,
  Card,
  Button,
  CardGroup,
  CardDeck,
} from "react-bootstrap";
/*import "./style.css";*/

function Posts() {
  return (
    <React.Fragment>
      <HeaderNavbar />
      <Container>
        <section>
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
        </section>
      </Container>
    </React.Fragment>
  );
}

export default Posts;
