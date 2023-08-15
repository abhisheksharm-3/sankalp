import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Room from '../components/Room'
import Info from '../components/Info'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Room />
      <Info />
      <Footer theme="white"/>
    </div>
  )
}

export default Home