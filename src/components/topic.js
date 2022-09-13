import React from "react";
import "./topic.css";

const Topic = ({ heading, value, size1, size2 }) => {
  return (
    <div className="text-center font-[inter] flex flex-col items-center">
      <h1 className="mb-3 text-[32px] font-bold text-[#2B2B2B]">{heading}</h1>
      <p className="text-[15px] max-w-[438px] text-[#767676]">{value}</p>
    </div>
  );
};

export default Topic;
