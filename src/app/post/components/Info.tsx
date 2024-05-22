import React, { ReactElement, useEffect } from "react";
import { Clock, Comment, Eye, Pen } from "./svg";
import { Post } from "@/components/types";

const Info = ({ data }: { data: Post }): ReactElement => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="text-sm px-8  w-full lg:max-w-[800px]  m-auto">
      <ul className="flex flex-wrap gap-x-4 justify-center">
        <li className="flex gap-x-1  items-center">
          <Clock />
          Published: {data.date}
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
