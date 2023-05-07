import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt_decode(token);
      setName(user.name);
      if (!user) {
        localStorage.removeItem('token');
        alert('Something went wrong!');
      }
    } else {
      alert('Please log in');
      navigate('/login');
    }
  });

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    alert('logged out');
    navigate('/');
  };

  return (
    <div>
      Hello {name},<br /> I am user dashboard
      <br />
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Dashboard;
