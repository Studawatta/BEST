import styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";

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

const HomeBottom = () => {
  const cardStyle =
    "flex h-fit w-64 flex-col items-center gap-7 bg-[#004d4d] px-5 py-7";

  const buttonStyle = `flex w-fit items-center gap-1 rounded-md border-2 border-[#e699ff]
   bg-[#9900cc] px-1 py-2 font-bold text-white hover:bg-white hover:text-[#9900cc]`;

  return (
    <div>
      <BottomLine1 />

      {/* TOP CONTAINER */}

      <div className=" flex justify-center">
        <div className="h-[500px]  w-[90%]">
          <div className="mt-[80px] flex w-full flex-col text-slate-200 lg:w-[60%] ">
            <RiDoubleQuotesL className="text-[56px] text-[#00b300] md:text-[72px] " />
            <p className="mb-[30px] mt-[10px] text-[18px] sm:text-[24px] md:text-[32px] ">
              With each successful implementation comes more benefits for our
              community and more confidence in moving to the next Blackbaud
              product.
            </p>
            <span className="mb-[30px] text-[16px] font-semibold sm:text-[18px] md:text-[20px] ">
              Scott Blair, Director of Information Systems <br />
              GONZAGA COLLEGE HIGH SCHOOL
            </span>
            <button className={buttonStyle}>
              Read More <BsArrowRightShort className="text-[24px]" />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM CONTAINER */}

      <MainDiv>
        <h1 className="text-[28px] text-slate-700 md:text-[48px]">
          Solutions for Schools
        </h1>

        {/* CARD CONTAINER */}

        <div className="flex flex-col gap-[5vw] md:flex-row  ">
          {/* CARD #1 */}
          <div className={cardStyle}>
            <h1 className="w-[200px] text-center text-[24px] font-semibold text-white">
              Enrollment Management
            </h1>
            <p className="w-[200px] text-center text-[18px] text-white">
              Power admissons with the online entrollment solution that
              impressed parents and streamlines the application and
              re-enrollment processes.
            </p>
            <button className={buttonStyle}>
              Learn More <BsArrowRightShort className="text-[24px]" />
            </button>
          </div>

          {/* CARD #2 */}
          <div className={cardStyle}>
            <h1 className="w-[200px] text-center text-[24px] font-semibold text-white">
              Enrollment Management
            </h1>
            <p className="w-[200px] text-center text-[18px] text-white">
              Power admissons with the online entrollment solution that
              impressed parents and streamlines the application and
              re-enrollment processes.
            </p>
            <button className={buttonStyle}>
              Learn More <BsArrowRightShort className="text-[24px]" />
            </button>
          </div>

          {/* CARD #3 */}
          <div className={cardStyle}>
            <h1 className="w-[200px] text-center text-[24px] font-semibold text-white">
              Enrollment Management
            </h1>
            <p className="w-[200px] text-center text-[18px] text-white">
              Power admissons with the online entrollment solution that
              impressed parents and streamlines the application and
              re-enrollment processes.
            </p>
            <button className={buttonStyle}>
              Learn More <BsArrowRightShort className="text-[24px]" />
            </button>
          </div>
        </div>
      </MainDiv>
    </div>
  );
};

export default HomeBottom;
