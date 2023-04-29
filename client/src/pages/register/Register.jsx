import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Input = styled.input`
  /* border: 2px solid #b5b3b3; */
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
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => {};
  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="w-full h-[100vh] bg-slate-200 flex items-center justify-center">
      <div className="bg-white w-[100%] h-fit rounded-[10px] shadow-lg py-10 md:w-[60%] lg:w-[40%]">
        <h1 className="text-[40px] font-semibold  text-center">Register</h1>

        <form
          className="mt-10 w-[60%] m-auto  flex flex-col gap-[20px]"
          onSubmit={handleSubmit()}
        >
          {/* usernameInput */}

          <div className=" h-[105px]">
            <Label>Username : </Label>
            <Input
              className={` border-2  ${
                errors.userName ? ' border-red-500' : 'border-[#b5b3b3]'
              }`}
              placeholder="username"
              id="userName"
              {...register('userName', {
                required: true,
                maxLength: 20,
                minLength: 4,
                pattern: /^[A-Za-z]+$/,
              })}
            />
            {errors?.userName?.type === 'required' && (
              <p className="text-red-500 text-[14px]">Required</p>
            )}
            {errors.userName?.type === 'maxLength' && (
              <p className="text-red-500 text-[14px]">
                Username must less than 20 characters
              </p>
            )}
            {errors.userName?.type === 'minLength' && (
              <p className="text-red-500 text-[14px]">
                Username not long enough
              </p>
            )}
            {errors?.userName?.type === 'pattern' && (
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
