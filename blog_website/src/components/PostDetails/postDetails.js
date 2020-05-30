import React, { useState, useEffect } from "react";

import HeaderNavbar from "../HeaderNavbar/index";
import { Container, CardDeck, Pagination } from "react-bootstrap";

import { connect } from "react-redux";
import "./style.css";
import { getPostById } from "./../../redux/actions/posts";
import Post from "./../Post/post";
import { moment } from "moment";

const PostDetails = ({ post, getPostById }) => {
  useEffect(() => {
    getPostById();
  }, []);

  return (
    <React.Fragment>
      <div className="postDetailHeader">
        <HeaderNavbar />
      </div>
      <Container>
        <section className="postDetails">
          <div
            // "imagec"
            className="postDetailsimg"
            style={{ background: `url(${post.imgUrl})center/cover no-repeat` }}
          ></div>
          <div>{post.content}</div>
          <div className="authord">
            <div
              // "imagec"
              className="authordimg"
              style={{
                background: `url(${post.imgUrl})center/cover no-repeat`,
              }}
            ></div>
            <div class="authorcontent">
              <Link className="authorName" to={`/profile/${post.author?._id}`}>
                {post.author?.username}
              </Link>
              <p className="blogDate">
                {moment(post.publish_date).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPostById })(Posts);
