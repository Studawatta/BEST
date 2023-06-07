import axios from "axios";

const API_URL = "/api/auth/";

//REGISTER USER
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  return response.data;
};

//LOGIN USER
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  const user = response.data.user;
  if (user) {
    localStorage.setItem("token", user);
    console.log(`token = ${user}`);
  }

  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
