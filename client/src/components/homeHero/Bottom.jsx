import React from 'react';
import styled from 'styled-components';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { BsArrowRightShort } from 'react-icons/bs';

const BottomLine1 = styled.div`
  height: 15vw;
  width: 100%;
  background-color: rgba(16, 72, 33, 0.4);
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

const MainDiv = styled.div`
  background-color: white;
  display: flex;
  height: calc(1350px + 4.5vw);

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  clip-path: polygon(0 calc(100% - 1350px), 100% 0, 100% 100%, 0 100%);
  @media screen and (min-width: 640px) {
    height: calc(550px + 4.5vw);
    clip-path: polygon(0 calc(100% - 550px), 100% 0, 100% 100%, 0 100%);
  }
`;

const Bottom = () => {
  return (
    <div>
      <BottomLine1 />
      <div className=" flex justify-center">
        <div className="h-[500px]  w-[90%]">
          <div className="w-full lg:w-[60%] text-slate-200 flex flex-col mt-[80px] ">
            <RiDoubleQuotesL className="text-[56px] text-[#00b300] md:text-[72px] " />
            <p className="text-[18px] mb-[30px] mt-[10px] sm:text-[24px] md:text-[32px] ">
              With each successful implementation comes more benefits for our
              community and more confidence in moving to the next Blackbaud
              product.
            </p>
            <span className="text-[16px] font-semibold mb-[30px] sm:text-[18px] md:text-[20px] ">
              Scott Blair, Director of Information Systems <br />
              GONZAGA COLLEGE HIGH SCHOOL
            </span>
            <Button>
              Read More <BsArrowRightShort className="text-[24px]" />
            </Button>
          </div>
        </div>
      </div>

      <MainDiv>
        <h1 className="text-[28px] text-slate-700 md:text-[48px]">
          Solutions for Schools
        </h1>
        <div className="flex flex-col gap-[5vw] md:flex-row  ">
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
      </MainDiv>

      {/* <div className="w-full h-[300px] bg-[#003d4d] flex justify-center items-center">
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
      </div> */}
    </div>
  );
};

export default Bottom;
