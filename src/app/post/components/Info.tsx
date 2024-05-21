import React, { ReactElement } from "react";
import { Clock, Comment, Eye, Pen } from "./svg";
import { Post } from "@/components/types";

const Info = ({ data }: { data: Post }): ReactElement => {
  return (
    <div className="text-sm px-8  w-full max-w-[800px]  m-auto">
      <ul className="flex flex-wrap gap-x-4 justify-center">
        <li className="flex gap-x-1  items-center">
          <Clock />
          {data.date}
        </li>
        <li className="flex gap-x-1  items-center">
          <Pen />
          {data.author}
        </li>
        <li className="flex gap-x-1  items-center">
          <Eye />
          {data.views}
        </li>
        <li className="flex gap-x-1  items-center">
          <Comment />
          {data.comments.length}
        </li>
      </ul>
    </div>
  );
};

export default Info;
