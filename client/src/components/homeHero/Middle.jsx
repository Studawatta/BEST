import React from 'react';
import styled from 'styled-components';
import school1 from '../../assets/imges/school1.png';
import school2 from '../../assets/imges/school2.png';
import school3 from '../../assets/imges/school3.png';
import students from '../../assets/imges/student_home.jpg';

const MiddleLine1 = styled.div`
  height: 80px;
  width: 100%;
  background-color: transparent;
  border-style: solid;
  border-width: 0 0 60px 201.5vmin;
  border-color: rgba(255, 255, 255, 1) rgba(166, 166, 166, 0.8);
`;
const MiddleLine2 = styled.div`
  height: 80px;
  width: 100%;
  background-color: transparent;
  border-style: solid;
  border-width: 60px 201.5vmin 0 0;
  border-color: white rgba(0, 230, 230, 1);
`;

const Middle = () => {
  return (
    <div>
      <MiddleLine1 />
      <div className="bg-white h-[380px] flex justify-center items-center">
        <div className=" w-fit flex flex-col items-center ">
          <span className="text-[24px] text-slate-600">
            High-impact K–12 schools across the world choose Blackbaud to drive
            success.
          </span>
          <span className="text-[24px] text-slate-600">
            Read these stories and more in our customer story showcase.
          </span>

          <div className="flex  w-fit mt-[80px] gap-[100px]">
            <img
              src={school1}
              alt=""
              className="w-[100px] h-[100px] cursor-pointer"
            />
            <img
              src={school2}
              alt=""
              className="w-[100px] h-[100px] cursor-pointer"
            />
            <img
              src={school3}
              alt=""
              className="w-[100px] h-[100px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <MiddleLine2 />
      <div className="bg-white h-[700px] flex">
        <img
          src={students}
          alt=""
          className="h-[700px] w-[600px]"
        />
        <div className="h-[700px] w-[calc(100%-600px)]   px-[80px] py-[50px]">
          <div>
            <span className="text-[28px] font-thin">
              Digital Transformation for the Educational <br /> Experience
            </span>
            <hr className="border-4 border-green-500 rounded-md w-[20%]" />
          </div>
          <p className="text-[18px] mt-[50px] text-slate-700">
            Connect your whole school and drive digital transformation with BEST
            student management solutions for private and parochial schools.
            Power efficiency with truly seamless data flow from enrollment
            management into the learning management and student information
            systems, and create an unparalleled user experience for parents,
            students, faculty, and staff through a single login, unified
            interface, and mobile access.
          </p>
          <p className="mt-6 text-[18px] text-slate-700">
            <span className="text-[22px] text-purple-800">
              BEST Enrollment Management System™
            </span>
            saves time with features such as self-scheduling and online
            committee review, and the customizable admission checklist enables
            parents and admins to quickly review an application’s status{' '}
          </p>
          <p className="mt-6 text-[18px] text-slate-700">
            <span className="text-[22px] text-purple-800">
              BEST Learning Management System™
            </span>
            provides teachers with the tools to post assignments and enter
            grades, coaches the ability to add announcements and game
            highlights, and advisors a forum to communicate
          </p>
          <p className="mt-6 text-[18px] text-slate-700">
            <span className="text-[22px] text-purple-800">
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

export default Middle;
