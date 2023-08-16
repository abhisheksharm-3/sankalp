import React from "react";
import images from "../constants/images";

const RoomInfo = () => {
  return (
    <div className="bg-app-primary min-h-min">
      <div className="flex flex-col justify-between px-3 xl:px-36 pt-36 lg:pt-64 bg-[url(./assets/VectorCos.png)] bg-center bg-no-repeat">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-20 xl:gap-40 lg:items-end xl:items-center">
          <div className="flex flex-col justify-between items-start gap-24">
            <button className="border border-[#acacac] rounded-full px-8 py-2 text-[#acacac] font-serif font-semibold">
              <span className="pr-4">
                <img src={images.star} alt="" className="inline" />
              </span>
              Since 1973
            </button>

            <h1 className="text-3xl leading-8 lg:w-[557px] 2xl:w-[690px] text-stone-50  lg:text-[38px] 2xl:text-[50px] font-normal lg:leading-10 2xl:leading-[60px] tracking-wide 2xl:tracking-wider">
              All suites have a unique design because we want our every guest to
              feel special.
            </h1>
          </div>
          <div className="">
            <p className="w-[290px] lg:w-[335px] text-stone-50 text-[13px] xl:text-lg font-light font-serif leading-[23px] xl:leading-7">
              The Superior twin would perfectly match the needs of those who
              plan to stay long. The bright and airy room is equipped with
              superior soft Italian furniture. Large windows open a beautiful
              view to the historical part of the city. Contemporary interior
              design and comfortable beds will make your stay cozy and
              delightful.
            </p>
          </div>
        </div>
        <div className="pt-24 lg:pt-40 gap-12 lg:gap-24 flex flex-col">
            <h1 className="text-app-sec font-serif text-xl xl:text-[40px] font-normal capitalize">Premier Standard</h1>
            <img src={images.Room3} alt="" className=""/>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
