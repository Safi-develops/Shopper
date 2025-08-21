import { CiLocationOn } from "react-icons/ci";
import { GoDash } from "react-icons/go"; 

function Footer() {
  return (
    <div>
      <footer className="bg-[url('public/bg.jpg')] bg-no-repeat bg-cover bg-center py-20">
        <div className="container mx-auto px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="mb-10">
            <img src="src/assets/logo-white.svg" alt="" />
            <span className="text-white text-xl flex items-center mt-8 gap-3">
              <CiLocationOn />
              <h1 className="font-bold">Our Store Locations</h1>
            </span>
            <p className="text-white text-lg mt-2">
              <span className="pr-3">01.</span>
              29 Holles Place, Dublin 2 D02 YY46
            </p>
            <p className=" text-white text-lg mt-2">
              <span className="pr-3">21.</span>
              68 Jay Street, Suite 902 New Side Brooklyn, NY 11201
            </p>
          </div>
          <ul className="text-white text-lg  mt-5 mb-8">
            <li className=" text-2xl font-bold ">
              Top Categories{" "}
              <span>
                <GoDash className="text-5xl" />
              </span>
            </li>

            <li className="cursor-pointer text-lg hover:underline pb-2">
              Televisions
            </li>
            <li className="cursor-pointer text-lg hover:underline pb-2">
              Washing Machines
            </li>
            <li className="cursor-pointer text-lg hover:underline pb-2">
              Air Conditioners
            </li>
            <li className="cursor-pointer text-lg hover:underline pb-2">
              Laptops
            </li>
            <li className="cursor-pointer text-lg hover:underline">
              Accessories
            </li>
          </ul>
          <ul className="text-white text-lg  mt-5 ">
            <li className=" text-2xl font-bold">
              Important Links
              <span>
                <GoDash className="text-5xl" />
              </span>
            </li>
            <li className="cursor-pointer text-lg hover:underline pb-2">
              About us
            </li>
            <li className="cursor-pointer text-lg hover:underline pb-2">Faq</li>
            <li className="cursor-pointer text-lg hover:underline pb-2">
              Latest Posts
            </li>
            <li className="cursor-pointer text-lg hover:underline pb-2">
              Order Track
            </li>
          </ul>
          <div className="text-white text-lg  mt-5">
            <h1 className=" text-2xl font-bold">Newsletter</h1>
            <span>
              <GoDash className="text-5xl" />
            </span>
            <p className="text-base">
              Enter your email to receive our latest updates about our products.
            </p>
            <div className="flex mt-5">
              <input
                className="bg-slate-800 py-2 px-10 lg absolute "
                type="email"
                placeholder="Email address"
              />
              <button className="relative left-[12rem] top-2 bg-blue-600 py-1 px-2 text-sm">Subscraibe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
