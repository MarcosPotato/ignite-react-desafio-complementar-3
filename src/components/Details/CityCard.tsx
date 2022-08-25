import { Flex, Heading, Image, Stack , Text} from "@chakra-ui/react"

interface City{
    id: string
    continent: string
    name: string
    country: string
    country_flag: string
    city_image: string
}

interface CityCardProps{
    cityInfo: City
}

export default function CityCard({ cityInfo }: CityCardProps){
    return(
        <Flex
            width="250px"
            flexDir="column"
            borderRadius="4px"
            m="6"
        >
            <Image
                width="100%"
                src={cityInfo.city_image}
                alt={cityInfo.name}
            />
            <Flex
                align="center"
                justifyContent="space-around"
                border="1px solid orange"
                borderTop="none"
                height="100px"
                borderBottomEndRadius="4px"
                borderBottomStartRadius="4px"
            >
                <Stack>
                    <Heading color="gray.700" fontSize="2xl">{ cityInfo.name }</Heading>
                    <Text color="gray.500" >{ cityInfo.country }</Text>
                </Stack>
                <Image src={ cityInfo.country_flag } alt={cityInfo.country}/>
            </Flex>
        </Flex>
    )
}