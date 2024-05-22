import Image from "next/image";
import React, { ReactElement } from "react";
import Info from "./Info";
import { type Post } from "@/components/types";
import "../../globals.css";
import PostInfo from "./PostInfo";

const Post = ({
  data,
  number,
}: {
  number: number;
  data: Post;
}): ReactElement => {
  return (
    <div className="grid grid-cols-10  w-full gap-6">
      <div className="relative w-fit col-span-3">
        {/* Index */}
        <span className="bg-white z-10 w-5 h-5 flex justify-center items-center rounded-full text-black absolute -top-1.5 drop-shadow-lg -left-1.5 ">
          {number + 1}
        </span>

        <div className="relative w-[100px] h-[100px] overflow-hidden rounded-lg">
          <Image
            src={data.image[0]}
            alt="paragraph"
            objectFit="cover"
            fill
            sizes="100vw"
            priority
            quality={100}
            className="w-full h-full transition transform hover:scale-150 duration-300"
          />
        </div>
      </div>

      <div className="w-full col-span-7 flex flex-col justify-around ">
        <h1 className="text-black text-[14px] font-[500] truncate-2-lines capitalize ">
          {data.title}
        </h1>

        <div className="w-full">
          <PostInfo data={data} />
        </div>
      </div>
    </div>
  );
};

export default Post;
