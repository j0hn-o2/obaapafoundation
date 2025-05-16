import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom'; learn how to use this

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
