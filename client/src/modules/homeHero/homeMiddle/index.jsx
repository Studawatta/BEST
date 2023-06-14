import React from "react";
import styled from "styled-components";

import { school1, school2, school3, student_home } from "../../../assets";

const MiddleLine1 = styled.div`
  height: 15vw;
  width: 100%;
  background-color: rgba(166, 166, 166, 0.8);
  margin-bottom: -9vw;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 9vw), 0 100%);

  @media screen and (min-width: 360px) {
    height: 12vw;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 9vw), 0 100%);
  }
  @media screen and (min-width: 640px) {
    height: 6vw;
    margin-bottom: -4.5vw;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 4.5vw), 0 100%);
  }
`;
const MiddleLine2 = styled.div`
  height: 15vw;
  width: 100%;
  background-image: linear-gradient(to right, #4dffa6, #1affff);
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
const MainDiv = styled.div`
  background-color: white;
  height: calc(380px + 4.5vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  clip-path: polygon(0 calc(100% - 380px), 100% 0, 100% 100%, 0 100%);
`;

const HomeMiddle = () => {
  return (
    <div>
      <MiddleLine1 />
      <MainDiv>
        <div className=" mt-[100px]  flex w-fit flex-col items-center justify-center ">
          <span className="text-[16px] text-slate-600 md:text-[20px] lg:text-[24px]">
            High-impact K–12 schools across the world choose Blackbaud to drive
            success.
          </span>
          <span className="text-[16px] text-slate-600 md:text-[20px] lg:text-[24px]">
            Read these stories and more in our customer story showcase.
          </span>

          <div className="mt-[30px]  flex w-[60%] justify-between gap-[20%]  ">
            <img
              src={school1}
              alt=""
              className="h-[40px] w-[40px] cursor-pointer xs:h-[60px] xs:w-[60px] md:h-[100px] md:w-[100px]"
            />
            <img
              src={school2}
              alt=""
              className="h-[40px] w-[40px] cursor-pointer xs:h-[60px] xs:w-[60px] md:h-[100px] md:w-[100px]"
            />
            <img
              src={school3}
              alt=""
              className="h-[40px] w-[40px] cursor-pointer xs:h-[60px] xs:w-[60px] md:h-[100px] md:w-[100px]"
            />
          </div>
        </div>
        <MiddleLine2 />
      </MainDiv>
      {/* <div className="h-10 w-full bg-red-400"></div> */}

      <div className="mt-[-1px]  flex bg-white lg:h-[600px] xl:h-[700px]">
        <div className=" hidden w-[40%] overflow-hidden bg-black lg:block">
          <img src={student_home} alt="student_home" />
        </div>

        <div className="  px-[5px] py-[30px] lg:w-[60%] lg:px-[20px] lg:py-0 xl:px-[100px] xl:py-[50px]  ">
          <div className="w-full">
            <span className="w-[200px] text-[22px] font-thin lg:text-[32px]  ">
              Digital Transformation for the Educational Experience
              <hr className="rounded-md border-4 border-green-500 " />
            </span>
          </div>
          <p className="mt-[20px] text-[14px] text-slate-700 lg:text-[18px] xl:text-[20px]">
            Connect your whole school and drive digital transformation with BEST
            student management solutions for private and parochial schools.
            Power efficiency with truly seamless data flow from enrollment
            management into the learning management and student information
            systems, and create an unparalleled user experience for parents,
            students, faculty, and staff through a single login, unified
            interface, and mobile access.
          </p>
          <p className="mt-6 text-[14px] text-slate-700 lg:text-[16px] xl:text-[18px]">
            <span className="text-[16px] text-purple-800 lg:text-[18px] xl:text-[20px]">
              BEST Enrollment Management System™
            </span>
            saves time with features such as self-scheduling and online
            committee review, and the customizable admission checklist enables
            parents and admins to quickly review an application’s status{" "}
          </p>
          <p className="mt-6 text-[14px] text-slate-700 lg:text-[16px] xl:text-[18px]">
            <span className="text-[16px] text-purple-800 lg:text-[18px] xl:text-[20px]">
              BEST Learning Management System™
            </span>
            provides teachers with the tools to post assignments and enter
            grades, coaches the ability to add announcements and game
            highlights, and advisors a forum to communicate
          </p>
          <p className="mt-6 text-[14px] text-slate-700 lg:text-[16px] xl:text-[18px]">
            <span className="text-[16px] text-purple-800 lg:text-[18px] xl:text-[20px]">
              BEST Student Information System™
            </span>
            collects academic information from the learning management system to
            streamline attendance, scheduling, grading, report cards, and
            transcripts, as well as to provide in-depth reporting
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
