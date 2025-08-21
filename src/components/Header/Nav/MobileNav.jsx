import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Fashon from "../Dropdowns/Fashon";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFashionVisible, setIsFashionVisible] = useState(false);
  return (
    <>
      <LuMenu
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      {isOpen && (
        <div className="absolute left-25 right-10 top-20 bg-white border rounded-md p-3 z-50">
          <ul className=" text-lg flex flex-col gap-2 font-poppins">
            <li
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              className="flex items-center justify-between p-2 gap-2 px-4 bg-gray-100 rounded hover:text-blue-600 cursor-pointer"
            >
              All categories{" "}
              <span>
                <IoIosArrowDown />
              </span>
              {isVisible ? "" : ""}
            </li>
            {/* Fashion Dropdown  */}
            {isVisible && (
              <ul className="text-lg flex flex-col gap-2 font-poppins z-50">
                <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                  Arts & Crafts
                </li>
                <li
                  onClick={() => {
                    setIsFashionVisible(!isFashionVisible);
                  }}
                  className="text-gray-500 hover:text-blue-600 cursor-pointer flex items-center justify-between "
                >
                  Fashion
                  <span>
                    <IoIosArrowForward />
                  </span>
                  {isFashionVisible ? "" : ""}
                </li>
                {isFashionVisible && <Fashon />}

                <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                  Bags & Shoes
                </li>
                <li className="text-gray-500 hover:text-blue-600 cursor-pointer">
                  Jewelry & Watch
                </li>
              </ul>
            )}

            {/* Other Navigation Items */}
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Shop</li>
            <li className="hover:text-blue-600 cursor-pointer">Products</li>
            <li className="hover:text-blue-600 cursor-pointer flex items-center justify-between gap-2 ">
              Accessories
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
