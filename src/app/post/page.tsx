"use client";
import "../../app/globals.css";
import "swiper/css";
import React from "react";
import { Bookmark, ChevronLeft, ChevronRight, Hash } from "./components/svg";
import Image from "next/image";
import Paragraph from "./components/Paragraph";
import { PostDummy } from "@/components/dummies";
import Info from "./components/Info";
import Author from "./components/Author";
import Post from "./components/Post";
import CommentComp from "./components/Comment";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full bg-lightOne dark:bg-darkOne dark:text-white text-[#6d6d6d] min-h-screen p-4 space-y-6 pt-20">
      <Info data={PostDummy[0]} />

      {/* Title and Subject Image */}
      <div className="flex flex-col items-center relative space-y-6 w-full m-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-[700] capitalize text-[#34343B] text-[32px] text-center w-full lg:max-w-[800px] dark:text-white"
        >
          {PostDummy[0].title}
        </motion.h1>

        <Swiper
          className="w-full h-fit rounded-lg overflow-hidden"
          modules={[Navigation, Pagination]}
          pagination
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          <div className="z-20 absolute top-0 flex justify-center items-center w-full px-4">
            <button className="swiper-button-prev bg-white fill-[white] w-[42px] h-[42px] rounded-bl-lg flex justify-center items-center">
              <ChevronLeft />
            </button>
            <button className="swiper-button-next bg-white fill-[white] w-[42px] h-[42px] rounded-br-lg flex justify-center items-center">
              <ChevronRight />
            </button>
          </div>
          {PostDummy[0].image.map((image, i) => (
            <SwiperSlide key={i} className="relative w-full">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="relative flex justify-center items-center max-w-[1000px] rounded-lg overflow-hidden w-full h-[250px] lg:h-[666px]  mx-auto"
              >
                <Image
                  src={image}
                  alt="paragraph"
                  className="transition transform hover:scale-105 rounded-lg overflow-hidden duration-300"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                  sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Paragraphs */}
      {PostDummy[0].paragraph.map((paragraph, i) => (
        <Paragraph key={i} data={paragraph} />
      ))}

      {/* Category */}
      <div className="flex items-center flex-wrap space-x-1 text-[12px] capitalize lg:max-w-[800px] lg:mx-auto">
        <Bookmark />
        <h3>Categories:</h3>
        {PostDummy[0].categories.map((category, i) => (
          <span key={i}>{category}</span>
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
      <div className="py-10 max-w-[800px] mx-auto">
        <h1 className="text-center text-[23px] dark:text-white text-black font-[600]">
          Thoughts on &quot;{PostDummy[0].title}&quot;
        </h1>
        <div className="space-y-8 my-6">
          {PostDummy[0].comments.map((comment, i) => (
            <CommentComp key={i} comment={comment} />
          ))}
        </div>
        <hr />
      </div>

      {/* Leave a reply */}
      <div className="my-10 w-full space-y-6 max-w-[800px] mx-auto">
        <h1 className="text-center text-[23px] dark:text-white text-black font-[600]">
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
            <textarea className="w-full resize-none h-[150px] bg-[#F8F8FA]" />
          </label>
          <button className="flex justify-center items-center w-[150px] mx-auto text-white py-2 rounded-lg bg-lightThree dark:bg-darkThree">
            Send
          </button>
        </form>
      </div>

      {/* Other Posts */}
      <div className="max-w-[1040px] lg:gap-6 flex flex-col lg:grid grid-cols-3 mx-auto">
        {/* Popular post */}
        <div className="lg:max-w-[350px] w-full my-10 mx-auto space-y-[20px]">
          <h1 className="text-[16px] text-black font-[500]">Popular Posts</h1>
          <div className="w-full space-y-4">
            {PostDummy.map((post, i) => (
              <Post key={post.id} number={i} data={post} />
            ))}
          </div>
        </div>
        {/* Random post */}
        <div className="lg:max-w-[350px] w-full my-10 mx-auto space-y-[20px]">
          <h1 className="text-[16px] text-black font-[500]">Random Posts</h1>
          <div className="w-full space-y-4">
            {PostDummy.map((post, i) => (
              <Post key={post.id} number={i} data={post} />
            ))}
          </div>
        </div>
        {/* Contact Me */}
        <div className="lg:max-w-[350px] w-full my-10 mx-auto space-y-[20px]">
          <h1 className="text-[16px] text-black dark:text-white font-[500]">
            Contact Me
          </h1>

          <form className="w-full space-y-4">
            <label className="w-full flex flex-col space-y-2 font-[500]">
              <h3 className="text-[13px]">Name</h3>
              <input className="w-full h-[45px] bg-[#F8F8FA]" type="text" />
            </label>
            <label className="w-full flex flex-col space-y-2 font-[500]">
              <h3 className="text-[13px]">Email</h3>
              <input className="w-full h-[45px] bg-[#F8F8FA]" type="text" />
            </label>
            <label className="w-full flex flex-col space-y-2 font-[500]">
              <h3 className="text-[13px]">Subject</h3>
              <input className="w-full h-[45px] bg-[#F8F8FA]" type="text" />
            </label>
            <label className="w-full flex flex-col space-y-2 font-[500]">
              <h3 className="text-[13px]">Your Message</h3>
              <textarea className="w-full h-[150px] resize-none bg-[#F8F8FA]" />
            </label>

            <button className="flex justify-center items-center w-[150px] mx-auto text-white py-2 rounded-lg bg-lightThree dark:bg-darkThree">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
