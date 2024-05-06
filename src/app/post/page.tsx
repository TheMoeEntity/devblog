import React from "react";
import { Bookmark, Clock, Comment, Eye, Hash, Pen } from "./components/svg";
import Image from "next/image";
import Paragraph from "./components/Paragraph";
import { PostDummy } from "@/components/dummies";

const page = () => {
  return (
    <div className="w-full text-[#6d6d6d] min-h-screen p-4 space-y-6 ">
      {/* Date */}
      <div className="text-sm  ">
        <ul className="flex flex-wrap gap-x-4 justify-center">
          <li className="flex gap-x-1  items-center">
            <Clock />
            December 15, 2023
          </li>
          <li className="flex gap-x-1  items-center">
            <Pen />
            Anthony T.
          </li>
          <li className="flex gap-x-1  items-center">
            <Eye />
            526
          </li>
          <li className="flex gap-x-1  items-center">
            <Comment />
            40
          </li>
        </ul>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center space-y-6">
        <h1 className="font-[700] capitalize text-[#34343B] text-2xl text-center max-w-[250px]  ">
          The title of the national park
        </h1>
        <div className="relative w-full h-[200px] rounded-lg overflow-hidden ">
          <Image
            src={"/neon.jpg"}
            alt="postMain"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Paragraphs */}
      <Paragraph />
      <Paragraph />

      {/* Category */}
      <div className="flex items-center flex-wrap space-x-1 text-[12px] capitalize ">
        <Bookmark />
        <h3>Categories:</h3>
        <span>action</span>
        <span>action</span>
        <span>action</span>
      </div>

      {/* Tags */}
      <div className="flex items-center flex-wrap space-x-1 text-[12px] capitalize ">
        <Hash />
        <h3>Tags:</h3>
        <span>#action</span>
        <span>#action</span>
        <span>#action</span>
      </div>

      <hr />

      {/* About the author */}
    </div>
  );
};

export default page;
