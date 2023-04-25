import React from 'react';
import styled from 'styled-components';
import { BsArrowRightShort } from 'react-icons/bs';

const TopLine = styled.div`
  height: 80px;
  width: 100%;
  background-color: transparent;
  border-style: solid;
  border-width: 60px 201.5vmin 0 0;
  border-color: transparent rgba(0, 153, 51, 0.5);
`;

const BottomBarItem = styled.span`
  color: #595959;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Top = () => {
  return (
    <div>
      <div className="h-[400px] w-full mt-[50px] flex items-center justify-center">
        <div className="flex flex-col h-fit gap-[30px] w-[90%]">
          <span className="text-white font-thin font-serif text-[48px]">
            Student Management for Schools
          </span>

          <span className="text-white  font-serif text-[24px]">
            Roll out the red carpet for parents, students, faculty, and staff.
          </span>
          <div className="flex gap-[40px]  w-fit items-center">
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

      <div className="bg-white h-[80px] flex justify-center items-center">
        <div className="w-[90%] h-fit flex gap-[50px]">
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
