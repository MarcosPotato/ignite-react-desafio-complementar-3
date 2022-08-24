import { Button, Flex, Heading, HStack, Icon, Text, Tooltip } from "@chakra-ui/react"
import { FiInfo } from "react-icons/fi"

interface MainInfoProps{
    info: string
    title: string
    option?: string
}

export default function MainInfo({ info, title, option }: MainInfoProps){
    return(
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Heading color="orange">{ info }</Heading>
            <HStack spacing={2}>
                <Text fontWeight="bold" fontSize="lg">{ title }</Text>
                { option &&
                    <Tooltip label={ option } hasArrow>
                        <span>
                            <Icon 
                                as={ FiInfo }
                                _hover={{
                                    cursor: "pointer"
                                }}
                            />
                        </span>
                    </Tooltip>
                }
            </HStack>
        </Flex>
    )
}