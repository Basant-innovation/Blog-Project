import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "react-spring";
import "./style.css";
import About from "./../About/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blogs from "../Posts/index";
import Home from "./../Home/index";
import ContactUs from "./../ContactUs/index";

import { Navbar, Nav, Form, FormControl, InputGroup } from "react-bootstrap";
import "./style.css";
import Search from "../Search";

function HeaderNavbar() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="#home">Nature Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/posts">Posts</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contactus">Contact us</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Search />
            <Nav.Link>
              <Link to="/signin">in</Link>{" "}
            </Nav.Link>
            <div>|</div>
            <Nav.Link eventKey={2}>
              <Link to="/signup">up</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default HeaderNavbar;
