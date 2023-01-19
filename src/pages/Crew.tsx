import React, { useState } from "react";

import Carousel from "../components/Carousel";
import { Profiles } from "../data";

export const Crew = () => {
  return (
    <div className="App">
      <Carousel slides={Profiles} />
    </div>
  );
};
