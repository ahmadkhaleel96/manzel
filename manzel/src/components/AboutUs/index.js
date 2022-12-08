import React from "react";
import { AboutContainer, AboutWrapper, AboutRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from "./aboutUsElements.js";
import { Button } from '../Button/Button.js';
import AboutUsSVG from '../../images/about-us.svg';

const AboutUs = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, alt, primary, dark, dark2}) => {
  return (
    <>
      <AboutContainer id={id} lightBg={lightBg}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>

                <BtnWrap>
                  <Button to="home" smooth={true} duration={500} spy={true} exact={1} offset={0} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={AboutUsSVG} alt={alt}/>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}

export default AboutUs;