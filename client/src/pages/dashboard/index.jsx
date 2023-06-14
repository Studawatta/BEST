import { useState, useEffect } from "react";
import { NavBar, Sidebar } from "../../components";

import { EmployeeForm } from "../../modules";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { logout, reset } from "../../features/auth/authSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      console.log(user);
      setName(user.name);
      if (!user) {
        localStorage.removeItem("token");
        alert("Something went wrong!");
      }
    } else {
      alert("Please log in");
      navigate("/login");
    }
  }, [navigate]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    alert("logged out");
    navigate("/");
  };
  return (
    <div>
      Hello {name},<br /> I am user dashboard
      <br />
      <button onClick={onLogout}>Log out</button>
      <NavBar />
      <div className="mt-[50px] flex">
        <div>
          <Sidebar showForm={showForm} setShowForm={setShowForm} />
        </div>

        {/* MAIN_CONTIANER */}

        <div className="flex w-full  items-center justify-center">
          {showForm && <EmployeeForm />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
