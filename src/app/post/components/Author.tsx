import Image from "next/image";
import React from "react";
import { ArrowTopRight } from "./svg";

const Author = ({ data }: { data: string }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      <div className="h-[72px] w-[72px] relative rounded-full overflow-hidden ">
        <Image layout="fill" objectFit="cover" alt="img" src={"/neon.jpg"} />
      </div>
      <div className="">
        <span className="text-[14px] text-black font-[500] ">
          Written By: {data}
        </span>
        <p className="flex space-x-2">
          All posts by the author <ArrowTopRight />{" "}
        </p>
      </div>
      <p className="w-full">
        Hello, everyone! I&lsquo;m Anthony Ezeh, consectetur adipisicing elit.
        Eveniet modi earum commodi voluptatibus repellendus ducimus maiores
        illum quo, enim iste?
      </p>
    </div>
  );
};

export default Author;
