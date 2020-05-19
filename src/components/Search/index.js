import React, { useState, Component } from "react";
import { Navbar, Nav, Form, FormControl, InputGroup } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  const [search, setSearch] = useState(false);

  const openSearch = (e) => {
    setSearch(true);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    alert("searched");
    //this.setState({ search: event.target.value.substr(0, 30) });
  };

  return (
    <React.Fragment>
      <Form inline className="searchForm">
        <InputGroup>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon
                onClick={submitSearch}
                icon="search"
                color="white"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </Form>
      <Nav.Link className="search" onClick={openSearch}>
        <FontAwesomeIcon icon="search" color="white" />
      </Nav.Link>
    </React.Fragment>
  );
}

export default Search;
