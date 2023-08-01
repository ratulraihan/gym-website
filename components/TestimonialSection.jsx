import { React } from 'react';
import { TbChevronsRight } from "react-icons/tb";
import "swiper/css";
// import 'swiper/css/navigation';

// import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper, } from "swiper/react";
import Container from "./Container";


export default function TestimonialSection() {
    const swiper = useSwiper();
    return (

        <Container>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}


            >
                {[...Array(5)].map((i, k) => (
                    <SwiperSlide key={k}>
                        <div className="flex items-center gap-4">
                            <div>
                                <img className="" src="/img/class6.jpg" alt="Trainer" />
                            </div>
                            <div className="py-20">
                                <TbChevronsRight className="stroke-[3] text-5xl text-lime-400" />
                                <p className="pl-3 text-xl text-gray-400">
                                    icly strategize optimal outsourcing rather tha
                                    mission-critical. Danamically incentivize resource sucking users with cross functional.Globally strategize optimal outsourcing rather than mission-critical. Danamically incentivize resource sucking users with cross functional.
                                </p>
                                <h3 className="pt-5 pl-3 text-lg font-bold text-lime-400">BERNICE GRANT</h3>
                                <p className="pl-3">Senior Trainer</p>
                            </div>
                            <button onClick={() => swiper.slideNext} className="swiper-button-next">Next </button>
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </Container>
    );

}