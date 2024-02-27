import React from "react";
import "./header.css";
import header_image from "../../assets/Header.png";
import { BsArrowRight } from "react-icons/bs";
const Header = () => {
  return (
    <div
      className="bg-white custom-css-1 relative px-14 py-20 mb-36 container mx-auto header-res1"
      id="home"
    >
      <h1 className="font-[inter] font-bold sm:text-[48px] text-[28px]">
        I'm Eric Olatunji
      </h1>
      <h1 className="font-[inter] font-bold sm:text-[48px] text-[28px] mb-8">
        <span className="text-[#FFB400]">Front-End</span> Developer
      </h1>
      <p className="text-[16px] text-[#767676] text-justify xl:w-[70%] mb-12 z-20 res1 bg-white">
        Highly motivated career driven achiever with a first-class honor in B.
        Eng. Mechatronics Engineering having a high passion for tech to which as
        a result, gained three(3+) plus years experience in software design and
        development consisting of web, desktop mobile and backend applications
        to become the brain-storming hub of any organization by utilizing my
        managerial competence, capabilities, problem-solving skills, experience
        and team playing skills to provide solutions to immediate challenges
        being faced by the organization and also to contribute remarkably
        towards the growth and development of the organization and the world at
        large.
      </p>

      {/* <button
        className="text-[16px] text-black font-semibold flex items-center px-6 py-3 bg-[#FFB400] rounded-[5px]"
        type="button"
      >
        <p>HIRE ME</p>
        <BsArrowRight className="text-[20px] text-black ml-2" />
      </button> */}

      <img
        src={header_image}
        alt="header"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Header;

// ::after {
//   content: "";
//   display: block;
//   position: relative;
//   width: 10px;
//   border-radius: 50%;
//   background-color: yellow;
//   height:10px;
//   top:-20px;
//   left: 50px
