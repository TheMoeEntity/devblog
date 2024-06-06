import { type Comments } from "@/components/types";
import Image from "next/image";
import React, { type ReactElement } from "react";
import { Clock } from "./svg";
import { motion } from "framer-motion";

const CommentComp = ({ comment }: { comment: Comments }): ReactElement => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0,  }}
      className="space-y-3 rounded-lg  border-[2px] border-[#F9F9FA] p-4 lg:p-6 bg-lightTwo dark:bg-darkTwo "
    >
      <header className="flex w-full space-x-3 items-center">
        <motion.div
          className="h-[50px] w-[50px] relative rounded-full overflow-hidden dark:text-white"
          initial={{ scale: 1.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            layout="fill"
            className="transition-transform duration-300"
            objectFit="cover"
            alt="img"
            src={"/moonlight.jpg"}
          />
        </motion.div>
        <div className="flex flex-col justify-center text-start dark:text-white text-black">
          <motion.span
            className="text-[18px] capitalize font-[500]"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {comment.username}
          </motion.span>
          <motion.p
            className="flex font-[400] space-x-2 text-[11px]"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>{comment.date}</span> <Clock />
          </motion.p>
        </div>
      </header>

      <motion.p
        className="w-full text-[14px] dark:text-[#d1d1d1] text-black font-[400] text-start overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1  }}
      >
        {comment.comment}
      </motion.p>
    </motion.div>
  );
};

export default CommentComp;
