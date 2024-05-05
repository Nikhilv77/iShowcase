import React,{useEffect} from 'react'
import HomeNavbar from '../components/home-navbar/HomeNavbar'
import HeroSection from '../home-sections/HeroSection'
import FirstSection from '../home-sections/FirstSection'
import SecondSection from '../home-sections/SecondSection'
import ThirdSection from '../home-sections/ThirdSection'
import FourthSection from '../home-sections/FourthSection'
import FifthSection from '../home-sections/FifthSection'
import SixthSection from '../home-sections/SixthSection'
import Footer from '../home-sections/FooterSection'
import { MantineProvider, createTheme } from '@mantine/core'

const HomePage = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  const theme = createTheme({})
  return (
    <div>
           <MantineProvider theme={theme}>
      <HomeNavbar />
     <HeroSection/>
      <FirstSection />
      {/* <SecondSection /> */}
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
      </MantineProvider>
    </div>
  )
}

export default HomePage
