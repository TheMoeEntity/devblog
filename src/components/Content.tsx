"use client";
import React, { ReactElement } from "react";
import { DashPost } from "./DashPost";
import Post from "../app/post/components/Post";
import { PostDummy } from "./dummies";
import { motion } from "framer-motion";

export const Content = (): ReactElement => {
  return (
    <div className="w-full my-10 bg-red min-h-[400px] overflow-hidden">
      <div className="w-[200px] bg-lightTwo text-black dark:text-white dark:bg-darkTwo flex justify-center items-center mx-auto py-2 px-4 rounded-lg ">
        Page 1 of 2
      </div>
      <div className="md:flex flex-wrap gap-4 grid-cols-3 md:grid-cols-2 justify-center  place-items-start items-center space-y-6 md:space-y-0 mx-auto max-w-[1100px] ">
        {PostDummy.map((post) => (
          <DashPost key={post.id} data={post} />
        ))}
      </div>

      {/* Other Posts */}
      <div className="max-w-[1040px] lg:gap-6 flex flex-col lg:grid grid-cols-3 overflow-hidden mx-auto px-4">
        {/* Popular post */}
        <div className="lg:max-w-[350px] w-full my-10 mx-auto space-y-[20px] ">
          <h1 className="text-[16px] text-black dark:text-white font-[500]">
            Popular Posts
          </h1>
          <div className="w-full space-y-4">
            {PostDummy.map((post, i) => (
              <Post key={post.id} number={i} data={post} />
            ))}
          </div>
        </div>
        {/* Random post */}
        <div className="lg:max-w-[350px] w-full my-10 mx-auto space-y-[20px]">
          <h1 className="text-[16px] text-black dark:text-white font-[500]">
            Random Posts
          </h1>
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
              <input className="w-full px-2 h-[45px] bg-[#F8F8FA]" type="text" />
            </label>
            <label className="w-full flex flex-col space-y-2 font-[500]">
              <h3 className="text-[13px]">Email</h3>
              <input className="w-full px-2 h-[45px] bg-[#F8F8FA]" type="text" />
            </label>
            <label className="w-full flex flex-col space-y-2 font-[500]">
              <h3 className="text-[13px]">Subject</h3>
              <input className="w-full h-[45px] px-2 bg-[#F8F8FA]" type="text" />
            </label>
            <label className="w-full flex flex-col space-y-2 font-[500]">
              <h3 className="text-[13px]">Your Message</h3>
              <motion.textarea
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-[150px] resize-none p-2 bg-[#F8F8FA]"
              />
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
