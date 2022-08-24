import { Flex } from "@chakra-ui/react"
import { Swiper, useSwiper, SwiperSlide } from "swiper/react"
import Slide from "./Slide";
import { Navigation, Pagination } from "swiper";

export default function Slider() {
    const swiper = useSwiper()

    return (
        <Flex 
            width="100%"
            maxW="1240px"
            my="12"
            justifyContent="center"
            alignItems="center"
            bgColor="whiteAlpha.200"
            position="relative"
        >
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide 
                        location="Europa"
                        continent="europe"
                        title="O continente mais antigo" 
                        bgImg="images/Europe.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide 
                        location="Ásia"
                        continent="asia"
                        title="O continente mais antigo" 
                        bgImg="images/Europe.png"
                    />
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}