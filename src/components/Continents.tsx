import { Flex, Heading } from "@chakra-ui/react"

const Continents: React.FC = () => {
    return (
        <Flex
            width={"100vw"}
            maxW="1200px"
            flexDir="column"
            alignItems="center"
            fontWeight="500"
            color="gray.600"
            mt="12"
        >
            <Heading>Vamos nessa?</Heading>
            <Heading>Então escolha seu continente</Heading>
        </Flex>
    )
}

export default Continents