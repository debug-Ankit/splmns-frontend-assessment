"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { TagInputForm, TagList } from "@/features/animated-tag/components";

import { useAnimatedTagStore } from "@/features/animated-tag/store";

const Home = () => {
  const router = useRouter();
  const { tags, addTag } = useAnimatedTagStore();

  const handleTagSubmit = (input: string) => {
    addTag(input);
    router.push("/animate");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Enter a Name or Phrase</h1>
      <TagInputForm onSubmit={handleTagSubmit} />

      {tags.length > 0 && (
        <Link
          href="/animate"
          className="bg-blue-600 text-white px-4 py-2 rounded transition-all mt-6 hover:bg-blue-700"
        >
          Go to Animated Page
        </Link>
      )}

      {tags.length > 0 && <TagList tags={tags} />}
    </>
  );
};

export default Home;
