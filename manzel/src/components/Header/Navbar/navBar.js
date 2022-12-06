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
// import { Link as LinkScroll } from 'react-scroll';
// import { Link as LinkRouter } from 'react-router-dom';
import "./navElements.js";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <Logo to="/">manzel</Logo>
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
