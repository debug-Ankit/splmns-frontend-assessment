export type AnimatedTag = {
  id: number;
  text: string;
};

export type AnimatedTagStore = {
  tags: AnimatedTag[];
  addTag: (text: string) => void;
  clearTags: () => void;
};
