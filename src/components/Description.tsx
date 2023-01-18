import React from "react";

type Planet = {
  name: string;
  description: string;
  distance: string;
  time: string;
};

export const Description = (planet: any) => {
  return (
    <>
      <h1 className="uppercase  text-9xl mt-9 mb-4 ">{planet.name}</h1>
      <h3 className="md:w-128 mb-14 leading-8">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </h3>
      <div className="bottom-desc flex justify-between border-t-2">
        <h4>AVG.DISTANCE</h4>
        <h3>Est. travel time</h3>
      </div>
      <div className="flex justify-between text-4xl">
        <h4>384,400 km</h4>
        <h4>3 days</h4>
      </div>
    </>
  );
};
