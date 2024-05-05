import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image2 from '../assets/new-images/homepage-images/home-secton-1-1.jpg'
import image1 from '../assets/new-images/homepage-images/home-section-1-2.jpg'

const HeaderSection = styled.section`
  position: relative;
  background-color: #181818;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 93vh;
  width: 100vw;
  font-family: "Josefin Sans", sans-serif;
  @media (max-width: 750px) {
    height: 78vh !important;
    align-items: start;
    grid-template-columns: 1fr;
    grid-template-rows: 1.5fr 1fr;
    justify-items: center;
    align-items: start;
    & > *:first-child {
      order: 2;
    }
    & > *:last-child {
      order: 1;
    }
  }
`
const I1 = styled(motion.img)`
  position: absolute;
  height: 38rem;
  width: 24rem;
  object-fit: contain;
  z-index: 4;
  /* left: 3%; */
  @media (max-width: 750px) {
    height: 18rem;
    width: 11rem;
  }
`
const I2 = styled(motion.img)`
  position: absolute;
  height: 34rem;
  width: 23rem;
  object-fit: contain;
  z-index: 3;
  @media (max-width: 750px) {
    height: 16rem;
    width: 12rem;
  }
`

const I3 = styled(motion.img)`
  height: 80vh;
  width: 30vw;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  @media (max-width: 1100px) {
    height: 40vh;
    width: 40vw;
    top: 5%;
  }
  @media (max-width: 750px) {
    height: 35vh;
    width: 35vw;
    top: 5%;
  }
`
const I4 = styled(motion.img)`
  height: 84vh;
  width: 20vw;
  position: absolute;
  left: 0;
  bottom: 10%;
  z-index: 1;
  @media (max-width: 1100px) {
    height: 75vh;
    width: 25vw;
  }
  @media (max-width: 750px) {
    height: 55vh;
    width: 30vw;
  }
`
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 3;
  position: relative;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    align-items: flex-start;
  }
`
const Title = styled(motion.div)`
  padding-left: 3rem;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 750px) {
    justify-content: flex-start;
    padding-left: 0;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 49%;
    transform: translateX(-50%);
    gap: 1rem;
  }

  h1 {
    font-family: "Josefin Sans", sans-serif;
    text-align: start;
    line-height: 1.3;
    color: #fff;
    font-size: 3.3em;
    width: 90%;
    @media (max-width: 1024px) and (min-height: 900px) {
      font-size: 2em !important;
      text-align: center !important;
    }
    @media (max-width: 750px) {
      font-size: 2em;
      width: 93%;
      text-align: center !important;
    }
    @media (max-width: 600px) {
      font-size: 1.9em;
    }
    @media (max-width: 500px) {
      font-size: 1.8em;
    }
    @media (max-width: 400px) {
      font-size: 1.7em;
    }
  }

  h2 {
    font-family: "Josefin Sans", sans-serif;
    text-align: start;
    font-weight: 400;
    font-size: 1.5em;
    text-transform: capitalize;
    color: #b0b0b0;

    width: 90%;
    @media (max-width: 1024px) and (min-height: 900px) {
      font-size: 1.3em;
      text-align: center !important;
      width: 90% !important;
    }
    @media (max-width: 750px) {
      font-size: 1.3em;
      text-align: center !important;
      width: 80%;
    }
    @media (max-width: 600px) {
      font-size: 1.2em;
    }
    @media (max-width: 500px) {
      font-size: 1.1em;
    }
    @media (max-width: 400px) {
      font-size: 1em;
    }
  }
`

const HeroSection = () => {
  return (
    <HeaderSection>
      <Title
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 1.4,
        }}
      >
        <motion.h1>
        Explore Now to Experience the Future Today
        </motion.h1>

        <motion.h2>
        From the latest models to timeless classics, we bring you the best of what Apple has to offer. 
        </motion.h2>
      </Title>
      <ImageContainer>
        <I1
          initial={{
            left: '-150%',
            scale: 0.3,
          }}
          animate={{
            opacity: 1,
            left: '10%',
            scale: 1,
          }}
          transition={{
            delay: 1,
            duration: 1.4,
          }}
          src={image1}
        />
        <I2
          initial={{
            right: '-40%',
            scale: 0.3,
          }}
          animate={{
            opacity: 1,
            right: '7%',
            scale: 1,
          }}
          transition={{
            delay: 1,
            duration: 1.4,
          }}
          src={image2}
        />
      </ImageContainer>
      {/* <I3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, type: 'ease' }}
        src={image3}
        alt="background-blur"
      />
      <I4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, type: 'ease' }}
        src={image4}
        alt="background-blur"
      /> */}
    </HeaderSection>
  )
}

export default HeroSection
