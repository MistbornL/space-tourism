import React, { Fragment, useState } from "react";
import { Tech } from "../data";

export const Technology = () => {
  const [currentCircle, setCurrentCircle] = useState<number>(0);

  return (
    <div className="App">
      <h1 className="uppercase text-4xl mt-20 text-gray-light">
        space launch 101
      </h1>

      <div className="div-container flex gap-14 mt-36 flex-col">
        {Tech.map((item) => {
          return (
            <Fragment key={item.id}>
              <button
                onClick={() => setCurrentCircle(item.id)}
                className={` rounded-full outline-1 outline outline-white text-white  bg-none md:w-24 md:h-24 ${
                  currentCircle === item.id ? "bg-white text-black" : ""
                }`}
              >
                {item.id}
              </button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
