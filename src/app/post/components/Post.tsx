"use client";

import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";
import { type Post } from "@/components/types";
import "../../globals.css";
import PostInfo from "./PostInfo";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Post = ({ data, number }: { number: number; data: Post }): any => {
  const [color, setColor] = useState<string>("#ffffff");
  const [hovered, setHovered] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ duration: 0.5 }}
      onClick={() => router.push(`/post/${data.id}`)}
      className="grid grid-cols-10  bg-lightTwo dark:bg-darkTwo cursor-pointer rounded-lg w-full gap-2 lg:gap-6"
    >
      <div className="relative w-fit col-span-3">
        {/* Index */}
        <span
          style={{ backgroundColor: color }}
          className={`z-10 w-5 h-5 flex justify-center items-center rounded-full text-black shadow-md absolute -top-1.5 drop-shadow-lg -left-1.5`}
        >
          {number + 1}
        </span>

        <motion.div
          className="relative w-[100px] h-[100px] overflow-hidden  rounded-lg"
          initial={{ scale: 2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={data.image[0]}
            alt="paragraph"
            objectFit="cover"
            fill
            sizes="100vw"
            priority
            quality={100}
            className={`w-full h-full  transition transform duration-300 ${hovered ? "scale-125" : ""} `}
          />
        </motion.div>
      </div>

      <div className="w-full col-span-7 flex flex-col justify-around">
        <h1 className="text-black dark:text-white text-[16px] font-[500] truncate-2-lines capitalize">
          {data.title}
        </h1>

        <div className="w-full">
          <PostInfo data={data} />
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
