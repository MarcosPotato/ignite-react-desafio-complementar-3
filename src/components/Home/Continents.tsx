import { Flex, Heading } from "@chakra-ui/react"
import Slider from "./Slider"

const Continents: React.FC = () => {
    return (
        <>
        <Flex
            width={"100vw"}
            maxW="1200px"
            flexDir="column"
            alignItems="center"
            fontWeight="500"
            color="gray.600"
            mt="12"
        >
            <Heading
                textAlign="center"
                fontSize={["22", "22", "32"]}
            >
                Vamos nessa?
            </Heading>
            <Heading 
                textAlign="center"
                fontSize={["22", "22", "32"]}
            >
                Então escolha seu continente
            </Heading>
        </Flex>
        <Slider />
        </>
    )
}

export default Continents