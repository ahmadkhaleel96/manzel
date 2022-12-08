import React, { useState } from 'react'
import AboutUs from '../components/AboutUs';
import Navbar from '../components/Header/Navbar/navBar'
import SideBar from '../components/Header/SideBar'
import Intro from '../components/Intro';
import Products from '../components/Products';
import Vision from '../components/Vision';
import { visionObj, aboutObj } from '../components/Vision/Data';
import { productsObj } from '../components/Products/productsData';

const Home = () => {
    
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> 
      <Intro />
      <Vision { ...visionObj }/>
      <AboutUs { ...aboutObj }/>
      <Products { ...productsObj }/>
      <Vision { ...visionObj }/>
      <Vision { ...visionObj }/>
    </>
  )
}

export default Home
