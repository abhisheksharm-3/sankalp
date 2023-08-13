import React from "react";

import images from "../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className=" bg-app-primary text-white">
      <div className="hidden lg:flex justify-between items-center px-10 text-[13px] font-medium">
        <div className="flex items-center justify-center">
          <img
            src={images.sanklp_logo}
            alt="logo"
            className="w-[110px] lg:w-[190px] cursor-pointer"
          />
        </div>
        <ul className="flex gap-12 items-center justify-center flex-1">
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
            Home
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
            About
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
            Rooms
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
            Restaurant
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
            Conference Hall
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
            Contacts
          </li>
        </ul>
        <button className="font-serif rounded-full bg-black hover:bg-gray-800 ease-in-out duration-500 py-2 px-4 cursor-pointer uppercase leading-tight">
          Report an Issue
        </button>
      </div>
      <div className="flex lg:hidden items-center justify-between px-3">
        <img
          src={images.sanklp_logo}
          alt="logo"
          className="w-[110px] lg:w-[190px] cursor-pointer"
        />
        <svg
          onClick={() => setToggleMenu(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        {toggleMenu && (
          <div className="flex flex-col items-center py-12 gap-10 fixed w-full h-screen top-0 left-0 bg-app-primary ease-in duration-500 lg:hidden z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer absolute top-5 right-5 hover:text-black ease-in duration-400"
              onClick={()=>setToggleMenu(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <ul className="flex flex-col items-center justify-center gap-12 text-2xl">
              <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
                Home
              </li>
              <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
                About
              </li>
              <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
                Rooms
              </li>
              <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
                Restaurant
              </li>
              <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
                Conference Hall
              </li>
              <li className="font-sans cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
                Contacts
              </li>
            </ul>
            <button className="font-serif rounded-full bg-black hover:bg-gray-800 ease-in-out duration-500 pt-3 pb-2 px-4 cursor-pointer uppercase leading-tight text-sm" onClick={()=>setToggleMenu(false)}>
              Report an Issue
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
