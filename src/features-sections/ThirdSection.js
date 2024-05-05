import {motion} from 'framer-motion'
import styled from 'styled-components'
import image1 from '../assets/new-images/featurespage-images/section-1-1.png'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #181818;
  overflow: hidden;
`
const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
place-items: center;
height: 100%;
width: 100%;
/* background-color: pink; */
@media ( (max-width : 1025px) and (min-height: 900px)) {
  grid-template-columns: 1fr;
    }
@media (max-width:800px){
  grid-template-columns:1fr;
}
.image-wrapper{
  position: relative;
  width: 100%;
  height: 97vh;
  @media ( (max-width : 1025px) and (min-height: 900px)) {
    height: 60vh;
   width: 96%;
    }
  @media (max-width:800px){
   height: 60vh;
   width: 96%;
}
}
`
const I1 = styled(motion.img)`
  width: 90%;
  height: 90%;
  margin-bottom: 0.7rem;
  position: absolute;
  object-fit: contain;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;


`

const TextContainer = styled(motion.div)`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media ( (max-width : 1025px) and (min-height: 900px)) {
    padding: 1rem;
    height: 40vh;
   justify-content: center;
   width: 80%;
    }
  @media (max-width:800px){
   height: 40vh;
   justify-content: center;
   width: 89%;
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

const Title = styled.h1`
  font-size: 3.4rem;/* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
  color: #fff;
    font-family: "Josefin Sans", sans-serif;
  align-self: flex-start;
  @media ( (max-width : 1024px) and (min-height: 900px)) {
    text-align: center !important;
   font-size: 1.8rem !important;
   align-self: center;
  }
  @media (max-width: 1200px) {
    font-size: 2.4em;
  }

  @media (max-width: 1000px) {
    font-size: 2.3em;
  }
  @media (max-width: 750px) {
    font-size: 2.1em;
    text-align: center !important;
    align-self: center;
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
    text-align: center !important;
   line-height: 1.5;
   width: 100% !important;
   font-size: 1.1em !important;
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



const FirstSection = () => {
  
  

  return (
  
      <Section >
        <Wrapper>
        <TextContainer
           initial = {{opacity:0}}
           whileInView={{opacity:1}}
           viewport={{ once: true }}
           transition={{duration:1,delay:1}}
        >
          <Title> Face ID Security
</Title>
          <Text>
          Protect your privacy with Face ID Security. Effortlessly unlock your device and authenticate securely with just a glance. With advanced facial recognition technology, Face ID offers unparalleled security and convenience. 
          </Text>
        </TextContainer>
        <div className='image-wrapper'>
        <I1 src='https://help.apple.com/assets/6598817BD84F513BE609FC12/6598817CFF5E0690C7035CD9/en_US/8bfd03977de7a473d796802e43d7223e.png'
        initial = {{bottom:'-90%',rotate:-28}}
        whileInView={{bottom:0}}
        viewport={{ once: true }}
        transition={{duration:1}}
        />
        </div>
        </Wrapper>
      </Section>
     
  )
}

export default FirstSection
