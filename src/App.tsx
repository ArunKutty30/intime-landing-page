import React from 'react';
import './App.css';
import Header from './section/Header/header';
import Home from './section/Home/home';
import {BrowserRouter as Router} from 'react-router-dom';
import About from './section/Aboutus/about';
import Nft from './section/NFT/nft';
function App() {
  return (
    <Router>
      <Header/>
      <Home/>
      <Nft />
      <About/>
    </Router>
  );
}

export default App;
