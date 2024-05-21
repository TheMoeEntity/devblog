import { type Paragraph, Post } from "@/components/types";
import Image from "next/image";
import React, { ReactElement } from "react";

const Paragraph = ({ data }: { data: Paragraph }): ReactElement => {
  return (
    <div className="space-y-6 lg:max-w-[800px] mx-auto ">
      <div className="space-y-6">
        {data.image ? (
          <div className="relative w-full h-[200px] lg:w-[800px] lg:h-[700px] rounded-lg overflow-hidden flex justify-center items-center ">
            <Image
              src={data.image}
              alt={"paragraph"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          ""
        )}
        <h3 className="text-[15px]">{data.text}</h3>

        {/* Caption */}
        <h5 className="border-l-[2px] lg:max-w-[720px] lg:mx-auto pl-6 italic text-[20px] text-[#4e4d58] relative ">
          <span className="absolute top-0 left-0 text-6xl font-black text-[#6e6e6e42] ">
            &apos;
          </span>
          {data.caption}
        </h5>

        <h3 className="text-[15px]">{data.moreText}</h3>
      </div>
    </div>
  );
};

export default Paragraph;
