import React, { useState } from "react";
import { Description } from "../components/Description";
import { Data } from "../data";

export const Destination = () => {
  const [selected, setSelected] = useState("moon");

  const planets: string[] = ["moon", "mars", "europa", "titan"];

  function planetChosen() {
    switch (planets) {
      case ["moon"]:
        return <Description planet={Data.moon} />;
      case ["mars"]:
        return <Description planet={Data.mars} />;
      case ["europa"]:
        return <Description planet={Data.europa} />;
      case ["titan"]:
        return <Description planet={Data.titan} />;
      default:
        return <Description planet={Data.moon} />;
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
          src=""
          alt="moon"
        />

        <div className="description text-gray-light">
          <ul className="flex uppercase text-gray-light gap-8">
            {planets.map((planet, index) => {
              return (
                <li onClick={() => setSelected(planet)} key={index}>
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
