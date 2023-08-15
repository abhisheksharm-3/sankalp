import React from 'react'
import Home from './pages/Home'
import Rooms from './pages/Rooms';
import About from './pages/About';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/rooms' element={<Rooms />} />
      <Route path='/about-us' element={<About />} />
    </Routes>
    </div>
  )
}

export default App