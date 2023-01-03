import styled from "styled-components";

export const WhyVRContainer = styled.div`
  color: #fff;
  padding-bottom: 5%;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    overflow: hidden;
  }
`;

export const WhyVRWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const WhyVRRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-top: 75px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-top: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #fc9614;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 15px;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    font-size: 10px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 74px;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 420px;
  margin-bottom: 15px;
  margin-left: 30px;
  width: 400px;
  font-size: 14px;
  line-height: 22px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 960px) {
    width: 90%;
    height: 100%;
    font-size: 10px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.div`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
  }
`;

export const Button = styled.button`
  margin-bottom: 5%;
  width: 100%;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: #e6e6e6;
  position: relative;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  opacity: 0.5;
  transition: opacity 0.5s;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 80%;
    font-size: 5px;
  }

  &:hover {
    opacity: 3;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  &:focus {
    border: 1px #010606;
    opacity: 10;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
