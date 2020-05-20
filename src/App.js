import React from "react";
import "./App.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import SignIn from "./components/SignIn/index";
import SignUp from "./components/SignUp/index";
import Profile from "./components/Profile/index";
import AddPostForm from "./components/AddPostForm/addPostForm";

import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

library.add(fab, faCheckSquare, faCoffee, fas);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/addPostForm" component={AddPostForm} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
