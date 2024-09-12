import React, { useState, useEffect } from "react";
import Header from "../../components/jumbotrone/header";
import Menu from "../../components/fixed_menu/menu";
import Info from "../../components/info/info";
import "./home.css";
// import Services from "../myServices/service";
import Recommendations from "../recommendations/recommendations";
import Education from "../../components/Education/education";
import WorkExperience from "../../components/workExperience/work";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Map from "../../components/map/map";
import { RiMenuLine } from "react-icons/ri";
import Portfolio from "../../components/portfolio/portfolio";
import Logo from "../../assets/profileLogo.png";
import { RiHome2Fill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
// import { RiQuillPenFill } from "react-icons/ri";
import { MdChatBubble, MdClose } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const Home = () => {
  const [sidebar, setSidebar] = useState(0);
  useEffect(() => {
    const setviewvalue = () => {
      if (window.innerWidth >= 1182) {
        if (sidebar === 0) {
          return;
        } else {
          setSidebar(0);
        }
      }
    };
    window.addEventListener("resize", setviewvalue);
    return (_) => {
      window.removeEventListener("resize", setviewvalue);
    };
  });
  return (
    <div className="flex flex-col bg-[#F0F0F6] w-full h-screen">
      <div
        className={`py-3 px-6 bg-white w-full res-header items-start justify-between hidden res-border z-[70] ${
          sidebar ? "" : "mb-3"
        }`}
      >
        {sidebar ? (
          <MdClose
            className="text-[30px] cursor-pointer"
            onClick={() => {
              !sidebar ? setSidebar(1) : setSidebar(0);
            }}
          />
        ) : (
          <RiMenuLine
            className="text-[30px] cursor-pointer"
            onClick={() => {
              !sidebar ? setSidebar(1) : setSidebar(0);
            }}
          />
        )}
      </div>
      {/* ---------------------sidebar overlay---------------------- */}
      <div className="relative overflow-hidden h-full">
        <div
          onClick={() => {
            setSidebar(0);
          }}
          className={`res-sidebar-close absolute w-screen h-screen top-0 right-0 bg-black opacity-[0.5] z-50 ${
            sidebar ? "block" : "hidden"
          }`}
        ></div>
        {/* ---------------------sidebar overlay end---------------------- */}

        {/* ----------------------------sidebar----------------------------- */}
        <div
          className={`res-sidebar-close absolute top-0 left-0 h-screen adjust-scroll bg-[white] z-[60] overflow-x-hidden overflow-y-scroll transition-all ease-in-out delay-200 ${
            sidebar ? "w-[40%] res-width" : "w-[0%]"
          }`}
        >
          <div className="pt-6 pb-20 mb-6">
            <div className="flex flex-col items-center justify-center border-b-2 border-[#F0F0F6] mb-10">
              <div className="after:content after:block after:relative after:rounded-[50px] after:bg-[#7EB942] after:h-4 after:w-4 after:-top-6 after:left-28 mt-10 ">
                <img src={Logo} alt="status" />
              </div>

              <div className="flex flex-col items-center mb-10 mt-2">
                <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-3">
                  Babatunde Eric Olatunji
                </h1>
                <p className="text-[15px] text-[#767676] ">
                  Front-End Developer
                </p>
              </div>
            </div>
            {/* --------------------------side bar items start-------------------------------- */}
            <div className="font-[inter] container mx-auto pl-10 flex flex-col items-center bg-white h-full">
              <a
                href="#home"
                className="flex items-center w-full hover:border-r-4 hover:border-[#FFB400] mb-8 cursor-pointer py-2"
              >
                <a
                  href="#home"
                  className="rounded-[50%] p-1.5 bg-[#F0F0F6] w-fit flex items-center justify-center"
                >
                  <RiHome2Fill className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
                </a>
                <p className="font-[inter] font-bold text-[24px] text-[#767676] ml-8">
                  Home
                </p>
              </a>
              <a
                href="#portfolio"
                className="flex items-center w-full hover:border-r-4 hover:border-[#FFB400] mb-8 cursor-pointer py-2"
              >
                <a
                  href="#portfolio"
                  className="rounded-[50%] p-1.5 bg-[#F0F0F6] w-fit flex items-center justify-center"
                >
                  <FaFileCode className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
                </a>
                <p className="font-[inter] font-bold text-[24px] text-[#767676] ml-8">
                  Portfolio
                </p>
              </a>
              <a
                href="#education"
                className="flex items-center w-full hover:border-r-4 hover:border-[#FFB400] mb-8 cursor-pointer py-2"
              >
                <a
                  href="#education"
                  className="rounded-[50%] p-1.5 bg-[#F0F0F6] w-fit flex items-center justify-center"
                >
                  <FaUserGraduate className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
                </a>
                <p className="font-[inter] font-bold text-[24px] text-[#767676] ml-8">
                  Education
                </p>
              </a>
              <a
                href="#work"
                className="flex items-center w-full hover:border-r-4 hover:border-[#FFB400] mb-8 cursor-pointer py-2"
              >
                <a
                  href="#work"
                  className="rounded-[50%] p-1.5 bg-[#F0F0F6] w-fit flex items-center justify-center"
                >
                  <FaToolbox className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
                </a>
                <p className="font-[inter] font-bold text-[24px] text-[#767676] ml-8">
                  Work History
                </p>
              </a>
              <a
                href="#contact"
                className="flex items-center w-full hover:border-r-4 hover:border-[#FFB400] mb-8 cursor-pointer py-2"
              >
                <a
                  href="#contact"
                  className="rounded-[50%] p-1.5 bg-[#F0F0F6] w-fit flex items-center justify-center"
                >
                  <MdChatBubble className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
                </a>
                <p className="font-[inter] font-bold text-[24px] text-[#767676] ml-8">
                  Contact
                </p>
              </a>
              <a
                href="#map"
                className="flex items-center w-full hover:border-r-4 hover:border-[#FFB400] mb-8 cursor-pointer py-2"
              >
                <a
                  href="#map"
                  className="rounded-[50%] p-1.5 bg-[#F0F0F6] w-fit flex items-center justify-center"
                >
                  <HiLocationMarker className="text-[23px] text-[#767676] hover:text-[#2B2B2B]" />
                </a>
                <p className="font-[inter] font-bold text-[24px] text-[#767676] ml-8">
                  Location
                </p>
              </a>
            </div>
            {/* --------------------------side bar items ends-------------------------------- */}
          </div>
        </div>
        {/* -----------------------------sidebar ends------------------------------ */}
        <div
          className={`w-full h-full flex flex-row bg-[#F0F0F6] overflow-hidden  ${
            sidebar ? "blur-sm" : ""
          }`}
        >
          <div className="flex-1 h-full flex">
            <div className="w-[25%] h-full overflow-y-auto info-wrapper info-disable">
              <Info />
            </div>

            <div className="w-[75%] h-full overflow-y-scroll scroll-smooth header-wrapper">
              <div className="w-full px-5 box-border home-res-1">
                <Header />
                <Portfolio />
                {/* <Services /> */}
                <Recommendations />
                <Education />
                <WorkExperience />
                <Contact />
                <Map />
              </div>
              <Footer />
            </div>
          </div>
          <div className="menu-wrapper min-w-[100px] w-[100px] h-full overflow-y-auto menu-disable">
            <Menu />
          </div>
        </div>
      </div>
    </div>

    // <div className="flex items-start justify-between w-full h-full bg-[#F0F0F6]">
    //   <div className="w-[25%] bg-white">
    //     <Info />
    //   </div>
    //   <div className="w-[65%]">
    //     <Header />
    //   </div>
    //   <div className="w-[6%] bg-white">
    //     <Menu />
    //   </div>
    // </div>
  );
};

export default Home;
