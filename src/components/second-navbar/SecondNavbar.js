import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '../../assets/new-images/homepage-images/apple-logo.webp'
import { motion } from 'framer-motion'

import { MantineProvider, createTheme } from '@mantine/core'

gsap.registerPlugin(ScrollTrigger)

const Headers = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(24, 24, 24, 0.5);
  /* background:linear-gradient(135deg, rgba(43, 43, 42, 0.6), rgba(93, 93, 93, 0.6), rgba(34, 34, 33, 0.6)); */
  backdrop-filter: blur(16px) !important;
  color: white;
  position: sticky;
  height: 4.5rem;
  z-index: 99 !important;
  width: 100vw;
`
const Button = styled.button`
 font-family: "Josefin Sans", sans-serif;
  outline: none;
margin-right: 2rem;
  font-weight: 540 !important;
  user-select: none;
 
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
 background-color: #0071e3;
  padding: 0.6rem 0.9rem 0.6rem 0.9rem;
  border-radius: 0.2rem; /* Set border-radius to a high value */
  font-size: 1.3rem;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  transition: height 0.2s, transform 0.2s;

  @media (max-width: 1025px) and (min-height: 900px) {
    align-self: center;
    font-size: 1.29rem;
  }
  @media (max-width: 800px) {
    align-self: center;
    font-size: 1.29rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
 padding-left: 1.7rem;

  cursor: pointer;
  @media  (max-width: 1117px) {
      width: 2.8rem;
      height: 2.8rem;
      padding-left:1rem !important;
    }
  img {
    width: 3rem;
    height: 3rem;
    /* filter: brightness(0) invert(1) grayscale(1); */
    user-select: none;
  }
`

const Nav = styled.nav`

  font-family: "Josefin Sans", sans-serif;
  font-weight: 520 !important;
 width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: all 0.3s;
  @media only Screen and (max-width: 1117px) {
    display: none;
  }
  .no-hover {
    text-decoration: none; /* Optional: Remove underline on hover */
  }

  .no-hover:hover::after {
    width: 0; /* Set width to 0 on hover to disable the hover effect */
  }

  a {
    line-height: 1.5;
    font-size: 1.2rem;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 520 !important;
    color: white;
    &::after {
      content: '';
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:hover::after {
      width: 100%;
      background-color: #0071e3;
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`



const HamburgerBtn = styled.button`
  display: none;
  @media only screen and (max-width: 1117px) {
    display: inline-block;
  }
  position: relative;
  margin-right: 1.5rem;
  background-color: transparent;
  color: white;
  width: 2rem;
  height: 6px;
  border: none;
  margin-top: 0rem;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    background-color: white;
    width: 100%;
    height: 3px;
    display: block;
    position: absolute;
    left: 0;
    transition: top 0.3s, transform 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`

const MobileMenu = styled.nav`
  display: none;
  margin-right: 0.5rem;
  padding-bottom: 1rem;
  @media only Screen and (max-width: 1117px) {
    display: flex;
  }
  flex-direction: column;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 520 !important;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};

  z-index: 999 !important;
  background: rgba(24, 24, 24, 0.98);
  backdrop-filter: blur(7px) !important;
  border-radius: 1rem; /* Adjust the alpha value (0.7) for opacity */ /* Adds a blur effect for glass-like appearance */
  margin: 0.5rem;
  a {
    color: white;
    font-size: 1.2rem;
    margin: 1.5rem;
    cursor: pointer;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 520 !important;
  }
`

const HomeNavbar = () => {
  const theme = createTheme({})
  const [click, setClick] = useState(false)
  //const handleClick = () => setClick(!click);
  const ref = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    const header = ref.current
    const bottom = bottomRef.current

    // ScrollTrigger setup
    ScrollTrigger.create({
      start: 'top',
      end: 'bottom',
      onUpdate: (self) => {
        // Check the direction of scroll
        const direction = self.direction === 1 ? 'down' : 'up'

        // Toggle visibility based on scroll direction
        if (direction === 'up') {
          gsap.to(header, { top: 0 })
          gsap.to(bottom, { bottom: '5%' })
        } else {
          gsap.to(header, { top: '-100%' })
          gsap.to(bottom, { bottom: '-100%' })
        }
      },
    })
  }, [])

  return (
    <>
      <Headers
      
      >
        <Logo
        href='/'
        >
          <img src={logo} alt="TagSocial" />
        </Logo>
        <Nav>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap:'5rem'
     
            }}
          >
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/faqs">FAQs</a>
          </div>
        
      
           
          <Button onClick={()=>window.open('https://www.apple.com/in/iphone/')}>Products</Button>
        </Nav>

        <HamburgerBtn clicked={+click} onClick={() => setClick(!click)}>
          <span></span>
        </HamburgerBtn>

        <MobileMenu clicked={+click}>
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/faqs">FAQs</a>
<div className="products-button" style={{marginLeft:'2rem'
}}>
          <Button onClick={()=>window.open('https://www.apple.com/in/iphone/')}>Products</Button>
          </div>
        </MobileMenu>
   
      </Headers>
  
    </>
  )
}
export default HomeNavbar
