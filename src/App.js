import './App.css';
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navigation from './components/Navbar'
import Bio from './components/pages/Bio'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Works from './components/pages/Works'
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/works" element={<Works />}  />
            <Route path="/bio" element={<Bio />}  />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
