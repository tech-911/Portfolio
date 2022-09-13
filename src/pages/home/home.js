import React from "react";
import Header from "../../components/jumbotrone/header";
import Menu from "../../components/fixed_menu/menu";
import Info from "../../components/info/info";
import "./home.css";
import Services from "../myServices/service";
import Recommendations from "../recommendations/recommendations";
import Education from "../../components/Education/education";
import WorkExperience from "../../components/workExperience/work";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Map from "../../components/map/map";
import { TbDotsVertical } from "react-icons/tb";
import { RiMenuLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="flex flex-col bg-[#F0F0F6] w-full h-screen">
      <div className="py-3 px-6 bg-white w-full mb-3 res-header items-start justify-between hidden">
        <RiMenuLine className="text-[30px]" />
        <TbDotsVertical className="text-[30px]" />
      </div>

      <div className="w-full h-screen flex flex-row bg-[#F0F0F6] overflow-hidden ">
        <div className="flex-1 h-full flex">
          <div className="w-[25%] h-full overflow-y-auto info-wrapper info-disable">
            <Info />
          </div>

          <div className="w-[75%] h-full overflow-y-auto scroll-smooth header-wrapper">
            <div className="w-full px-5 box-border home-res-1">
              <Header />
              <Services />
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
