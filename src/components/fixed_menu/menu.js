import React from "react";
import "./menu.css";
import { RiHome2Fill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { RiContrast2Fill } from "react-icons/ri";
import { FaToolbox } from "react-icons/fa";
import { RiQuillPenFill } from "react-icons/ri";
import { MdChatBubble } from "react-icons/md";

const Menu = () => {
  return (
    <div className="font-[inter] container mx-auto px-4 flex flex-col items-center bg-white h-full">
      <div className="mt-10 mb-40 rounded-[50%] p-1.5 hover:bg-[#FFB400] w-fit flex items-center justify-center">
        <RiContrast2Fill className="text-[23px] text-[#2B2B2B]" />
      </div>

      <div className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8">
        <RiHome2Fill className="text-[23px] text-[#767676] hover:text-[#2B2B2B] " />
      </div>
      <div className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8">
        <FaFileCode className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </div>
      <div className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8">
        <FaUserGraduate className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </div>
      <div className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8">
        <FaToolbox className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </div>
      <div className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8">
        <RiQuillPenFill className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </div>
      <div className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center ">
        <MdChatBubble className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </div>
    </div>
  );
};

export default Menu;
