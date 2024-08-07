import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper.css";
import SwiperCore, { Pagination } from "swiper/core";

export default function CircleSwiperCarousel({ images }) {
  return (
    <div>
      <Swiper
        className="centered-slide-carousel swiper-container relative"
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        slideToClickedSlide={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          1920: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          1028: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          990: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
        }}
      >
        <div className="flex flex-nowrap gap-8 overflow-hidden w-[40%]">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="bg-bgColor rounded-full shadow-md min-w-[240px] sm:min-w-[340px] sm:max-w-[350px]">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="rounded-full w-[220px] h-[220px] sm:w-[312px] sm:h-[312px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div class="swiper-pagination m-auto z-[1]"></div>
      </Swiper>
    </div>
  );
}
