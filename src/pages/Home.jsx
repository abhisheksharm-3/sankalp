import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Room from '../components/Room'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Room />
    </div>
  )
}

export default Home