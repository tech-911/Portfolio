import React from "react";
import Topic from "../../components/topic";
import Table from "../table/table";
import data from "./data";
import "./education.css"

const Education = () => {
  return (
    <div className="mb-20 education" id="education">
      <div className="mb-10">
        <Topic
          heading="Education"
          value=""
        />
      </div>
      <Table data={data} />
    </div>
  );
};

export default Education;
