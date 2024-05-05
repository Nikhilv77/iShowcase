import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image1 from '../assets/new-images/homepage-images/iphone-combo-section-3.png'
import image6 from '../assets/new-images/homepage-images/section-1-4.png'
import image7 from '../assets/new-images/homepage-images/section-1-3.png'

const Section = styled.section`
  position: relative;
  background-color: #181818;
  overflow: hidden;
  min-height: 100vh;
  width: 100vw;
`

const Wrapper = styled.div`
  height: 98vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 9;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 1rem;
    height: 95vh;
  }

  @media ((max-width: 1025px) and (min-height: 900px)) {
    flex-direction: column;
  }
  h1 {
    font-family: "Josefin Sans", sans-serif;
    color: #fff;
    width: 27%;
    text-align: start;
    line-height: 1.4;
    z-index: 10;
    /* text-shadow: 1px 1px 1px #fff; */
    font-size: 3rem;
    user-select: none;
    @media ((max-width: 1025px) and (min-height: 900px)) {
      line-height: 1.6;
      width: 60%;
      font-size: 2.5rem !important;
      text-align: center !important;
    }

    @media (max-width: 1200px) {
      font-size: 2.4em;
    }

    @media (max-width: 1000px) {
      font-size: 2.3em;
    }
    @media (max-width: 750px) {
      font-size: 2.2em;
      width: 97%;
      text-align: center !important;
    }
    @media (max-width: 600px) {
      font-size: 1.8em;
    }
    @media (max-width: 500px) {
      font-size: 1.6em;
    }
    @media (max-width: 400px) {
      font-size: 1.5em;
    }
  }
  h2 {
    font-family: "Josefin Sans", sans-serif;
    text-align: start;
    line-height: 1.7;
    font-weight: 400;
    /* text-shadow: 1px 1px 1px #b0b0b0; */
    font-size: 1.6rem;
    text-transform: capitalize;
    user-select: none;
    color: #b0b0b0;
    z-index: 10;
    width: 25%;

    @media ((max-width: 1024px) and (min-height: 900px)) {
      line-height: 1.5;
      width: 90% !important;
      font-size: 1.3em !important;
      text-align: center !important;
    }

    @media (max-width: 1200px) {
      font-size: 1.6em;
    }

    @media (max-width: 1000px) {
      font-size: 1.4em;
    }
    @media (max-width: 750px) {
      font-size: 1.3em;
      width: 99%;
      text-align: center !important;
    }
    @media (max-width: 600px) {
      font-size: 1.1em;
    }
    @media (max-width: 500px) {
      font-size: 1em;
    }
    @media (max-width: 400px) {
      font-size: 1em;
    }
  }
`
const ImageContainer = styled.div`
  position: relative;
  height: 35rem;
  width: 38rem;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 3;

  @media (max-width: 1200px) {
    height: 31rem;
    width: 33rem;
  }

  @media (max-width: 1000px) {
    height: 31rem;
    width: 32rem;
  }
  @media (max-width: 750px) {
    height: 26rem;
    width: 24rem;
  }
  @media (max-width: 600px) {
    font-size: 2em;
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: 1.8em;
  }
  @media (max-width: 400px) {
    font-size: 1.6em;
  }
`
const I1 = styled(motion.img)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  @media (max-width: 750px) {
    width: 95% !important;
    height: 97% !important;
    left: 2%;

  }
`

const ThirdSection = () => {
  return (
    <Section>
      <Wrapper>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1, type: 'ease' }}
        >
Choosing the Perfect iPhone for Your Lifestyle
        </motion.h1>
        <ImageContainer>
          <I1
            initial={{ top: '-109%', opacity: 0 }}
            whileInView={{ top: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.7, delay: 1 }}
            src={image1}
            alt="first-image"
          />
        </ImageContainer>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1, type: 'ease' }}
        >
       Find Your Ideal Match: iPhone Models Compared
    Empowering You to Make Informed Choices for Your Needs
        </motion.h2>
      </Wrapper>
     
    </Section>
  )
}

export default ThirdSection
