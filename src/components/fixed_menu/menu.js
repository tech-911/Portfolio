import React from "react";
import "./menu.css";
import { RiHome2Fill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { RiContrast2Fill } from "react-icons/ri";
import { FaToolbox } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdChatBubble } from "react-icons/md";

const Menu = () => {
  return (
    <div className="pt-48 font-[inter] container mx-auto px-4 flex flex-col items-center bg-white h-full">
      {/* <div className="mt-10 mb-40 rounded-[50%] p-1.5 hover:bg-[#FFB400] w-fit flex items-center justify-center">
        <RiContrast2Fill className="text-[23px] text-[#2B2B2B]" />
      </div> */}

      <a
        href="#home"
        title="Home"
        className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8"
      >
        <RiHome2Fill className="text-[23px] text-[#767676] hover:text-[#2B2B2B] " />
      </a>
      <a
        href="#projects"
        title="Projects"
        className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8"
      >
        <FaFileCode className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </a>
      <a
        href="#education"
        title="Education"
        className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8"
      >
        <FaUserGraduate className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </a>
      <a
        href="#work"
        title="Work"
        className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8"
      >
        <FaToolbox className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </a>
      <a
        href="#contact"
        title="Contact"
        className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center mb-8"
      >
        <MdChatBubble className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </a>
      <a
        href="#map"
        title="Location"
        className="rounded-[50%] p-1.5 hover:bg-[#FFB400] bg-[#F0F0F6] w-fit flex items-center justify-center"
      >
        <HiLocationMarker className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
      </a>
    </div>
  );
};

export default Menu;
