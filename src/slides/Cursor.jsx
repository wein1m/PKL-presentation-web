import gsap from "gsap";
import { useEffect, useRef } from "react";

import rightArrow from "../assets/cursors/right-arrow.png";
import leftArrow from "../assets/cursors/left-arrow.png";

export default function Cursor() {
  const isMobile = window.innerWidth < 768;
  const cursorRef = useRef(null);

  const pos = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  const screenHalf = window.innerWidth / 2;

  useEffect(() => {
    if (!cursorRef.current) return;

    const onClick = (e) => {
      const ripple = document.createElement("div");

      ripple.className =
        "absolute inset-0 rounded-full bg-blue-300/50 pointer-events-none size-10";

      cursorRef.current.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 4,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            ripple.remove();
          },
        },
      );
    };

    const onMove = (e) => {
      gsap.to(pos.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3",
        onUpdate: () => {
          gsap.set(cursorRef.current, { x: pos.current.x, y: pos.current.y });
        },
      });

      if (e.clientX < screenHalf) {
        document.body.style.cursor = `url(${leftArrow}), pointer`;
      } else {
        document.body.style.cursor = `url(${rightArrow}), pointer`;
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return isMobile ? (
    <div ref={cursorRef} />
  ) : (
    <div
      ref={cursorRef}
      className="pointer-events-none z-997 absolute top-2 left-2 -translate-y-1/2 -translate-x-1/2 size-10 bg-blue-300/50 rounded-full"
    />
  );
}
