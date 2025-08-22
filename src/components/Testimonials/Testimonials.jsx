import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { FaStar } from "react-icons/fa6";
import { TestimonialsObj } from "./TestimonialsObj";

function Testimonials() {
  return (
    <section className="container mx-auto px-5 lg:px-20 pb-20">
      <header className="text-center flex flex-col items-center mt-10 pt-20 pb-10">
        <p className="text-blue-600 text-xl font-semibold">Testimonials</p>
        <h1 className="text-3xl font-bold pb-3">What our Clients Say</h1>
        <p className="text-md md:w-[530px] pb-2 text-gray-500">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </header>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // default for small
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={600}
        breakpoints={{
          640: { slidesPerView: 1 }, // sm: 1 card
          1024: { slidesPerView: 3 }, // md+ : 3 cards
        }}
      >
        {TestimonialsObj.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
              <div className="border p-6 shadow-lg rounded-lg bg-white">
                {/* Stars */}
                <span className="flex items-center gap-2 text-yellow-400 pb-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>

                <p className="text-gray-500 pb-3">“{data.review}”</p>

                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-md font-bold">{data.name}</p>
                    <p className="text-gray-500 text-sm">{data.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
