import React from "react";
import tarifs from "../../data/tarifs.json"; // Adjust the path as necessary
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";
import SwiperCore, { Pagination } from "swiper/core";

export default function Offres({ images }) {
  return (
    <div>
      <p className="text-marron text-3xl leading-snug mb-6">
        Nos offres - tarifs
      </p>
      <Swiper
        className="centered-slide-carousel swiper-container relative"
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        slideToClickedSlide={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          1920: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1028: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          990: {
            slidesPerView: 2,
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
        <div className="flex flex-nowrap gap-8 overflow-hidden">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="rounded-full w-[220px] h-[220px] sm:w-[312px] sm:h-[312px] object-cover"
              />
            </SwiperSlide>
          ))}
        </div>
        <div class="swiper-pagination m-auto z-[1]"></div>
      </Swiper>
    </div>
  );
}
