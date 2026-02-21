import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 rounded-lg overflow-hidden">
      {/* hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-gray-700">
          <div className="flex items-center gap-2 ">
            <p className="w-8 md:w-11 h-0.5 bg-gray-400"></p>
            <p className="font-medium text-sm md:text-base">Our Bestseller</p>
          </div>
          <h1 className=" prata-regular text-3xl sm:py-3 lg:text-5xl ">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-px bg-gray-400"></p>
          </div>
        </div>
      </div>
        {/* hero right side */}
        <img src={assets.hero_img} alt="Hero-right" className="w-full sm:w-1/2 " />
    </div>
  );
};

export default Hero;
