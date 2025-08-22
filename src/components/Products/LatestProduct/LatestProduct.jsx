import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { LatestObj } from "./LatestObj";
import { FaStar } from "react-icons/fa6";

function LatestProduct() {
  return (
    <section className="bg-gray-50 pb-20">
      <header className="text-center flex flex-col items-center mt-10 pt-20 pb-10 px-2">
        <h1 className="text-4xl font-bold">Our Latest Products</h1>
        <p className="text-md md:w-[530px] text-gray-500">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </header>

      <div className="max-w-7xl mt-10 container mx-auto px-5 lg:px-20">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={600}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {LatestObj.map((data) => (
            <SwiperSlide key={data.title}>
              <div className="border rounded-lg shadow-lg bg-white">
                <div className="mb-4">
                  <img
                    src={data.image}
                    className="w-full object-cover rounded-t-md h-48"
                  />
                </div>
                <div className="mb-3 px-4">
                  <h3 className="text-md-start lg:text-lg font-bold">
                    <span className="hover:text-blue-600">{data.title}</span>
                  </h3>
                  <p className="text-gray-600 text-sm">{data.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4 text-gray-700 border rounded-b-lg">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default LatestProduct;
