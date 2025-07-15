"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import TagInputForm from "@/features/animated-tag/components/TagInputForm";
import TagList from "@/features/animated-tag/components/TagList";

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
          className="text-blue-500 hover:underline transition-all mt-6"
        >
          Go to Animated Page
        </Link>
      )}

      {tags.length > 0 && <TagList tags={tags} />}
    </>
  );
};

export default Home;
