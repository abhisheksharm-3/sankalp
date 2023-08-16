import React from "react";
import images from "../constants/images";

const RestroInfo = () => {
  return (
    <div className="min-h-min bg-app-primary px-5">
      <div className="flex items-start py-12 lg:py-28 bg-[url(./assets/VectorCos.png)] bg-cover bg-center bg-no-repeat">
        <div className="hidden lg:flex flex-col gap-12">
          <img src={images.restro3} alt="" className="w-[74%]" />
          <p className="w-[231px] text-app-sec text-lg font-normal uppercase font-serif">
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </div>
        <img src={images.restro2} alt="" className="lg:w-[70%] lg:aspect-[10/5]" />
      </div>
      <div className="flex gap-16 flex-col items-end lg:w-[95vw]">
        <div className="flex flex-col items-start gap-5">
        <h1 className="w-[242px] lg:w-[323px] text-stone-50 text-3xl lg:text-4xl font-normal capitalize tracking-wide">
          Spend Your Time With Us
        </h1>
        <p className="w-[264px] lg:w-[356px] text-stone-50 text-[13px] font-extralight leading-[23px] font-serif">
          If you are looking for an exclusive place to have a romantic dinner,
          organize a business meeting, or spend an enjoyable evening with
          friends, visit Safe Restaurant in Bank Hotel. With our delicious
          meals, unique interior design, and atmosphere of comfort and
          exquisiteness you shall never want to go to a different restaurant.
        </p>
        </div>
        <div className="flex lg:hidden flex-col gap-12">
          <img src={images.restro3} alt="" className="w-[54%]" />
          <p className="w-[231px] text-app-sec text-lg font-normal uppercase font-serif">
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestroInfo;
