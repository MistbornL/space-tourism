import React from "react";

export const Home = () => {
  return (
    <div className="App ">
      <main className="flex-col  text-gray-light mt-64">
        <h3 className="uppercase text-2xl mb-4 text-gray">
          so you want to travel to
        </h3>
        <h1 className="text-9xl mb-8 uppercase">space</h1>
        <h5 className="leading-8 md:w-96">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </h5>
        <div className="absolute rounded-full items-center grid  md:right-56 md:top-96 bg-gray-light w-72 h-72">
          <h1 className="text-gray-dark text-5xl flex text-center justify-center">
            Explore
          </h1>
        </div>
      </main>
    </div>
  );
};
