import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const NavLink = styled(Link)`
  cursor: pointer;
  &:hover {
    color: #fffcfc;
  }
`;

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div className="flex bg-black border-b-2  w-[100%] text-white font-bold h-[50px] items-center justify-center fixed top-0 z-10">
        <div className=" flex  w-[90%] justify-between ">
          <div
            className=" cursor-pointer xs:hidden"
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <HiMenu className="text-[32px] " />
          </div>

          {/* navigation bar left */}

          <div className="hidden xs:flex gap-[20px] sm:gap-[40px]  ">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* navigation bar right */}

          <div className="flex gap-[20px] sm:gap-[40px] ">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="register">Register</NavLink>
          </div>
        </div>
      </div>

      {/* dropdown */}

      {showDropdown ? (
        <div className="bg-black  text-white font-bold flex flex-col gap-[20px] w-fit p-4 absolute ">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavBar;
