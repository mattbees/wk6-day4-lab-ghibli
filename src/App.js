// import React, { Component, Fragment } from "react";
import React from 'react';
import './App.css';
import FilmBox from './containers/FilmBox';

function App() {
  return (
    <FilmBox />
  );
}

export default App;

// import About from "./About";
// import Home from "./Home";
// import Pricing from "./Pricing";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './Navbar';



// render() {
//   return (
//     <Router>
//       <Fragment>
//         <Navbar />
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route
//           path="/pricing"
//           render={() => <Pricing pricing={this.state.pricing} />}
//         />
//       </Fragment>
//     </Router>
//   );
// }
