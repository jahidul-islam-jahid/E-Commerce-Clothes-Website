import React from "react";

function Banner() {
  return (
    <div className="py-10">
      <div className="banner flex justify-end items-center px-[100px] py-[260px]  text-right">
        <div>
          <span className="text-white text-xl">
            Starting at $<strong>20.00</strong>
          </span>
          <h2 className="text-6xl font-semibold text-white py-2 leading-14">
            Fashion sale for <br /> women's
          </h2>
          <button className=" bg-[#516EBF] text-white font-semibold px-8 py-2.5 rounded-lg mt-3">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
