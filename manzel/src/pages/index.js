import React, { useState } from 'react'
import Navbar from '../components/Header/Navbar/navBar'
import SideBar from '../components/Header/SideBar'
import Intro from '../components/Intro';
import Vision from '../components/Vision';
import { visionObj, aboutObj } from '../components/Vision/Data';

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
      {/* <Vision { ...aboutObj }/>
      <Vision { ...visionObj }/>
      <Vision { ...visionObj }/>
      <Vision { ...visionObj }/> */}
    </>
  )
}

export default Home
