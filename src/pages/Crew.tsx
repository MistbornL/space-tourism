import React, { useState } from "react";
import { Description } from "../components/Description";
import { Data } from "../data";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { Profiles } from "../components/Profiles";

export const Crew = () => {
  const [selected, setSelected] = useState("moon");

  const planets: string[] = ["moon", "mars", "europa", "titan"];
  const [img, setImg] = useState("moon");
  function planetChosen() {
    switch (selected) {
      case "moon":
        return <Profiles profiles={Data.moon} setImg={setImg} />;
      case "mars":
        return <Profiles profiles={Data.mars} setImg={setImg} />;
      case "europa":
        return <Profiles profiles={Data.europa} setImg={setImg} />;
      case "titan":
        return <Profiles profiles={Data.titan} setImg={setImg} />;
      default:
        return <Profiles profiles={Data.moon} setImg={setImg} />;
    }
  }

  return (
    <div className="App">
      <h1 className="uppercase text-lg mt-20 text-gray-light">
        pick your destination
      </h1>
      <div className="space flex justify-between mt-24 md:max-w-7xl">
        <div className="description text-gray-light">{planetChosen()}</div>
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
      </div>
    </div>
  );
};
