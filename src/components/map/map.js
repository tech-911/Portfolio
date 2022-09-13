import React from "react";
import "./map.css"

const Map = () => {
  return (
    <div className="w-full mb-10 container mx-auto map">
      {" "}
      <iframe
        className="border-[2px] border-[#c4c2c2] rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5842438006193!2d6.518227515237278!3d9.631019681919893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c70eed9ac00db%3A0x18531756e821292b!2sMAWO%20International%20School!5e0!3m2!1sen!2sng!4v1658406935174!5m2!1sen!2sng"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
