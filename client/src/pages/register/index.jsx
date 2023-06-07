import React, { useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";

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
  const dispatch = useDispatch();

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
      dispatch(registerUser(data));
      // await axios.post("/auth/register", data);
      alert("Successfully registered");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-slate-200">
      <div className="h-fit w-[100%] rounded-[10px] bg-white py-10 shadow-lg md:w-[60%] lg:w-[40%]">
        <h1 className="text-center text-[40px]  font-semibold">Register</h1>

        <form
          className="m-auto mt-10 flex  w-[60%] flex-col gap-[20px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* usernameInput */}

          <div className="h-[105px]">
            <Label>Username : </Label>
            <Input
              className={` border-2   ${
                errors.username ? " border-red-500" : "border-[#b5b3b3]"
              }`}
              placeholder="username"
              id="username"
              ref={username}
              {...register("username", {
                required: true,
                maxLength: 20,
                minLength: 4,
                pattern: /^[A-Za-z]+$/,
              })}
            />
            {errors?.username?.type === "required" && (
              <p className="text-[14px] text-red-500">Required</p>
            )}
            {errors.username?.type === "maxLength" && (
              <p className="text-[14px] text-red-500">
                Username must less than 20 characters
              </p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="text-[14px] text-red-500">
                Username not long enough
              </p>
            )}
            {errors?.username?.type === "pattern" && (
              <p className="text-[14px] text-red-500">
                Alphebetical characters only
              </p>
            )}
          </div>

          {/* emaliInput   */}

          <div className="h-[105px]">
            <Label>Email : </Label>
            <Input
              className={` border-2   ${
                errors.email ? " border-red-500" : "border-[#b5b3b3]"
              }`}
              placeholder="email"
              id="email"
              ref={email}
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-[14px] text-red-500">Required</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-[14px] text-red-500">Invalid email format</p>
            )}
          </div>

          {/* passwordInput */}

          <div className="h-[105px]">
            <Label>Password : </Label>
            <Input
              className={` border-2  ${
                errors.password ? " border-red-500" : "border-[#b5b3b3]"
              }`}
              placeholder="password"
              id="password"
              ref={password}
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-[14px] text-red-500">Required</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-[14px] text-red-500">
                Password must contain minimum eight characters, at least one
                letter and one number.
              </p>
            )}
          </div>

          {/* submitButton */}

          <button
            type="submit"
            className="m-auto w-fit rounded-md border-2 border-blue-500 bg-blue-500 px-12 py-2 font-bold text-white hover:bg-white hover:text-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
