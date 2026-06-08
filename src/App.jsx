import { useState, useEffect, useRef } from "react";

import Cover from "./slides/Cover";

import IntroChapter1 from "./slides/Intro-Chapter1";
import Chapter1 from "./slides/Chapter1";

import IntroChapter2 from "./slides/Intro-Chapter2";
import Chapter2Ext from "./slides/Chapter2-ext";
import Chapter2Int from "./slides/Chapter2-int";

import IntroChapter3 from "./slides/Intro-Chapter3";
import Chapter3Tools from "./slides/Chapter3-tools";
import Chapter3Projects from "./slides/Chapter3-projects";
import Chapter3Schedule from "./slides/Chapter3-schedule";

import IntroChapter4 from "./slides/Intro-Chapter4";
import Chapter4Closing from "./slides/Chapter4-closing";
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
    IntroChapter1,
    Chapter1,
    IntroChapter2,
    Chapter2Ext,
    Chapter2Int,
    IntroChapter3,
    Chapter3Tools,
    Chapter3Projects,
    Chapter3Schedule,
    IntroChapter4,
    Chapter4Closing,
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
