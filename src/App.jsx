import { useState, useEffect } from "react";

import Cover from "./slides/Cover";
import Chapter1Ext from "./slides/Chapter1-ext";
import Chapter1Int from "./slides/Chapter1-int";
import Chapter2Tools from "./slides/Chapter2-tools";
import Chapter2Projects from "./slides/Chapter2-projects";
import End from "./slides/End";

import Cursor from "./slides/Cursor";

const DEFAULT_WIDTH = 1764;
const DEFAULT_HEIGHT = 974;

function useViewportScale() {
  const [scale, setScale] = useState(() =>
    Math.min(
      window.innerWidth / DEFAULT_WIDTH,
      window.innerHeight / DEFAULT_HEIGHT,
    ),
  );

  useEffect(() => {
    const update = () => {
      setScale(
        Math.min(
          window.innerWidth / DEFAULT_WIDTH,
          window.innerHeight / DEFAULT_HEIGHT,
        ),
      );
    };

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const scale = useViewportScale();

  const slides = [
    Cover,
    Chapter1Ext,
    Chapter1Int,
    Chapter2Tools,
    Chapter2Projects,
    End,
  ];

  const CurrentSlide = slides[slideIndex];

  const nextSlide = () => {
    if (slideIndex === slides.length - 1) return;
    setSlideIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (slideIndex === 0) return;
    setSlideIndex((prev) => prev - 1);
  };

  const handleNav = (e) => {
    if (e.target.closest(".no-slide-nav")) return;

    const screenHalf = window.innerWidth / 2;

    if (e.clientX < screenHalf) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden flex items-center justify-center relative"
      onClick={handleNav}
    >
      <Cursor />

      <div
        className="slides-wrapper origin-center shrink-0 relative"
        style={{
          width: DEFAULT_WIDTH,
          height: DEFAULT_HEIGHT,
          transform: `scale(${scale})`,
          willChange: "transform",
        }}
      >
        <CurrentSlide />
      </div>
    </div>
  );
}
