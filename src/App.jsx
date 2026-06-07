import { useState, useEffect, useRef } from "react";

import Cover from "./slides/Cover";
import Chapter1Ext from "./slides/Chapter1-ext";
import Chapter1Int from "./slides/Chapter1-int";
import Chapter2Tools from "./slides/Chapter2-tools";
import Chapter2Projects from "./slides/Chapter2-projects";
import End from "./slides/End";

import Cursor from "./Cursor";
import MobileWarning from "./MobileWarning";
import DebugSize from "./DebugSize";

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

  const throttledRef = useRef(false);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    const handleScroll = (e) => {
      if (throttledRef.current) return;

      throttledRef.current = true;

      if (e.deltaY > 0) nextSlide();
      if (e.deltaY < 0) prevSlide();

      setTimeout(() => {
        throttledRef.current = false;
      }, 600);
    };

    document.addEventListener("keydown", handleKey);
    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("wheel", handleScroll);
    };
  }, [slideIndex]);

  return (
    <div
      className="w-screen h-screen overflow-hidden flex items-center justify-center relative"
      onClick={handleNav}
    >
      <MobileWarning />
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
