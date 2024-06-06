"use client";
import { Paragraph as ParagraphType } from "@/components/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ParagraphProps {
  data: ParagraphType;
}

const Paragraph: React.FC<ParagraphProps> = ({ data }) => {
  const color =
    typeof window !== "undefined" ? localStorage.getItem("color") : null;

  return (
    <div className="space-y-6 mx-auto pt-5 lg:pt-10">
      <div className="space-y-6 mx-auto">
        {data.image && (
          <div className="relative max-w-[1000px] w-full h-[250px] lg:h-[666px] rounded-lg overflow-hidden mx-auto">
            <Image
              src={data.image}
              alt="paragraph"
              fill
              className="transition transform hover:scale-105 duration-300"
              quality={100}
              sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
            />
          </div>
        )}

        <motion.h3
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[15px] lg:max-w-[800px] mx-auto"
        >
          {data.text}
        </motion.h3>

        {/* Caption */}
        <div>
          {data.caption && (
            <motion.h5
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="border-l-[2px] border-darkThree dark:border-lightThree lg:max-w-[720px] mx-auto pl-7 italic text-[20px] dark:text-[#a2a2ac]  text-[#4e4d58] relative"
            >
              <span
                className="font-black text-[#6e6e6e42] text-6xl absolute left-0 top-0  "
                style={{ color: color || "#000" }}
              >
                &apos;
              </span>
              {data.caption}
            </motion.h5>
          )}
        </div>

        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-[15px] lg:max-w-[800px] mx-auto"
        >
          {data.moreText}
        </motion.h3>
      </div>
    </div>
  );
};

export default Paragraph;
