import { create } from "zustand";

import type { AnimatedTagStore } from "@/features/animated-tag/store/types";

export const useAnimatedTagStore = create<AnimatedTagStore>()((set, get) => ({
  tags: [],
  addTag: (text: string) => {
    const newTag = { id: Date.now(), text };
    const newTags = [...get().tags.slice(-4), newTag];
    set({ tags: newTags });
  },
  clearTags: () => set({ tags: [] }),
}));
