import Image from "next/image";
import React from "react";
import { Folder } from "./svg";
import { motion } from "framer-motion";

const Author = ({ data }: { data: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex gap-3 w-full max-w-[800px] mx-auto flex-wrap"
    >
      <motion.div
        className="h-[72px] w-[72px] relative rounded-full overflow-hidden "
        initial={{ scale: 2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Image
          layout="fill"
          className="transition transform hover:scale-150 duration-300"
          objectFit="cover"
          alt="img"
          src={"/neon.jpg"}
        />
      </motion.div>
      <div className="">
        <span className="text-[14px] text-black dark:text-[#cfcfcf]  font-[500] ">
          Written By: {data}
        </span>
        <p className="flex items-center space-x-2 text-[11px] ">
          <span>All posts by the author</span> <Folder />
        </p>
      </div>
      <p className="w-full">
        Hello, everyone! I&lsquo;m Anthony Ezeh, consectetur adipisicing elit.
        Eveniet modi earum commodi voluptatibus repellendus ducimus maiores
        illum quo, enim iste?
      </p>
    </motion.div>
  );
};

export default Author;
