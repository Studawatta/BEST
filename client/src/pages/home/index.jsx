import { Footer, NavBar } from "../../components";
import { HomeBottom, HomeMiddle, HomeTop } from "../../modules";

const Home = () => {
  return (
    <div className=" w-full  bg-[url('./assets/imges/homebg.jpg')]  bg-cover bg-fixed bg-no-repeat  ">
      <NavBar />
      <HomeTop />
      <HomeMiddle />
      <HomeBottom />
      <Footer />
    </div>
  );
};

export default Home;
