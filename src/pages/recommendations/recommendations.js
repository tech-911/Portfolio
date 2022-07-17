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

const Recommendations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
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
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="font-[inter] w-full container mx-auto mb-20">
      <div className="mb-10">
        <Topic
          heading="Recommendations"
          value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
      </div>
      <div className="h-[22rem] carousel overflow-x-hidden bg-[#F0F0F6]">
        <Slider {...settings}>
          <CarouselCards
            img={Recommend1}
            heading="Great Quality!"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
            name="James Gouse"
            role="Graphic Designer"
            mr="15px"
          />
          <CarouselCards
            img={Recommend2}
            heading="Great Quality!"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
            name="James Gouse"
            role="Graphic Designer"
            mr="15px"
          />
          <CarouselCards
            img={Recommend3}
            heading="Great Quality!"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
            name="James Gouse"
            role="Graphic Designer"
            mr="15px"
          />
          <CarouselCards
            img={Recommend2}
            heading="Great Quality!"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
            name="James Gouse"
            role="Graphic Designer"
            mr="15px"
          />
          <CarouselCards
            img={Recommend1}
            heading="Great Quality!"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
            name="James Gouse"
            role="Graphic Designer"
            mr="15px"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Recommendations;
