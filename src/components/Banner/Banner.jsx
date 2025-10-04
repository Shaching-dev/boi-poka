import React from "react";
import bannerImg from "../../assets/bannerBook.png";
const Banner = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-between items-center bg-[#1313130d] p-10 rounded-lg">
      <div>
        <h1 className="font-bold text-[20px] md:text-[56px] leading-tight">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="btn bg-green-600 text-white font-semibold my-5">
          View The List
        </button>
      </div>
      <div>
        <img className="w-70" src={bannerImg} alt={"This is banner image"} />
      </div>
    </div>
  );
};

export default Banner;
