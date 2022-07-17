import React from "react";
import ContactInfo from "../contact-info/contact-info";
import contactInfoData from "./data";

const Contact = () => {
  return (
    <div className="font-[inter]">
      <div className="flex items-start justify-between mb-10">
        <h1 className="col-span-2 text-[25px] font-bold w-[60%]">
          Leave Us Your Info
        </h1>
        <h1 className="text-[25px] font-bold w-[37%]">Contact Information</h1>
      </div>
      <div className="flex items-start justify-between">
        <form className="col-span-3 w-[60%]">
          <div className="bg-white p-6">
            <div className="flex flex-col items-start mb-4 ">
              <label htmlFor="name" className="text-[#767676] text-[18px] mb-2">
                Your Full Name (Required)
              </label>
              <input
                id="name"
                type="text"
                className="px-4 py-2 text-[#3d3d3d] bg-[#F0F0F6] w-full outline-[#dedee2]"
              />
            </div>
            <div className="flex flex-col items-start mb-4">
              <label
                htmlFor="email"
                className="text-[#767676] text-[18px] mb-2"
              >
                Your Email (Required)
              </label>
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-[#3d3d3d] bg-[#F0F0F6] w-full outline-[#dedee2]"
              />
            </div>
            <div className="flex flex-col items-start mb-4">
              <label
                htmlFor="heading"
                className="text-[#767676] text-[18px] mb-2"
              >
                Subject
              </label>
              <input
                id="heading"
                type="text"
                className="px-4 py-2 text-[#3d3d3d] bg-[#F0F0F6] w-full outline-[#dedee2]"
              />
            </div>
            <div className="flex flex-col items-start mb-4">
              <label
                htmlFor="message"
                className="text-[#767676] text-[18px] mb-2"
              >
                Subject
              </label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="10"
                className="px-4 py-2 text-[#3d3d3d] bg-[#F0F0F6] w-full outline-[#dedee2]"
              ></textarea>
            </div>

            <button
              className="bg-[#FFB400] text-[14px] text-[2B2B2B] py-3 px-5 font-bold"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center w-[37%]">
          {contactInfoData.map((value, id) => {
            return <ContactInfo data={value} id={id} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
