import { Box, Flex, Image, Text } from "@chakra-ui/react"

interface TravelTypeProps{
    icon: "building" | "cocktail" | "earth" | "museum" | "surf"
    text: string
}

const TravelType: React.FC<TravelTypeProps> = ({ icon, text }) => {
    return (
        <Flex
            flexDir={["row", "row", "column"]}
            alignItems="center"
            justifyContent="center"
            margin="4"
            width="158px"
        >
            <Box
               display={["block", "block", "none"]}
               width="25px"
               height="25px"
               borderRadius="50%"
               bgColor="orange"
               mr="10px"
            />
            <Image 
                display={["none", "none", "block"]}
                mb="4"
                src={`icons/${icon}.svg`} 
                alt={icon}
            />
            <Text fontSize={["18", "18", "24"]} fontWeight="bold" color="gray.600" textAlign="center">
                { text }
            </Text>
        </Flex>
    )
}

export default TravelType