import { Flex } from "@chakra-ui/react"

const Header: React.FC = () => {
    return (
        <Flex
            maxW="1200px"
            width="100vw"
            p="6"
            justifyContent="center"
            align="center"
            position="relative"
        >
            <img src="logo.svg" />
        </Flex>
    )
}

export default Header