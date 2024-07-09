import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import AllCart from './components/AllCart';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mycart" elemenr={<AllCart />} />
        </Routes>
    </>
  )
}

export default App
