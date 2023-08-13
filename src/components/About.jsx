import React from "react";
import images from "../constants/images";

const About = () => {
  return (
    <div className="min-h-content bg-app-primary px-4">
      <div className="flex  items-center justify-between max-w-screen flex-1">
        <div className="w-screen z-10">
          <img src={images.about1} alt="" className=" h-auto" />
        </div>
        <div className="w-screen z-30 flex flex-col gap-32 flex-shrink">
          <h1 className="text-right text-[125px] font-normal uppercase leading-[105px] text-white pr-52 -translate-x-16">
            <span className="text-[125px] font-normal uppercase leading-[105px] text-app-sec">About</span> Us
          </h1>
          <div className="pl-48">
          <h2 className="text-white text-4xl font-normal capitalize tracking-wide">High Quality</h2>
          <p className="font-serif w-[400px] opacity-60 text-stone-50 text-lg font-normal leading-7">
            The five-star Sanklp Hotel was reopened to visitors in 2016. The
            building was renovated and modernized to meet the expectations of
            the most demanding guests. We offer luxurious rooms, numerous
            facilities, and exceptional service.
          </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-screen">
          <div className="flex -translate-x-16"><img src={images.label} alt="" /></div>
          <div className="flex justify-end">
          <img src={images.about2} alt="" className="w-[55%] h-auto" />
          </div>
          <div className="relative ml-32 bg-[url(./assets/Polygon2.svg)]  bg-center bg-contain w-40  bg-no-repeat pt-24 pb-60 font-serif">
            <div className="flex flex-col px-12">
            <p className="text-app-sec italic text-left pt-36">Rooms</p>
            <p className="text-center text-white">and</p>
            <p className="text-right text-white">Apartments</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default About;
