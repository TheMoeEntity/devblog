"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { Clock, Comment, Eye, Pen } from "./svg";
import { Post } from "@/components/types";

const Info = ({ data }: { data: Post }): ReactElement => {
  const [color, setColor] = useState<string | null>("#000000");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedColor = localStorage.getItem("color");
      if (storedColor) {
        setColor(storedColor);
      }
    }
  }, []);



  return (
    <div
      className={`text-sm px-4 w-full fill-[${color}] lg:max-w-[800px] m-auto`}
    >
      <ul className={`flex flex-wrap gap-x-4 fill-[${color}] justify-center`}>
        <li className={`flex gap-x-1 fill-[${color}] items-center`}>
          <Clock />
          Published: {data.date}
        </li>
        <li className="flex gap-x-1 items-center">
          <Pen />
          {data.author}
        </li>
        <li className="flex gap-x-1 items-center">
          <Eye />
          {data.views}
        </li>
        <li className="flex gap-x-1 items-center">
          <Comment />
          {data.comments.length}
        </li>
      </ul>
    </div>
  );
};

export default Info;
