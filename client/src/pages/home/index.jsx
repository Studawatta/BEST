import { Footer, NavBar } from "../../components";
import { Hero } from "../../modules";


const Home = () => {
  return (
    <div className=" bg-[url('./assets/imges/homebg.jpg')]  w-full  bg-no-repeat bg-fixed bg-cover  ">
     <NavBar/>
     <Hero/>
     <Footer/>
    </div>
  );
};

export default Home;
