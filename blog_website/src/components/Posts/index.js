import React, { useState, useEffect } from "react";

import HeaderNavbar from "../HeaderNavbar/index";
import { Container, CardDeck, Pagination } from "react-bootstrap";

import { connect } from "react-redux";
import "./style.css";
import { getAllPosts } from "./../../redux/actions/posts";
import Post from "./../Post/post";

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
      <div className="blogHeader">
        <HeaderNavbar />
      </div>
      <Container>
        <section className="blogPosts">
          <CardDeck className="cardsPosts">
            {posts.map((post) => (
              <Post key={post.id} post={post} className={"pofCard"} />
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
