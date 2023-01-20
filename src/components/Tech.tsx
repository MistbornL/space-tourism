import React from "react";

type TechProps = {
  name: string;
  description: string;
};

export const Tech: React.FC<TechProps> = ({ tech }) => {
  return (
    <>
      <h4 className="uppercase text-sm">the technology...</h4>
      <h1 className="uppercase  text-9xl mt-9 mb-4 ">{tech.name}</h1>
      <h3 className="md:w-128 mb-14 leading-8">{tech.description}</h3>

      <img src="" alt="tech.name" />
    </>
  );
};
