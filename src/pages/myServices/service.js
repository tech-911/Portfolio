import React from "react";
import "./service.css";
import Topic from "../../components/topic";
import service1 from "../../assets/servicie1.png";
import service2 from "../../assets/servicie2.png";
import service3 from "../../assets/servicie3.png";
import service4 from "../../assets/servicie4.png";
import service5 from "../../assets/servicie5.png";
import ServiceWidget from "../../components/service/serviceWidget";

const Services = () => {
  return (
    <div className="font-[inter] mb-20 container mx-auto service-css-1">
      <div className="mb-10">
        <Topic
          heading="My Services"
          value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
      </div>
      <div className="grid grid-cols-3 gap-3 reset-grid">
        <ServiceWidget
          head="Web Development"
          text="Blog, E-Commerce"
          image={service1}
        />
        <ServiceWidget
          head="UI/UX Design"
          text="Mobile App, Website Design"
          image={service2}
        />
        <ServiceWidget
          head="Web Development"
          text="Blog, E-Commerce"
          image={service3}
        />
        <ServiceWidget
          head="Web Development"
          text="Blog, E-Commerce"
          image={service4}
        />
        <ServiceWidget
          head="Web Development"
          text="Blog, E-Commerce"
          image={service5}
        />
        <ServiceWidget
          head="Advertising"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. "
          link={true}
        />
      </div>
    </div>
  );
};

export default Services;
