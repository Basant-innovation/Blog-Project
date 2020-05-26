import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import SignIn from "./components/SignIn/index";
import SignUp from "./components/SignUp/index";
import Profile from "./components/Profile/index";
import PostForm from "./components/PostForm/postForm";

import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { getCurrentUser } from "./redux/actions/users";
import { connect } from "react-redux";

library.add(fab, faCheckSquare, faCoffee, fas);

const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) props.getCurrentUser();
  });

  axios.defaults.headers.common["auth-token"] = localStorage.getItem("token");

  return (
    <Router>
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile/:id?" component={Profile} />
        <Route path="/postForm" component={PostForm} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default connect(null, { getCurrentUser })(App);
