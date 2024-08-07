import React, { useState } from "react";
import "../styles/image-slider.css"; // Create a CSS file for animations

const ImageSlider = ({ list, action }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mb-14 justify-between flex flex-col-reverse lg:flex-row gap-5 max-lg:flex-wrap">
      <div className="flex flex-col justify-center max-md:items-center px-3 xl:px-2 md:px-5 lg:min-w-[30%] lg:max-w-[40%] gap-5 font-lato">
        <p className="text-marron text-3xl leading-snug hidden lg:block title-animation">
          {list[currentIndex].title}
        </p>
        <p
          className="leading-7"
          dangerouslySetInnerHTML={{ __html: list[currentIndex].description }}
        ></p>
        <button className="reserver-button flex justify-center md:mr-auto text-base rounded-lg px-10 py-4 max-md:w-full bg-bgColor text-marron font-lato">
          <div>{action}</div>
        </button>
      </div>
      <div className="flex items-center lg:items-baseline gap-10 overflow-hidden">
        {list.map((item, index) => (
          <img
            key={index}
            loading="lazy"
            src={item.image}
            alt="Gym"
            className={
              index === 0
                ? "rounded-lg w-[206px] h-[309px] sm:w-[300px] sm:h-[450px] object-cover cursor-pointer"
                : "rounded-lg w-[151px] h-[226px] sm:w-[240px] sm:h-[346px] object-cover cursor-pointer"
            }
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <p className="text-marron text-3xl leading-snug text-center lg:hidden title-animation">
        {list[currentIndex].title}
      </p>
    </div>
  );
};

export default ImageSlider;
