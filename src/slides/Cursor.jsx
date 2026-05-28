import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  const pos = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    if (!cursorRef.current) return;

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
    };

    window.addEventListener("mousemove", onMove);

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="z-997 absolute top-2 left-2 -translate-y-1/2 -translate-x-1/2 size-10 bg-blue-300/50 rounded-full"
    />
  );
}
