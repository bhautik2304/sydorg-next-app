"use client"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function TestimonialSlider() {

    return (
        <>
            <OwlCarousel
                className='owl-theme'
                loop
                margin={10}
                nav
                responsive={{
                    400: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                }}
            >
                <div className="slider-card" style={{
                    // height:250
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
                <div className="slider-card" style={{
                    // height:250
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

            </OwlCarousel>
        </>
    )
}

export default TestimonialSlider