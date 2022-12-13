import React, { useState } from 'react';
import { IntroContainer, IntroBg, VideoBg, IntroContent, IntroH1, IntroP, IntroBtnWrapper, ArrowForward, ArrowRight, Image } from './introElements';
import Button from '../scrollButton/Button.js';
import Video from '../../videos/intro.mp4';
import ManzelImg from '../../images/manzel-intro.png';

const Intro = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}
  return (
    <>
      <IntroContainer>
        <IntroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </IntroBg>
      </IntroContainer>
      <IntroContent>
        {/* <IntroH1 >منزل <br /> Manzel</IntroH1>
        <IntroP >
        Architecural World with <br/>
        Arabic Identity.
        </IntroP> */}
        <Image src={ManzelImg} alt='Manzel'/>
        <IntroBtnWrapper>
            <Button to='Vision'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={1}
                    offset={0} >
            </Button>
        </IntroBtnWrapper>
      </IntroContent>
    </>
  )
}

export default Intro
