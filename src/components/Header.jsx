import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import images from "../constants/images";

const Header = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  return (
    <div className="min-h-min w-full bg-app-primary px-4 pb-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-48 py-8">
        <div className="flex flex-col items-center justify-center lg:items-start gap-7">
          <h1 className="text-[#acacac] text-[80px] lg:text-[120px] xl:text-[170px]">
            Sank<span className="text-app-sec">lp</span>
          </h1>
          <h6 className="text-xs lg:text-lg font-serif uppercase text-app-sec lg:pb-28">
            rooms // restaurant // congress hall // wine bar
          </h6>
        </div>

        <div className="flex flex-col gap-8 lg:gap-24">
          <div className="hidden lg:flex gap-36">
            <button className="border border-[#acacac] rounded-full px-8 py-2 text-[#acacac] font-serif font-semibold m-auto">
              <span className="pr-4">
                <img src={images.star} alt="" className="inline" />
              </span>
              Since 1973
            </button>
            <img
              src={images.button_def}
              alt="button"
              className="cursor-pointer"
            />
          </div>
          <hr className="bg-[#acacac] w-[50%] m-auto lg:hidden" />
          <div className="">
            <h1 className="font-serif text-center lg:text-left text-[#acacac] h-[78px] lg:w-[299px] leading-relaxed text-base">
              The luxurious hotel in the most beautiful European city with an
              exclusive restaurant, conference-hall, and art-bar.
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[url(./assets/room.jpeg)]  bg-center bg-cover bg-no-repeat max-w-screen min-h-screen z-0">
      <div className="lg:hidden flex items-end justify-end h-screen">
      <div className="relative p-6">
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

        <div className="z-10 hidden lg:flex justify-end font-serif">
          <form action="" className="flex">
            <div className="relative">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Check In"
                className="w-80 backdrop-blur-2xl bg-transparent backdrop-brightness-90 pl-10 h-32"
              />
            </div>
            <div className="relative">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Check Out"
                className="w-80 bg-transparent backdrop-blur-2xl pl-10 backdrop-brightness-90 h-32"
              />
            </div>
            <button className="bg-app-sec w-80 h-32">Book Now</button>
          </form>
        </div>
      </div>
      <div className="flex justify-between font-serif text-white py-20">
        <div className="text-[26px] hidden lg:block">
          <h1 className="text-app-sec underline pb-2">+38 032 297 50 20</h1>
          <p className="underline uppercase">8 Lystopadovoho Chynu,Lviv</p>
        </div>
        <div className="w-[251px] lg:text-right">
          <span className="text-stone-50 text-xl lg:text-[26px] font-normal uppercase">
            Art & Congress{" "}
          </span>
          <br />
          <span className="text-stone-50 text-xl lg:text-[26px] font-normal uppercase italic">
            hall
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
