import React, { useState, useEffect } from "react";
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
  Pagination,
} from "react-bootstrap";

import { connect } from "react-redux";
import Post from "../Post/post";
/*import "./style.css";*/
import { getAllPosts } from "./../../redux/actions/posts";

const Posts = ({ posts, getAllPosts }) => {
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState(1);
  useEffect(() => {
    getAllPosts(active).then((t) => setTotal(t));
  }, [active]);

  const items = [];
  for (let number = 1; number <= Math.ceil(total / 4); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <React.Fragment>
      <HeaderNavbar />
      <Container>
        <section>
          <CardDeck>
            {posts.map((post) => (
              <Post key={post.id} posts={post} />
            ))}
          </CardDeck>
        </section>
        <Pagination>{items}</Pagination>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getAllPosts })(Posts);
