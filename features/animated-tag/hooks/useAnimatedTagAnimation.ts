import { useEffect, useRef, type RefObject } from "react";

export const useAnimatedTagAnimation = (
  tagRef: RefObject<HTMLDivElement | null>,
  left: string,
  top: string
) => {
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const el = tagRef.current;
    if (!el) return;
    const container = el.parentElement;
    if (!container) return;

    let x = parseFloat(left);
    let y = parseFloat(top);

    // Get tag size
    const rect = el.getBoundingClientRect();
    const tagWidth = rect.width;
    const tagHeight = rect.height;

    // Get parent size
    const bounds = container.getBoundingClientRect();
    const parentWidth = bounds.width;
    const parentHeight = bounds.height;

    let vx = (Math.random() - 0.5) * 2;
    let vy = (Math.random() - 0.5) * 2;

    const move = () => {
      if (x + tagWidth >= parentWidth || x <= 0) vx *= -1;
      if (y + tagHeight >= parentHeight || y <= 0) vy *= -1;

      x += vx;
      y += vy;

      el.style.transform = `translate(${x}px, ${y}px)`;

      frameIdRef.current = requestAnimationFrame(move);
    };

    frameIdRef.current = requestAnimationFrame(move);

    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, [left, top, tagRef]);
};
