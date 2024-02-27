import React from "react";

const ContactInfo = ({ data, id }) => {
  // console.log("type: ", data[0]?.type);
  return (
    <div className="bg-white px-6 py-5 w-full mb-4">
      {data.map((value, id) => {
        return (
          <div key={id} className="flex flex-col items-center">
            <div className="h-[40px] w-[40px] rounded-[50%] flex items-center justify-center bg-[#FFB400] text-[#2B2B2B] mb-8">
              {value.image}
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2 mb-2 w-full">
                <h1 className="text-[#767676] w-fit font-semibold text-[18px]">
                  {value.itemName[0]}:{" "}
                </h1>
                <p
                  href={value.itemValue[0]}
                  className="break-all text-[#767676] text-[15px] hover:text-[#FFB400]"
                >
                  {value.itemValue[0]}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-[#767676] w-fit font-semibold text-[18px]">
                  {value.itemName[1]}:{" "}
                </h1>
                {data[0]?.type === "email" ? (
                  <a
                    href={value.itemValue[1]}
                    className="break-all text-[#767676] text-[15px] hover:text-[#FFB400]"
                  >
                    {value.itemValue[1]}
                  </a>
                ) : (
                  <p className="break-all text-[#767676] text-[15px] hover:text-[#FFB400]">
                    {value.itemValue[1]}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-[#767676] w-fit font-semibold text-[18px]">
                  {value.itemName[2]}:{" "}
                </h1>
                {data[0]?.type === "email" ? (
                  <a
                    href={value.itemValue[1]}
                    className="break-all text-[#767676] text-[15px] hover:text-[#FFB400]"
                  >
                    {value.itemValue[2]}
                  </a>
                ) : (
                  <p className="break-all text-[#767676] text-[15px] hover:text-[#FFB400]">
                    {value.itemValue[2]}
                  </p>
                )}
              </div>
              {value.itemValue[3] ? (
                <div className="flex items-center gap-2">
                  <h1 className="text-[#767676] w-fit font-semibold text-[18px]">
                    {value.itemName[3]}:{" "}
                  </h1>
                  <a
                    href={value.itemValue[3]}
                    className="break-all text-[#767676] text-[15px] hover:text-[#FFB400]"
                  >
                    {value.itemValue[3]}
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
