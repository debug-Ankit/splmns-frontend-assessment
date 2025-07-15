"use client";

import React, { useRef } from "react";

import { useAnimatedTagAnimation } from "@/features/animated-tag/hooks/useAnimatedTagAnimation";

import type { PositionedTagItem } from "@/features/animated-tag/types";

type AnimatedTagProps = PositionedTagItem;

const AnimatedTag: React.FC<AnimatedTagProps> = ({ id, text, top, left }) => {
  const tagRef = useRef<HTMLDivElement>(null);

  useAnimatedTagAnimation(tagRef, left, top);

  return (
    <div
      ref={tagRef}
      key={id}
      className="absolute px-3 py-1 rounded bg-white border-0 shadow-none text-sm font-normal text-black tracking-wide break-words max-w-[200px]"
      style={{
        top: 0,
        left: 0,
        willChange: "transform",
      }}
    >
      {text}
    </div>
  );
};

export default AnimatedTag;
