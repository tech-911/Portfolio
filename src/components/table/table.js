import React from "react";
import "./table.css";
const Table = ({ data }) => {
  return (
    <div className="bg-white container mx-auto px-16 py-12 font-[inter] table-data-wrapper">
      {data.map((value, id) => {
        return (
          <div
            key={value.id}
            className={`flex items-start justify-between font-[inter] ${
              value.borderBottom ? "border-b-[#F0F0F6] border-b-[1px]" : ""
            }  mb-6 table-responsive`}
          >
            <div className="flex flex-col w-[35%] item-1-res">
              <h1 className="text-[18px] font-semibold mb-6 item-1a-res">
                {value.heading}
              </h1>
              <div className="flex items-start">
                <p className="text-[15px]">{value.value}</p>
                <div className="text-white px-2 py-1 bg-[#FFB400] text-[12px] ml-4">
                  {value.timeLine}
                </div>
              </div>
            </div>

            <div className="text-start font-[inter] flex flex-col items-start mb-5 w-[55%] item-2-res">
              <h1 className="mb-3 text-[18px] font-semibold text-[#2B2B2B]">
                {value.heading2}
              </h1>
              <p className="text-[15px] text-[#767676] text-justify">
                {value.value2}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
