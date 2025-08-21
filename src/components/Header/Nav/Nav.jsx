import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import MobileNav from "./MobileNav";
import { useState } from "react";

function Nav() {
  const [allCatagories, setAllCatagories] = useState(false);
  const [isFashion, setIsFashion] = useState(false);

  return (
    <>
      <nav className=" flex  justify-between items-center p-4 bg-white border container mx-auto px-5 lg:px-20">
        {/* logo div */}
        <div>
          <img
            className="w-[6.5rem]"
            src="https://demo.tailgrids.com/templates/shopper/build/src/assets/images/logo/logo.svg"
            alt="Shopper logo"
          />
        </div>

        {/* Navigation list */}
        <ul className="hidden lg:flex gap-5 items-center font-poppins">
          <li
            onClick={() => setAllCatagories(!allCatagories)}
            className="flex items-center p-2 gap-2 px-4 bg-gray-100 rounded hover:text-blue-600 cursor-pointer"
          >
            All categories
            <span>
              <IoIosArrowDown />
            </span>
          </li>

          {allCatagories && (
            <ul className="fixed left-30 right-30 top-20 bg-white text-md   p-5 border rounded z-50">
              <li className=" pb-2 text-gray-500  hover:text-blue-600 cursor-pointer">
                Arts & Crafts
              </li>
              <li
                onMouseEnter={() => setIsFashion(true)}
                onMouseLeave={() => setIsFashion(false)}
                className=" text-gray-500 flex pb-2 hover:text-blue-600 cursor-pointer items-center justify-between"
              >
                Fashion
                <span>
                  <IoIosArrowForward />
                </span>
              </li>
              {isFashion && (
                <div className="absolute left-[9.8rem] right-10 w-[550px] items-center flex justify-between gap-4 text-md bg-white border rounded-md p-5">
                  <ul>
                    <h2>New Arrivals</h2>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Dresses
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Jackets
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Sweatshirts
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Tops & Tees
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Party Dresses
                    </li>
                  </ul>
                  <ul>
                    <h2>New Arrivals</h2>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Dresses
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Jackets
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Sweatshirts
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Tops & Tees
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                      Party Dresses
                    </li>
                  </ul>
                  <div className="w-[150px]">
                    <img
                      className="w-full"
                      src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/navbars/navbar-02/bannder.jpg"
                      alt=""
                    />
                  </div>
                </div>
              )}
              <li className=" pb-2 text-gray-500 hover:text-blue-600 cursor-pointer">
                Bags & Shoes
              </li>
              <li className=" pb-2 text-gray-500 hover:text-blue-600 cursor-pointer">
                Jewelry & Watch
              </li>
            </ul>
          )}

          {/* Dropdown list */}
          <li className=" hover:text-blue-600 cursor-pointer">Home</li>
          <li className=" hover:text-blue-600 cursor-pointer">Shop</li>
          <li className=" hover:text-blue-600 cursor-pointer">Products</li>
          <li className=" flex items-center gap-2  hover:text-blue-600 cursor-pointer ">
            Accessories
            <span>
              <IoIosArrowDown />
            </span>
          </li>
          <li className=" hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* ICON div  */}
        <div className="flex items-center gap-5">
          <div className=" gap-5 hidden  md:flex">
            <div className="text-3xl cursor-pointer">
              <IoSearchOutline />
            </div>
            <div>
              <GoHeart className=" text-3xl cursor-pointer absolute" />
               <span className=" relative -right-4 -top-2 bg-blue-600 text-white text-xs px-[7px] py-[3px] rounded-full">
                3
              </span>
            </div>
            <div className="">
              <CiShoppingBasket className="text-3xl cursor-pointer absolute" />
              <span className=" relative -right-3 -top-2 bg-blue-600 text-white text-xs px-[7px] py-[3px] rounded-full">
                1
              </span>
            </div>
          </div>

          <span className="text-5xl cursor-pointer lg:hidden">
            <MobileNav />
          </span>
        </div>
      </nav>
    </>
  );
}

export default Nav;
