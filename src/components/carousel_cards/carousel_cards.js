import React from "react";
import "./carousel_cards.css";
import { IoMdStar } from "react-icons/io";

const CarouselCards = ({ heading, value, img, name, role, ml, mr }) => {
  return (
    <div
      className="bg-white px-4 py-5 text-[inter]"
      style={{ marginRight: mr, marginLeft: ml }}
    >
      <div className="flex items-center mb-3">
        <IoMdStar className="text-[#FFB400]" />
        <IoMdStar className="text-[#FFB400] ml-2" />
        <IoMdStar className="text-[#FFB400] ml-2" />
        <IoMdStar className="text-[#FFB400] ml-2" />
        <IoMdStar className="text-[#FFB400] ml-2" />
      </div>
      <div className="text-start font-[inter] flex flex-col items-start mb-5">
        <h1 className="mb-3 text-[18px] font-semibold text-[#2B2B2B]">
          {heading}
        </h1>
        <p className="text-[15px] max-w-[438px] text-[#767676] text-justify">
          {value}
        </p>
      </div>
      <div className="flex items-center">
        <div className="w-[80px] h-[80px] rounded-[50%]">
          <img src={img} alt="recommend" />
        </div>
        <div className="flex flex-col ml-3">
          <h1>{name}</h1>
          <p className="text-[#767676]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCards;
