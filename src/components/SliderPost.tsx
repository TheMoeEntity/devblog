"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Post } from "./types";
import { motion } from "framer-motion";
import { Bookmark, Clock } from "@/app/post/components/svg";

const SliderPost = ({ data }: { data: Post }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative cursor-pointer flex justify-center items-center max-w-[1000px]  overflow-hidden w-full h-[250px] lg:h-[300px]  mx-auto "
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: hovered ? "-20%" : "0" }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-2 left-0 right-0 text-center bg-opacity-70 z-40 px-4 text-white "
      >
        <div className="flex space-x-4 justify-center items-center w-full ">
          <>
            <Bookmark /> {data.categories[0]}
          </>
          <>
            <Clock /> {data.date}
          </>
        </div>
        <h3 className="text-2xl drop-shadow-sm shadow-black  py-2">
          {data.title}{" "}
        </h3>
      </motion.div>
      <motion.div className="relative w-full h-full">
        <Image
          src={data.image[0]}
          alt="paragraph"
          className={` duration-300  z-10 overflow-hidden ${
            hovered
              ? "transition transform scale-110  filter brightness-50 "
              : ""
          }`}
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
        />
      </motion.div>
    </motion.div>
  );
};

export default SliderPost;
