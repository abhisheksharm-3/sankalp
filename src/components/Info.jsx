import React from "react";
import images from "../constants/images";

const Info = () => {
  return (
    <div className="relative h-screen bg-[url(./assets/living.jpeg)] lg:bg-[url(./assets/Room3.jpeg)] bg-right lg:bg-center bg-cover bg-no-repeat z-0">
      <div className="h-screen flex items-center lg:items-end justify-center z-10">
        <img src={images.vectorSine} alt="" className="w-[110%]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-evenly z-50 px-4">
        <div className="flex flex-col items-start justify-between py-20 lg:py-0 lg:justify-evenly h-screen">
          <h1 className="w-[356.88px] lg:w-[836px] lg:h-[195px] text-app-sec text-5xl lg:text-[125px] font-normal uppercase leading-[60px] lg:leading-[105px]">
            Best
            <br />
            apartments
          </h1>
          <div className="flex justify-end lg:justify-start w-[90vw]">
          <p className="w-[209.24px] lg:w-[330px] lg:h-[69.75px] text-app-sec text-lg uppercase font-serif font-medium text-right lg:text-left">
            All room decoration was made with ecological certified and safe
            materials.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
