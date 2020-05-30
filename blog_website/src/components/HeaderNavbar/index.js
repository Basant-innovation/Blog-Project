import React from "react";

import "./style.css";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

import { connect } from "react-redux";
import { logOutUser } from "./../../redux/actions/users";

const HeaderNavbar = (props) => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="transparent">
        <Navbar.Brand as={Link} to="/">
          Bloture
        </Navbar.Brand>
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
