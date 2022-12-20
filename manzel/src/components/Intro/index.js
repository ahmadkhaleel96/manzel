import React from "react";
import {
  IntroContainer,
  IntroBg,
  VideoBg,
  IntroContent,
  IntroBtnWrapper,
  Image,
} from "./introElements";
import Button from "../scrollButton/Button.js";
import Video from "../../videos/intro.mp4";
import ManzelImg from "../../images/manzel-intro.png";
import "./intro.css";

const Intro = () => {
  return (
    <>
      <IntroContainer>
        <IntroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </IntroBg>
      </IntroContainer>
      <IntroContent>
        {/* <IntroH1 >منزل <br /> Manzel</IntroH1> */}
        <Image src={ManzelImg} alt="Manzel" />
        <h4 className="intro-slogan">
          Architecural World with Arabic Identity.
        </h4>
        <IntroBtnWrapper>
          <Button
            to="Vision"
            smooth={true}
            duration={500}
            spy={true}
            exact={1}
            offset={0}
          ></Button>
        </IntroBtnWrapper>
      </IntroContent>
    </>
  );
};

export default Intro;
