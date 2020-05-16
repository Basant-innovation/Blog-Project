import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import ContactUs from "./components/ContactUs";
import SignIn from "./components/SignIn/index";
import SignUp from "./components/SignUp/index";

import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile/index";

library.add(fab, faCheckSquare, faCoffee, fas);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
