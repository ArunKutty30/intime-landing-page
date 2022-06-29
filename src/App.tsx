import React from 'react';
import './App.css';
import Header from './section/Header/header';
import Home from './section/Home/home';
import {BrowserRouter as Router} from 'react-router-dom';
import About from './section/Aboutus/about';
import Nft from './section/NFT/nft';
import Story from './section/Story/story';
import Team from './section/Team/team';
import Community from './section/Community/community';
// import Roadmap from './section/Roadmap/roadmap';
import Footer from './section/Footer/footer';
import Faq from './section/Faq/faq';
function App() {
  return (
    <Router>
      <Header/>
      <Home/>
      <Story/>
      <Nft /> 
     <About/>
       <Team/>
      <Community />
       {/* <Roadmap /> */}
    <Faq />
    <Footer /> 
    </Router>
  );
}

export default App;
