import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', data);
      const user = res.data.user;
      if (user) {
        localStorage.setItem('token', user);
        alert('Login successful');
        navigate('/userdash');
      }
      console.log(user);
    } catch (error) {
      console.log(error);
      alert('Something went wrong!');
    }
  };
  return (
    <div className="w-full h-[100vh] bg-slate-200 flex items-center justify-center">
      <div className="bg-white w-[100%] h-fit rounded-[10px] shadow-lg py-10 md:w-[60%] lg:w-[40%]">
        <h1 className="text-[40px] font-semibold  text-center">Log In</h1>

        <form
          className="mt-10 w-[60%] m-auto  flex flex-col gap-[20px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* usernameInput */}

          <div className="h-[105px]">
            <Label>Username : </Label>
            <Input
              placeholder="username"
              {...register('username')}
            />
          </div>

          {/* passwordInput */}

          <div className="h-[105px]">
            <Label>Password : </Label>
            <Input
              placeholder="password"
              {...register('password')}
            />
          </div>

          {/* submitButton */}

          <button
            type="submit"
            className="bg-blue-500 w-fit py-2 px-12 border-2 border-blue-500 rounded-md font-bold text-white hover:bg-white hover:text-blue-500 m-auto"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;