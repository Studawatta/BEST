import React from 'react';
import logo from '../../assets/imges/logo.png';

const Footer = () => {
  return (
    <div className="bg-[#1a1a1a] h-[150px] w-full flex justify-center items-center">
      <div className=" h-fit w-[90%]">
        <div className=" w-fit flex items-center justify-center gap-[30px] m-auto">
          <img
            src={logo}
            alt=""
            className="w-[100px] h-[100px]"
          />
          <span className="text-white cursor-pointer italic">
            Privacy Policy
          </span>
          <span className="text-white italic">All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
