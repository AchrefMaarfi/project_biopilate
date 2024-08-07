import React from "react";
import PlanningCard from "./PlanningCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";
import SwiperCore, { Pagination } from "swiper/core";

export default function Planning({ list }) {
  return (
    <div>
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
          {list.map((plan, index) => (
            <SwiperSlide key={index}>
              <PlanningCard key={index} plans={plan} />
            </SwiperSlide>
          ))}
        </div>
        <div class="swiper-pagination m-auto z-[1]"></div>
      </Swiper>
    </div>
  );
}
