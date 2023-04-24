import React from 'react';
import NavBar from '../../components/navBar/NavBar';
const Home = () => {
  return (
    <div className=" bg-[url('./assets/imges/homebg.jpg')] h-[1200px] bg-no-repeat bg-fixed bg-cover opacity-90">
      <NavBar />
      <div className="bg-red-400 absolute top-[200px] h-[200px] w-[200px] opacity-70 text-white font-bold">
        fsdfaf
      </div>
    </div>
  );
};

export default Home;
