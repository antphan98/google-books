import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';

class App extends Component  {

  render() {

  return (
    <Router>
   <div>
      <Navbar />
      <Jumbotron />
      <Wrapper>
      <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Wrapper>
    </div>
    </Router>
  );
  };
}

export default App;
