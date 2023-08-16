import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RoomHead from '../components/RoomHead'
import RoomInfo from '../components/RoomInfo'
import UtilityRoom from '../components/UtilityRoom'


const Rooms = () => {
  return (
    <div>
        <Navbar />
        <RoomHead />
        <RoomInfo />
        <UtilityRoom />
        <Footer theme='white' />
    </div>
  )
}

export default Rooms