import React from 'react'
import Faqs from '../components/faqs/Faqs'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import { MantineProvider, createTheme } from '@mantine/core'
import SecondFooter from '../components/second-footer/SecondFooter'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import image6 from '../assets/new-images/homepage-images/section-1-4.png'
import image7 from '../assets/new-images/homepage-images/section-1-3.png'





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
      <SecondNavbar />
      <MantineProvider theme={theme}>
       <Faqs/>
      </MantineProvider>
      <SecondFooter />
    </div>
  )
}

export default PrivacyPage
