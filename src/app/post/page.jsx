"use client";
import React, { ReactElement, useRef } from "react";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Clock,
  Comment,
  Eye,
  Hash,
  Pen,
} from "./components/svg";
import Image from "next/image";
import Paragraph from "./components/Paragraph";
import { PostDummy } from "@/components/dummies";
import Info from "./components/Info";
import Author from "./components/Author";
import Slider from "react-slick";

import LeftButton from "./components/LeftButton";
import RightButton from "./components/RightButton";

const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
   
  };

  return (
    <div className="w-full bg-white text-[#6d6d6d] min-h-screen p-4 space-y-6 pt-20 ">
      <Info data={PostDummy} />

      {/* Title and Subject Image */}
      <div className="flex flex-col items-center space-y-6 w-full  m-auto  ">
        <h1 className="font-[700] capitalize text-[#34343B]  text-[32px] text-center  w-full lg:max-w-[800px] ">
          {PostDummy.title}
        </h1>

        <Slider
          {...settings}
          className="relative  mx-auto w-full lg:max-w-0 md:h-[450px]  h-[200px] lg:w-[1000px] lg:h-[700px] "
        >
          {PostDummy.image.map((image, i) => (
            <div
              key={i}
              className="relative w-full mx-auto lg:max-w-0 md:h-[450px]  h-[200px] lg:w-[1000px] lg:h-[700px]  "
            >
              <Image
                src={image}
                alt={"slide"}
                layout="fill"
                objectFit="cover"
                className=" rounded-lg overflow-hidden w-full lg:max-w-0 md:h-[450px]  h-[200px] lg:w-[1000px] lg:h-[700px]  "
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Paragraphs */}
      {PostDummy.paragraph.map((paragraph, i) => (
        <Paragraph key={i} data={paragraph} />
      ))}

      {/* Category */}
      <div className="flex items-center flex-wrap space-x-1 text-[12px] capitalize lg:max-w-[800px] lg:mx-auto ">
        <Bookmark />
        <h3>Categories:</h3>

        {PostDummy.categories.map((category, i) => (
          <span key={i}>category</span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex items-center flex-wrap space-x-1 text-[12px] capitalize lg:max-w-[800px] lg:mx-auto">
        <Hash />
        <h3>Tags:</h3>

        {PostDummy.tags.map((tag, i) => (
          <span key={i}>#{tag}</span>
        ))}
      </div>

      <hr />

      {/* About the author */}
      <Author data={PostDummy.author} />
    </div>
  );
};

export default Page;
