import type { NextPage } from 'next'

import { Flex, Heading, Box, Image, Text } from '@chakra-ui/react'

const Banner: NextPage = () => {
    return (
        <Flex
            width="100%"
            height={["25vh", "25vh", "35vh"]}
            backgroundImage="images/background.png"
            bgRepeat="no-repeat"
            objectFit="contain"
            bgSize="cover"
            flexDir="row"
            align="center"
            justifyContent="center"
        >
            <Flex
                maxW="1200px"
                width="100vw"
                justifyContent="space-around"
                alignItems="center"
            >
                <Box maxW="500px" px="4">
                    <Heading color="white" mb="6" fontSize={["25", "25", "38"]}>
                        5 Continentes,<br/> infinitas possibilidades.
                    </Heading>
                    <Text 
                        color="white"
                        fontWeight="300"
                        fontSize={["14", "14", "20"]}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
            <Image 
                src='images/Airplane.svg'
                mb="-28"
                display={["none", "none", "block"]}
            />
            </Flex>
        </Flex>
    )
}

export default Banner
