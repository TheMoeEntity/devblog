"use client";
import "../../app/globals.css";
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
import CommentComp from "./components/Comment";

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
    autoplay: false,
  };

  return (
    <div className="w-full bg-lightOne dark:bg-darkOne  dark:text-white text-[#6d6d6d] min-h-screen p-4 space-y-6 pt-20 ">
      <Info data={PostDummy[0]} />

      {/* Title and Subject Image */}
      <div className="flex flex-col items-center px-4 space-y-6 w-full  m-auto  ">
        <h1 className="font-[700] capitalize bg-clip-text text-clip text-transparent bg-gradient-to-l  text-[32px] text-center  w-full lg:max-w-[800px] ">
          {PostDummy[0].title}
        </h1>

        <Slider
          {...settings}
          className="relative w-full lg:w-[1000px] mx-auto h-[250px] lg:h-[666px]  "
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

      {/* Comments */}
      <div className="py-10  max-w-[800px] mx-auto">
        <h1 className="text-center text-[23px] dark:text-white text-black font-[600] ">
          Thoughts on &quot;{PostDummy[0].title}&quot;
          <div className="space-y-8 my-6">
            {PostDummy[0].comments.map((comment, i) => (
              <CommentComp key={i} comment={comment} />
            ))}
          </div>
          <hr />
        </h1>
      </div>

      {/* Leave a reply */}
      <div className="my-10 w-full space-y-6  max-w-[800px] mx-auto">
        <h1 className="text-center text-[23px] text-black font-[600] ">
          Leave A Comment
        </h1>
        <form className="space-y-4 w-full flex flex-col">
          <label className="flex flex-col w-full space-y-2">
            <h3>Username</h3>
            <input type="text" className="w-full bg-[#F8F8FA] h-[45px]" />
          </label>
          <label className="flex flex-col w-full space-y-2">
            <h3>Email</h3>
            <input type="text" className="w-full bg-[#F8F8FA] h-[45px]" />
          </label>
          <label className="flex flex-col w-full space-y-2">
            <h3>Comment</h3>
            <textarea
              type="text"
              className="w-full resize-none [150px]  bg-[#F8F8FA] "
            />
          </label>
          <button className="w-[150px] rounded-lg text-white py-4 bg-[#34343B] mx-auto ">
            Send
          </button>
        </form>
      </div>

      {/* Other Posts */}
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
