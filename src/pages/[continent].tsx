import { GetStaticPaths, GetStaticProps } from "next"
import { api } from "../services/api"

import DetailsHeader from "../components/Details/DetailsHeader"
import Header from "../components/Header"

import { Box, Flex, Image, SimpleGrid, Text, CircularProgress } from "@chakra-ui/react"
import MainInfo from "../components/Details/MainInfo"
import CityCard from "../components/Details/CityCard"
import { useEffect, useState } from "react"

interface ContinentInfo{
    id: string
    name: string
    title: string
    image: string
    headerImage: string
    description: string
    contries_qtd: number
    languages: number
}

interface City{
    id: string
    continent: string
    name: string
    country: string
    country_flag: string
    city_image: string
}

interface ContinentInfoProps {
    continent: string
    info: ContinentInfo
}

export default function ContinentInfo({ continent, info }: ContinentInfoProps) {

    const [cities, setCities] = useState<City[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loadCities = async() => {
        setIsLoading(true)
        try {
            const response = await api.get<City[]>("/cities")

            setCities(response.data.filter(city => city.continent === continent))
            setIsLoading(false)
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(info){
            loadCities()
        }
    },[info, continent])

    return (
        <Flex
            flexDir="column"
            align="center"
            bgColor="whiteAlpha.200"
        >
            <Header />
            { !info ? (
                <Image
                    mt="10vh"
                    src="images/not-found.png"
                    width="100%"
                    maxW="1200px"
                    borderRadius="10px"
                />
            ):(
                <>
                <DetailsHeader image="images/Europe/EuropeBanner.png" title="Europa"/>
                <Flex
                    width="100%"
                    maxW="1200px"
                    padding="4"
                    my="12"
                    flexDir={["column", "column", "row"]}
                >
                    <Box flex={1}>
                        <Text>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
                    </Box>
                    <Flex 
                        width={["100%", "100%", "40%"]}
                        justifyContent="space-evenly"
                        mt={["40px", "40px", "0px"]}
                    > 
                        <MainInfo info="50" title="países"/>
                        <MainInfo info="60" title="línguas"/>
                        <MainInfo info="27" title="cidades +100" option="Total de 230 cidades"/>
                    </Flex>
                </Flex>
                { isLoading ? (
                    <Flex
                        height="25vh"
                        justify="center"
                        align="center"
                    >
                        <CircularProgress />
                    </Flex>
                ): (
                    <SimpleGrid 
                        columns={[1, 1, 3, 4]}
                        /* minChildWidth="300px" */
                        columnGap="6" 
                        rowGap="6"
                        mb="6"
                    >
                        { cities.map(city => (
                            <CityCard key={ city.id } cityInfo={ city } />
                        )) }
                    </SimpleGrid>
                )}
                </>
            )}
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
      paths: [],
      fallback: true
    }
}

export const getStaticProps: GetStaticProps = async({ params }) => {

    let info: ContinentInfo | null

    try{
        const response = await api.get(`/continents/${params?.continent}`)
        console.log("teste")
        console.log(response)
        info = response.data
    } catch(error){
        console.log(error)
        info = null
    }

    return{
        props: {
            continent: params?.continent,
            info: info
        },
        revalidate: 60 * 60 * 24 // 1 dia
    }
}