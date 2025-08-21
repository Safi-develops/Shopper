import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";
import { NewsObj } from "./NewsObj";

function LatestNews() {
  return (
    <div>
      <section className="container mx-auto px-5 lg:px-20 pb-20">
        <header className="flex justify-between items-center px-2">
          {/* heading text  */}
          <div>
            <p className="text-blue-600 text-xl pb-2 font-semibold">
              Latest News
            </p>
            <h1 className="text-3xl font-bold pb-3">Recent Blog Articles</h1>
            <p className="text-gray-500 text-lg lg:w-[500px]">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
          {/* heading dots */}
          <div>
            <img
              className="w-[200px] hidden lg:flex"
              src="src/assets/vector-polka-background-with-small-dots.png"
              alt=""
            />
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {NewsObj.map((data) => {
            return (
              <div
                key={data.title}
                className="items-center gap-5 my-10"
              >
                <img
                  className="w-full lg:w-[300px] h-[200px] object-cover rounded-lg"
                  src={data.url}
                  alt={data.title}
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-blue-500">
                    {data.title}
                  </h2>
                  <p className="text-gray-600 font-bold text-2xl hover:text-blue-500">
                    {data.description}
                  </p>
                  <div className="flex items-center gap-4 text-gray-500">
                    <span className="flex items-center gap-2 font-semibold text-base">
                      <HiOutlineCalendarDateRange />
                      {data.date}
                    </span>

                    <span className="flex items-center gap-2 font-semibold text-base">
                      <BiCommentDetail />
                      {data.comment}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="bg-blue-600 py-10 px-8 rounded-lg mt-10 ">
            <header className="text-center text-white">
              <h1 className="font-semibold text-2xl">Join our newsletter!</h1>
              <p>Enter your email to receive our latest newsletter.</p>
            </header>
            <div className="flex flex-col justify-center gap-2 mt-10">
              <input
                className="text-center border-none p-3 rounded-md placeholder:text-gray-300 placeholder:font-semibold bg-blue-500"
                type="email"
                placeholder="Your email address"
              />
              <input
                className="text-center border-none p-3 rounded-md placeholder:text-white placeholder:font-semibold bg-green-500"
                type="email"
                placeholder="Subscribe Now"
              />
            </div>
            <p className="text-sm text-center text-white pt-5 font-semibold">Don't worry, we don't spam</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestNews;
