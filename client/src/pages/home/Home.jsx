import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/homeHero/Hero';

const Home = () => {
  return (
    <div className=" bg-[url('./assets/imges/homebg.jpg')]  w-full  bg-no-repeat bg-fixed bg-cover  ">
      <NavBar />
      <Hero />

      <Footer />
    </div>
  );
};

export default Home;
