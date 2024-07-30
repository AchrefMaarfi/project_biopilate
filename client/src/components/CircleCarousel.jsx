import React, { useState } from "react";
import "tailwindcss/tailwind.css";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const getLeftValue = () => {
    return `-${currentIndex * 100}%`;
  };

  return (
    <div className="relative max-w-md mx-auto overflow-hidden">
      <div
        className="carousel-inner flex transition-all ease-in-out duration-500"
        style={{ left: getLeftValue(), position: "relative" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item min-w-full flex justify-center"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="rounded-full w-[220px] h-[220px] sm:w-[312px] sm:h-[312px] object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-800 p-2 rounded-full bg-opacity-75 "
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-800 p-2 rounded-full  bg-opacity-75"
      >
        &#9654;
      </button>
    </div>
  );
}
