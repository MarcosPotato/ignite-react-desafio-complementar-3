import { Flex, Heading } from "@chakra-ui/react"

interface DetailsHeaderProps{
    image: string
    title: string
}

export default function DetailsHeader({ image, title }: DetailsHeaderProps){
    return(
        <Flex
            width="100%"
            height="500px"
            bgImage={image}
            objectFit="contain"
            bgSize="cover"
            justifyContent="center"
            alignItems="flex-end"
        >
            <Heading
                width="100%"
                maxW="1200px"
                p="25px"
                color="white" 
                fontWeight="bold"
            >
                { title }
            </Heading>
        </Flex>
    )
}