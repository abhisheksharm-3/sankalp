import React from "react";
import { Link } from "react-router-dom";

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
        <ul className="flex gap-10 items-center justify-center flex-1">
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
          <Link to="/">Home</Link>
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
          <Link to="/about-us">About</Link>
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
          <Link to="/rooms">Rooms</Link>
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
          <Link to="/">Restaurant</Link>
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
          <Link to="/">Conference Hall</Link>
          </li>
          <li className="font-serif cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
            <Link to="/">Contacts</Link>
          </li>
        </ul>
        <button className="font-serif rounded-full bg-black hover:bg-gray-800 ease-in-out duration-500 py-2 px-4 cursor-pointer uppercase leading-tight">
        <Link to="/">Report an Issue</Link>
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
          <div className="flex flex-col items-start fixed w-full min-h-screen top-0 left-0 bg-app-primary ease-in duration-500 lg:hidden z-30">
            <img
              src={images.sanklp_logo}
              alt=""
              className="w-[40%] pt-3 -ml-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer absolute top-5 right-5 hover:text-black ease-in duration-400"
              onClick={() => setToggleMenu(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <ul className="flex flex-col pl-3 font-semibold gap-6 text-3xl font-serif py-10">
              <li className="cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
              <Link to="/">Home</Link> <img src={images.star} alt="" className="inline -mt-2"/>
              </li>
              <li className="cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
              <Link to="/about-us">About</Link>
              </li>
              <li className="cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
              <Link to="/rooms">Rooms</Link>
              </li>
              <li className="cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
              <Link to="/">Restaurant</Link>
              </li>
              <li className="cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
              <Link to="/">Conference Hall</Link>
              </li>
              <li className="cursor-pointer ease-in-out duration-300 hover:text-[#acacac] uppercase leading-tight">
              <Link to="/">Contacts</Link>
              </li>
            </ul>
            <button
              className="font-serif ml-3 rounded-full bg-black hover:bg-gray-800 ease-in-out duration-500 pt-3 pb-2 px-4 cursor-pointer uppercase leading-tight text-sm"
              onClick={() => setToggleMenu(false)}
            >
              <Link to="/">Report an Issue</Link>
            </button>
            <div className=" text-[#acacac] font-serif flex flex-col gap-2 items-center text-center w-screen pt-16 justify-center">
              <h1 className="underline text-xl font-semibold">+38 032 297 50 20</h1>
              <p className="uppercase text-center text-lg font-semibold">
                8 Lystopadovoho Chynu,Lviv
              </p>
            </div>
            <div className="flex justify-evenly pt-12 w-screen">
              <p className="uppercase font-serif underline text-[#acacac] font-semibold">Facebook</p>
              <p className="uppercase font-serif underline text-[#acacac] font-semibold">Instagram</p>
              <p className="uppercase font-serif underline text-[#acacac] font-semibold">twitter</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
