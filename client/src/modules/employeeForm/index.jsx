import React from "react";

const EmployeeForm = () => {
  const inputStyle = "border-2 border-slate-400 p-1";
  return (
    <div className=" w-4/5 border-2 border-purple-500 px-16">
      {/* HEADER */}

      <h1 className="text-center text-[24px] font-semibold text-red-400">
        Employee Form
      </h1>
      {/* FORM */}

      <form className="px-2 py-4">
        {/* SUB_HEADER */}

        <h2 className="bg-purple-500 pl-2 text-[20px] font-semibold text-white">
          Basic Informations
        </h2>
        {/* INPUTS_CONTAINER    */}

        <div className="my-8 grid grid-cols-3 gap-6 ">
          <input
            type="text"
            placeholder="Name of Employee"
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="Mobile No.  "
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="---Emoployee Type"
            className={inputStyle}
          />

          <div className="flex flex-col ">
            <lable>Picture[optional]</lable>
            <input type="file" className={inputStyle} />
          </div>

          <div className="flex w-fit flex-col">
            <lable>Joining Date:</lable>
            <input type="date" className={inputStyle} />
          </div>

          <div className="my-auto">
            <input
              type="text"
              placeholder="Monthly Salary"
              className={`${inputStyle} w-full`}
            />
          </div>
        </div>
        <button
          type="submit"
          className=" mx-auto block bg-blue-400 px-8 text-[20px] font-semibold  text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
