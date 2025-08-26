import { TrendingObj } from "./TrendingObj";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

function TrendingProducts() {
  return (
    <div>
      <section className="container mx-auto px-5 lg:px-20">
        <header className="text-center flex flex-col items-center mt-10 pt-20 pb-10">
          <h1 className="text-4xl font-bold pb-3">Trending Products</h1>
          <p className="text-md md:w-[530px] pb-2 text-gray-500">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {TrendingObj.map((data) => {
            return (
              <div key={data.title} className="flex flex-col border p-4">
                <img
                  src={data.image}
                  alt={data.title}
                  className="object-cover mb-4"
                />
                <p className="text-xl text-gray-700 font-bold pb-3">
                  {data.price}
                </p>
                <h2 className="text-lg  font-semibold pb-3">{data.title}</h2>
                <p className="text-sm text-gray-500 flex">
                  {" "}
                  <span className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                    <CiStar className="text-yellow-400 text-[1.1rem]" />
                  </span>
                  {data.Reviews}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default TrendingProducts;
