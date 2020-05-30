import React, { useState, useEffect } from "react";

import HeaderNavbar from "../HeaderNavbar/index";
import { Container, CardDeck, Pagination } from "react-bootstrap";

import { connect } from "react-redux";
import "./postDetails.css";
import { getPostById } from "./../../redux/actions/posts";
import Post from "./../Post/post";
import moment from "moment";
import { Link } from "react-router-dom";

const PostDetails = ({ getPostById, match }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    if (match.params.id) {
      getPostById(match.params.id).then((p) => setPost(p));
    }
  }, [match.params.id]);

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
          <div className="detailsbody">
            <h3>{post.title}</h3>
          </div>
          <div className="detailsbody">{post.content}</div>
          <div className="authord d-flex align-items-center">
            <div
              // "imagec"
              className="authordimg"
              style={{
                background: `url("/profile.jpg")center/cover no-repeat`,
              }}
            ></div>
            <div class="authorcontent">
              <Link className="authorName" to={`/profile/${post.author?._id}`}>
                {post.author?.username}
              </Link>
              <p className="blogDate">
                {post.publish_date &&
                  moment(post.publish_date).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   post: state.post,
// });

export default connect(null, { getPostById })(PostDetails);
