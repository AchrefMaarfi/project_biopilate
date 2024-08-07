import React, { useState, useEffect } from "react";

export default function PlanningCard({ plans, calendar }) {
  const [isHover, setIsHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const transitionClass = `transition-all duration-500 ease-in-out`;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setIsHover(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setIsHover(false);
  };

  const isActive = isHover;
  return (
    <div>
      <div className="relative rounded-lg w-[200px] h-[318px] sm:w-[315px] sm:h-[500px] cursor-pointer shadow-xl">
        <div className="absolute inset-0 size-full">
          <img
            loading="lazy"
            src={plans.image}
            alt="Gym"
            className={"size-full rounded-lg object-cover"}
          />
        </div>
        {/* overlay */}
        <div
          className="relative text-bgColor size-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black to-[70%] rounded-lg ${transitionClass} ${
              isActive ? "opacity-15" : "opacity-75"
            }`}
          />
          <div className="relative flex flex-col items-center size-full font-ebGaramond">
            <h3
              className={`text-2xl font-semibold absolute bottom-0 left-0 right-0 text-center pb-24 ${transitionClass} ${
                isActive ? "translate-y-[-150px] opacity-0 text-black" : ""
              } `}
            >
              {plans.title}
            </h3>
            <h3
              className={`text-lg font-semibold absolute bottom-0 left-0 right-0 text-center pb-14 ${transitionClass} ${
                isActive ? "translate-y-[-150px] opacity-0 text-black" : ""
              } `}
            >
              {plans.niveau}
            </h3>
            <p className="text-sm leading-4 italic text-center text-wrap line-clamp-6 px-2"></p>
            <div
              className={`flex flex-col pb-2 gap-5 ml-[-315px] ${transitionClass} ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bg-white text-marron rounded-md size-full flex flex-col justify-center flex-nowrap items-center gap-4 py-16 px-8 font-lato">
                <div className="border-marron border rounded-lg px-5 py-4">
                  {plans.date}
                </div>
                <div className="flex flex-col justify-center gap-4">
                  {calendar.map((item, index) => (
                    <div key={index}>
                      {item.map((day, i) => (
                        <p key={i}>{day}</p>
                      ))}
                    </div>
                  ))}
                </div>
                {/* <p className="text-sm leading-4 italic text-center text-wrap line-clamp-6 px-2">
                  {plans.niveau}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
