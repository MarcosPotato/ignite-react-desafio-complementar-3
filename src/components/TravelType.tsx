import { Flex, Image, Text } from "@chakra-ui/react"

interface TravelTypeProps{
    icon: "building" | "cocktail" | "earth" | "museum" | "surf"
    text: string
}

const TravelType: React.FC<TravelTypeProps> = ({ icon, text }) => {
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            margin="4"
            width="158px"
        >
            <Image 
                mb="4"
                src={`icons/${icon}.svg`} 
                alt={icon}
            />
            <Text fontSize="24" fontWeight="bold" color="gray.600">
                { text }
            </Text>
        </Flex>
    )
}

export default TravelType