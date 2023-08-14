import React from "react";
import images from "../constants/images";

const Room = () => {
  return (
    <div className="min-h-min bg-app-tert">
      <div className="py-24 lg:py-36 flex flex-col px-4 gap-20 lg:gap-32">
        <div className="pt-24 flex gap-12 lg:gap-0 flex-col lg:flex-row justify-between flex-1">
          <div className="flex items-end">
            <h1 className="text-black lg:text-[100px] lg:leading-[80px] text-[58px] leading-[60px] xl:text-[100px] 2xl:text-[140px] font-normal uppercase xl:leading-[105px] 2xl:leading-[150px]">
              Rooms
              <br /> & Apartments
            </h1>
          </div>
          <div className="flex items-start">
            <p className="font-serif w-[150px] lg:w-[200px] xl:w-[350px] 2xl:w-[440px] text-gray-600 text-xs lg:text-base xl:text-lg 2xl:text-[26px] font-normal uppercase">
              All room decoration was made with ecological certified and safe
              materials.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="hidden lg:flex flex-col justify-evenly flex-1 w-[16%] h-screen">
            <img src={images.Room1} alt="" className="w-[40%]" />
            <img src={images.arrow_button} alt="" className="w-[20%]" />
          </div>
          <div className="flex flex-col justify-evenly h-screen flex-1 w-[32%]">
            <div className="hidden lg:block">
              <button className="border border-[#acacac] rounded-full px-8 py-2 text-[#acacac] font-serif font-semibold m-auto">
                <span className="pr-4">
                  <img src={images.star} alt="" className="inline" />
                </span>
                Since 1973
              </button>
            </div>
            <div className="hidden lg:flex flex-col justify-between gap-24">
              <div className="flex flex-col gap-6">
                <h1 className="text-xl leading-[30px] lg:text-4xl lg:tracking-wide 2xl:text-[50px] 2xl:tracking-wider">
                  Superior Twin
                </h1>
                <p className="w-[221px] lg:w-[335px] text-gray-600  text-[13px] lg:text-lg lg:leading-7 font-normal leading-[23px]">
                  The Superior twin is perfect for those who plan to stay long.
                  The spacious and bright room is equipped with deluxe Italian
                  furniture and has a beautiful view to the historical part of
                  the city. Stylish interior design and comfortable beds will
                  make your stay cozy and pleasant.
                </p>
              </div>
              <p className="font-serif text-gray-500">
                <span className="text-black font-semibold">
                  01 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 04
              </p>
            </div>
          </div>
          <div className="bg-[url(./assets/Room2.jpeg)]  bg-center bg-cover bg-no-repeat z-0 w-screen lg:flex-1 lg:w-[52%]">
            <div className="flex items-end justify-end h-screen">
              <div className="relative p-5 lg:p-10 ">
                <img
                  src={images.Polygon}
                  alt=""
                  className="max-w-full h-auto bottom-0 right-0"
                />
                <div className="absolute inset-0 flex items-center justify-center italic font-bold font-serif">
                  Book Room
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:hidden">
          <div className="flex justify-end">
            <p className="font-serif text-gray-500">
              <span className="text-black font-semibold">
                01 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 04
            </p>
          </div>
          <div className="flex justify-start">
            <h1 className="text-3xl leading-[30px] lg:text-4xl lg:tracking-wide 2xl:text-[50px] 2xl:tracking-wider">
              Superior Twin
            </h1>
          </div>
          <div className="flex justify-between pt-12 items-start">
          <img src={images.arrow_button} alt="" className="w-[20%]" />
          <p className="w-[221px] lg:w-[335px] text-gray-600  text-[13px] lg:text-lg lg:leading-7 font-normal leading-[23px] font-serif">
                  The Superior twin is perfect for those who plan to stay long.
                  The spacious and bright room is equipped with deluxe Italian
                  furniture and has a beautiful view to the historical part of
                  the city. Stylish interior design and comfortable beds will
                  make your stay cozy and pleasant.
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
