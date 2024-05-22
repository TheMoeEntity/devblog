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
import Post from "./components/Post";

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
      <Info data={PostDummy[0]} />

      {/* Title and Subject Image */}
      <div className="flex flex-col items-center space-y-6 w-full  m-auto  ">
        <h1 className="font-[700] capitalize text-[#34343B]  text-[32px] text-center  w-full lg:max-w-[800px] ">
          {PostDummy[0].title}
        </h1>

        <Slider
          {...settings}
          className="relative w-full lg:w-[1000px]   mx-auto h-[250px] lg:h-[666px]  "
        >
          {PostDummy[0].image.map((image, i) => (
            <div
              key={i}
              className="relative w-full transition transform hover:scale-105 duration-300 mx-auto rounded-lg overflow-hidden md:h-[400px] h-[250px] lg:h-[666px]  "
            >
              <Image
                src={image}
                alt={"slide"}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
                sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Paragraphs */}
      {PostDummy[0].paragraph.map((paragraph, i) => (
        <Paragraph key={i} data={paragraph} />
      ))}

      {/* Category */}
      <div className="flex items-center flex-wrap space-x-1 text-[12px] capitalize lg:max-w-[800px] lg:mx-auto ">
        <Bookmark />
        <h3>Categories:</h3>

        {PostDummy[0].categories.map((category, i) => (
          <span key={i}>category</span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex items-center flex-wrap space-x-1 text-[12px] capitalize lg:max-w-[800px] lg:mx-auto">
        <Hash />
        <h3>Tags:</h3>

        {PostDummy[0].tags.map((tag, i) => (
          <span key={i}>#{tag}</span>
        ))}
      </div>

      <hr />

      {/* About the author */}
      <Author data={PostDummy[0].author} />

      <div className="max-w-[1040px] lg:gap-6 flex flex-col lg:grid grid-cols-3  mx-auto">
        {/* Popular post */}
        <div className="lg:max-w-[350px] w-full my-10 mx-auto space-y-[20px] ">
          <h1 className="text-[16px] text-black  font-[500] ">Popular Posts</h1>
          <div className=" w-full space-y-4  ">
            {PostDummy.map((post, i) => (
              <Post key={post.id} number={i} data={post} />
            ))}
          </div>
        </div>
        {/* Random post */}
        <div className="lg:max-w-[350px] w-full my-10 mx-auto space-y-[20px] ">
          <h1 className="text-[16px] text-black font-[500] ">Random Posts</h1>
          <div className=" w-full space-y-4  ">
            {PostDummy.map((post, i) => (
              <Post key={post.id} number={i} data={post} />
            ))}
          </div>
        </div>
        {/* Contact Me */}
        <div className="lg:max-w-[350px] w-full my-10 mx-auto space-y-[20px] ">
          <h1 className="text-[16px] text-black font-[500] ">Contact Me</h1>

          <form className=" w-full space-y-4  ">
            <label className="w-full flex flex-col space-y-2 font-[500] ">
              <h3 className="text-[13px]">Name</h3>
              <input className="w-full h-[45px] bg-[#F8F8FA] " type="text" />
            </label>
            <label className="w-full flex flex-col space-y-2 font-[500] ">
              <h3 className="text-[13px]">Email</h3>
              <input className="w-full h-[45px] bg-[#F8F8FA] " type="text" />
            </label>
            <label className="w-full flex flex-col space-y-2 font-[500] ">
              <h3 className="text-[13px]">Subject</h3>
              <input className="w-full h-[45px] bg-[#F8F8FA] " type="text" />
            </label>
            <label className="w-full flex flex-col space-y-2 font-[500] ">
              <h3 className="text-[13px]">Your Message</h3>
              <textarea
                className="w-full h-[150px] resize-none bg-[#F8F8FA] "
                type="text"
              />
            </label>

            <button className="flex justify-center items-center bg-[#34343B] w-[150px] text-white py-2 rounded-lg ">
              Send <ChevronRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
