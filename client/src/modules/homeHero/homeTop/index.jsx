import React from "react";
import styled from "styled-components";

import { BsArrowRightShort } from "react-icons/bs";

const TopLine = styled.div`
  height: 15vw;
  width: 100%;
  background-color: rgba(0, 153, 51, 0.5);
  clip-path: polygon(0 calc(100% - 6vw), 100% 0, 100% 100%, 0 100%);
  @media screen and (min-width: 360px) {
    height: 12vw;
    clip-path: polygon(0 calc(100% - 3vw), 100% 0, 100% 100%, 0 100%);
  }
  @media screen and (min-width: 640px) {
    height: 6vw;
    clip-path: polygon(0 calc(100% - 1.5vw), 100% 0, 100% 100%, 0 100%);
  }
`;

const HomeTop = () => {
  const bottombarItem =
    "cursor-pointer text-[8px] font-bold text-[#595959] hover:underline xs:text-[10px] md:text-[16px]";
  return (
    <div>
      <div className="mt-[50px] flex h-[400px] w-full items-center justify-center">
        <div className="flex h-fit w-[90%] flex-col gap-[30px] ">
          <span className=" font-serif text-[24px] font-semibold xs:text-[32px] md:text-[48px]">
            Student Management for Schools
          </span>

          <span className="font-serif  text-[16px] font-[600] xs:text-[20px] md:text-[24px]">
            Roll out the red carpet for parents, students, faculty, and staff.
          </span>
          <div className="m-auto flex w-fit flex-col items-center gap-[40px] sm:m-0 sm:flex-row">
            <button
              className={` flex gap-[5px] rounded-[10px] border-[2px] border-[#e699ff] bg-[#9900cc]
             px-[25px] py-[15px] font-bold text-white hover:bg-white hover:text-[#9900cc]`}
            >
              Request a Demo
              <BsArrowRightShort className="text-[28px] " />
            </button>
            <button
              className={`flex h-full gap-[5px] border-b-[3px] border-b-transparent font-bold
             text-white duration-300 hover:gap-[15px] hover:border-b-[#9900cc] hover:text-[#9900cc]`}
            >
              Request Pricing
              <BsArrowRightShort className="text-[28px]" />
            </button>
          </div>
        </div>
      </div>
      <TopLine />
      <div className="flex h-[60px] items-center justify-center bg-white sm:h-[80px]">
        <div className="flex h-fit w-[90%] justify-between sm:justify-start sm:gap-[6%]">
          <span className={bottombarItem}>CUSTOMERS</span>
          <span className={bottombarItem}>HOW WE HELP</span>
          <span className={bottombarItem}>SOLUTIONS</span>
          <span className={bottombarItem}>RESOURCES</span>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
