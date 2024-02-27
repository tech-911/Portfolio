import React from "react";
import Topic from "../../components/topic";
import Table from "../table/table";
import data from "./data";
import "./work.css"

const WorkExperience = () => {
  return (
    <div className="mb-20 work" id="work">
      <div className="mb-10">
        <Topic
          heading="Work History"
          value=""
        />
      </div>
      <Table data={data} />
    </div>
  );
};

export default WorkExperience;
