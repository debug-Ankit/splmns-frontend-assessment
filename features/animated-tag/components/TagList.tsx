import React from "react";

import type { TagListItem } from "@/features/animated-tag/types";

type TagListProps = {
  tags: TagListItem[];
};

const TagList: React.FC<TagListProps> = ({ tags }) => (
  <div className="flex flex-col mt-6 text-sm w-full max-w-md">
    <p className="font-semibold">Last submitted:</p>
    <ul className="list-disc ml-6">
      {tags.map((tag) => (
        <li key={tag.id}>{tag.text}</li>
      ))}
    </ul>
  </div>
);

export default TagList;
