import React from 'react'
import PrivacyCard from '../components/privacy-card/PrivacyCard'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import { MantineProvider, createTheme } from '@mantine/core'
import SecondFooter from '../components/second-footer/SecondFooter'
import ContactUs from '../components/contactus/ContactUs'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import image6 from '../assets/new-images/homepage-images/section-1-4.png'
import image7 from '../assets/new-images/homepage-images/section-1-3.png'

const I3 = styled(motion.img)`
 opacity: 0.7 !important;
  height: 60vh;
  width: 20vw;
  position: absolute;
  right: 0;
  top: 5%;
  z-index: -1;
  @media (max-width:1100px){
    height: 40vh;
width: 40vw;
  }
  @media (max-width :750px){
height: 35vh;
width: 35vw;
  }
`
const I4 = styled(motion.img)`
opacity: 0.7 !important;
  height: 84vh;
  width: 20vw;
  position: absolute;
  left: 0;
 top: 8%;
  z-index: -1;
  @media (max-width:1100px){
    height: 75vh;
width: 25vw;
  }
  @media (max-width :750px){
height: 55vh;
width: 30vw;

  }
`

const I5 = styled(motion.img)`
 opacity: 0.7 !important;
  height: 60vh;
  width: 20vw;
  position: absolute;
  right: 0;
  top: 29%;
  z-index: -1;
  @media (max-width:1100px){
    height: 40vh;
width: 40vw;

  }
  @media (max-width :750px){
height: 35vh;
width: 35vw;

  }
`
const I6 = styled(motion.img)`
opacity: 0.7 !important;
  height: 84vh;
  width: 20vw;
  position: absolute;
  left: 0;
  top: 32%;
  z-index: -1;
  @media (max-width:1100px){
    height: 75vh;
width: 25vw;
  }
  @media (max-width :750px){
height: 55vh;
width: 30vw;

  }
`

const I7 = styled(motion.img)`
 opacity: 0.7 !important;
  height: 60vh;
  width: 20vw;
  position: absolute;
  right: 0;
  top: 49%;
  z-index: -1;
  @media (max-width:1100px){
    height: 40vh;
width: 40vw;

  }
  @media (max-width :750px){
height: 35vh;
width: 35vw;

  }
`
const I8 = styled(motion.img)`
opacity: 0.7 !important;
  height: 84vh;
  width: 20vw;
  position: absolute;
  left: 0;
  top:55%;
  z-index: -1;
  @media (max-width:1100px){
    height: 75vh;
width: 25vw;
  }
  @media (max-width :750px){
height: 55vh;
width: 30vw;

  }
`
const I9 = styled(motion.img)`
 opacity: 0.7 !important;
  height: 60vh;
  width: 20vw;
  position: absolute;
  right: 0;
  top: 74%;
  z-index: -1;
  @media (max-width:1100px){
    height: 40vh;
width: 40vw;

  }
  @media (max-width :750px){
height: 35vh;
width: 35vw;

  }
`
const I10 = styled(motion.img)`
opacity: 0.7 !important;
  height: 84vh;
  width: 20vw;
  position: absolute;
  left: 0;
 top: 79%;
  z-index: -1;
  @media (max-width:1100px){
    height: 75vh;
width: 25vw;
  }
  @media (max-width :750px){
height: 55vh;
width: 30vw;

  }
`

const PrivacyPage = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  const theme = createTheme({})

  return (
    <div style={{ backgroundColor: '#181818',position:'relative',zIndex:99 }}>
       <I3
       src={image6}
       alt="background-blur"
     />
     <I4
       src={image7}
       alt="background-blur"
     />
      <I5
       src={image6}
       alt="background-blur"
     />
     <I6
       src={image7}
       alt="background-blur"
     />
      <I7
       src={image6}
       alt="background-blur"
     />
     <I8
       src={image7}
       alt="background-blur"
     />
      <I9
       src={image6}
       alt="background-blur"
     />
     <I10
       src={image7}
       alt="background-blur"
     />
      <SecondNavbar />
      <MantineProvider theme={theme}>
        <PrivacyCard />
        <ContactUs />
      </MantineProvider>
      <SecondFooter />
    </div>
  )
}

export default PrivacyPage
