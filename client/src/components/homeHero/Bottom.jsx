import React from 'react';
import styled from 'styled-components';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { BsArrowRightShort } from 'react-icons/bs';

const BottomLine1 = styled.div`
  height: 80px;
  width: 100%;
  background-color: transparent;
  border-style: solid;
  border-width: 0 0 60px 201.5vmin;
  border-color: rgba(255, 255, 255, 0) rgba(0, 128, 43, 0.6);
`;
const BottomLine2 = styled.div`
  height: 80px;
  width: 100%;
  background-color: transparent;
  border-style: solid;
  border-width: 60px 201.5vmin 0 0;
  border-color: transparent rgba(255, 255, 255, 1);
`;

const Card = styled.div`
  width: 250px;
  height: 400px;
  background-color: #004d4d;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 20px 0;
`;
const Button = styled.button`
  width: fit-content;
  background-color: #9900cc;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid #e699ff;
  font-weight: bold;
  color: white;
  display: flex;
  gap: 5px;
  align-items: center;
  &:hover {
    background-color: white;
    color: #9900cc;
  }
`;

const Bottom = () => {
  return (
    <div>
      <BottomLine1 />
      <div className=" flex justify-center">
        <div className="h-[400px]  w-[90%]">
          <div className="w-[720px] text-slate-200 flex flex-col ">
            <RiDoubleQuotesL className="text-[72px] text-[#00b300] " />
            <p className="text-[32px] mb-[30px] mt-[10px] ">
              With each successful implementation comes more benefits for our
              community and more confidence in moving to the next Blackbaud
              product.
            </p>
            <span className="text-[24px] font-semibold mb-[30px] ">
              Scott Blair, Director of Information Systems <br />
              GONZAGA COLLEGE HIGH SCHOOL
            </span>
            <Button>
              Read More <BsArrowRightShort className="text-[24px]" />
            </Button>
          </div>
        </div>
      </div>

      <BottomLine2 />
      <div className="bg-white h-[600px] flex flex-col items-center justify-center gap-[60px]">
        <h1 className="text-[48px] text-slate-700">Solutions for Schools</h1>
        <div className="flex gap-[100px]">
          <Card>
            <h1 className="text-[24px] font-semibold text-white w-[200px] text-center">
              Enrollment Management
            </h1>
            <p className="text-[18px] w-[200px] text-white text-center">
              Power admissons with the online entrollment solution that
              impressed parents and streamlines the application and
              re-enrollment processes.
            </p>
            <Button>
              Learn More <BsArrowRightShort className="text-[24px]" />
            </Button>
          </Card>
          <Card>
            <h1 className="text-[24px] font-semibold text-white w-[200px] text-center">
              Enrollment Management
            </h1>
            <p className="text-[18px] w-[200px] text-white text-center">
              Power admissons with the online entrollment solution that
              impressed parents and streamlines the application and
              re-enrollment processes.
            </p>
            <Button>
              Learn More <BsArrowRightShort className="text-[24px]" />
            </Button>
          </Card>
          <Card>
            <h1 className="text-[24px] font-semibold text-white w-[200px] text-center">
              Enrollment Management
            </h1>
            <p className="text-[18px] w-[200px] text-white text-center">
              Power admissons with the online entrollment solution that
              impressed parents and streamlines the application and
              re-enrollment processes.
            </p>
            <Button>
              Learn More <BsArrowRightShort className="text-[24px]" />
            </Button>
          </Card>
        </div>
      </div>
      <div className="w-full h-[300px] bg-[#003d4d] flex justify-center items-center">
        <div className=" w-fit flex flex-col items-center">
          <h1 className="text-[32px] font-semibold text-white  text-center">
            Ready to learn more?
          </h1>
          <span className="text-[20px] text-white mb-[40px] mt-[10px]">
            Contact us today to learn more about the BEST
          </span>
          <Button>
            Contact us <BsArrowRightShort className="text-[24px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
