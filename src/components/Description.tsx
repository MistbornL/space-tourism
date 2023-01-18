import React from "react";

type Planet = {
  name: string;
  description: string;
  distance: string;
  time: string;
  img: string;
};

export const Description = ({ planet, setImg }: any) => {
  setImg(planet.name);
  return (
    <>
      <h1 className="uppercase  text-9xl mt-9 mb-4 ">{planet.name}</h1>
      <h3 className="md:w-128 mb-14 leading-8">{planet.description}</h3>
      <div className="bottom-desc flex justify-between border-t-2">
        <h4>AVG.DISTANCE</h4>
        <h3>{planet.distance}</h3>
      </div>
      <div className="flex justify-between text-4xl">
        <h4>384,400 km</h4>
        <h4>{planet.time}</h4>
      </div>
    </>
  );
};
