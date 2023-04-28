import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid #b5b3b3;
  width: 100%;
  padding: 10px 30px;
  border-radius: 5px;

  &::placeholder {
    text-align: center;
  }
  &:focus {
    outline: none;
  }
`;
const Label = styled.span`
  font-size: 24px;
  color: #4b4a4a;
`;

const Register = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-200 flex items-center justify-center">
      <div className="bg-white w-[40%] h-fit rounded-[10px] shadow-lg py-10 ">
        <h1 className="text-[40px] font-semibold  text-center">Register</h1>
        <form className="mt-10 w-[60%] m-auto  flex flex-col gap-[25px]  ">
          <div>
            <Label>Username : </Label>
            <Input placeholder="username" />
          </div>
          <div>
            <Label>Email : </Label>
            <Input placeholder="email" />
          </div>
          <div>
            <Label>Password : </Label>
            <Input placeholder="password" />
          </div>
          <button className="bg-blue-500 w-fit py-2 px-12 border-2 border-blue-500 rounded-md font-bold text-white hover:bg-white hover:text-blue-500 m-auto">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
