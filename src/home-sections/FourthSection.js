import {motion} from 'framer-motion'
import styled from 'styled-components'
import image1 from '../assets/new-images/homepage-images/section-4-iphone.png'
import image3 from '../assets/new-images/homepage-images/section-1-4.png'
import image4 from '../assets/new-images/homepage-images/section-1-3.png'

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
  /* background-color: green; */
  @media ( (max-width : 1025px) and (min-height: 900px)) {
    height: 60vh;
   width: 96%;
    }
  @media (max-width:800px){
   height: 55vh;
   width: 96%;
}
}
`
const I1 = styled(motion.img)`
  width: 96%;
  height: 97%;
  position: absolute;
  left: 2%;
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
  z-index: 9;
  @media ( (max-width : 1025px) and (min-height: 900px)) {
    padding: 1rem;
    height: 40vh;
   justify-content: flex-start;
   width: 60%;
    }
  @media (max-width:800px){
   height: 40vh;
   justify-content: flex-start;
   width: 90%;
}

`

const Title = styled.h1`
  font-size: 3.4rem;/* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
  color: #fff;
  font-family: "Josefin Sans", sans-serif;
  @media ( (max-width : 1024px) and (min-height: 900px)) {
   font-size: 2.3em !important;
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
    font-size: 1.5em;
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

const Button = styled.button`
   font-family: "Josefin Sans", sans-serif;
  font-weight: 600 !important;
  user-select: none;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #0071e3;
  padding: 0.7rem 0.9rem 0.7rem 0.9rem;
  border-radius: 0.2rem; /* Set border-radius to a high value */
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  transition: height 0.2s, transform 0.2s;
  &:hover{
    background: #007EF2;
  
  }
  @media ( (max-width : 1025px) and (min-height: 900px)) {
    align-self: center;
    font-size: 1.2rem;
    }
  @media (max-width:800px){
   align-self: center;
   font-size: 1.1rem;
}
`

const FourthSection = () => {
  
  

  return (
  
      <Section >
        
        <Wrapper>
          <div className='image-wrapper'>
        <I1 src={image1}
        initial = {{bottom:'-90%'}}
        whileInView={{bottom:0}}
        viewport={{ once: true }}
        transition={{duration:1}}
        />
        </div>
        <TextContainer
           initial = {{opacity:0}}
           whileInView={{opacity:1}}
           viewport={{ once: true }}
           transition={{duration:1,delay:1}}
        >
          <Title>Own the Ultimate iPhone Experience Today</Title>
          <Text>
          Explore Our Collection and Make Your Selection Now
           Your Journey to iPhone Excellence Starts Here
          </Text>
          <Button onClick={()=>
            window.open('https://www.apple.com/in/')
          }>Know more</Button>
        </TextContainer>
        </Wrapper>
      </Section>
     
  )
}

export default FourthSection
