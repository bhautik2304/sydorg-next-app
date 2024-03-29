"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function TestimonialSlider() {

    return (
        <>
            <Swiper
                // className='owl-theme'
                loop={true}
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slider-card bg-light p-3" style={{
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 40,
                        borderLeftLeftRadius: 10,
                    }} >
                        <div className='row' >
                            <div className="col-4" >
                                <img src="./images/img1.jpg" alt="" />
                            </div>
                            <div className="col-8 content text-left">
                                <p style={{
                                    textAlign: 'left'
                                }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae
                                    animi nihil minus sed unde voluptas cumque.</p>
                                <b style={{
                                    textAlign: 'left'
                                }} className="d-block title">Briana Tozour</b>
                                <small style={{
                                    textAlign: 'left'
                                }} className="d-block sub-title mb-2">Graphic Designer</small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card bg-light p-3" style={{
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 40,
                        borderLeftLeftRadius: 10,
                    }} >
                        <div className='row' >
                            <div className="col-4" >
                                <img src="./images/img1.jpg" alt="" />
                            </div>
                            <div className="col-8 content text-left">
                                <p style={{
                                    textAlign: 'left'
                                }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae
                                    animi nihil minus sed unde voluptas cumque.</p>
                                <b style={{
                                    textAlign: 'left'
                                }} className="d-block title">Briana Tozour</b>
                                <small style={{
                                    textAlign: 'left'
                                }} className="d-block sub-title mb-2">Graphic Designer</small>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card bg-light p-3" style={{
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 40,
                        borderLeftLeftRadius: 10,
                    }} >
                        <div className='row' >
                            <div className="col-4" >
                                <img src="./images/img1.jpg" alt="" />
                            </div>
                            <div className="col-8 content text-left">
                                <p style={{
                                    textAlign: 'left'
                                }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae
                                    animi nihil minus sed unde voluptas cumque.</p>
                                <b style={{
                                    textAlign: 'left'
                                }} className="d-block title">Briana Tozour</b>
                                <small style={{
                                    textAlign: 'left'
                                }} className="d-block sub-title mb-2">Graphic Designer</small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card bg-light p-3" style={{
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 40,
                        borderLeftLeftRadius: 10,
                    }} >
                        <div className='row' >
                            <div className="col-4" >
                                <img src="./images/img1.jpg" alt="" />
                            </div>
                            <div className="col-8 content text-left">
                                <p style={{
                                    textAlign: 'left'
                                }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae
                                    animi nihil minus sed unde voluptas cumque.</p>
                                <b style={{
                                    textAlign: 'left'
                                }} className="d-block title">Briana Tozour</b>
                                <small style={{
                                    textAlign: 'left'
                                }} className="d-block sub-title mb-2">Graphic Designer</small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default TestimonialSlider