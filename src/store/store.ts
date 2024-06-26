/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const postStore = create(
  persist(
    (set, get: any) => ({
      post: [],

      save: (data: string) => {
        const store = get().post;
        const isInPost = store.find((post: string) => {
          return post == data;
        });

        if (isInPost) {
          return; // Item already in post, no action needed
        } else {
          const newPost = [...store, data];
          return set({ post: newPost });
        }
      },

      unsave: (data: string) => {
        const post = get().post;
        const newPost = post.filter((postItem: string) => postItem !== data);
        return set({ post: newPost });
      },
    }),
    { name: "post" }
  )
);
