import React from 'react';
import './App.css';
import Header from './section/Header/header';
import Home from './section/Home/home';
import {BrowserRouter as Router} from 'react-router-dom';
import About from './section/Aboutus/about';
function App() {
  return (
    <Router>
      <Header/>
      <Home/>
      <About/>
    </Router>
  );
}

export default App;
