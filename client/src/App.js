import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Router>
   <div>
      <Navbar />
      <Jumbotron />
      <h1>hello</h1>
    </div>
    </Router>
  );
}

export default App;
