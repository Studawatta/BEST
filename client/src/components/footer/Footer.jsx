import React from 'react';
import logo from '../../assets/imges/logo.png';

const Footer = () => {
  return (
    <div className="bg-[#1a1a1a] h-[150px] w-full flex justify-center items-center ">
      <div className=" h-fit w-[90%]">
        <div className="  w-full flex items-center justify-center gap-[10%] m-auto">
          <img
            src={logo}
            alt=""
            className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]"
          />
          <span className="text-white cursor-pointer italic text-[14px] sm:text-[16px]">
            Privacy Policy
          </span>
          <span className="text-white italic text-[14px] sm:text-[16px]">
            All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
