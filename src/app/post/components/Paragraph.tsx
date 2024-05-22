import { type Paragraph, Post } from "@/components/types";
import Image from "next/image";
import React, { ReactElement } from "react";

const Paragraph = ({ data }: { data: Paragraph }): ReactElement => {
  return (
    <div className="space-y-6 mx-auto pt-5 lg:pt-10 ">
      <div className="space-y-6 mx-auto">
        {data.image ? (
          <div className="relative max-w-[1000px] w-full h-[250px] lg:h-[666px] rounded-lg  overflow-hidden mx-auto">
            <Image
              src={data.image}
              alt="paragraph"
              fill
              objectFit="cover"
              priority
              className="transition transform hover:scale-105 duration-300"
              quality={100}
              sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px "
            />
          </div>
        ) : (
          ""
        )}
        <h3 className="text-[15px] lg:max-w-[800px] mx-auto ">{data.text}</h3>

        {/* Caption */}
        <h5 className="border-l-[2px] lg:max-w-[720px]  mx-auto pl-6 italic text-[20px] text-[#4e4d58] relative ">
          <span className="absolute top-0 left-0 text-6xl font-black text-[#6e6e6e42] ">
            &apos;
          </span>
          {data.caption}
        </h5>

        <h3 className="text-[15px] lg:max-w-[800px]  mx-auto">
          {data.moreText}
        </h3>
      </div>
    </div>
  );
};

export default Paragraph;
