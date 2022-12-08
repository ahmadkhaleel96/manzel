import React, { useState } from 'react';
import { IntroContainer, IntroBg, VideoBg, IntroContent, IntroH1, IntroP, IntroBtnWrapper, ArrowForward, ArrowRight } from './introElements';
import Button from '../scrollButton/Button.js';
import Video from '../../videos/intro.mp4'

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
        <IntroH1>منزل <br /> Manzel</IntroH1>
        <IntroP>
        Architecural World with <br/>
        Arabic Identity.
        </IntroP>
        <IntroBtnWrapper>
            <Button to='Vision' >
                Let's Go {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
        </IntroBtnWrapper>
      </IntroContent>
    </>
  )
}

export default Intro
