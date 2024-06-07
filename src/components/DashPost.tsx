"use client";
import React, { ReactElement } from "react";
import Image from "next/image";
import { Bookmark, Eye, Message } from "@/app/post/components/svg"; // Make sure this path is correct
import { Post as PostType } from "./types";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface PostProps {
  data: PostType;
}

export const DashPost = ({ data }: PostProps): ReactElement => {
  const router = useRouter();
  const truncateText = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const truncatedText = truncateText(data.paragraph[0].text, 30);

  return (
    <motion.div
      onClick={() => router.push("/post")}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="my-10 cursor-pointer text-black dark:text-white"
    >
      <div className="z-20 relative w-full mx-auto h-[290px]">
        <Image
          src={data.image[0]}
          alt="paragraph"
          className="transition transform hover:scale-105 rounded-lg overflow-hidden duration-300 h-[290px] mx-auto w-full max-w-[355px]"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
        />
      </div>

      <div className="relative -mt-4 z-30 rounded-lg shadow-lg overflow-hidden bg-lightTwo dark:bg-darkTwo w-full max-w-[335px] space-y-4 mx-auto py-6 px-4">
        <div className="flex gap-4 justify-start items-center">
          <Bookmark />
          <span className="text-black dark:text-white text-[11px] ">
            {data.categories[0]}
          </span>
        </div>

        <motion.h1
          className="capitalize text-[25px]"
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {data.title}
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[15px] overflow-hidden whitespace-wrap text-ellipsis"
        >
          {truncatedText}
        </motion.h3>
        <div className="text-[11px] flex justify-start items-center gap-4">
          <span>Read More</span>
          <h3 className="flex justify-start gap-2 items-center">
            <Eye />
            <span>353</span>
          </h3>

          <div className="flex justify-start gap-2 items-center">
            <span>7</span>
            <Message />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashPost;
