import React from "react";

const Footer = () => {
  return (
    <div className="bg-white flex items-center justify-center w-full h-20 border-t-2 text-[15px]">
      © {new Date()?.toISOString().split("-")[0]} All Rights Reserved.
    </div>
  );
};

export default Footer;
