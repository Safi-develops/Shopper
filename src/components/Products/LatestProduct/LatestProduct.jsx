import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LatestObj } from "./LatestObj";
import { FaStar } from "react-icons/fa6";

function LatestProduct() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <section className="bg-gray-50 pb-20 ">
        <header className="text-center flex flex-col items-center mt-10 pt-20 pb-10 px-2">
          <h1 className="text-4xl font-bold">Our Latest Products</h1>
          <p className="text-md md:w-[530px] text-gray-500">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </header>
        <div className="max-w-7xl   mt-10 container mx-auto px-5 lg:px-20">
          <Slider {...settings}>
            {LatestObj.map((data) => (
              <div key={data.title} className="px-2">
                <div className="border rounded-lg shadow-lg bg-white">
                  <div className="mb-4">
                    <img
                      src={data.image}
                      className="w-full object-cover rounded-t-md h-48 "
                    />
                  </div>
                  <div className="mb-3 px-4">
                    <h3 className="text-md-start lg:text-lg font-bold ">
                      <span className="hover:text-blue-600"> {data.title}</span>
                    </h3>
                    <p className="text-gray-600 text-sm">{data.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4 text-gray-700 border  rounded-b-lg">
                    <span className="flex items-center gap-1 text-sm px-2">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      {data.Reviews}
                    </span>
                    <span className="font-semibold text-lg border-l p-2">
                      {data.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default LatestProduct;
