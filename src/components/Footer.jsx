import React, { useState } from "react";
import images from "../constants/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Footer = ({ theme }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const footerClass = theme === "white" ? "bg-app-tert" : "bg-app-primary";
  const getInTextColor = theme === "white" ? "text-black" : "text-[#e3e3e3]";
  const bookNowButtonClass = theme === "white" ? "bg-app-primary text-white" : "bg-app-sec text-black";
  return (
    <div className={footerClass + " min-h-min"}>
      <div className="pt-56 pb-24 px-8 flex flex-col gap-8">
        <div className="flex items-start justify-start">
          <h1 className="text-center font-serif underline text-gray-400 text-xl lg:text-[50px] font-normal leading-tight  lg:leading-[80px]">
            +38 032 297 50 20
          </h1>
        </div>

        <div className="flex items-center justify-end pt-16">
          <h3 className="w-[272px]  text-gray-400 text-xl  lg:text-[20px] font-normal uppercase text-right">
            8 Lystopadovoho Chynu,Lviv
          </h3>
        </div>
        <div className="hidden lg:flex items-start justify-evenly pt-36 bg-[url(./assets/VectorSine.png)] bg-cover bg-center bg-no-repeat ">
          <div className="w-[80%]">
            <h1 className={getInTextColor+" lg:text-[175px] xl:text-[220px] 2xl:text-[260px] font-normal uppercase leading-[300px]"}>
              Get In{" "}
              <img
                src={images.Star2}
                alt=""
                className="inline -translate-y-6 w-[15%]"
              />
            </h1>
          </div>
          <div className="flex w-[35%] px-12">
            <img src={images.chair} alt="" className=" w-[70%]" />
          </div>
        </div>
        <div className="hidden lg:flex justify-end -translate-y-36 2xl:-translate-y-32 ">
          <h1 className="text-app-sec lg:text-[175px] xl:text-[220px] 2xl:text-[260px] font-normal uppercase leading-[300px]">
            touch
          </h1>
        </div>
        <div className="hidden lg:flex flex-col gap-8 items-start ">
          <div>
            <p className={getInTextColor+ " font-serif w-[284px] text-[26px] font-normal uppercase"}>
              Find A Room
            </p>
          </div>
          <div className="z-10 hidden lg:flex font-serif">
            <form action="" className="flex">
              <div className="relative">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Check In"
                  className="lg:w-56 2xl:w-72 backdrop-blur-2xl bg-transparent backdrop-brightness-90 pl-10 h-32"
                />
              </div>
              <div className="relative">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholderText="Check Out"
                  className="lg:w-56 2xl:w-72 bg-transparent backdrop-blur-2xl pl-10 backdrop-brightness-90 h-32"
                />
              </div>
              <button className={`lg:w-56 2xl:w-72 h-32 ${bookNowButtonClass}`}>
                Book Now
              </button>
            </form>
          </div>
        </div>
        <div className="hidden lg:flex items-start justify-between font-serif pt-40 ">
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-app-sec text-[26px] font-normal uppercase">
                /
              </span>
              <span className={getInTextColor+" text-[26px] font-normal uppercase"}>
                About us
              </span>
            </div>
            <p className="w-[285px] text-gray-500  text-base font-normal leading-7">
              The five-star hotel in a beautiful European city with a modern
              restaurant, conference-hall, and art-bar.
            </p>
            <h1 className=" text-gray-400 pt-12 text-sm font-normal leading-normal">
              ©2023 All rights reserved. Sanklp Hotel
            </h1>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-app-sec text-[26px] font-normal uppercase">
                /
              </span>
              <span className={getInTextColor+" text-[26px] font-normal uppercase"}>
                News
              </span>
            </div>
            <p className="w-[285px] text-gray-500 text-base font-normal leading-7">
              Sign up to our newsletter not to miss exclusive offers and
              information about the upcoming events.
            </p>
            <form action="" className="relative">
              <input
                type="email"
                className="border bg-neutral-300 border-gray-400 pl-5 backdrop-blur-2xl w-[285px] h-16"
                placeholder="EMAIL"
              />
              <img
                src={images.arrow1}
                alt=""
                className="absolute right-6 top-1/2 transform -translate-y-1/2 "
              />
            </form>
          </div>
          <div className={getInTextColor+" flex flex-col gap-10"}>
            <div>
              <span className="text-app-sec text-[26px] font-normal uppercase">
                /
              </span>
              <span className={getInTextColor+" text-[26px] font-normal uppercase"}>
                Social
              </span>
            </div>
            <div className="flex justify-between gap-12">
              <h1 className="uppercase font-semibold hover:underline hover:text-gray-400 ease-in-out duration-500 cursor-pointer">
                Facebook
              </h1>
              <h1 className="uppercase font-semibold hover:underline hover:text-gray-400 ease-in-out duration-500 cursor-pointer">
                Instagram
              </h1>
              <h1 className="uppercase font-semibold hover:underline hover:text-gray-400 ease-in-out duration-500 cursor-pointer">
                Twitter
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex items-center justify-start">
            <h1 className={getInTextColor+" font-normal uppercase text-[74px] sm:text-[114px] md:text-[144px] leading-[74px]"}>
              Get In
            </h1>
            <img src={images.Star2} alt="" className="inline w-[17%]" />
          </div>
          <div className="flex justify-end translate-y-8 md:translate-y-10">
            <h1 className="text-app-sec text-[74px] sm:text-[114px] md:text-[144px] leading-[74px] font-normal uppercase">
              touch
            </h1>
          </div>
          <div className="flex justify-end">
            <img src={images.chair} alt="" className="w-[45%] aspect-[3/4]" />
          </div>
          <div className="relative p-6 -translate-y-16 md:-translate-y-24">
            <img src={images.Polygon} alt="" className="max-w-full h-auto " />
            <div className="absolute inset-0 flex items-center pl-10 italic font-bold font-serif">
              Book Room
            </div>
          </div>
          <div className="pt-24">
            <hr />
            <h1 className=" text-gray-400 py-12 text-center text-sm md:text-lg font-normal leading-normal font-serif">
              ©2023 All rights reserved. Sanklp Hotel
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
