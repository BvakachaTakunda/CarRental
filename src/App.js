import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Vans from './components/Vans';
import Rent from './components/Rent';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/HeroSection' element={<HeroSection />} />
          <Route path='/About' element={<About />} />
          <Route path='/Vans' element={<Vans />} />
          <Route path='/Vans/:name' element={<Rent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;