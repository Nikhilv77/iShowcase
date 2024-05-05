import {motion} from 'framer-motion'
import styled from 'styled-components'
import image1 from '../assets/new-images/homepage-images/section-6-1.png'

const Section = styled.section`
  width: 100vw;
  min-height: 93vh;
  position: relative;
  z-index: 1;
  background-color: #181818;
  overflow: hidden;
`
const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr ;
place-items: center;
gap: 1.5rem;
height: 100%;
width: 100%;
/* background-color: pink; */
@media ( (max-width : 1025px) and (min-height: 900px)) {
  grid-template-columns: 1fr;
  gap: 0;
    }
@media (max-width:800px){
  gap: 0;
}
.image-wrapper{
  position: relative;
  width: 100%;
  height: 65vh;

  @media ( (max-width : 1025px) and (min-height: 900px)) {
    height: 60vh;
   width: 96%;
    }
  @media (max-width:800px){
   height: 50vh;
   width: 96%;
}
}
`

const TextContainer = styled(motion.div)`
  width: 85%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  @media ( (max-width : 1025px) and (min-height: 900px)) {
    padding: 1rem;
    height: 30vh;
   width: 60%;
    }
  @media (max-width:800px){
   height: 30vh;
   width: 83%;
}
@media (max-width:450px){
 height: 40vh;
}
  /* @media (max-width:800px){
    justify-content: space-between;
    width: 75%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  } */
`
const I1 = styled(motion.img)`

  width: 100%;
  height: 64vh;
  position: absolute;
  object-fit: contain;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
  @media (max-width:800px){
  height: 100%;
}
`
const Title = styled.h1`

  font-size: 3.3rem;/* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
  color: #fff;
   font-family: "Josefin Sans", sans-serif;
  @media ( (max-width : 1024px) and (min-height: 900px)) {
   font-size: 2.1rem !important;
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

  color: #b0b0b0;
   font-family: "Josefin Sans", sans-serif;
  @media ( (max-width : 1024px) and (min-height: 900px)) {
   line-height: 1.6;
   width: 80% !important;
   font-size: 1.2em !important;
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



const HeroSection = () => {
  
  return (
  
      <Section >
        <Wrapper>
        <TextContainer
           initial = {{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1,delay:1}}
        >
          <Title>Capture Every Moment with Precision</Title>
          <Text>
          Unleash your inner photographer with the Pro Camera System. Experience stunning clarity, depth, and detail in every shot. From low-light landscapes to dynamic portraits, seize every scene with confidence.
          </Text>
        </TextContainer>
        <div className='image-wrapper'>
        <I1 src='https://help.apple.com/assets/6598817BD84F513BE609FC12/6598817CFF5E0690C7035CD9/en_US/f84e89476576dfa27f1890fce7ea50cd.png'
        initial = {{top:'-150%'}}
        animate={{top:0}}
        transition={{duration:1.5}}
        />
        </div>
        </Wrapper>
      </Section>
     
  )
}

export default HeroSection
