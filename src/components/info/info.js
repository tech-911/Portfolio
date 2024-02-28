import React, { useState, useEffect } from "react";
import "./info.css";
import Logo from "../../assets/profileLogo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import ExtraSkills from "../../assets/extra_skills.png";
import { Link } from "react-router-dom";

const Info = () => {
  const birthdate = "2000-01-07";

  const getAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    const isBirthdayPassed =
      currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() >= birthDate.getDate());

    if (!isBirthdayPassed) {
      age--;
    }

    return age;
  };

  return (
    <div className="font-[inter] container mx-auto px-4 bg-white">
      <div className="flex flex-col items-center pb-10 border-b-[1px] border-[#F0F0F6]">
        <div className="after:content after:block after:relative after:rounded-[50px] after:bg-[#7EB942] after:h-4 after:w-4 after:-top-6 after:left-28 mt-10">
          <img src={Logo} alt="status" />
        </div>
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-3">
            Eric Olatunji
          </h1>
          <p className="text-[15px] text-[#767676] ">Front-End Developer</p>
        </div>

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
          <a
            href="https://github.com/tech-911"
            className="rounded-[50%] bg-[#FFB400] p-1.5 ml-2"
          >
            <FaGithub className="text-[#2B2B2B]" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="bg-[#FFB400] py-1 px-2 text-[15px]">Age:</div>
          <div className="text-[15px]">{getAge(birthdate)}</div>
        </div>
        <div className="flex items-center justify-between w-full mb-2">
          <div className="bg-[#FFB400] py-1 px-2 text-[15px]">Location:</div>
          <div className="text-[15px]">Nigeria</div>
        </div>
        <div className="flex items-center justify-between w-full mb-2">
          <div className="bg-[#FFB400] py-1 px-2 text-[15px]">Status:</div>
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
          Fronend Skills
        </h1>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">HTML</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">CSS</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">JavaScript</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">React.js</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Next.js</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">React Native</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Typescript</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Zod</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">React Hook Form</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Axios</p>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
        <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-4 self-start">
          CSS Libraries/ Frameworks
        </h1>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Tailwind CSS</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Framer Motion</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Bootstrap</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Mantine UI</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Shadcn UI</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Sass</p>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
        <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-4 self-start">
          State Managment
        </h1>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Redux</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Context Api</p>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
        <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-4 self-start">
          Backend Skills
        </h1>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Node.js/Express.js</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Mongoose/ MongoDB</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Firebase Auth</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Google Oauth</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Cloudinary</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">JWT</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Twillio</p>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
        <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-4 self-start">
          Deployment Platforms Used
        </h1>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Vercel</p>
        </div>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Render</p>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
        <h1 className="text-[18px] text-[#2B2B2B] font-semibold mb-4 self-start">
          Version Control
        </h1>
        <div className="flex items-center self-start mb-2">
          <img src={ExtraSkills} alt="extra skills icon" />
          <p className="text-[15px] text-[#767676] ml-3">Git & Git-hub</p>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6 border-b-[1px] border-[#F0F0F6] mt-8">
        <button
          className="text-[16px] text-black font-semibold  px-6 py-3 bg-[#FFB400] w-full mb-5"
          type="button"
        >
          <a
            className="flex items-center justify-between"
            href="https://drive.google.com/file/d/1VKLx8eUpnDA1kGk4Ojz3Prqf4OwCUCDt/view?usp=sharing"
            // href="/cv.pdf"
            // download
          >
            <p className="text-[14px] font-bold">DOWNLOAD CV</p>
            <BiDownload className="text-[20px]" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Info;
