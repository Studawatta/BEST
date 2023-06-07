import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      // const res = await axios.post('/auth/login', data);
      // const user = res.data.user;
      // if (user) {
      //   localStorage.setItem('token', user);
      //   alert('Login successful');
      //   navigate('/userdash');
      // }
      // console.log(user);
      dispatch(login(data));
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-slate-200">
      <div className="h-fit w-[100%] rounded-[10px] bg-white py-10 shadow-lg md:w-[60%] lg:w-[40%]">
        <h1 className="text-center text-[40px]  font-semibold">Log In</h1>

        <form
          className="m-auto mt-10 flex  w-[60%] flex-col gap-[20px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* usernameInput */}

          <div className="h-[105px]">
            <Label>Username : </Label>
            <Input placeholder="username" {...register("username")} />
          </div>

          {/* passwordInput */}

          <div className="h-[105px]">
            <Label>Password : </Label>
            <Input placeholder="password" {...register("password")} />
          </div>

          {/* submitButton */}

          <button
            type="submit"
            className="m-auto w-fit rounded-md border-2 border-blue-500 bg-blue-500 px-12 py-2 font-bold text-white hover:bg-white hover:text-blue-500"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
