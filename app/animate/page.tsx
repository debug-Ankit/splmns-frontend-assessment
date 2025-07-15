"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AnimatedTag from "@/features/animated-tag/components/AnimatedTag";
import Particles from "@/features/animated-tag/components/Particles";

import { useAnimatedTagStore } from "@/features/animated-tag/store";

import type { PositionedTagItem } from "@/features/animated-tag/types";

const AnimatePage = () => {
  const router = useRouter();
  const tags = useAnimatedTagStore((state) => state.tags);
  const [positionedTags, setPositionedTags] = useState<PositionedTagItem[]>([]);

  useEffect(() => {
    if (tags.length === 0) {
      router.replace("/");
      return;
    }

    const randomized = tags.map((tag) => ({
      ...tag,
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    }));
    setPositionedTags(randomized);
  }, [tags]);

  return (
    <>
      <Link
        href="/"
        className="text-blue-500 hover:underline transition-all mt-6"
      >
        Go to Main Page
      </Link>

      <div className="relative aspect-[16/9] w-full max-w-5xl border border-gray-600 bg-gray-900 overflow-hidden">
        <Particles />
        {positionedTags.map((tag) => (
          <AnimatedTag
            key={tag.id}
            id={tag.id}
            text={tag.text}
            top={tag.top}
            left={tag.left}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatePage;
