import styled from "styled-components";

export const WhyVRContainer = styled.div`
  color: #fff;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  background-color: #02233C;

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
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding-bottom: 50px;
`;

export const WhyVRRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  position: relative;
  left: 0;
  width: 100%;
  justify-content: center;
  padding-bottom: 100px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`};

  @media screen and (max-width: 960px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2' 'col3'` : `'col1 col1' 'col2 col2' 'col3 col3`};
  }

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2' 'col3'` : `'col1 col1' 'col2 col2' 'col3 col3`};
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  width: 600px;
  height: 300px;
  background-image: url(https://t3.ftcdn.net/jpg/04/13/04/92/360_F_413049258_ojQjLomwzdvneZKarYlAzRWQDqk4MlC0.jpg);
  background-size: auto;
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEaEdbGkUzm1oZYhin0B0xEn4FPOCUaPkbg&usqp=CAU);
  background-size: auto;
  height: 300px;
`;

export const Column3 = styled.div`
  padding: 0 15px;
  grid-area: col3;
  background-color: blue;
  height: 300px;
  background-image: url(https://images.unsplash.com/photo-1505542448319-b71564a8fc60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGlnaHQlMjBkcmF3aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
  background-size: auto;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;
`;

export const TopLine = styled.p`
  color: #51FFFD;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 20%;
  margin-bottom: 20px;
  z-index: 10;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
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
  margin-left: 65px;
  width: 400px;
  font-size: 14px;
  line-height: 22px;
  z-index: 10;
  color: #51FFFD;
  text-align: center;
  /* color: ${({ darkText }) => (darkText ? "#010606" : "#fff")}; */

  @media screen and (max-width: 960px) {
    text-align: center;
    margin-left: 15%;
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
`;
