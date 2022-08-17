import type { NextPage } from 'next'

import Header from '../components/Header'
import Banner from '../components/Banner'

import { Box, Divider, Flex, Heading } from '@chakra-ui/react'
import TravelType from '../components/TravelType'
import Continents from '../components/Continents'

const Home: NextPage = () => {
  return (
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
        mt="24"
        mb="16"
        align="center"
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
  )
}

export default Home
