import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import AllCart from './components/AllCart';
import Checkout from './components/Checkout';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mycart" element={<AllCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </>
  )
}

export default App
