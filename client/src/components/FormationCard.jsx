import React from "react";

export default function FormationCard({ formation }) {
  const isLevelNotFound = !formation.levels?.[0] || !formation.levels?.[1];
  return (
    <div className="flex flex-col justify-center items-center w-[300px] h-[524px] rounded-lg shadow-lg">
      <div className="px-6 py-6 flex flex-col justify-center items-center gap-8">
        <img
          loading="lazy"
          src={formation.image}
          alt="Gym"
          className="rounded-full w-[240px] h-[240px] object-cover shadow-lg"
        />
        <div className="flex flex-col gap-6">
          <p className="text-marron text-xl text-center font-bold">
            {formation.title}
          </p>
          <div className="flex gap-6">
            <div
              className={`flex flex-col gap-1 ${
                isLevelNotFound ? "justify-center items-center" : ""
              }`}
            >
              <p className="text-sm">{formation.prices[0]}</p>
              <p className="text-sm">{formation.prices[1]}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">{formation.levels?.[0] || ""}</p>
              <p className="text-sm">{formation.levels?.[1] || ""}</p>
            </div>
          </div>
        </div>
      </div>

      <button className="reserver-button flex flex-col justify-center rounded-lg mb-4 px-24 py-3 bg-bgColor text-marron">
        Réserver
      </button>
    </div>
  );
}
