import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
// import footer from "./components/footer";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <footer />
      </div>
    </Router>
  );
}

export default App;
