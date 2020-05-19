import React, { useState } from "react";

import {
  Navbar,
  Nav,
  Container,
  Card,
  Button,
  CardGroup,
  CardDeck,
  Image,
} from "react-bootstrap";

const Post = ({ id, img, title, breif, authorimg, author, date }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <div className="imagec">
        <Card.Img variant="top" src={img} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{breif}</Card.Text>
        <div className="author">
          <div className="ProfileThumbnail">
            <Image src={authorimg} rounded />
          </div>
          <div>
            <p className="authorName">{author}</p>
            <p className="blogDate">{date}</p>
          </div>
        </div>
        <Button variant="light">Read More</Button>
      </Card.Body>
    </Card>
  );
};
export default Post;
