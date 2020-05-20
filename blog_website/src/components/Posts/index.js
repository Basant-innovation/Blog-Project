import React, { useState } from "react";
import { ReactDOM } from "react-dom";
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

import { connect } from "react-redux";
import Post from "../Post/post";
/*import "./style.css";*/

const Posts = ({ posts }) => {
  // const [posts, setPosts] = useState([
  //   {
  //     id: "1",
  //     img: "1.jpg",
  //     title: "Forest",
  //     breif: "Lorem ipsum",
  //     authorimg: "profile.jpg",
  //     author: "Ahmed",
  //     date: "date.now()",
  //   },
  //   {
  //     id: "2",
  //     img: "2.jpg",
  //     title: "Forest",
  //     breif: "Lorem ipsum",
  //     authorimg: "profile.jpg",
  //     author: "Ahmed",
  //     date: "date.now()",
  //   },
  //   {
  //     id: "3",
  //     img: "3.jpg",
  //     title: "Forest",
  //     breif: "Lorem ipsum",
  //     authorimg: "profile.jpg",
  //     author: "Ahmed",
  //     date: "date.now()",
  //   },
  // ]);
  return (
    <React.Fragment>
      <HeaderNavbar />
      <Container>
        <section>
          <CardDeck>
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </CardDeck>
        </section>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state,
});

export default connect(mapStateToProps)(Posts);
