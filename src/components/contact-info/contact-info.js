import React from "react";

const ContactInfo = ({ data, id }) => {
  return (
    <div className="bg-white px-6 py-5 w-full mb-4">
      {data.map((value, id) => {
        return (
          <div key={id} className="flex flex-col items-center">
            <div className="h-[40px] w-[40px] rounded-[50%] flex items-center justify-center bg-[#FFB400] text-[#2B2B2B] mb-8">
              {value.image}
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-start justify-between mb-2 w-full">
                <h1 className="text-[#767676] font-semibold text-[18px]">
                  {value.itemName[0]}:{" "}
                </h1>
                <p className="break-all ml-4 text-[#767676] text-[15px]">
                  {value.itemValue[0]}
                </p>
              </div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-[#767676] font-semibold text-[18px]">
                  {value.itemName[1]}:{" "}
                </h1>
                <p className="break-all ml-4 text-[#767676] text-[15px]">
                  {value.itemValue[1]}
                </p>
              </div>
              <div className="flex items-start justify-between">
                <h1 className="text-[#767676] font-semibold text-[18px]">
                  {value.itemName[2]}:{" "}
                </h1>
                <p className="break-all ml-4 text-[#767676] text-[15px]">
                  {value.itemValue[2]}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
