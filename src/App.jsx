import { useState } from "react";
import Cover from "./slides/Cover";
import Chapter1 from "./slides/Chapter1";
import Cursor from "./slides/Cursor";

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [Cover, Chapter1];
  const CurrentSlide = slides[slideIndex];

  const nextSlide = () => {
    if (slideIndex === slides.length - 1) return;
    setSlideIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    if (slideIndex === 0) return;
    setSlideIndex((prev) => prev - 1);
  };

  return (
    <div className="w-screen h-screen">
      {/* <p className="absolute top-20 right-20 text-black font-bold text-9xl z-999">
        {slideIndex}
      </p> */}
      <div
        className="z-998 w-1/2 h-full absolute top-0 left-0 hover:cursor-[url(./assets/left-arrow.png),pointer]"
        onClick={prevSlide}
      />
      <div
        className="z-998 w-1/2 h-full absolute top-0 right-0 hover:cursor-[url(./assets/right-arrow.png),pointer]"
        onClick={nextSlide}
      />
      <Cursor />
      <CurrentSlide />
    </div>
  );
}
