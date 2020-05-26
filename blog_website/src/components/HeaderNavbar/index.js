import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "react-spring";
import "./style.css";
import About from "./../About/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blogs from "../Posts/index";
import Home from "./../Home/index";

import { Navbar, Nav, Form, FormControl, InputGroup } from "react-bootstrap";
import "./style.css";
import Search from "../Search";
import { connect } from "react-redux";
import { logOutUser } from "./../../redux/actions/users";

const HeaderNavbar = (props) => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="#home">Bloture</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/posts">
              Blog
            </Nav.Link>
          </Nav>

          {/* <Search /> */}
          {!props.currentUser._id ? (
            <Nav>
              <Nav.Link as={Link} to="/signin">
                in
              </Nav.Link>
              <div className="seperator">|</div>
              <Nav.Link as={Link} to="/signup">
                up
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to={`/profile/${props.currentUser._id}`}>
                My Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={props.logOutUser}>
                Logout
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps, { logOutUser })(HeaderNavbar);
