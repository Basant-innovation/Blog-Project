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

function HeaderNavbar() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="#home">Bloture</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/posts">Blog</Link>
            </Nav.Link>
          </Nav>

          {/* <Search /> */}
          {!true ? (
            <Nav>
              <Nav.Link>
                <Link to="/signin">in</Link>{" "}
              </Nav.Link>
              <div className="seperator">|</div>
              <Nav.Link>
                <Link to="/signup">up</Link>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav.Link eventKey={2}>
              <Link to="/signup">log out</Link>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default HeaderNavbar;
