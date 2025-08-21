import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Hero from "./Hero";

function Slide() {
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full cursor-pointer hover:bg-gray-800 text-white z-10"
    >
      <IoChevronForward size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full cursor-pointer hover:bg-gray-800 text-white z-10"
    >
      <IoChevronBack size={24} />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <div className="max-w-full mx-2 lg:mx-0 mt-10 relative ">
        <Slider {...settings}>
          <Hero />
          <Hero />
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
