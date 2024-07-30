// import React from "react";

// export default function ImageSlider({ list }) {
//   return (
//     <div className="mb-14 justify-between flex flex-col-reverse lg:flex-row gap-5 max-lg:flex-wrap">
//       <div className="flex flex-col my-14 sm:my-20 px-3 xl:px-2 md:px-5 lg:max-w-[35%] gap-5 font-lato">
//         <p className="text-marron text-3xl leading-snug hidden lg:block">
//           {list[0].title}
//         </p>
//         <p
//           className="leading-7"
//           dangerouslySetInnerHTML={{ __html: list[0].description }}
//         ></p>
//         <button className="flex mr-auto flex-col justify-center text-base rounded-lg px-10 py-4 bg-bgColor text-marron font-lato">
//           Réserver
//         </button>
//       </div>
//       <div className="flex items-center lg:items-baseline gap-10 overflow-hidden">
//         <img
//           loading="lazy"
//           src={list[0].image}
//           alt="Gym"
//           className="rounded-lg w-[220px] h-[220px] sm:w-[300px] sm:h-[450px] object-cover cursor-pointer"
//         />
//         <img
//           loading="lazy"
//           src={list[1].image}
//           alt="Gym"
//           className="rounded-lg w-[220px] h-[220px] sm:w-[240px] sm:h-[346px] object-cover cursor-pointer"
//         />
//         <img
//           loading="lazy"
//           src={list[2].image}
//           alt="Gym"
//           className="rounded-lg w-[220px] h-[220px] sm:w-[240px] sm:h-[346px] object-cover cursor-pointer"
//         />
//       </div>
//       <p className="text-marron text-3xl leading-snug text-center lg:hidden">
//         {list[0].title}
//       </p>
//     </div>
//   );
// }

import React, { useState } from "react";
import "../styles/image-slider.css"; // Create a CSS file for animations

const ImageSlider = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mb-14 justify-between flex flex-col-reverse lg:flex-row gap-5 max-lg:flex-wrap">
      <div className="flex flex-col justify-center max-md:items-center px-3 xl:px-2 md:px-5 lg:max-w-[35%] gap-5 font-lato">
        <p className="text-marron text-3xl leading-snug hidden lg:block title-animation">
          {list[currentIndex].title}
        </p>
        <p
          className="leading-7"
          dangerouslySetInnerHTML={{ __html: list[currentIndex].description }}
        ></p>
        <button className="reserver-button flex justify-center md:mr-auto text-base rounded-lg px-10 py-4 max-md:w-full bg-bgColor text-marron font-lato">
          <div>Réserver</div>
        </button>
      </div>
      <div className="flex items-center lg:items-baseline gap-10 overflow-hidden">
        <img
          loading="lazy"
          src={list[0].image}
          alt="Gym"
          className="rounded-lg w-[206px] h-[309px] sm:w-[300px] sm:h-[450px] object-cover cursor-pointer"
          onClick={() => handleImageClick(0)}
        />
        <img
          loading="lazy"
          src={list[1].image}
          alt="Gym"
          className="rounded-lg w-[151px] h-[226px] sm:w-[240px] sm:h-[346px] object-cover cursor-pointer"
          onClick={() => handleImageClick(1)}
        />
        <img
          loading="lazy"
          src={list[2].image}
          alt="Gym"
          className="rounded-lg w-[220px] h-[220px] sm:w-[240px] sm:h-[346px] object-cover cursor-pointer"
          onClick={() => handleImageClick(2)}
        />
      </div>
      <p className="text-marron text-3xl leading-snug text-center lg:hidden title-animation">
        {list[currentIndex].title}
      </p>
    </div>
  );
};

export default ImageSlider;
