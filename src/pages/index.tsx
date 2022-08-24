import type { NextPage } from 'next'

import Header from '../components/Header'
import Banner from '../components/Home/Banner'

import { Box, Divider, Flex, Heading } from '@chakra-ui/react'
import TravelType from '../components/Home/TravelType'
import Continents from '../components/Home/Continents'

const Home: NextPage = () => {
  return (
    <>
    <Flex
      flexDir="column"
      align="center"
      bgColor="whiteAlpha.200"
    >
      <Header />
      <Banner />
      <Flex
        maxW="1200px"
        width="100vw"
        px="4"
        mt={["12", "12", "24"]}
        mb="16"
        align="center"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        <TravelType icon='cocktail' text='vida noturna'/>
        <TravelType icon='surf' text='praia'/>
        <TravelType icon='building' text='moderno'/>
        <TravelType icon='museum' text='clássico'/>
        <TravelType icon='earth' text='e mais...'/>
      </Flex>
      <Divider 
        maxW={"90px"}
        height={"2px"}
        bgColor="gray.600"
      />
      <Continents />
    </Flex>
    </>
  )
}

export default Home
