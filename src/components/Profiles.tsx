import React from "react";

export const Profiles = ({ profiles, setImg }: any) => {
  setImg(profiles.name);
  return (
    <>
      <h1 className="uppercase  text-9xl mt-9 mb-4 ">{profiles.title}</h1>
      <h1 className="uppercase  text-5xl mt-9 mb-4 ">{profiles.name}</h1>
      <h3 className="md:w-128 mb-14 leading-8">{profiles.description}</h3>
    </>
  );
};
