import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { AuthProvider } from './context/Authcontext';
import WomensWear from './pages/WomensWear';
import MensWear from './pages/MensWear';
import KidsWear from './pages/KidsWear';
import GenZWear from './pages/GenZWear';
import Home from './pages/HomeLiving';
import Electronics from './pages/Electronics';
import Beauty from './pages/Beauty';
import Footwear from './pages/Footwear';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <AuthProvider>
        <Header />
      
        <Routes>
        <Route path="/" element={<Hero />} />
          <Route path="/women" element={<WomensWear />} />
          <Route path="/men" element={<MensWear />} />
          <Route path="/kids" element={<KidsWear />} />
          <Route path="/genZ" element={<GenZWear />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/home&living" element={<Home/>} />
          <Route path="/footwear" element={<Footwear />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
