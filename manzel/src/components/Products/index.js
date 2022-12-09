import React from "react";
import {
  ProductsContainer,
  ProductsWrapper,
  ProductsRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  ProductsSlogan,
  ProductsTitle,
} from "./productsElements";
import ManzelVideo from "../../videos/manzel-verse.mp4";
import SparkVideo from "../../videos/spark.mp4";
import ManzelKidsVideo from "../../videos/manzel-kids.mp4";
import "./products.css";

const Products = ({
  lightBg,
  id,
  imgStart,
  topLineManzelVerse,
  lightText,
  headLineManzelVerse,
  darkText,
  descriptionManzel,
  topLineSpark,
  headLineSpark,
  descriptionSpark,
  topLineManzelKids,
  headLineManzelKids,
  descriptionManzelKids,
}) => {
  return (
    <>
      <ProductsContainer id={id} lightBg={lightBg}>
        <ProductsSlogan>What'ya sellin there?</ProductsSlogan>
        <ProductsTitle>Our Products</ProductsTitle>

        <ProductsWrapper>
          <ProductsRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLineManzelVerse}</TopLine>
                <Heading lightText={lightText}>{headLineManzelVerse}</Heading>
                <Subtitle darkText={darkText}>{descriptionManzel}</Subtitle>

                {/* <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={1}
                    offset={0}
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
                <video
                  src={ManzelVideo}
                  loop
                  autoPlay
                  muted
                  className="video"
                />
              </ImgWrap>
            </Column2>
          </ProductsRow>
        </ProductsWrapper>

        <ProductsWrapper>
          <ProductsRow imgStart={!imgStart}>
            <Column1 className="spark">
              <TextWrapper>
                <TopLine>{topLineSpark}</TopLine>
                <Heading lightText={lightText}>{headLineSpark}</Heading>
                <Subtitle darkText={darkText}>{descriptionSpark}</Subtitle>

                {/* <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={1}
                    offset={0}
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
                <video
                  src={SparkVideo}
                  loop
                  autoPlay
                  muted
                  className="video"
                  id="spark"
                />
              </ImgWrap>
            </Column2>
          </ProductsRow>
        </ProductsWrapper>

        <ProductsWrapper>
          <ProductsRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLineManzelKids}</TopLine>
                <Heading lightText={lightText}>{headLineManzelKids}</Heading>
                <Subtitle darkText={darkText}>{descriptionManzelKids}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <video
                  src={ManzelKidsVideo}
                  loop
                  autoPlay
                  muted
                  className="video"
                />
              </ImgWrap>
            </Column2>
          </ProductsRow>
        </ProductsWrapper>
      </ProductsContainer>
    </>
  );
};

export default Products;
