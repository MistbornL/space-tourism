import React, { useState } from "react";

type CarouselProps = {
  slides: {
    title: string;
    name: string;
    description: string;
    imageUrl: string;
  }[];
};
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleDotClick(index: number) {
    setCurrentSlide(index);
  }

  console.log(slides[currentSlide].name);

  return (
    <div className="mt-24 transition-transform duration-500">
      <div className="text-gray-light flex justify-between ">
        <div className="left-content transition-all ">
          <h1 className="uppercase text-6xl mt-20 mb-40 text-gray-light">
            meet your crew
          </h1>
          <h1 className="uppercase  text-4xl text-gray-dark mt-9 mb-4 ">
            {slides[currentSlide].title}
          </h1>
          <h1 className="uppercase  text-5xl mt-9 mb-4 ">
            {slides[currentSlide].name}
          </h1>
          <h3 className="md:w-128 mb-14 leading-8">
            {slides[currentSlide].description}
          </h3>
          <div className="dots-container flex gap-14">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`dot rounded-full bg-gray-dark md:w-4 md:h-4  cursor-pointer ${
                  currentSlide === index ? "selected bg-gray-light" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className="transition-all align-bottom md:h-230">
          <img
            src={
              slides[currentSlide].name === "Douglas Hurley"
                ? douglas
                : slides[currentSlide].name === "MARK SHUTTLEWORTH"
                ? mark
                : slides[currentSlide].name === "Victor Glover"
                ? victor
                : slides[currentSlide].name === "Anousheh Ansari"
                ? anousheh
                : douglas
            }
            alt={slides[currentSlide].title}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
