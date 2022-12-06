import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./navElements.js";

import ManzelLogo from '../../../images/manzel-logo.png';
import "./navElements.js";
import './navBar.css'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <Logo to="/">
            <img src={ ManzelLogo} className='logo' alt='logo'/>  
            <div className='app-name'>Manzel</div>
            <div className='slogan'>Architecural World with <br /> Arabic Identity</div>
            </Logo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu onClick={toggle}>
            <NavItem>
              <NavLink to="vision">Vision</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about-us">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="why-VR">Why VR?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="meet">Meet The Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="join-us">Join Us</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
