import React, { Component, Fragment } from "react";
import FilmBox from './FilmBox';
import About from "./About";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';

class Main extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={FilmBox} />
          <Route path="/about" component={About} />
        </Fragment>
      </Router>
    );
  }
}

export default Main;
