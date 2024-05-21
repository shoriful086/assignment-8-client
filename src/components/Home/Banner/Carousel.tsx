"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

const BannerCarousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image
            src="https://www.shutterstock.com/shutterstock/photos/1074652928/display_1500/stock-vector-dish-soap-ads-dishwashing-liquid-with-clean-dishes-and-splashing-water-in-d-illustration-1074652928.jpg"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="banner image"
            className="w-full h-72 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://www.shutterstock.com/shutterstock/photos/1074652928/display_1500/stock-vector-dish-soap-ads-dishwashing-liquid-with-clean-dishes-and-splashing-water-in-d-illustration-1074652928.jpg"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="banner image"
            className="w-full h-72 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://www.shutterstock.com/shutterstock/photos/1074652928/display_1500/stock-vector-dish-soap-ads-dishwashing-liquid-with-clean-dishes-and-splashing-water-in-d-illustration-1074652928.jpg"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="banner image"
            className="w-full h-72 rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default BannerCarousel;
