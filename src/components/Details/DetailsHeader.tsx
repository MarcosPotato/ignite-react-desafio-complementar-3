import { Box, Flex, Heading } from "@chakra-ui/react"

interface DetailsHeaderProps{
    image: string
    title: string
}

export default function DetailsHeader({ image, title }: DetailsHeaderProps){
    return(
        <Flex
            width="100%"
            height={["25vh", "25vh", "500px"]}
            bgImage={image}
            objectFit="contain"
            bgSize="cover"
            justifyContent="center"
            alignItems={["center", "center", "flex-end"]}
        >
            <Box 
                width="100%"
                maxW="1200px"
            >
                <Heading
                    p="25px"
                    color="white" 
                    fontWeight="bold"
                    textAlign={["center", "center", "left"]}
                >
                    { title }
                </Heading>
            </Box>
        </Flex>
    )
}