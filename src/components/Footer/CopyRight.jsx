import { SiVisa } from "react-icons/si";
import { GrPaypal } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import { SiNasa } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa6";
import { TbBrandTesla } from "react-icons/tb";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function CopyRight() {
  return (
    <div>
      <div className="bg-slate-800 py-5 text-white">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
          <div className="flex gap-2 items-center justify-center lg:justify-start text-3xl">
            <SiVisa />
            <GrPaypal />
            <FaDiscord />
            <SiNasa />
            <FaGithubAlt />
            <TbBrandTesla />
          </div>

          <div className="flex justify-center gap-4 items-center mt-5 mb-5">
            <p>Follow US: </p>
            <span className="flex gap-3 text-2xl mt-2">
              <FaFacebookF />
              <FaTwitter />
              <AiFillInstagram />
              <FaLinkedin />
            </span>
          </div>
          <p className="flex items-center justify-center
          text-lg gap-3 lg:justify-end ">
            <FaRegCopyright />
            TailGrids. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
