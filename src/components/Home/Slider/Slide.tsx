
import Link from "next/link";
import { useSwiper } from "swiper/react";
import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'

interface SlideProps{
    location: string
    title: string
    bgImg: string
    continent: string
}

export default function Slide({ location, title, bgImg, continent }: SlideProps) {
    const swiper = useSwiper()
    
    return (
        <Flex 
            bgColor="pink.400"
            maxWidth="1240px"
            width="100%"
            height={["300px", "300px", "450px"]}
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            <Link href={`/${continent}`} passHref>
                <Image 
                    src={ bgImg } 
                    alt={ location }
                    height={["300px", "300px", "450px"]}
                    objectFit="cover"
                    position="absolute"
                    _hover={{ cursor: "pointer" }}
                />
                
            </Link>
            <Box
                zIndex={1}
            >
                <Heading 
                    color="white"
                    fontWeight="bold"
                    fontSize={["3xl","5xl"]}
                    textAlign="center"
                    mb="6"
                >
                    { location }
                </Heading>
                <Text 
                    color="white"
                    fontWeight="bold"
                    textAlign="center"
                    fontSize={["lg","2xl"]}
                >
                    { title }
                </Text>
            </Box>
            <Button
                onClick={() => swiper.slidePrev()}
                position="absolute"
                left={["2", "8"]}
            >
                <FiArrowLeft />
            </Button>
            <Button
                position="absolute"
                right={["2", "8"]}
                onClick={() => swiper.slideNext()}
            >
                <FiArrowRight />
            </Button>
        </Flex>
    )
}