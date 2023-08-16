import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SafeRestro from '../components/SafeRestro'
import RestroInfo from '../components/RestroInfo'

const About = () => {
  return (
    <div>
      <Navbar />
      <SafeRestro />
      <RestroInfo />
      <Footer />
    </div>
  )
}

export default About