import React from "react";
import "./portfolio.css";
import Topic from "../topic";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import ExtraSkills from "../../assets/extra_skills.png";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <div className="portfolio-container" id="portfolio">
      <div className="mb-10">
        <Topic
          heading="Portfolio"
          value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
      </div>

      {/* ----------------------------portfolio content start-------------------------------------- */}

      <div className="font-[inter] container mx-auto px-10 bg-white mb-10 pb-10 pt-4">
        <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
          <div className="flex items-center justify-between w-full mb-2">
            <div className="bg-[#FFB400] py-1 px-2 text-[15px]">Age:</div>
            <div className="text-[15px]">22</div>
          </div>
          <div className="flex items-center justify-between w-full mb-2">
            <div className="bg-[#FFB400] py-1 px-2 text-[15px]">Address:</div>
            <div className="text-[15px]">Dutsen K. M.</div>
          </div>
          <div className="flex items-center justify-between w-full mb-2">
            <div className="bg-[#FFB400] py-1 px-2 text-[15px]">Freelance:</div>
            <div className="text-[15px] text-[#7EB942]">Available</div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
          <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-4 self-start">
            Languages
          </h1>

          <div className="w-full">
            <div className="flex items-center justify-between w-full mb-3">
              <p className="text-[15px] text-[#767676] ">English</p>
              <p className="text-[15px] text-[#767676] ">90%</p>
            </div>
            <div className="w-full rounded-full px-0.5 py-0.5 border-[1px] border-[#FFB400]">
              <div className="bg-[#FFB400] h-0.5 rounded-full w-[90%]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
          <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-4 self-start">
            Skills
          </h1>

          <div className="w-full mb-3">
            <div className="flex items-center justify-between w-full mb-3">
              <p className="text-[15px] text-[#767676] ">Html</p>
              <p className="text-[15px] text-[#767676] ">100%</p>
            </div>
            <div className="w-full rounded-full px-0.5 py-0.5 border-[1px] border-[#FFB400]">
              <div className="bg-[#FFB400] h-0.5 rounded-full w-[100%]"></div>
            </div>
          </div>
          <div className="w-full mb-3">
            <div className="flex items-center justify-between w-full mb-3">
              <p className="text-[15px] text-[#767676] ">CSS</p>
              <p className="text-[15px] text-[#767676] ">80%</p>
            </div>
            <div className="w-full rounded-full px-0.5 py-0.5 border-[1px] border-[#FFB400]">
              <div className="bg-[#FFB400] h-0.5 rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="w-full mb-3">
            <div className="flex items-center justify-between w-full mb-3">
              <p className="text-[15px] text-[#767676] ">Js</p>
              <p className="text-[15px] text-[#767676] ">75%</p>
            </div>
            <div className="w-full rounded-full px-0.5 py-0.5 border-[1px] border-[#FFB400]">
              <div className="bg-[#FFB400] h-0.5 rounded-full w-[75%]"></div>
            </div>
          </div>
          <div className="w-full mb-3">
            <div className="flex items-center justify-between w-full mb-3">
              <p className="text-[15px] text-[#767676] ">React</p>
              <p className="text-[15px] text-[#767676] ">80%</p>
            </div>
            <div className="w-full rounded-full px-0.5 py-0.5 border-[1px] border-[#FFB400]">
              <div className="bg-[#FFB400] h-0.5 rounded-full w-[80%]"></div>
            </div>
          </div>

          <div className="w-full mb-3">
            <div className="flex items-center justify-between w-full mb-3">
              <p className="text-[15px] text-[#767676] ">Figma</p>
              <p className="text-[15px] text-[#767676] ">75%</p>
            </div>
            <div className="w-full rounded-full px-0.5 py-0.5 border-[1px] border-[#FFB400]">
              <div className="bg-[#FFB400] h-0.5 rounded-full w-[75%]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
          <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-4 self-start">
            Extra Skills
          </h1>
          <div className="flex items-center self-start mb-2">
            <img src={ExtraSkills} alt="extra skills icon" />
            <p className="text-[15px] text-[#767676] ml-3">Redux</p>
          </div>
          <div className="flex items-center self-start mb-2">
            <img src={ExtraSkills} alt="extra skills icon" />
            <p className="text-[15px] text-[#767676] ml-3">Tailwind CSS</p>
          </div>
          <div className="flex items-center self-start mb-2">
            <img src={ExtraSkills} alt="extra skills icon" />
            <p className="text-[15px] text-[#767676] ml-3">Bootstrap</p>
          </div>
          <div className="flex items-center self-start">
            <img src={ExtraSkills} alt="extra skills icon" />
            <p className="text-[15px] text-[#767676] ml-3">GIT Knowledge</p>
          </div>
        </div>
        <div className="flex flex-col items-center pb-6 border-[#F0F0F6] mt-16">
          <button
            className=" text-[16px] text-black font-semibold  px-6 py-3 bg-[#FFB400] w-[40%] mb-5"
            type="button"
          >
            <a
              className="flex items-center justify-between"
              href="/CV.docx"
              download
            >
              <p className="text-[14px] font-bold">DOWNLOAD CV</p>
              <BiDownload className="text-[20px]" />
            </a>
          </button>
        </div>
        <div className="flex flex-col items-center pb-6 mt-6 border-b-[1px] border-[#F0F0F6]">
          <div className="flex w-full items-center justify-center px-12">
            <a
              href="https://wa.me/09036861277"
              className="rounded-[50%] bg-[#FFB400] p-1.5"
            >
              <IoLogoWhatsapp className="text-[#2B2B2B]" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100080934143818"
              className="rounded-[50%] bg-[#FFB400] p-1.5 ml-2"
            >
              <FaFacebookF className="text-[#2B2B2B]" />
            </a>
            <a
              href="https://www.linkedin.com/in/babatunde-olatunji-6658b323a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxLFkgWF3TN2psCQh86Wung%3D%3D"
              className="rounded-[50%] bg-[#FFB400] p-1.5 ml-2"
            >
              <FaLinkedinIn className="text-[#2B2B2B]" />
            </a>
          </div>
        </div>
      </div>

      {/* ----------------------------end-------------------------------------- */}
    </div>
  );
};

export default Portfolio;
