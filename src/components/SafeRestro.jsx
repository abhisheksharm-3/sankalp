import React from "react";
import images from "../constants/images";

const SafeRestro = () => {
  return (
    <div className="min-h-min bg-app-primary">
      <div className="flex flex-col gap-20 lg:gap-40 items-start pt-12 px-5">
        <div>
          <h1 className="w-[204px] lg:w-[864px] text-app-sec text-6xl lg:text-[100px] font-normal leading-[80px]">
            &quot;Safe&quot; restaurant
          </h1>
        </div>
        <div className="flex flex-col items-end gap-24 lg:flex-row lg:gap-0 justify-between lg:items-start w-[90vw]">
          <h2 className="text-stone-50 text-3xl font-normal capitalize">
            One of a Kind
          </h2>
          <p className="relative w-[250px] xl:w-[350px] text-stone-50 text-[13px] xl:text-lg font-normal leading-[23px] font-serif">
            {" "}
            <img
              src={images.label}
              alt=""
              className="absolute -translate-x-20 -translate-y-16"
            />
            Bank Hotel proudly welcomes you to the Safe Restaurant, a place
            where you will wish you could dine every day. The restaurant offers
            a unique menu developed by the team of professionals led by chef
            Mary-Ann Jones, the wine list with more than 250 items, the
            outstanding service, and the unforgettable atmosphere.
          </p>
        </div>
        <div className="flex items-start  gap-12">
          <img src={images.restro1} alt="" className="w-[70%] hidden lg:block" />
          <img src={images.living} alt="" className="lg:w-[25%] lg:aspect-[5/6]" />
        </div>
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-stone-50 text-3xl lg:text-4xl font-normal capitalize tracking-wide">
            At your service
          </h1>
          <p className="w-[293px] lg:w-[357px] font-serif text-stone-50 text-[13px] font-light leading-[23px]">
            The team of the Safe Restaurant aims to exceed all expectations of
            our guests. Our chef worked hard to develop a unique menu that
            features the best meals of the European cuisine that will match the
            tastes of the most demanding clients. Friendly and attentive waiters
            will ensure that you will enjoy your time in our restaurant.
          </p>
        </div>
        <div className="flex w-[90vw] justify-end pb-16">
          <p className=" w-[264px] lg:w-[593px] text-stone-50 text-3xl lg:text-[40px] font-extralight leading-10 tracking-wide">
            Once you try our cuisine and service, you shall never want to visit
            another restaurant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafeRestro;
