import React from "react";
import {
  VisionContainer,
  VisionWrapper,
  VisionRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  // BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./visionElements";
// import { Button } from "../Button/Button.js";
import SVG from "../../images/vision.svg";
import "aos/dist/aos.css";

const Vision = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <VisionContainer id={id} lightBg={lightBg}>
        <VisionWrapper>
          <VisionRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine aos-data="fade-right" aos-data-duration="200">
                  {topLine}
                </TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {/* 
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={1}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={SVG} alt={alt} />
              </ImgWrap>
            </Column2>
          </VisionRow>
        </VisionWrapper>
      </VisionContainer>
    </>
  );
};

export default Vision;
