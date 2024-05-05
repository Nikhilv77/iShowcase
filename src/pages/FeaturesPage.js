import React from 'react'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import HeroSection from '../features-sections/HeroSection'
import FirstSection from '../features-sections/FirstSection'
import SecondSection from '../features-sections/SecondSection'
import ThirdSection from '../features-sections/ThirdSection'
import FourthSection from '../features-sections/FourthSection'
import FifthSection from '../features-sections/FifthSection'
import Footer from '../home-sections/FooterSection'

const FeaturesPage = () => {
  return (
    <div>
      <SecondNavbar />
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  )
}

export default FeaturesPage
