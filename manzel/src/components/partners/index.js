import React from "react";
import { PartnersContainer, PartnersH1, PartnersCard,PartnersWrapper, PartnersIcon, PartnersH2, PartnersP} from './partnersElements.js'
import Icon1 from '../../images/manzel-logo.png';
import Icon2  from '../../images/spark-logo.png';
import Icon3  from '../../images/manzel-kids-logo.png';
const Partners = () => {
  return (
    <>
      <PartnersContainer id="partners">
        <PartnersH1>Our Pruducts</PartnersH1>
        <PartnersWrapper>
          <PartnersCard>
            <PartnersIcon src={Icon1} />
            <PartnersH2>Manzel-Verse</PartnersH2>
            <PartnersP>
              Our Flagship is dedicated to Architecture Students.
            </PartnersP>
          </PartnersCard>

          <PartnersCard>
            <PartnersIcon src={Icon2} />
            <PartnersH2>Spark</PartnersH2>
            <PartnersP>
              Our good deed for Electrical Engineering Students.
            </PartnersP>
          </PartnersCard>

          <PartnersCard>
            <PartnersIcon src={Icon3} />
            <PartnersH2>Manzel for Kids</PartnersH2>
            <PartnersP>
            Our Flagship had a kid and is dedicated to kids.
            </PartnersP>
          </PartnersCard>
        </PartnersWrapper>
      </PartnersContainer>
    </>
  );
};

export default Partners;
