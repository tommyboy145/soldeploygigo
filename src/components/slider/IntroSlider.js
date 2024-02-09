import React from 'react';
// import SwiperCore, { Autoplay, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider = () => {

    const data = [
        {
            img: "1.jpg",
            avatar: "1.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "2.jpg",
            avatar: "2.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "3.jpg",
            avatar: "3.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
        {
            img: "4.jpg",
            avatar: "4.png",
            title: "The Sandbox",
            author: "Sound Box"
        },
    ];


    return (
        <></>
    );
};

export default IntroSlider;

