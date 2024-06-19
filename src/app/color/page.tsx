"use client";
import { useRouter } from "next/navigation";
import React, { ReactElement, useEffect, useState } from "react";

const Page = (): ReactElement => {
  const colors = [
    "#FF5733",
    "#5733FF",
    "#033E3E",
    "#00A36C",
    "#563457",
    "#1B435E",
    "#720137",
    "#9B773D",
    "#005859",
    "#11254A",
    "rebeccapurple",

  ];
  const [color, setColor] = useState("");
  const router = useRouter()

  useEffect(() => {
    const storedColor = localStorage.getItem("color");
    if (storedColor) {
      setColor(storedColor);
    }
  }, []);

  const handleChange = (e: any) => {
    const newColor = e.target.id;
    if (newColor) {
      router.refresh()
      setColor(newColor);
    }
  };

  useEffect(() => {
    if (color) {
      localStorage.setItem("color", color);
    }
  }, [color]);

  return (
    <div className="w-full bg-lightOne dark:bg-darkOne min-h-screen px-4 space-y-8 ">
      <div className="mx-auto  max-w-[1000px] py-10">

        <div className="p-4 max-w-[300px]  text-white" style={{ backgroundColor: color }}>
        </div>
        Selected Color
        <div className="flex justify-start items-center flex-wrap place-content-start gap-4">
          {colors.map((color, i) => (
            <button
              onClick={handleChange}
              id={color}
              style={{ backgroundColor: color }}
              className="cursor-pointer w-20 h-20 rounded-full"
              key={i}
            ></button>
          ))}
        </div>
        <h3 className="text-black text-sm my-5 font-semibold dark:text-white">Effects will take place after you leave this page</h3>
      </div>
    </div>
  );
};

export default Page;
