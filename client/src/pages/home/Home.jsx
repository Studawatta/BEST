import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import HomeHero from '../../components/homeHero/HomeHero';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className=" bg-[url('./assets/imges/homebg.jpg')]  w-full bg-no-repeat bg-fixed bg-cover ">
      <NavBar />
      <HomeHero />
      <Footer />
    </div>
  );
};

export default Home;
