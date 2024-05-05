
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image1 from '../assets/new-images/homepage-images/iphone-no-bg-section-2.png'
import image6 from '../assets/new-images/homepage-images/section-1-4.png'
import image7 from '../assets/new-images/homepage-images/section-1-3.png'


const Section = styled.section`
  position: relative;
  background-color: #181818;
  overflow: hidden;
  min-height: 100vh;
  width: 100vw;
  font-family: "Josefin Sans", sans-serif;
`


const Wrapper = styled.div`
height: 98vh;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
gap: 1rem;
@media (max-width:750px) {
  flex-direction: column;
}

@media ( (max-width : 1025px) and (min-height: 900px)) {
  flex-direction: column;
    }
h1 {
  font-family: "Josefin Sans", sans-serif;
    color: #fff;
     width: 20%;
    text-align: start;
    line-height: 1.4;
z-index: 10;
    /* text-shadow: 1px 1px 1px #fff; */
    font-size: 3.2rem;
    user-select: none;
    @media ( (max-width : 1025px) and (min-height: 900px)) {
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
     margin-bottom: 0.7rem;
    }
    @media (max-width: 600px) {
      font-size: 2em;
 
    }
    @media (max-width: 500px) {
      font-size: 1.8em;
    }
    @media (max-width: 400px) {
      font-size: 1.6em;
    }
  }
  h2 {
    font-family: "Josefin Sans", sans-serif;
    text-align: start;
    line-height: 1.7;
    font-weight: 400;
    /* text-shadow: 1px 1px 1px #b0b0b0; */
    font-size: 1.8rem;
    text-transform: capitalize;
    user-select: none;
    color: #b0b0b0;
   z-index: 10;
    width: 25%;

    @media ( (max-width : 1024px) and (min-height: 900px)) {
     line-height: 1.5;
     width: 90% !important;
     font-size: 1.5em !important;
     text-align: center !important;
    }

    @media (max-width: 1200px) {
      font-size: 1.8em;
    }

    @media (max-width: 1000px) {
      font-size: 1.8em;
    }
    @media (max-width: 750px) {
      font-size: 1.5em;
      width: 99%;
      text-align: center !important;
    }
    @media (max-width: 600px) {
      font-size: 1.3em;

    }
    @media (max-width: 500px) {
      font-size: 1.2em;
    }
    @media (max-width: 400px) {
      font-size: 1.2em;
    }
  }
`
const ImageContainer = styled.div`
position:relative;
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
bottom:0;
right:0;
left: 0;
height: 100%;
width: 95%;
@media (max-width :750px){
width: 100% !important;
height: 90% !important;
  }
`


const FirstSection = () => {
  
  return (
    <Section>
    <Wrapper
    >
      
      <motion.h1
         initial = {{opacity:0}}
         whileInView = {{opacity:1}}
         viewport={{ once: true }}
         transition={{duration:1,delay:1,type:'ease'}}
      >Discover the Brilliance of iPhone Technology
</motion.h1>
<ImageContainer>
    <I1
    initial = {{scale:0.3}}
    whileInView = {{scale:1}}
    viewport={{ once: true }}
    transition={{duration:1}}
    src={image1} alt='first-image'/>
    </ImageContainer>
<motion.h2
   initial = {{opacity:0}}
   whileInView = {{opacity:1}}
   viewport={{ once: true }}
   transition={{duration:1,delay:1,type:'ease'}}
>Revolutionary Features That Redefine Mobile Excellence
Empowering You with Cutting-Edge Performance and Elegance</motion.h2>
  
   
    </Wrapper>
 
    </Section>
  )
}

export default FirstSection
