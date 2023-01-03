import styled from "styled-components";
import { MdArrowRight, MdArrowForward } from "react-icons/md";

export const IntroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  justify-items: center;
  padding: 0 30px;
  height: 935px;
  position: relative;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    overflow: hidden;
  }
`;
export const IntroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const IntroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 40%;
  left: 35%;
  width: 30%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: Center;

  @media screen and (max-width: 960px) {
    top: 27%;
  }
`;

export const IntroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Image = styled.img`
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  margin-top: 45%;

  @media screen and (max-width: 960px) {
    margin-top: 300px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 350px;
  }
`;
