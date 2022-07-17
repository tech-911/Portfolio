import React from "react";
import Topic from "../../components/topic";
import Table from "../table/table";
import data from "../../components/Education/data";

const WorkExperience = () => {
  return (
    <div>
      <div className="mb-10">
        <Topic
          heading="Work History"
          value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
      </div>
      <Table data={data} />
    </div>
  );
};

export default WorkExperience;
