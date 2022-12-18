import React, { useState } from "react";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Header/Navbar/navBar";
import SideBar from "../components/Header/SideBar";
import Intro from "../components/Intro";
import Products from "../components/Products";
import Vision from "../components/Vision";
import WhyVR from "../components/WhyVR";
import Team from "../components/team/team.js";
import { visionObj, aboutObj} from "../components/Vision/Data";
import { whyVRData } from '../components/WhyVR/whyVRData.js'
import { productsObj } from "../components/Products/productsData";
import { partnersObj } from "../components/partners/partnersData";
import Partners from "../components/partners";
import Footer from "../components/footer/footer.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Intro />
      <Vision {...visionObj} />
      <AboutUs {...aboutObj} />
      <Products {...productsObj} />
      <WhyVR {...whyVRData} />
      <Partners {...partnersObj} />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
