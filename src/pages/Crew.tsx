import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Carousel from "../components/Carousel";
import { Profiles } from "../data";

export const Crew = () => {
  useEffect(() => {
    document.body.className = "crew";
  }, []);

  return (
    <div className="App ">
      <Carousel slides={Profiles} />
    </div>
  );
};
