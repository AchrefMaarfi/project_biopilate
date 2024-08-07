import React from "react";
import { useLocation } from "react-router-dom";

export default function Article() {
  const location = useLocation();
  const { article } = location.state;

  return (
    <div className="flex flex-col mt-4 mx-8 md:mx-12 mb-12">
      <p className="text-marron text-6xl leading-snug font-ebGaramond font-bold">
        Ce n'est pas parce qu'on est vieux qu'on n'a pas besoin ni envie de
        vacances. 
      </p>
      <img
        src={require("../../images/gym.jpg")}
        alt="Article"
        className="rounded-3xl w-full h-[400px] object-cover mt-4"
      />
    </div>
  );
}
