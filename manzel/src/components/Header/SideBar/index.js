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
      <Icon onClick={toggle}>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="vision" onClick={toggle}>
            Vision
          </SideBarLink>
          <SideBarLink to="about-us" onClick={toggle}>
            About Us
          </SideBarLink>
          <SideBarLink to="products" onClick={toggle}>
            Products
          </SideBarLink>
          <SideBarLink to="why-VR" onClick={toggle}>
            Why VR?
          </SideBarLink>
          <SideBarLink to="partners" onClick={toggle}>
            Partners
          </SideBarLink>
          <SideBarLink to="team" onClick={toggle}>
            Meet the Team
          </SideBarLink>
          <SideBarLink to="plans" onClick={toggle}>
            Plans
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
