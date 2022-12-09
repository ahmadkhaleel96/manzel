import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
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

import ManzelLogo from "../../../images/manzel-logo.png";
import "./navElements.js";
import "./navBar.css";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 850) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <Logo to="/" onClick={toggleHome}>
              <img src={ManzelLogo} className="logo" alt="logo" />
              <div className="app-name">Manzel</div>
              <div className="slogan">
                Architecural World with <br /> Arabic Identity
              </div>
            </Logo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="vision"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  activeClass="active"
                  href="/#vision"
                >
                  Vision
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="about-us"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  activeClass="active"
                  href="/#about-us"
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="products"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  activeClass="active"
                  href="/#products"
                >
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="why-VR"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  activeClass="active"
                  href="/#why-VR"
                >
                  Why VR?
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="partners"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  activeClass="active"
                  href="/#partners"
                >
                  Partners
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  activeClass="active"
                  href="/#team"
                >
                  Meet The Team
                </NavLink>
              </NavItem>
              <NavItem></NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
