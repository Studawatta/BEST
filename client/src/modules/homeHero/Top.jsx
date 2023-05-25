import React from 'react';
import styled from 'styled-components';

import { BsArrowRightShort } from 'react-icons/bs';

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
const BottomBarItem = styled.span`
  color: #595959;
  font-weight: bold;
  cursor: pointer;
  font-size: 8px;
  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 360px) {
    font-size: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const Top = () => {
  return (
    <div>
      <div className="h-[400px] w-full mt-[50px] flex items-center justify-center">
        <div className="flex flex-col h-fit gap-[30px] w-[90%] ">
          <span className=" font-semibold font-serif text-[24px] xs:text-[32px] md:text-[48px]">
            Student Management for Schools
          </span>

          <span className="font-[600]  font-serif text-[16px] xs:text-[20px] md:text-[24px]">
            Roll out the red carpet for parents, students, faculty, and staff.
          </span>
          <div className="flex flex-col m-auto gap-[40px] w-fit items-center sm:flex-row sm:m-0">
            <button className=" bg-[#9900cc] px-[25px] py-[15px] rounded-[10px] border-[2px] border-[#e699ff] font-bold text-white hover:bg-white hover:text-[#9900cc] flex gap-[5px]">
              Request a Demo
              <BsArrowRightShort className="text-[28px] " />
            </button>
            <button className="font-bold text-white hover:text-[#9900cc] h-full border-b-[3px] border-b-transparent hover:border-b-[#9900cc] flex gap-[5px] hover:gap-[15px] duration-300">
              Request Pricing
              <BsArrowRightShort className="text-[28px]" />
            </button>
          </div>
        </div>
      </div>
      <TopLine />
      <div className="bg-white h-[60px] sm:h-[80px] flex justify-center items-center">
        <div className="w-[90%] h-fit flex justify-between sm:justify-start sm:gap-[6%]">
          <BottomBarItem>CUSTOMERS</BottomBarItem>
          <BottomBarItem>HOW WE HELP</BottomBarItem>
          <BottomBarItem>SOLUTIONS</BottomBarItem>
          <BottomBarItem>RESOURCES</BottomBarItem>
        </div>
      </div>
    </div>
  );
};

export default Top;
