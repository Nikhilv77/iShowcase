import React from 'react'
import { Container, Title, Accordion } from '@mantine/core'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const PlaceholderText1 = `
Apple products are renowned for their seamless integration of hardware, software, and services, providing users with an intuitive and cohesive experience. From the iconic design to the robust ecosystem of apps and services, Apple products offer unmatched quality, reliability, and innovation.
`
const PlaceholderText2 = `
At Apple, we believe privacy is a fundamental human right. We are committed to protecting our users' data with industry-leading security measures and innovative features like end-to-end encryption, privacy-preserving technologies like Differential Privacy, and giving users control over their personal information through features like App Tracking Transparency.
`
const PlaceholderText3 = `
Apple is deeply committed to reducing our environmental impact and operating as sustainably as possible. We strive to use renewable energy in our facilities, design products with recycled and recyclable materials, and minimize waste throughout our supply chain. Our goal is to create products that are not only beautifully designed and powerful but also environmentally responsible.
`
const PlaceholderText4 = `
Apple is dedicated to providing exceptional customer support and service at every step of the journey. From personalized in-store experiences to online resources like the Apple Support website and Apple Support app, we aim to assist customers with any questions or issues they may have. Our AppleCare service offers extended support and warranty coverage for peace of mind.
`
const PlaceholderText5 = `
Apple's core values include innovation, excellence, inclusivity, and a commitment to making a positive impact on the world. We strive to create products that empower people to do amazing things, foster creativity and expression, and contribute to a more connected and sustainable future.
`
const PlaceholderText6 = `
Apple believes in using our platform and resources to drive positive change in the world. Through initiatives like Apple Giving, we support a wide range of charitable organizations and community projects focused on education, environmental conservation, social justice, and accessibility. Additionally, our Employee Giving program encourages employees to volunteer and donate to causes they care about, amplifying our impact globally.
`
const FaqWrapper = styled(motion(Container))`

  padding-top: calc(var(--mantine-spacing-xl) * 1.9);
  padding-bottom: calc(var(--mantine-spacing-xl) * 2);
  min-height: 650px;
   font-family: "Josefin Sans", sans-serif;
  z-index: 5;
`

const FaqTitle = styled(motion(Title))`
  margin-bottom: calc(var(--mantine-spacing-xl) * 1.5);
   font-family: "Josefin Sans", sans-serif;
  color: #fff;
  font-size: 2.3rem;
  @media (max-width: 720px) {
    font-size: 2.1rem !important;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem !important;
  }
`

const FaqAccordionItem = styled(motion(Accordion.Item))`
  color: #383838;
  font-size: 1.2rem;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.12);
    font-family: "Josefin Sans", sans-serif;
  @media (max-width: 720px) {
    font-size: 1rem !important;
  }
`

const FaqAccordionControl = styled(motion(Accordion.Control))`
  color: #383838;
  font-size: 1.3rem;
    font-family: "Josefin Sans", sans-serif;
  @media (max-width: 720px) {
    font-size: 1.2rem !important;
  }
`

const FaqAccordionPanel = styled(motion(Accordion.Panel))`
  color: #383838;
`

const Faqs = () => {
  return (
    <FaqWrapper
      size="md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaqTitle
        ta="center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Frequently Asked Questions
      </FaqTitle>

      <Accordion variant="separated">
      <FaqAccordionItem
          value="revert"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FaqAccordionControl>
          What sets Apple products apart from other brands?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText1}</FaqAccordionPanel>
        </FaqAccordionItem>
        <FaqAccordionItem
          value="reset-password"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FaqAccordionControl>
          How does Apple prioritize user privacy and security?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText2}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="another-account"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaqAccordionControl>
          What is Apple's approach to sustainability and environmental responsibility?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText3}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="newsletter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaqAccordionControl>
          How does Apple support its customers beyond just selling products?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText4}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="credit-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <FaqAccordionControl>
          What values does Apple embody as a brand?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText5}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="payment"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <FaqAccordionControl>
          How does Apple contribute to communities and social causes?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText1}</FaqAccordionPanel>
        </FaqAccordionItem>
      </Accordion>
    </FaqWrapper>
  )
}

export default Faqs
