import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Vans from './components/Vans';
import Rent from './components/Rent';
import Sign from './components/Sign'
import Sorry from './components/Sorry'
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
          <Route path='/Rent/:name' element={<Sign />} />
          <Route path='/Sorry' element={<Sorry />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;