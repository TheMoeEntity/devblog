import React, { ReactElement } from "react";
import { Clock, Comment, Eye, Pen } from "./svg";
import { Post } from "@/components/types";

const PostInfo = ({ data }: { data: Post }): ReactElement => {
  return (
    <div className=" w-full ">
      <ul className="flex flex-wrap gap-x-2 text-start text-[11px] ">
        <li className="">Published: {data.date}</li>
        <li className="">{data.author}</li>
        <li className="">{data.views}</li>
        <li className="">{data.comments.length}</li>
      </ul>
    </div>
  );
};

export default PostInfo;