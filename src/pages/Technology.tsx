import React, { Fragment, useState } from "react";
import { Tech } from "../data";
import launch from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsule from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";

export const Technology = () => {
  const [currentCircle, setCurrentCircle] = useState<number>(0);
  return (
    <div className="App">
      <h1 className="uppercase text-4xl mt-20 text-gray-light">
        space launch 101
      </h1>

      <div className="flex  mt-36  justify-between">
        <div className="container flex md:w-48 flex-col gap-14">
          {Tech.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => setCurrentCircle(item.id - 1)}
                className={`hover:bg-white hover:text-black rounded-full outline-1 outline outline-white text-white  bg-none md:w-24 md:h-24 ${
                  currentCircle === item.id - 1 ? "bg-white text-black" : ""
                }`}
              >
                {item.id}
              </button>
            );
          })}
        </div>

        <div className="info text-gray-light ">
          <h4 className="uppercase text-2xl">the technology...</h4>
          <h1 className="uppercase  text-8xl mt-9 mb-4 ">
            {Tech[currentCircle].name}
          </h1>
          <h3 className="md:w-128 mb-14 leading-8">
            {Tech[currentCircle].description}
          </h3>
        </div>
        <div className="md:w-128 md:h-128 flex">
          <img
            src={
              Tech[currentCircle].name === "LAUNCH VEHICLE"
                ? launch
                : Tech[currentCircle].name === "SPACEPORT"
                ? spaceport
                : Tech[currentCircle].name === "SPACE CAPSULE"
                ? capsule
                : launch
            }
            alt="tech.name"
          />
        </div>
      </div>
    </div>
  );
};
