import React from "react";
import images from "../constants/images";

const UtilityRoom = () => {
  return (
    <div className="min-h-min bg-app-tert ">
      <div className="hidden lg:flex px-5 justify-between gap-64 items-start pt-52">
        <div className="flex justify-evenly flex-col gap-20">
          <div className="relative">
            <img
              src={images.label1}
              alt=""
              className="absolute right-7 xl:right-16 -translate-y-16"
            />
            <img src={images.util1} alt="" className="w-[80%]" />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-4xl font-normal capitalize tracking-wide">
              Superior twin
            </h1>
            <p className="w-[250px] text-gray-700 text-[13px] font-normal leading-[23px] font-serif">
              All rooms in Sanklp Hotel have a special charm achieved through a
              combination of modern functional design and original 20th century
              layout.
            </p>
          </div>
          <button className="border border-gray-500 rounded-full max-w-max px-8 py-2 font-serif ease-in-out duration-500 hover:bg-gray-300 mt-8">
            /BOOK ROOM
          </button>
        </div>
        <div className="flex flex-col gap-16">
          <img src={images.util2} alt="" className="w-[80%]" />
          <p className="w-[357px]  text-gray-700 text-[13px] font-normal leading-[23px] font-serif">
            The Superior twin includes two functional zones: a living room with
            the best Italian furniture, and an isolated cozy bedroom with a
            large bed. Here, you will find space both for work and comfortable
            rest. Hotel offers supreme comfort and outstanding 24-hour room
            service to make sure that the time you spend here is enjoyable and
            pleasant.
          </p>
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-12 items-cente px-5">
        <div className="flex flex-col gap-5 pt-20 items-start">
          <h1 className="text-black text-3xl font-normal capitalize leading-8 tracking-wide">
            Superior twin
          </h1>
          <p className="w-[250px] text-gray-700 text-[13px] font-normal leading-[23px] font-serif">
            All rooms in Sanklp Hotel have a special charm achieved through a
            combination of modern functional design and original 20th century
            layout.
          </p>
        </div>
        <img src={images.util2} alt="" />
        <p className="w-[357px]  text-gray-700 text-[13px] font-normal leading-[23px] font-serif pr-24 relative pt-5">
          <img
            src={images.label1}
            alt=""
            className="absolute right-16 -translate-y-16"
          />
          The Superior twin includes two functional zones: a living room with
          the best Italian furniture, and an isolated cozy bedroom with a large
          bed. Here, you will find space both for work and comfortable rest.
          Hotel offers supreme comfort and outstanding 24-hour room service to
          make sure that the time you spend here is enjoyable and pleasant.
        </p>
        <button className="border border-gray-500 rounded-full px-8 py-2 font-serif ease-in-out duration-500 hover:bg-gray-300 mt-8 max-w-max ml-36">
          /BOOK ROOM
        </button>
      </div>
    </div>
  );
};

export default UtilityRoom;
