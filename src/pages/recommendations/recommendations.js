import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./recommendations.css";
import Topic from "../../components/topic";
import CarouselCards from "../../components/carousel_cards/carousel_cards";
import Recommend1 from "../../assets/recommend1.png";
import Recommend2 from "../../assets/recommend2.png";
import Recommend3 from "../../assets/recommend3.png";
import projectGallary from "./projectsData";

const Recommendations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="projects"
      className="font-[inter] w-full container mx-auto mb-20 bottom-correction"
    >
      <div className="mb-10">
        <Topic
          heading="Project Gallery"
          value="Explore projects ive worked on using cutting edge web frameworks and libraries."
        />
      </div>
      <div className="h-[16rem] carousel overflow-x-hidden bg-[#F0F0F6]">
        <Slider {...settings}>
          {projectGallary?.map((value, id) => {
            return (
              <CarouselCards
                img={value?.logo}
                heading={value?.heading}
                value={value?.tools}
                name="James Gouse"
                role={value?.link}
                mr="15px"
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Recommendations;
