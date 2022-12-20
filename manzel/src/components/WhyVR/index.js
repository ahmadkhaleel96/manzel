import React from "react";
import {
  WhyVRContainer,
  WhyVRWrapper,
  WhyVRRow,
  Column1,
  TextWrapper,
  TopLine,
  Subtitle,
  Column2,
  Column3,
} from "./whyVRElements";
import "./whyVR.css";

const WhyVR = ({ lightBg, id, imgStart, darkText }) => {
  return (
    <>
      <WhyVRContainer id='why-VR' lightBg={!lightBg}>
        <WhyVRWrapper>
          <h1 className="why">Why VR?</h1>
          <WhyVRRow imgStart={!imgStart}>
            <Column1>
              <TextWrapper>
                <div className="overlay"></div>
                <TopLine>Enhanced Visualization</TopLine>
                <Subtitle darkText={darkText}>
                  Studies showed that VR is a major factor in enhancing
                  Visualization
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
              <div className="overlay"></div>
              <TopLine>Improved Research</TopLine>
                <Subtitle darkText={darkText}>
                  VR gives the ability to interact with anyone with the same
                  interest, and research is a big plus.
                </Subtitle>
              </TextWrapper>
            </Column2>

            <Column3>
              <TextWrapper>
                <div className="overlay"></div>
                <TopLine>Improved Research</TopLine>
                <Subtitle darkText={darkText}>
                  VR gives the ability to interact with anyone with the same
                  interest, and research is a big plus.
                </Subtitle>
              </TextWrapper>
            </Column3>
          </WhyVRRow>
        </WhyVRWrapper>
      </WhyVRContainer>
    </>
  );
};

export default WhyVR;
