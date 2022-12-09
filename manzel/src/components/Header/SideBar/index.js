import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrapper,
  SideBarRoute,
} from "./sideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} >
        <CloseIcon onClick={toggle} />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="vision" >
            Vision
          </SideBarLink>
          <SideBarLink to="about-us" >
            About Us
          </SideBarLink>
          <SideBarLink to="products">
            Products
          </SideBarLink>
          <SideBarLink to="why-VR">
            Why VR?
          </SideBarLink>
          <SideBarLink to="partners">
            Partners
          </SideBarLink>
          <SideBarLink to="team">
            Meet the Team
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrapper>
          <SideBarRoute to="/sign-in">Sign In</SideBarRoute>
        </SideBtnWrapper>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
