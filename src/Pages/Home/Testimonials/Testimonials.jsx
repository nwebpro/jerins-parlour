import React from 'react'
import Testimonial from './Testimonial'
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper"
import './Testimonials.css'

const Testimonials = () => {
    return (
        <section className='container mx-auto px-4 lg:px-0 mt-[75px] mb-[98px]'>
            <h2 className="text-center text-theme-text font-bold text-[34px] leading-[50px] tracking-[0.15%] mb-[60px]">Testimonials</h2>
            <Swiper
                breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    [...Array(3)].map((_, i) => (
                        
                        <SwiperSlide key={ i }>
                            <Testimonial />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Testimonials