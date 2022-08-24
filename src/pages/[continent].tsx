import { GetStaticPaths, GetStaticProps } from "next"

import DetailsHeader from "../components/Details/DetailsHeader"
import Header from "../components/Header"

import { Box, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import MainInfo from "../components/Details/MainInfo"

interface ContinentInfoProps {
    continent: string
}

export default function ContinentInfo({ continent }: ContinentInfoProps) {
    return (
        <Flex
            flexDir="column"
            align="center"
            bgColor="whiteAlpha.200"
        >
            <Header />
            <DetailsHeader image="images/Europe/EuropeBanner.png" title="Europa"/>
            <Flex
                width="100%"
                maxW="1200px"
                padding="4"
                my="12"
            >
                <Box flex={1}>
                    <Text>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
                </Box>
                <Flex 
                    width="40%"
                    justifyContent="space-evenly"
                > 
                    <MainInfo info="50" title="países"/>
                    <MainInfo info="60" title="línguas"/>
                    <MainInfo info="27" title="cidades +100" option="Total de 230 cidades"/>
                </Flex>
            </Flex>
            <SimpleGrid 
                columns={4} 
                columnGap="6" 
                rowGap="6"
            >

            </SimpleGrid>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
      paths: [],
      fallback: true
    }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
    return{
        props: {
            continent: params?.continent
        }
    }
}