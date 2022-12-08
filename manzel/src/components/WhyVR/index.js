import React from "react";
import { WhyVRContainer, WhyVRWrapper, WhyVRRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from "./whyVRElements";
import './whyVR.css'
import whyVideo from '../../videos/whyVR.mp4';

const WhyVR = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, alt, primary, dark, dark2}) => {
  return (
    <>
      <WhyVRContainer id={id} lightBg={!lightBg}>
        <WhyVRWrapper>
        <h1 className="why">Why VR?</h1>
          <WhyVRRow imgStart={!imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Enhanced Visualization</TopLine>
                <Subtitle darkText={!darkText}>Studies showed that VR is a major factor in enhancing Visualization</Subtitle>
               
               
                <TopLine>Improved Education Quality</TopLine>
                <Subtitle darkText={!darkText}>VR Opens a different aspect of education where all the written words are a reality.</Subtitle>

                <TopLine>Collaborative Learning</TopLine>
                <Subtitle darkText={!darkText}>Education is made better with other students around, especially students with different majors and universities!!</Subtitle>

                <TopLine>Global Outreach</TopLine>
                <Subtitle darkText={!darkText}>Want to interact with people outside your university? We will do you one better, how about outside the country?</Subtitle>

                <TopLine>Better Student Appraisal</TopLine>
                <Subtitle darkText={!darkText}>A common issue students have is an outdated method of education.</Subtitle>

                <TopLine>Improved Research</TopLine>
                <Subtitle darkText={!darkText}>VR gives the ability to interact with anyone with the same interest, and research is a big plus.</Subtitle>

              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img className="video" src={whyVideo} loop muted autoPlay/>
              </ImgWrap>
            </Column2>
          </WhyVRRow>
        </WhyVRWrapper>
      </WhyVRContainer>
    </>
  );
}

export default WhyVR;