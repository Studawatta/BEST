// import React, { useEffect, useState } from 'react';
// import jwt_decode from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';
import {NavBar} from '../../components';

import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';
import { TfiRulerPencil } from 'react-icons/tfi';
import { HiOutlineBookOpen } from 'react-icons/hi2';
import { BsPerson } from 'react-icons/bs';
import { TfiBriefcase } from 'react-icons/tfi';
import { useState } from 'react';

const DashSubHeader = (props) => {
  return (
    <div className="flex text-slate-500  items-center justify-between py-3 hover:text-blue-500 cursor-pointer">
      <div className="  flex gap-5 items-center font-semibold hover:text-blue-500 ">
        <span className="text-[18px]">{props.icon}</span>
        {props.name}
      </div>
      <AiOutlinePlus className=" text-[18px]" />
    </div>
  );
};

const DropDownContainer = () => {
  return (
    <div
      className={`h-fit  flex-col gap-3 text-slate-500  border-l-[1px] border-blue-500 pl-6 flex`}
    ></div>
  );
};

const DropItem = (props) => {
  return (
    <div className="flex items-center gap-[25px] hover:text-blue-500 cursor-pointer">
      {props.name}
    </div>
  );
};

const Dashboard = () => {
  // const navigate = useNavigate();
  // const [name, setName] = useState('');

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     const user = jwt_decode(token);
  //     setName(user.name);
  //     if (!user) {
  //       localStorage.removeItem('token');
  //       alert('Something went wrong!');
  //     }
  //   } else {
  //     alert('Please log in');
  //     navigate('/login');
  //   }
  // }, [navigate]);

  // const logout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem('token');
  //   alert('logged out');
  //   navigate('/');
  // };

  const [showClasses, setShowClasses] = useState(false);
  const [showSubjects, setShowSubjects] = useState(false);
  const [showStudents, setShowStudents] = useState(false);
  console.log(showClasses);
  return (
    <div>
      {/* Hello {name},<br /> I am user dashboard
      <br />
      <button onClick={logout}>Log out</button> */}
      <NavBar />
      {/* w-[calc(100%_-_10rem)] */}
      {/* leftBar */}
      <div className="w-[250px] h-[calc(100vh-50px)] border-r-2 border-[#ccc] mt-[50px] flex justify-center items-center ">
        <div className="w-[80%] h-[calc(100%-30px)]">
          {/* dashborad header */}
          <div className="flex  py-1 ">
            <span className="font-bold text-blue-600 text-[16px] flex gap-5 items-center ">
              <HiOutlineHome className="text-[18px]" />
              Dashboard
            </span>
          </div>

          {/* dashboard subHeaders */}

          {/* classes */}

          <div onClick={() => setShowClasses(!showClasses)}>
            <DashSubHeader
              name="Classes"
              icon={<TfiRulerPencil />}
            />
          </div>
          {/* classes dropdown */}
          <DropDownContainer>
            <DropItem name="All Classes" />
            <DropItem name="New Class" />
            <DropItem name="Edit OR Delete" />
          </DropDownContainer>

          {/* subjects */}

          <div onClick={() => setShowSubjects(!showSubjects)}>
            <DashSubHeader
              name="Subjects"
              icon={<HiOutlineBookOpen />}
            />
          </div>

          {/* subjects dropdown */}

          <div
            className={`h-fit  flex-col gap-3 text-slate-500  border-l-[1px] border-blue-500 pl-6 ${
              showSubjects ? 'flex' : 'hidden'
            }`}
          >
            <DropItem name="Classes with Subjects" />
            <DropItem name="Assign Subjects" />
          </div>

          {/* students */}

          <div onClick={() => setShowStudents(!showStudents)}>
            <DashSubHeader
              name="Students"
              icon={<BsPerson />}
            />
          </div>

          <DashSubHeader
            name="Employees"
            icon={<TfiBriefcase />}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
