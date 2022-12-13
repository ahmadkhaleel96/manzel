import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 110%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  margin-top: -80px;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-width: 768px) {
    overflow: hidden;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  margin-top: 80px;
`;
export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(7, 60px);
  }
`;
export const SideBarWrapper = styled.div`
  color: #fff;
`;

export const SideBarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s all ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #51FFFD;
    transition: 0.2s all ease-in-out;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #51FFFD;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s all ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
