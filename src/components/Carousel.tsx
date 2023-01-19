import React, { useState } from "react";

type CarouselProps = {
  slides: {
    title: string;
    content: string;
    imageUrl: string;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleDotClick(index: number) {
    setCurrentSlide(index);
  }

  return (
    <div className="">
      <div>
        {slides[currentSlide].title}
        {slides[currentSlide].content}
        <img
          src={slides[currentSlide].imageUrl}
          alt={slides[currentSlide].title}
        />
      </div>
      <div className="dots-container flex gap-14">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`dot rounded-full bg-gray-light md:w-4 md:h-4  cursor-pointer ${
              currentSlide === index ? "selected" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
