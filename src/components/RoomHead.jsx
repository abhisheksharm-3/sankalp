import React from 'react'
import images from '../constants/images'

const RoomHead = () => {
  return (
    <div className="relative h-screen bg-[url(./assets/Room2.jpeg)] bg-center bg-cover bg-no-repeat z-0">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-evenly z-50 px-4">
        <div className="flex flex-col items-start justify-between py-20 h-screen">
          <h1 className="w-[356.88px] lg:w-[836px] lg:h-[195px] text-app-sec text-7xl lg:text-[125px] font-normal capitalize leading-[80px] lg:leading-[105px]">
            Superior
            <br />
            twins
          </h1>
          <div className="hidden lg:flex justify-end lg:justify-start w-[90vw]">
          <p className="w-[209.24px] lg:w-[330px] lg:h-[69.75px] text-app-sec text-lg uppercase font-serif font-medium text-right lg:text-left">
            All room decoration was made with ecological certified and safe
            materials.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomHead