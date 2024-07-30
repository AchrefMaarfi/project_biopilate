import React from "react";
import tarifs from "../../data/tarifs.json"; // Adjust the path as necessary
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";
import SwiperCore, { Pagination } from "swiper/core";

export default function Offres() {
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
          {tarifs.map((offre, index) => (
            <SwiperSlide key={index}>
              <div className="py-8 flex flex-col justify-center items-center bg-bgColor p-4 rounded-lg shadow-md min-w-[240px] sm:min-w-[350px] gap-2 font-lato">
                <h3 className="text-lg">{offre.title}</h3>
                <p className="text-2xl text-marron pb-2">{offre.price}</p>
                <p>{offre.pack1}</p>
                <p>{offre.pack2}</p>
                <p>{offre.pack3}</p>
                <p className="text-sm text-blueText pt-2">{offre.validity}</p>
                <button className="button-hover flex flex-col justify-center text-marron rounded-lg px-16 sm:px-24 py-2 bg-white shadow-sm">
                  Réserver
                </button>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div class="swiper-pagination m-auto z-[1]"></div>
      </Swiper>
    </div>
  );
}
