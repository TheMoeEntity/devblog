import { Post } from "@/components/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const postStore = create(
  persist(
    (set, get: any) => ({
      post: [],
      total: 0,

      addToPost: (data: Post) => {
        const oldPost = get().post;
        const isInPost = oldPost.find((post: Post) => {
          return post.id === data.id;
        });

        if (isInPost) {
          return; // Item already in post, no action needed
        } else {
          const newPost = [...oldPost, data];
          return set({ post: newPost });
        }
      },
      removeFromPost: (data: any) => {
        const post = get().post;
        const newPost = post.filter(
          (postItem: any) => postItem.item._id !== data._id
        );
        return set({ post: newPost });
      },

      revalidate: (data: any) => {
        const post = get().post;
        const index = post.findIndex((item: any) => item._id === data._id);
        post[index].quantity = data.quantity;
        return set({ post: post });
      },
    }),
    { name: "post" }
  )
);
