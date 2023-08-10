import React from "react";

import images from "../constants/images";

const Navbar = () => {
  return (
    <div className="bg-app-primary text-white">
      <nav className="flex justify-between items-center px-10 text-[13px] font-thin">
        <div className="flex items-center justify-center">
        <img src={images.sanklp_logo} alt="logo" className="w-[110px] lg:w-[190px] cursor-pointer"/>
        </div>
      <ul className="flex gap-12">
        <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">Home</li>
        <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">About</li>
        <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">Rooms</li>
        <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">Restaurant</li>
        <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">Conference Hall</li>
        <li className="font-sans cursor-pointerease-in-out duration-300 hover:text-[#acacac] uppercase cursor-pointer leading-tight">Contacts</li>
      </ul>
      <div>
        <button className="font-sans rounded-full bg-black hover:bg-gray-800 ease-in-out duration-500 py-2 px-4 cursor-pointer uppercase leading-tight">Report an Issue</button>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
