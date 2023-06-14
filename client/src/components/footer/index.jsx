import React from "react";
import logo from "../../assets/imges/logo.png";

const Footer = () => {
  return (
    <div className="flex h-[150px] w-full items-center justify-center bg-[#1a1a1a] ">
      <div className=" h-fit w-[90%]">
        <div className="  m-auto flex w-full items-center justify-center gap-[10%]">
          <img
            src={logo}
            alt=""
            className="h-[50px] w-[50px] sm:h-[100px] sm:w-[100px]"
          />
          <span className="cursor-pointer text-[14px] italic text-white sm:text-[16px]">
            Privacy Policy
          </span>
          <span className="text-[14px] italic text-white sm:text-[16px]">
            All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
