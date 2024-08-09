import React, { useState } from "react";
import FormationCard from "../../components/FormationCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.css";
import SwiperCore, { Pagination } from "swiper/core";

export default function FormationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? formations.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === formations.length - 1 ? 0 : prevIndex + 1
    );
  };
  const formations = [
    {
      title: "Reformer",
      image: require("../../images/reformer.jpg"),
      prices: ["2299 €", "999 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Matwork",
      image: require("../../images/reformer.jpg"),
      prices: ["1599 €", "399 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Chaise",
      image: require("../../images/formation-2.jpg"),
      prices: ["699 €", "299 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Cadillac",
      image: require("../../images/reformer-gyrotonic.jpg"),
      prices: ["999 €", "399 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Barrils",
      image: require("../../images/formation-1.jpg"),
      prices: ["399 €", "299 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Anatomie Fonctionnelle et biomécanique en privée",
      image: require("../../images/formation-5.png"),
      prices: ["1199 €"],
    },
    {
      title: "Reformer",
      image: require("../../images/reformer.jpg"),
      prices: ["1599 €"],
    },
  ];
  return (
    <div>
      <div className="mb-4 flex flex-col justify-center items-center gap-4 md:gap-2">
        <p className="text-blueText text-2xl font-ebGaramond">
          Formations professionnelles pour devenir instructeur Pilates
        </p>
        <p className=" md:mx-40 text-center ">
          Explorez les bénéfices de sélectionner notre centre pour votre
          formation en Pilates : Nos programmes de premier ordre sont dirigés
          par des instructeurs chevronnés qui vous guideront tout au long de
          votre parcours.
        </p>
      </div>
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
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
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
        <div className="flex flex-nowrap gap-2 overflow-hidden">
          {formations.map((formation, index) => (
            <SwiperSlide key={index}>
              <FormationCard formation={formation} />
            </SwiperSlide>
          ))}
        </div>
        <div class="swiper-pagination m-auto z-[1] hidden lg:block"></div>
        <div className="flex justify-center gap-3 m-3">
          <button
            className="flex justify-center items-center bg-bgColor rounded-full w-10 h-10"
            onClick={handlePrevClick}
          >
            <FaArrowLeftLong className="text-marron" />
          </button>
          <button
            className="flex justify-center items-center bg-bgColor rounded-full w-10 h-10"
            onClick={handleNextClick}
          >
            <FaArrowRightLong className="text-marron" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
