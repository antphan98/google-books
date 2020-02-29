import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component  {

  render() {

  return (
    <Router>
   <div>
      <Navbar />
      <Jumbotron />
      <Wrapper>
      <Route exact path="/" pages={Search} />
        <Route exact path="/saved" pages={Saved} />
      </Wrapper>
    </div>
    </Router>
  );
  };
}

export default App;
