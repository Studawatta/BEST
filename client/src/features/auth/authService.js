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
  console.log("date", response.data);

  const user = response.data.user;
  if (user) {
    localStorage.setItem("token", user);
  }
  return response.data;
};

//LOGOUT USER
const logout = () => {
  localStorage.removeItem("token");
  console.log("effected");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
