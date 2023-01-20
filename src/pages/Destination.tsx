import React, { useState } from "react";
import { Description } from "../components/Description";
import { Data } from "../data";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

export const Destination = () => {
  const [selected, setSelected] = useState<string>("moon");

  const planets: string[] = ["moon", "mars", "europa", "titan"];
  const [img, setImg] = useState<string>("moon");
  function planetChosen() {
    switch (selected) {
      case "moon":
        return <Description planet={Data.moon} setImg={setImg} />;
      case "mars":
        return <Description planet={Data.mars} setImg={setImg} />;
      case "europa":
        return <Description planet={Data.europa} setImg={setImg} />;
      case "titan":
        return <Description planet={Data.titan} setImg={setImg} />;
      default:
        return <Description planet={Data.moon} setImg={setImg} />;
    }
  }

  return (
    <div className="App">
      <h1 className="uppercase text-lg mt-20 text-gray-light">
        pick your destination
      </h1>
      <div className="space flex justify-between mt-24 md:max-w-7xl">
        <img
          style={{ maxWidth: "445px", height: "445px" }}
          className=""
          src={
            img === "moon"
              ? moon
              : img === "mars"
              ? mars
              : img === "europa"
              ? europa
              : img === "titan"
              ? titan
              : undefined
          }
          alt="moon"
        />

        <div className="description text-gray-light">
          <ul className="flex uppercase text-gray-light gap-8">
            {planets.map((planet, index) => {
              return (
                <li
                  className={`${
                    planet === selected
                      ? "selected cursor-pointer"
                      : " cursor-pointer"
                  }`}
                  onClick={() => setSelected(planet)}
                  key={index}
                >
                  {planet}
                </li>
              );
            })}
          </ul>
          {planetChosen()}
        </div>
      </div>
    </div>
  );
};
