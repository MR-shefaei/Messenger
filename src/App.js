import React , {useState} from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/Fotter';
import Content from './components/content';
import Business from './components/busieness';
import Economic from './components/economic';
import Market from './components/market';




function App() {

 
 
  return (

   <React.Fragment>
        
        <Header/>
        
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/busieness" element={  <Business/>}/>
          <Route path="/economic" element={  <Economic/>}/>
          <Route path="/markets" element={  <Market/>}/>
          
        </Routes>
        <Footer/>
      
      
    </React.Fragment>
  );
}

export default App;
