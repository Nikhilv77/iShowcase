import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion'
import { Autoplay } from 'swiper/modules';
import image1 from '../assets/new-images/homepage-images/section-1-iphone-1.png';
import image2 from '../assets/new-images/homepage-images/section-6-iphone-2.png';
import image5 from '../assets/new-images/homepage-images/section-6-iphone-3.png';
import image6 from '../assets/new-images/homepage-images/section-6-iphone-4.png';
import image7 from '../assets/new-images/homepage-images/section-6-iphone-5.png';
import image3 from '../assets/new-images/homepage-images/section-1-4.png'
import image4 from '../assets/new-images/homepage-images/section-1-3.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/Swiper.css'

import { EffectCoverflow } from 'swiper/modules';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
position: relative;
overflow: hidden;
display: grid;
grid-template-columns: 1fr;
place-items: center;
`
const I3 = styled(motion.img)`
opacity: 0.6 !important;
  height: 80vh;
  width: 30vw;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  @media (max-width:1100px){
    height: 40vh;
width: 40vw;
top: 5%;
  }
  @media (max-width :750px){
height: 35vh;
width: 35vw;
top: 5%;
  }
`
const I4 = styled(motion.img)`
opacity: 0.6 !important;
  height: 84vh;
  width: 20vw;
  position: absolute;
  left: 0;
  bottom: 10%;
  z-index: 1;
  @media (max-width:1100px){
    height: 75vh;
width: 25vw;
  }
  @media (max-width :750px){
height: 55vh;
width: 30vw;

  }
`


const TextContainer = styled(motion.div)`

  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 9;
  @media ( (max-width : 1025px) and (min-height: 900px)) {
    padding: 1rem;
   justify-content: center;
   width: 60%;
    }
  @media (max-width:800px){
   justify-content: center;
   width: 83%;
}


`

const Title = styled.h1`
  font-size: 3.4rem;/* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
  text-align: center !important;
  color: #fff;
    font-family: "Josefin Sans", sans-serif;
  @media ( (max-width : 1024px) and (min-height: 900px)) {
    text-align: center !important;
   font-size: 2.5em !important;
  }

  @media (max-width: 1200px) {
    font-size: 2.4em;
  }

  @media (max-width: 1000px) {
    font-size: 2.3em;
  }
  @media (max-width: 750px) {
    font-size: 2.2em;
    text-align: center !important;
    
  }
  @media (max-width: 600px) {
    font-size: 2em;

  }
  @media (max-width: 500px) {
    font-size: 1.8em;
  }
  @media (max-width: 400px) {
    font-size: 1.6em;
  } /* Adjust font size for even smaller screens */
  
`
const Text = styled.p`
  /* text-align: justify; */
    font-family: "Josefin Sans", sans-serif;
  font-size: 1.6rem;
  line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
  text-align: center !important;

  color: #b0b0b0;
    font-family: "Josefin Sans", sans-serif;
  @media ( (max-width : 1024px) and (min-height: 900px)) {
   line-height: 1.5;
   width: 95% !important;
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
`

const SixthSection =()=> {

  return (
    <>
    <Section>
   
      <TextContainer
           initial = {{opacity:0}}
           whileInView={{opacity:1}}
           viewport={{ once: true }}
           transition={{duration:1,delay:1}}
        >
          <Title>Discover Our Diverse Range of iPhones</Title>
          <Text>
        
          From Classic to Cutting-Edge: Explore Our Extensive Collection
        Find Your Perfect iPhone Match Amongst Our Range of Models

          </Text>
          </TextContainer>
          
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction:false
        }}
       
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
       
        modules={[Autoplay,EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src='https://www.smartcellular.us/media/catalog/product/cache/cfaa1692031f009488d1cfea5ce7e1ee/s/_/s_3_1_3.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://www.pngall.com/wp-content/uploads/5/iPhone-11-Transparent.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://e7.pngegg.com/pngimages/450/269/png-clipart-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://www.freeiconspng.com/thumbs/iphone-x-pictures/iphone-x-new-model-13.png' />
        </SwiperSlide>
      </Swiper>
      </Section>
    </>
  );
}
export default SixthSection;