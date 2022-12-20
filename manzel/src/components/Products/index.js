import React, { useState } from "react";
import {
  WhyVRContainer,
  WhyVRWrapper,
  WhyVRRow,
  Column1,
  TextWrapper,
  TopLine,
  Subtitle,
  Column2,
  ImgWrap,
  Button,
  Heading,
} from "./productsElements";
import "./products.css";
import Ahmad from "../../images/Ahmad.jpg";
import Hadeel from "../../images/Hadeel.jpeg";
import Samer from "../../images/Samer.jpeg";

const WhyVR = ({ lightBg, imgStart, darkText, id, key, topLine, subTitle }) => {
  const [imageClicked, setImageClicked] = useState({
    manzelPlatform: false,
    spark: false,
    manzelVerse: false,
  });
  const onClickHandler = (order) => {
    const resetImages = {
      manzelPlatform: false,
      spark: false,
      manzelVerse: false,
    };
    setImageClicked({
      ...resetImages,
      [order]: true,
    });
  };  

  return (
    <>
      <WhyVRContainer id="products" lightBg={!lightBg}>
        <WhyVRWrapper>
          <Heading className="why" lightBg={!lightBg} >Our Products</Heading>
          <WhyVRRow imgStart={!imgStart}>
            <Column1>
              <TextWrapper>
                <Button
                  onClick={() => onClickHandler("manzelPlatform")}
                  className="manzel-platform"
                  id="manzel"
                >
                  <TopLine >Manzel Platform (coming soon)</TopLine>
                  <Subtitle darkText={!darkText}>
                    An interactive, virtual educational platform in the form of
                    a game that helps students, especially architecture
                    students, to acquire practical training and the skills
                    required for architecture graduates to meet the requirements
                    of the labor market.
                  </Subtitle>
                </Button>

                <Button
                  onClick={() => onClickHandler("spark")}
                  className="manzel-platform"
                >
                  <TopLine
>
                    Spark (coming soon)
                  </TopLine>
                  <Subtitle darkText={!darkText}>
                    It's a platform in virtual reality in a form of a game how
                    to repair and assemble sockets, panels, strips, plugs and
                    change light bulbs with help of artificial intelligence.
                  </Subtitle>
                </Button>

                <Button
                  onClick={() => onClickHandler("manzelVerse")}
                  className="manzel-platform"
                >
                  <TopLine>Manzel Verse (coming soon)</TopLine>
                  <Subtitle darkText={!darkText}>
                    it's a platform for metaverse gathering in virtual reality
                    to meet up with expert teachers, clients, and share your
                    work.
                  </Subtitle>
                </Button>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <div className="image">
                  {imageClicked.manzelPlatform && ( <img src={Ahmad} alt="ground" /> )}
                  {imageClicked.spark && <img src={Hadeel} alt="first" />}
                  {imageClicked.manzelVerse && <img src={Samer} alt="second" />}
                </div>
              </ImgWrap>
            </Column2>
          </WhyVRRow>
        </WhyVRWrapper>
      </WhyVRContainer>
    </>
  );
};

export default WhyVR;
