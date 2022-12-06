import React, { useState } from 'react'
import Navbar from '../components/Header/Navbar/navBar'
import SideBar from '../components/Header/SideBar'
import Intro from '../components/Intro';

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
    </>
  )
}

export default Home
