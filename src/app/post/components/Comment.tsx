import { type Comments } from "@/components/types";
import Image from "next/image";
import React, { type ReactElement } from "react";
import { Clock, Comment } from "./svg";

const CommentComp = ({ comment }: { comment: Comments }): ReactElement => {
  return (
    <div className="space-y-3 rounded-lg border-[2px] border-[#F9F9FA] p-4 lg:p-6 bg-lightTwo dark:bg-darkTwo ">
      <header className="flex w-full space-x-3 items-center ">
        <div className="h-[50px] w-[50px] relative rounded-full overflow-hidden dark:text-white ">
          <Image
            layout="fill"
            className="transition transform hover:scale-150 duration-300"
            objectFit="cover"
            alt="img"
            src={"/moonlight.jpg"}
          />
        </div>
        <div className=" flex flex-col justify-center text-start dark:text-white text-black ">
          <span className="text-[18px] capitalize   font-[500] ">
            {comment.username}
          </span>
          <p className="flex font-[400]  space-x-2 text-[11px] ">
            <span>{comment.date}</span> <Clock />
          </p>
        </div>
      </header>

      <p className="w-full text-[14px] dark:text-[#d1d1d1] text-black font-[400] text-start ">
        {/* {comment.comment} */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ad
        esse natus harum id architecto nisi doloremque dolor exercitationem
        dolorem.
      </p>
    </div>
  );
};

export default CommentComp;
