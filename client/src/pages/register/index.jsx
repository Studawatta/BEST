import React, { useRef } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Input = styled.input`
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
  const navigate = useNavigate();

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    try {
      await axios.post('/auth/register', data);
      alert('Successfully registered');
      navigate('/login');
    } catch (error) {
      console.log(error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="w-full h-[100vh] bg-slate-200 flex items-center justify-center">
      <div className="bg-white w-[100%] h-fit rounded-[10px] shadow-lg py-10 md:w-[60%] lg:w-[40%]">
        <h1 className="text-[40px] font-semibold  text-center">Register</h1>

        <form
          className="mt-10 w-[60%] m-auto  flex flex-col gap-[20px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* usernameInput */}

          <div className="h-[105px]">
            <Label>Username : </Label>
            <Input
              className={` border-2   ${
                errors.username ? ' border-red-500' : 'border-[#b5b3b3]'
              }`}
              placeholder="username"
              id="username"
              ref={username}
              {...register('username', {
                required: true,
                maxLength: 20,
                minLength: 4,
                pattern: /^[A-Za-z]+$/,
              })}
            />
            {errors?.username?.type === 'required' && (
              <p className="text-red-500 text-[14px]">Required</p>
            )}
            {errors.username?.type === 'maxLength' && (
              <p className="text-red-500 text-[14px]">
                Username must less than 20 characters
              </p>
            )}
            {errors.username?.type === 'minLength' && (
              <p className="text-red-500 text-[14px]">
                Username not long enough
              </p>
            )}
            {errors?.username?.type === 'pattern' && (
              <p className="text-red-500 text-[14px]">
                Alphebetical characters only
              </p>
            )}
          </div>

          {/* emaliInput   */}

          <div className="h-[105px]">
            <Label>Email : </Label>
            <Input
              className={` border-2   ${
                errors.email ? ' border-red-500' : 'border-[#b5b3b3]'
              }`}
              placeholder="email"
              id="email"
              ref={email}
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email?.type === 'required' && (
              <p className="text-red-500 text-[14px]">Required</p>
            )}
            {errors.email?.type === 'pattern' && (
              <p className="text-red-500 text-[14px]">Invalid email format</p>
            )}
          </div>

          {/* passwordInput */}

          <div className="h-[105px]">
            <Label>Password : </Label>
            <Input
              className={` border-2  ${
                errors.password ? ' border-red-500' : 'border-[#b5b3b3]'
              }`}
              placeholder="password"
              id="password"
              ref={password}
              {...register('password', {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              })}
            />
            {errors.password?.type === 'required' && (
              <p className="text-red-500 text-[14px]">Required</p>
            )}
            {errors.password?.type === 'pattern' && (
              <p className="text-red-500 text-[14px]">
                Password must contain minimum eight characters, at least one
                letter and one number.
              </p>
            )}
          </div>

          {/* submitButton */}

          <button
            type="submit"
            className="bg-blue-500 w-fit py-2 px-12 border-2 border-blue-500 rounded-md font-bold text-white hover:bg-white hover:text-blue-500 m-auto"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
