"use client"

import { User } from "@/components/types";
import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";
import { Comment, Edit, Like, Save } from "./components/svg";

const Page: React.FC = () => {
  const [color, setColor] = useState<string>("");
  const storageEventName = "localStorageUpdate";
  useEffect(() => {
    const storedColor = localStorage.getItem("color");
    if (!storedColor) {
      const defaultColor = "#00A36C";
      localStorage.setItem("color", defaultColor);
      setColor(defaultColor);
    } else {
      setColor(storedColor);
    }

    const handleStorageChange = () => {
      const newColor = localStorage.getItem("color");
      if (newColor) {
        setColor(newColor);
      }
    };

    window.addEventListener(storageEventName, handleStorageChange);

    return () => {
      window.removeEventListener(storageEventName, handleStorageChange);
    };
  }, [color]);

  return (
    <div className="min-h-screen bg-lightOne text-black dark:text-[#D0D4D0] dark:bg-darkOne ">
      <div className="flex items-center p-4 mx-auto flex-col space-y-4 max-w-[1000px] ">
        <div className=" relative overflow-hidden  w-[200px] h-[200px] rounded-full ">
          <Image
            src={"/neon.jpg"}
            alt="paragraph"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
          />

        </div>
        <h3 className="text-3xl font-bold">Edward Larry</h3>
        <h4 className="mx-auto text-pretty text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vel aut incidunt, modi alias hic reiciendis repellat at dolor qui.</h4>
        {/* Editor */}
        <span style={{ color: color }} className=" text-xl" >Editor</span>
        <button style={{ backgroundColor: color }} className={`p-4 w-full rounded-lg flex justify-center items-center space-x-2 capitalize`}> <h3 className="">Edit Profile</h3> <Edit /> </button>

      </div>

      <div className=" w-full p-4 max-w-[1000px] mx-auto gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-start fill-[#E1E1E1] dark:fill-[#17191D] has-[div]:drop-shadow-lg dark:text-[#17191D] text-[#E1E1E1] font-bold ">

        <div className="flex justify-center items-center w-[100px] h-[100px] mx-auto flex-col space-y-4 rounded-lg bg-[#ffd437] ">
          <Save />
          <h3 className=" ">Saved</h3>
        </div>

        <div className="flex justify-center items-center w-[100px] h-[100px] mx-auto flex-col space-y-4 rounded-lg bg-[#59BD7D] ">
          <Like />
          <h3>Liked</h3>

        </div>

        <div className="flex justify-center items-center w-[100px] h-[100px] mx-auto flex-col space-y-4 rounded-lg bg-[#3871FF] ">
          <Comment />
          <h3>Comments</h3>
        </div>

        {/*         <div className="flex justify-center items-center w-[100px] h-[100px] mx-auto flex-col space-y-4 rounded-lg bg-[#FF6839] ">

        </div>

        <div className="flex justify-center items-center w-[100px] h-[100px] mx-auto flex-col space-y-4 rounded-lg bg-[#D8D9DE] ">

        </div>

        <div className="flex justify-center items-center w-[100px] h-[100px] mx-auto flex-col space-y-4 rounded-lg bg-[#FFD237] ">

        </div> */}

      </div>
    </div>
  );
};

export default Page;
