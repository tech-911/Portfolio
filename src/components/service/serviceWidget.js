import React from "react";
import "./serviceWidget.css";

const ServiceWidget = ({ head, text, image, link }) => {
  return (
    <div>
      {" "}
      <div className="flex-1 flex flex-col items-center justify-center bg-white h-[232px] px-4">
        {image ? (
          <img src={image} alt="service-logo-1" className="mb-10" />
        ) : (
          ""
        )}

        <div className="text-center font-[inter] flex flex-col items-center mb-4">
          <h1 className="mb-3 text-[18px] font-semibold text-[#2B2B2B]">
            {head}
          </h1>
          <p className="text-[15px] max-w-[438px] text-[#767676]">{text}</p>
        </div>
        {link ? (
          <div className="font-roboto text-[#FFB400] text-[12px] leading-[14px] font-semibold cursor-pointer">
            ORDER NOW {">"}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ServiceWidget;
